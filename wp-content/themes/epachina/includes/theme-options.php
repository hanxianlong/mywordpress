<?php
// Exit if accessed directly
if ( !defined('ABSPATH')) exit;

/**
 * Theme Options
 *
 *
 * @file           theme-options.php
 * @package        Responsive 
 * @author         Emil Uzelac 
 * @copyright      2003 - 2011 ThemeID
 * @license        license.txt
 * @version        Release: 1.1
 * @filesource     wp-content/themes/responsive/includes/theme-options.php
 * @link           http://themeshaper.com/2010/06/03/sample-theme-options/
 * @since          available since Release 1.0
 */
?>
<?php
add_action('admin_init', 'responsive_theme_options_init');
add_action('admin_menu', 'responsive_theme_options_add_page');

/**
 * A safe way of adding JavaScripts to a WordPress generated page.
 */
function responsive_admin_enqueue_scripts( $hook_suffix ) {
	wp_enqueue_style('responsive-theme-options', get_template_directory_uri() . '/includes/theme-options.css', false, '1.0');
	wp_enqueue_script('responsive-theme-options', get_template_directory_uri() . '/includes/theme-options.js', array('jquery'), '1.0');
}
add_action('admin_print_styles-appearance_page_theme_options', 'responsive_admin_enqueue_scripts');

/**
 * Init plugin options to white list our options
 */
function responsive_theme_options_init() {
    register_setting('responsive_options', 'responsive_theme_options', 'responsive_theme_options_validate');
}

/**
 * Load up the menu page
 */
function responsive_theme_options_add_page() {
    add_theme_page(__('Theme Options', 'responsive'), __('Theme Options', 'responsive'), 'edit_theme_options', 'theme_options','responsive_theme_options_do_page');
}

/**
 * Site Verification and Webmaster Tools
 * If user sets the code we're going to display meta verification
 * And if left blank let's not display anything at all in case there is a plugin that does this
 */
 
function responsive_google_verification() {
    $options = get_option('responsive_theme_options');
    if (!empty($options['google_site_verification'])) {
		echo '<meta name="google-site-verification" content="' . $options['google_site_verification'] . '" />' . "\n";
	}
}

add_action('wp_head', 'responsive_google_verification');

function responsive_bing_verification() {
    $options = get_option('responsive_theme_options');
    if (!empty($options['bing_site_verification'])) {
        echo '<meta name="msvalidate.01" content="' . $options['bing_site_verification'] . '" />' . "\n";
	}
}

add_action('wp_head', 'responsive_bing_verification');

function responsive_yahoo_verification() {
    $options = get_option('responsive_theme_options');
    if (!empty($options['yahoo_site_verification'])) {
        echo '<meta name="y_key" content="' . $options['yahoo_site_verification'] . '" />' . "\n";
	}
}

add_action('wp_head', 'responsive_yahoo_verification');

function responsive_site_statistics_tracker() {
    $options = get_option('responsive_theme_options');
    if (!empty($options['site_statistics_tracker'])) {
        echo $options['site_statistics_tracker'];
	}
}

add_action('wp_head', 'responsive_site_statistics_tracker');

function responsive_inline_css() {
    $options = get_option('responsive_theme_options');
    if (!empty($options['responsive_inline_css'])) {
		echo '<!-- Custom CSS Styles -->' . "\n";
        echo '<style type="text/css" media="screen">' . "\n";
		echo $options['responsive_inline_css'] . "\n";
		echo '</style>' . "\n";
	}
}

add_action('wp_head', 'responsive_inline_css');

function responsive_inline_js_head() {
    $options = get_option('responsive_theme_options');
    if (!empty($options['responsive_inline_js_head'])) {
		echo '<!-- Custom Scripts -->' . "\n";
        echo $options['responsive_inline_js_head'];
		echo "\n";
	}
}

add_action('wp_head', 'responsive_inline_js_head');

function responsive_inline_js_footer() {
    $options = get_option('responsive_theme_options');
    if (!empty($options['responsive_inline_js_footer'])) {
		echo '<!-- Custom Scripts -->' . "\n";
        echo $options['responsive_inline_js_footer'];
		echo "\n";
	}
}

add_action('wp_footer', 'responsive_inline_js_footer');
	
/**
 * Create the options page
 */
function responsive_theme_options_do_page() {

	if (!isset($_REQUEST['settings-updated']))
		$_REQUEST['settings-updated'] = false;
	?>
    
    <div class="wrap">
        <?php
        /**
         * < 3.4 Backward Compatibility
         */
        ?>
        <?php $theme_name = function_exists('wp_get_theme') ? wp_get_theme() : get_current_theme(); ?>
        <?php screen_icon(); echo "<h2>" . $theme_name ." ". __('Theme Options', 'responsive') . "</h2>"; ?>

		<?php if (false !== $_REQUEST['settings-updated']) : ?>
		<div class="updated fade"><p><strong><?php _e('Options Saved', 'responsive'); ?></strong></p></div>
		<?php endif; ?>
        
        <?php responsive_theme_options(); // Theme Options Hook ?>
        
        <form method="post" action="options.php">
            <?php settings_fields('responsive_options'); ?>
            <?php $options = get_option('responsive_theme_options'); ?>
            
            <div id="rwd" class="grid col-940">

            <h3 class="rwd-toggle"><a href="#"><?php _e('Theme Elements', 'responsive'); ?></a></h3>
            <div class="rwd-container">
                <div class="rwd-block"> 
                <?php
                /**
                 * Breadcrumb Lists
                 */
                ?>
                <div class="grid col-300"><?php _e('Disable Breadcrumb Lists?', 'responsive'); ?></div><!-- end of .grid col-300 -->
                    <div class="grid col-620 fit">
					    <input id="responsive_theme_options[breadcrumb]" name="responsive_theme_options[breadcrumb]" type="checkbox" value="1" <?php isset($options['breadcrumb']) ? checked( '1', $options['breadcrumb'] ) : checked('0', '1'); ?> />
						<label class="description" for="responsive_theme_options[breadcrumb]"><?php _e('Check to disable', 'responsive'); ?></label>
                    </div><!-- end of .grid col-620 -->

                    <div class="grid col-620 fit">
                        <p class="submit">
                        <input type="submit" class="button-primary" value="<?php _e('Save Options', 'responsive'); ?>" />
                        </p>
                    </div><!-- end of .grid col-620 -->
                                    
                </div><!-- end of .rwd-block -->
            </div><!-- end of .rwd-container -->
                        
            <h3 class="rwd-toggle"><a href="#">焦点图</a></h3>
            <div class="rwd-container">
                <div class="rwd-block">
                <?php
                /**
                 * Homepage Headline
                 */
                ?>
                <div class="grid col-300">焦点图左图地址:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_left1_img]" class="regular-text" type="text" name="responsive_theme_options[home_focus_left1_img]" value="<?php if (!empty($options['home_focus_left1_img'])) echo esc_attr($options['home_focus_left1_img']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_left1_img]">焦点图左图地址</label>
                </div><!-- end of .grid col-620 -->

				<div class="grid col-300">焦点图左图链接:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_left1_link]" class="regular-text" type="text" name="responsive_theme_options[home_focus_left1_link]" value="<?php if (!empty($options['home_focus_left1_link'])) echo esc_attr($options['home_focus_left1_link']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_left1_link]">焦点图左图链接（如果不填写则该图无链接）</label>
                </div><!-- end of .grid col-620 -->
					<div class="grid col-300">焦点图左图文字描述:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_left1_title]" class="regular-text" type="text" name="responsive_theme_options[home_focus_left1_title]" value="<?php if (!empty($options['home_focus_left1_title'])) echo esc_attr($options['home_focus_left1_title']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_left1_title]">焦点图左图文字描述（如果不填写则无文字描述）</label>
                </div><!-- end of .grid col-620 -->

				 <div class="grid col-300">焦点图中间上方图地址:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle1_img]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle1_img]" value="<?php if (!empty($options['home_focus_middle1_img'])) echo esc_attr($options['home_focus_middle1_img']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_middle1_img]">焦点图中间上方图地址</label>
                </div><!-- end of .grid col-620 -->

				<div class="grid col-300">焦点图中间上方图链接:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle1_link]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle1_link]" value="<?php if (!empty($options['home_focus_middle1_link'])) echo esc_attr($options['home_focus_middle1_link']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_middle1_link]">焦点图中间上方图链接（如果不填写则无链接）</label>
                </div><!-- end of .grid col-620 -->
					<div class="grid col-300">焦点图中间上方图文字描述:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle1_title]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle1_title]" value="<?php if (!empty($options['home_focus_middle1_title'])) echo esc_attr($options['home_focus_middle1_title']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_middle1_title]">焦点图中间上方图文字描述（如果不填写则无描述）</label>
                </div><!-- end of .grid col-620 -->
					  <div class="grid col-300">焦点图中间下方左图地址：</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle2_img]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle2_img]" value="<?php if (!empty($options['home_focus_middle2_img'])) echo esc_attr($options['home_focus_middle2_img']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_middle2_img]">焦点图中间下文左图</label>
                </div><!-- end of .grid col-620 -->

				<div class="grid col-300">焦点图中间下方左图链接：</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle2_link]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle2_link]" value="<?php if (!empty($options['home_focus_middle2_link'])) echo esc_attr($options['home_focus_middle2_link']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_left1_link]">焦点图中间下文左图链接</label>
                </div><!-- end of .grid col-620 -->
					<div class="grid col-300">焦点图中间下方左图文字描述:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle2_title]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle2_title]" value="<?php if (!empty($options['home_focus_middle2_title'])) echo esc_attr($options['home_focus_middle2_title']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_middle2_title]">焦点图中间下文左图文字描述</label>
                </div><!-- end of .grid col-620 -->

				 <div class="grid col-300">焦点图中间下方右图地址:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle3_img]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle3_img]" value="<?php if (!empty($options['home_focus_middle3_img'])) echo esc_attr($options['home_focus_middle3_img']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_middle3_img]">焦点图中间下方右图地址</label>
                </div><!-- end of .grid col-620 -->

				<div class="grid col-300">焦点图中间下方右图文字链接:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle3_link]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle3_link]" value="<?php if (!empty($options['home_focus_middle3_link'])) echo esc_attr($options['home_focus_middle3_link']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_middle3_link]">焦点图中间下方右图文字链接</label>
                </div><!-- end of .grid col-620 -->
					<div class="grid col-300">焦点图中间下方右侧文字描述:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_middle3_title]" class="regular-text" type="text" name="responsive_theme_options[home_focus_middle3_title]" value="<?php if (!empty($options['home_focus_middle3_title'])) echo esc_attr($options['home_focus_middle3_title']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_middle3_title]">焦点图中间下方右侧文字描述</label>
                </div><!-- end of .grid col-620 -->

				 <div class="grid col-300">焦点图右侧上方图片地址:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_right1_img]" class="regular-text" type="text" name="responsive_theme_options[home_focus_right1_img]" value="<?php if (!empty($options['home_focus_right1_img'])) echo esc_attr($options['home_focus_right1_img']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_right1_img]">焦点图右侧上方图片地址</label>
                </div><!-- end of .grid col-620 -->

				<div class="grid col-300">焦点图右侧上方链接:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_right1_link]" class="regular-text" type="text" name="responsive_theme_options[home_focus_right1_link]" value="<?php if (!empty($options['home_focus_right1_link'])) echo esc_attr($options['home_focus_right1_link']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_right1_link]">焦点图右侧上方链接</label>
                </div><!-- end of .grid col-620 -->
					<div class="grid col-300">焦点图右侧上方文字描述:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_right1_title]" class="regular-text" type="text" name="responsive_theme_options[home_focus_right1_title]" value="<?php if (!empty($options['home_focus_right1_title'])) echo esc_attr($options['home_focus_right1_title']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_right1_title]">焦点图右侧上方文字描述</label>
                </div><!-- end of .grid col-620 -->

				 <div class="grid col-300">焦点图右侧下方图片地址:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_right2_img]" class="regular-text" type="text" name="responsive_theme_options[home_focus_right2_img]" value="<?php if (!empty($options['home_focus_right2_img'])) echo esc_attr($options['home_focus_right2_img']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_right2_img]">焦点图右侧下方图片地址</label>
                </div><!-- end of .grid col-620 -->

				<div class="grid col-300">焦点图右侧下方链接:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_right2_link]" class="regular-text" type="text" name="responsive_theme_options[home_focus_right2_link]" value="<?php if (!empty($options['home_focus_right2_link'])) echo esc_attr($options['home_focus_right2_link']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_right2_link]">焦点图右侧下方链接</label>
                </div><!-- end of .grid col-620 -->
					<div class="grid col-300">焦点图右侧下方文字描述:</div><!-- end of .grid col-300 -->
                <div class="grid col-620 fit">
                    <input id="responsive_theme_options[home_focus_right2_title]" class="regular-text" type="text" name="responsive_theme_options[home_focus_right2_title]" value="<?php if (!empty($options['home_focus_right2_title'])) echo esc_attr($options['home_focus_right2_title']); ?>" />
                    <label class="description" for="responsive_theme_options[home_focus_right2_title]">焦点图右侧下方文字描述</label>
                </div><!-- end of .grid col-620 -->
                    <div class="grid col-620 fit">
                        <p class="submit">
                        <input type="submit" class="button-primary" value="<?php _e('Save Options', 'responsive'); ?>" />
                        </p>
                    </div><!-- end of .grid col-620 -->
                    
                </div><!-- end of .rwd-block -->
            </div><!-- end of .rwd-container -->

            <h3 class="rwd-toggle"><a href="#">微博</a></h3>
            <div class="rwd-container">
                <div class="rwd-block">
                <?php
                /**
                 * Social Media
                 */
                ?>
                <div class="grid col-300">微博地址</div><!-- end of .grid col-300 -->
                    <div class="grid col-620 fit">
                        <input id="responsive_theme_options[twitter_uid]" class="regular-text" type="text" name="responsive_theme_options[twitter_uid]" value="<?php if (!empty($options['twitter_uid'])) echo esc_url($options['twitter_uid']); ?>" />
                        <label class="description" for="responsive_theme_options[twitter_uid]">微博地址</label>
                    </div><!-- end of .grid col-620 -->
                    
                    <div class="grid col-620 fit">
                        <p class="submit">
                        <input type="submit" class="button-primary" value="<?php _e('Save Options', 'responsive'); ?>" />
                        </p>
                    </div><!-- end of .grid col-620 -->

                </div><!-- end of .rwd-block -->
            </div><!-- end of .rwd-container -->
            
             <h3 class="rwd-toggle"><a href="#">联系方式</a></h3>
            <div class="rwd-container">
                <div class="rwd-block">
                <div class="grid col-300">地址</div><!-- end of .grid col-300 -->
                    <div class="grid col-620 fit">
                        <input id="responsive_theme_options[address]" class="regular-text" type="text" name="responsive_theme_options[address]" value="<?php if (!empty($options['address'])) echo esc_attr($options['address']); ?>" />
                        <label class="description" for="responsive_theme_options[address]">地址</label>
                    </div><!-- end of .grid col-620 -->
                     <div class="grid col-300">传真</div><!-- end of .grid col-300 -->
                    <div class="grid col-620 fit">
                        <input id="responsive_theme_options[fax]" class="regular-text" type="text" name="responsive_theme_options[fax]" value="<?php if (!empty($options['fax'])) echo esc_attr($options['fax']); ?>" />
                        <label class="description" for="responsive_theme_options[fax]">传真</label>
                    </div><!-- end of .grid col-620 -->
                    
                    <div class="grid col-300">邮箱</div><!-- end of .grid col-300 -->
                    <div class="grid col-620 fit">
                        <input id="responsive_theme_options[mail]" class="regular-text" type="text" name="responsive_theme_options[mail]" value="<?php if (!empty($options['mail'])) echo esc_attr($options['mail']); ?>" />
                        <label class="description" for="responsive_theme_options[mail]">邮箱</label>
                    </div><!-- end of .grid col-620 -->
                    <div class="grid col-620 fit">
                        <p class="submit">
                        <input type="submit" class="button-primary" value="<?php _e('Save Options', 'responsive'); ?>" />
                        </p>
                    </div><!-- end of .grid col-620 -->

                </div><!-- end of .rwd-block -->
            </div><!-- end of "rwd-container 联系方式 -->
            
            <h3 class="rwd-toggle"><a href="#"><?php _e('Custom CSS Styles', 'responsive'); ?></a></h3>
            <div class="rwd-container">
                <div class="rwd-block"> 
                <?php
                /**
                 * Custom Styles
                 */
                ?>
                <div class="grid col-300">
				    <?php _e('Custom CSS Styles', 'responsive'); ?>
                </div><!-- end of .grid col-300 -->
                
                    <div class="grid col-620 fit">
                        <textarea id="responsive_theme_options[responsive_inline_css]" class="inline-css large-text" cols="50" rows="30" name="responsive_theme_options[responsive_inline_css]"><?php if (!empty($options['responsive_inline_css'])) echo esc_textarea($options['responsive_inline_css']); ?></textarea>
                        <label class="description" for="responsive_theme_options[responsive_inline_css]"><?php _e('Enter your custom CSS styles.', 'responsive'); ?></label>
                        <p class="submit">
                        <input type="submit" class="button-primary" value="<?php _e('Save Options', 'responsive'); ?>" />
                        </p>
                    </div><!-- end of .grid col-620 -->
                                    
                </div><!-- end of .rwd-block -->
            </div><!-- end of .rwd-container -->
            
            <h3 class="rwd-toggle"><a href="#"><?php _e('Custom Scripts', 'responsive'); ?></a></h3>
            <div class="rwd-container">
                <div class="rwd-block"> 

                <?php
                /**
                 * Custom Styles
                 */
                ?>
                <div class="grid col-300">
				    <?php _e('Custom Scripts for Header and Footer', 'responsive'); ?>
                </div><!-- end of .grid col-300 -->
                
                    <div class="grid col-620 fit">
                        <p><?php printf(__('Embeds to header.php &darr;','responsive')); ?></p>
                        <textarea id="responsive_theme_options[responsive_inline_js_head]" class="inline-css large-text" cols="50" rows="30" name="responsive_theme_options[responsive_inline_js_head]"><?php if (!empty($options['responsive_inline_js_head'])) echo esc_textarea($options['responsive_inline_js_head']); ?></textarea>
                        <label class="description" for="responsive_theme_options[responsive_inline_js_head]"><?php _e('Enter your custom header script.', 'responsive'); ?></label>
                        
                        <p><?php printf(__('Embeds to footer.php &darr;','responsive')); ?></p>
                        <textarea id="responsive_theme_options[responsive_inline_js_footer]" class="inline-css large-text" cols="50" rows="30" name="responsive_theme_options[responsive_inline_js_footer]"><?php if (!empty($options['responsive_inline_js_footer'])) echo esc_textarea($options['responsive_inline_js_footer']); ?></textarea>
                        <label class="description" for="responsive_theme_options[responsive_inline_js_footer]"><?php _e('Enter your custom footer script.', 'responsive'); ?></label>
                        <p class="submit">
                        <input type="submit" class="button-primary" value="<?php _e('Save Options', 'responsive'); ?>" />
                        </p>
                    </div><!-- end of .grid col-620 -->
                                    
                </div><!-- end of .rwd-block -->
            </div><!-- end of .rwd-container -->
            
            </div><!-- end of .grid col-940 -->
        </form>
    </div>
    <?php
}

/**
 * Sanitize and validate input. Accepts an array, return a sanitized array.
 */
function responsive_theme_options_validate($input) {

	// checkbox value is either 0 or 1
	foreach (array(
		'breadcrumb'//,
		//'cta_button'
		) as $checkbox) {
		if (!isset($input[$checkbox]))
			$input[$checkbox] = null;
		    $input[$checkbox] = ( $input[$checkbox] == 1 ? 1 : 0 );
	}
	
    $input['home_focus_left1_img'] = esc_url_raw($input['home_focus_left1_img']);
    $input['home_focus_left1_link'] = esc_url_raw($input['home_focus_left1_link']);
    $input['home_focus_left1_title'] = wp_kses_stripslashes($input['home_focus_left1_title']);

	  $input['home_focus_middle1_img'] = esc_url_raw($input['home_focus_middle1_img']);
    $input['home_focus_middle1_link'] = esc_url_raw($input['home_focus_middle1_link']);
    $input['home_focus_middle1_title'] = wp_kses_stripslashes($input['home_focus_middle1_title']);

	  $input['home_focus_middle2_img'] = esc_url_raw($input['home_focus_middle2_img']);
    $input['home_focus_middle2_link'] = esc_url_raw($input['home_focus_middle2_link']);
    $input['home_focus_middle2_title'] = wp_kses_stripslashes($input['home_focus_middle2_title']);

	  $input['home_focus_middle3_img'] = esc_url_raw($input['home_focus_middle3_img']);
    $input['home_focus_middle3_link'] = esc_url_raw($input['home_focus_middle3_link']);
    $input['home_focus_middle3_title'] = wp_kses_stripslashes($input['home_focus_middle3_title']);

  $input['home_focus_right1_img'] = esc_url_raw($input['home_focus_right1_img']);
    $input['home_focus_right1_link'] = esc_url_raw($input['home_focus_right1_link']);
    $input['home_focus_right1_title'] = wp_kses_stripslashes($input['home_focus_right1_title']);

  $input['home_focus_right2_img'] = esc_url_raw($input['home_focus_right2_img']);
    $input['home_focus_right2_link'] = esc_url_raw($input['home_focus_right2_link']);
    $input['home_focus_right2_title'] = wp_kses_stripslashes($input['home_focus_right2_title']);

      $input['address'] = wp_kses_stripslashes($input['address']);
    $input['fax'] = wp_kses_stripslashes($input['fax']);
    $input['mail'] = wp_kses_stripslashes($input['mail']);
 	$input['twitter_uid'] = esc_url_raw($input['twitter_uid']);
 	$input['responsive_inline_css'] = wp_kses_stripslashes($input['responsive_inline_css']);
	$input['responsive_inline_js_head'] = wp_kses_stripslashes($input['responsive_inline_js_head']);
	$input['responsive_inline_css_js_footer'] = wp_kses_stripslashes($input['responsive_inline_css_js_footer']);
	
    return $input;
}