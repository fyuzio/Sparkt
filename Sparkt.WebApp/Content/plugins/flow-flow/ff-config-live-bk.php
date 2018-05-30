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
define('FF_PLUGIN_URL', 'http://sparkt.in/');
define('FF_AJAX_URL',   'http://sparkt.in/flow-flow/ff.php');

define('DB_HOST', 'localhost:3306');
define('DB_NAME','sparkt');//DB NAME
define('DB_USER', 'root');//DB USER NAME
define('DB_PASSWORD', 'bitnami');//DB PASSWORD

define('DB_CHARSET','utf8');
define('DB_COLLATE','utf8mb4_general_ci');
define('DB_TABLE_PREFIX', '');//TABLE PREFIX

define('FF_LOCALE', 'en_US');
//date_default_timezone_set('America/New_York');