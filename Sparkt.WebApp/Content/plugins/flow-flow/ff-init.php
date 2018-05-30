<?php
/**
 * Flow-Flow
 *
 * Plugin class. This class should ideally be used to work with the
 * public-facing side of the WordPress site.
 *
 * If you're interested in introducing administrative or dashboard
 * functionality, then refer to `FlowFlowAdmin.php`
 *
 * @package   FlowFlow
 * @author    Looks Awesome <email@looks-awesome.com>

 * @link      http://looks-awesome.com
 * @copyright 2014-2016 Looks Awesome
 */
define('FF_PLUGIN_VER', '2.1.0');

define('FF_USE_WP', false);
define('WPINC', true);
define('FF_USE_DIRECT_WP_CRON', false);

if (! defined('FF_DB_CHARSET')) {
	$charset = defined( 'DB_CHARSET' ) ? DB_CHARSET : 'utf8';
	define('FF_DB_CHARSET', $charset);
}

if (! defined('FF_SNAPSHOTS_TABLE_NAME')) define('FF_SNAPSHOTS_TABLE_NAME', DB_TABLE_PREFIX . 'ff_snapshots');

/**
 * WP functions
 */
function do_action($arg1, $arg2){}
function add_action($arg1, $arg2){}
function add_filter($arg1, $arg2){}
function apply_filters($arg1, $arg2){return $arg2;}
function settings_fields($option_group) {
	echo "<input type='hidden' name='option_page' value='" . $option_group . "' />";
	echo '<input type="hidden" name="action" value="update" />';
}
function admin_url($arg1){
	return isset($_SESSION['ff_admin_url']) ? $_SESSION['ff_admin_url'] : '';
}

/**
 * @param $object
 * @return string
 */
function var_dump2str($object){
	ob_start();
	var_dump($object);
	$output = ob_get_contents();
	ob_get_clean();
	return $output;
}

/**
 * @param bool $set
 * @return bool
 */
function ff_user_can_moderate($set = false) {
	$session_started = false;
	if ( function_exists('php_sapi_name') && php_sapi_name() !== 'cli' ) {
		$session_started = (version_compare(phpversion(), '5.4.0', '>=')) ? session_status() === PHP_SESSION_ACTIVE : session_id() !== '';
	}

	if ($session_started && $set) $_SESSION['user_can_moderate'] = true;

	return isset($_SESSION['user_can_moderate']) ? filter_var($_SESSION['user_can_moderate'], FILTER_VALIDATE_BOOLEAN) : false;
}

function ff_get_context() {
	$root = dirname($_SERVER["SCRIPT_FILENAME"]) . '/flow-flow/';
	if (!file_exists($root . 'LAClassLoader.php')){
		$root = realpath(dirname(__FILE__)) . '/';
	}
	$context = array(
		'root'      => $root,
		'slug'      => 'flow-flow',
		'slug_down' => 'flow_flow',
		'plugin_url' => FF_PLUGIN_URL . '/',
		'admin_url' => FF_AJAX_URL,
		'table_name_prefix' => DB_TABLE_PREFIX . 'ff_',
		'facebook_сache'    => new flow\cache\FFFacebookCacheAdapter()
	);
	$context['db_manager'] = new flow\db\FFDBManager($context);

	global $flow_flow_context;
	$flow_flow_context = $context;
	return $context;
}