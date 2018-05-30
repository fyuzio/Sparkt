<?php
/**
 * Flow-Flow
 *
 * @package   FlowFlow
 * @author    Looks Awesome <email@looks-awesome.com>
 * @link      http://looks-awesome.com
 * @copyright 2015 Looks Awesome
 *
 */
class FFInjector{
	private $context;
	private $admin;
	private $insert_head = false;
	private $insert_jquery = false;
	private $insert_ajax_url = false;
	private $insert_ticker = false;
	private $moderationMode = false;

	function __construct($admin = false) {
		$this->admin = $admin;
		$root = dirname($_SERVER["SCRIPT_FILENAME"]) . '/flow-flow/';
		if (!file_exists($root . 'LAClassLoader.php')){
			$root = realpath(dirname(__FILE__)) . '/';
		}
		require_once( $root . 'LAClassLoader.php' );
		LAClassLoader::get($root)->register(true);

		$this->context = ff_get_context();
	}

	/**
	 * Inserts js and css resources needed for flow-flow plugin
	 * Insert this method in head block.
	 *
	 * @param bool $insert_jquery set true if your site not use jquery
	 * @param bool $with_ticker set false only if configure the cron task!
	 * @param bool $is_compact set true if going to integrate the plugin
	 * admin page with admin page your site
	 *
	 * @return string
	 */
	public function head($insert_jquery = false, $with_ticker = true, $is_compact = false){
		if ($this->insert_head) return '';

		$head = "\n";
		$head .= $this->jquery($insert_jquery);
		if ($this->admin){
			$head .= "\t<link rel=\"stylesheet\" id=\"flow-flow-admin-icon-css\"  href=\"" . FF_PLUGIN_URL . "/flow-flow/css/admin-icon.css?ver=1.0.0\" type=\"text/css\" media=\"all\" />\n";
			$head .= "\t<link rel=\"stylesheet\" id=\"flow-flow-admin-styles-css\"  href=\"" . FF_PLUGIN_URL . "/flow-flow/css/admin.css?ver=1.0.0\" type=\"text/css\" media=\"all\" />\n";
			$head .= "\t<link rel=\"stylesheet\" id=\"flow-flow-colorpickersliders-css\"  href=\"" . FF_PLUGIN_URL . "/flow-flow/css/jquery-colorpickersliders.css?ver=1.0.0\" type=\"text/css\" media=\"all\" />\n";
			$head .= "\t<link rel=\"stylesheet\" id=\"lato-font-css\"  href=\"//fonts.googleapis.com/css?family=Lato%3A300%2C400&#038;ver=4.0\" type=\"text/css\" media=\"all\" />\n";
			$head .= "\t<style>.ff_hide4site {display:none}</style>\n";
			$head .= "\t<script type='text/javascript'>\n";
			$head .= "\t\t var _ajaxurl = \"" . FF_AJAX_URL . "\";\n";
			$head .= "\t\t var isWordpress = \"" . (string) FF_USE_WP . "\";var isCompact = !!\"" . (string) $is_compact . "\";\n";
			$head .= "\t</script>\n";
			$head .= "\t<script type=\"text/javascript\" src=\"" . FF_PLUGIN_URL . "/flow-flow/js/admin.js?ver=1.0.0\"></script>\n";
			$head .= "\t<script type=\"text/javascript\" src=\"" . FF_PLUGIN_URL . "/flow-flow/js/streams.js?ver=1.0.0\"></script>\n";
			$head .= "\t<script type=\"text/javascript\" src=\"" . FF_PLUGIN_URL . "/flow-flow/js/zeroclipboard/ZeroClipboard.min.js?ver=1.0.0\"></script>\n";
			$head .= "\t<script type=\"text/javascript\" src=\"" . FF_PLUGIN_URL . "/flow-flow/js/tinycolor.js?ver=1.0.0\"></script>\n";
			$head .= "\t<script type=\"text/javascript\" src=\"" . FF_PLUGIN_URL . "/flow-flow/js/jquery.colorpickersliders.js?ver=1.0.0\"></script>\n";
			$this->insert_ajax_url = true;

			if (!isset($_SESSION['ff_admin_url']) || empty($_SESSION['ff_admin_url'])){
				$url = "http" . (($_SERVER['SERVER_PORT'] == 443) ? "s://" : "://") . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
				$_SESSION['ff_admin_url'] = defined('FF_ADMIN_URL') ? FF_ADMIN_URL : $url;
			}
		}
		else{
			$ff = flow\FlowFlow::get_instance($this->context);
			$options = $ff->get_options();
			new flow\settings\FFGeneralSettings($options, $ff->get_auth_options());

			$json = array();
			$json['streams'] = new stdClass();
			$json['open_in_new'] = $options['general-settings-open-links-in-new-window'];
			$json['filter_all'] = 'All';
			$json['filter_search'] = 'Search';
			$json['expand_text'] = 'Expand';
			$json['collapse_text'] = 'Collapse';
			$json['posted_on'] = 'Posted on';
			$json['show_more'] = 'Show more';
			$json['date_style'] = $options['general-settings-date-format'];
			$json['dates'] = array('Yesterday' => 'Yesterday', 's' => 's', 'm' => 'm', 'h' => 'h', 'ago' => 'ago',
			                       'months' => array('Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'));
			$json['lightbox_navigate'] = 'Navigate with arrow keys';
			$json['server_time'] = time();
			$json['forceHTTPS'] = $options['general-settings-https'];
			$json['isAdmin'] = ff_user_can_moderate();
			$json['isLog'] = isset($_REQUEST['fflog']) && $_REQUEST['fflog'] == 1;
			$json['ajaxurl'] = FF_AJAX_URL;


			$head .= "\t<script type=\"text/javascript\" src=\"" .  FF_PLUGIN_URL ."/flow-flow/js/require-utils.js?ver=1.0.0\"></script>\n";
			$head .= "\t<script type='text/javascript'>\n";
			$head .= "\t\t var _ajaxurl = \"" . FF_AJAX_URL . "\";\n";
			$head .= "\t\t var FlowFlowOpts = " . json_encode($json) . ";\n";
			$head .= "\t</script>\n";
			$this->insert_ajax_url = true;
		}
		if ($with_ticker) $head .= $this->ticker();

		$this->insert_head = true;
		return $head;
	}

	/**
	 * Send request to the server to update the cache.
	 * Recommend to insert this method on each page your site!
	 * Insert this method in head block.
	 *
	 * Important! If you can configure the cron task to the server
	 * which will send the request to update the cache, do it!
	 *
	 * @param bool $insert_jquery set true if your site not use jquery
	 * @return string
	 */
	public function ticker($insert_jquery = false){
		$head = '';
		$head .= $this->jquery($insert_jquery);
		if (!$this->insert_ticker){
			$head .= "\t<script type='text/javascript'>\n";
			if (!$this->insert_ajax_url){
				$head .= "\t\t var _ajaxurl = \"" . FF_AJAX_URL . "\";\n";
				$this->insert_ajax_url = true;
			}
			$head .= "\t\t (function ( $ ) {var data2 = { 'action': 'refresh_cache' };(\n";
			$head .= "\t\t\t function ticker(){\n";
			$head .= "\t\t\t\t $.get(_ajaxurl, data2, function(response){});\n";
			$head .= "\t\t\t\t window.console.log('tick...');\n";
			$head .= "\t\t\t\t setTimeout(ticker, 60 * 1000);})()}(jQuery))\n";
			$head .= "\t</script>\n";
			$this->insert_ticker = true;
		}
		return $head;
	}

	/**
	 * Insert stream on the page.<br><br>
	 * <b>Example:</b><br>
	 * <code>
	 * require_once('flow-flow/ff-injector.php');
	 * $injector = new FFInjector(); ?>
	 *
	 * <html>
	 *  <head>
	 *      <?php echo $injector->head(true); ?>
	 *  </head>
	 *  <body>
	 *      <?php
	 *          $stream_id = isset($_REQUEST['stream']) ? $_REQUEST['stream'] : 1;
	 *          $injector->stream($stream_id);
	 *      ?>
	 *  </body>
	 * </html>
	 * </code>
	 * @param $stream_id
	 */
	public function stream($stream_id){
		$ff = \flow\FlowFlow::get_instance($this->context);
		echo $ff->renderShortCode(array('id' => $stream_id));
	}

	/**
	 * Insert plugin administration on the page.<br><br>
	 * <b>Example:</b><br>
	 * <code>
	 * require_once('flow-flow/ff-injector.php');
	 * $injector = new FFInjector(true); ?>
	 *
	 * <html>
	 *  <head>
	 *      <?php echo $injector->head(true); ?>
	 *  </head>
	 *  <body>
	 *      <?php $injector->admin("Flow-Flow - Social Streams Plugin"); ?>
	 *  </body>
	 * </html>
	 * </code>
	 *
	 * @param $title
	 */
	public function admin($title = null){
		ff_user_can_moderate(true);

		/** @var flow\db\FFDBManager $db */
		$db = $this->context['db_manager'];
		$db->migrate();

		$admin = flow\FlowFlowAdmin::get_instance($this->context);
		$admin->display_plugin_admin_page();
	}

	public function enableModerationMode(){
		$this->moderationMode = true;
	}

	private function jquery($insert_jquery){
		$head = "";
		if ($insert_jquery && !$this->insert_jquery) {
			$head .= "\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>\n";
			$this->insert_jquery = true;
		}
		return $head;
	}
}