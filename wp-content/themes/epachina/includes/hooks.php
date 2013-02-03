<?php

// Exit if accessed directly
if ( !defined('ABSPATH')) exit;

/**
 * Theme's Action Hooks
 *
 *
 * @file           hooks.php
 * @package        Responsive 
 * @author         Emil Uzelac 
 * @copyright      2003 - 2013 ThemeID
 * @license        license.txt
 * @version        Release: 1.0
 * @filesource     wp-content/themes/responsive/includes/hooks.php
 * @link           http://codex.wordpress.org/Plugin_API/Hooks
 * @since          available since Release 1.1
 */
?>
<?php

/**
 * Just after opening <body> tag
 *
 * @see header.php
 */
function responsive_container() {
    do_action('responsive_container');
}

/**
 * Just after closing </div><!-- end of #container -->
 *
 * @see footer.php
 */
function responsive_container_end() {
    do_action('responsive_container_end');
}

/**
 * Just after opening <div id="container">
 *
 * @see header.php
 */
function responsive_header() {
    do_action('responsive_header');
}

/**
 * Just after opening <div id="header">
 *
 * @see header.php
 */
function responsive_in_header() {
    do_action('responsive_in_header');
}

/**
 * Just after closing </div><!-- end of #header -->
 *
 * @see header.php
 */
function responsive_header_end() {
    do_action('responsive_header_end');
}

/**
 * Just before opening <div id="wrapper">
 *
 * @see header.php
 */
function responsive_wrapper() {
    do_action('responsive_wrapper');
}

/**
 * Just after opening <div id="wrapper">
 *
 * @see header.php
 */
function responsive_in_wrapper() {
    do_action('responsive_in_wrapper');
}

/**
 * Just after closing </div><!-- end of #wrapper -->
 *
 * @see header.php
 */
function responsive_wrapper_end() {
    do_action('responsive_wrapper_end');
}

/**
 * Just before opening <div id="widgets">
 *
 * @see sidebar.php
 */
function responsive_widgets() {
    do_action('responsive_widgets');
}

/**
 * Just after closing </div><!-- end of #widgets -->
 *
 * @see sidebar.php
 */
function responsive_widgets_end() {
    do_action('responsive_widgets_end');
}

/**
 * Theme Options
 *
 * @see theme-options.php
 */
function responsive_theme_options() {
    do_action('responsive_theme_options');
}

/**
 * WooCommerce
 *
 * Unhook/Hook the WooCommerce Wrappers
 */
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

add_action('woocommerce_before_main_content', 'responsive_woocommerce_wrapper', 10);
add_action('woocommerce_after_main_content', 'responsive_woocommerce_wrapper_end', 10);
 
function responsive_woocommerce_wrapper() {
  echo '<div id="content-woocommerce" class="grid col-620">';
}
 
function responsive_woocommerce_wrapper_end() {
  echo '</div><!-- end of #content-woocommerce -->';
}

function cp_widget_form_extend( $instance, $widget ) {
	if ( !isset($instance['classes']) )
		$instance['classes'] = null;
	/**
	  * 定义class前缀和class名称
	  */
	$class_prefix = 'widget-';
	$myclass = array(
		'default' => __('Default', 'textdomain'),
		'blue' => __('Blue', 'textdomain'),
		'yellow' => __('Yellow', 'textdomain'),
		'black' => __('Black', 'textdomain')
		);
	$row = "<p>\n";
	/* 产生输入ID的input元素 */
	$row .= "\t<label for='widget-{$widget->id_base}-{$widget->number}-custom_id'>" . __('Custom ID <small>(separate with spaces)</small><br /><em>Set custom IDs for widget</em>', 'textdomain'). "</label>\n";
	$row .= "\t<input type='text' name='widget-{$widget->id_base}[{$widget->number}][custom_id]' id='widget-{$widget->id_base}-{$widget->number}-custom_id' class='widefat' value='{$instance['custom_id']}' />\n";
	/* 产生选择class的下拉菜单 */
	$row .= "\t<label for='widget-{$widget->id_base}-{$widget->number}-classes'>" . __('Additional Classes<br /><em>Select a color for the background of widget title</em>', 'textdomain'). "</label>\n";
	$row .= "\t<select name='widget-{$widget->id_base}[{$widget->number}][classes]' id='widget-{$widget->id_base}-{$widget->number}-classes' class='widefat'>";
	foreach( $myclass as $key => $class ) {
		$selected = null;
		if( $class_prefix.$key == $instance['classes'] ) $selected = 'selected = "selected"';
		$row .= "\t<option value='$class_prefix$key' $selected>$class</value>\n";
	}
	$row .= "</select>\n";
	echo $row;
	return $instance;
}
/* 更新用户输入的选项 */
function cp_widget_update( $instance, $new_instance ) {
	$instance['classes'] = $new_instance['classes'];
	$instance['custom_id'] = $new_instance['custom_id'];
	return $instance;
}
/* 将用户自定义class和id添加到widget的wrapper上 */
function cp_dynamic_sidebar_params( $params ) {
	global $wp_registered_widgets;
	$widget_id  = $params[0]['widget_id'];
	$widget_obj = $wp_registered_widgets[$widget_id];
	$widget_opt = get_option($widget_obj['callback'][0]->option_name);
	$widget_num = $widget_obj['params'][0]['number'];
	if ( isset($widget_opt[$widget_num]['classes']) && !empty($widget_opt[$widget_num]['classes']) )
		$params[0]['before_widget'] = preg_replace( '/class="/', "class=\"{$widget_opt[$widget_num]['classes']} ", $params[0]['before_widget'], 1 );
	if ( isset($widget_opt[$widget_num]['custom_id']) && !empty($widget_opt[$widget_num]['custom_id']) )
		$params[0]['before_widget'] = preg_replace( '/id=".*?"/', "id=\"{$widget_opt[$widget_num]['custom_id']}\"", $params[0]['before_widget'], 1 );
	return $params;
}
?>