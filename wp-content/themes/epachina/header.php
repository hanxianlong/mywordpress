<?php
// Exit if accessed directly
if ( !defined('ABSPATH')) exit;

/**
 * Header Template
 *
 *
 * @file           header.php
 * @package        Responsive 
 * @author         Emil Uzelac 
 * @copyright      2003 - 2013 ThemeID
 * @license        license.txt
 * @version        Release: 1.3
 * @filesource     wp-content/themes/responsive/header.php
 * @link           http://codex.wordpress.org/Theme_Development#Document_Head_.28header.php.29
 * @since          available since Release 1.0
 */
?>
<!doctype html>
<?php /*
<!--[if !IE]>      <html class="no-js non-ie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9 ]>    <html class="no-js ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
 */ ?>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta charset="<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
<title><?php wp_title('&#124;', true, 'right'); ?></title>
<?php wp_enqueue_style('epachina.org-style', get_stylesheet_uri(), false, '1.8.7');?>

<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php responsive_container(); // before container hook ?>
<div id="container" class="hfeed">

    <?php responsive_header(); // before header hook ?>
    <div id="header">
        <div id="top-container">
		<div class="top-menu">
			<?php if (has_nav_menu('top-menu', 'responsive')) { ?>
				<?php wp_nav_menu(array(
						'container'       => 'div',
						'container-class' => '',
						'fallback_cb'	  =>  false,
						'menu_class'      => 'null',
						'theme_location'  => 'top-menu')
						); 
					?>
			<?php } ?>
			<div class="top-search">
				 <?php get_search_form(); ?>
			</div>
		</div><?php //end of top menu ?>

    <?php responsive_in_header(); // header hook ?>
            <a href="<?php echo home_url('/'); ?>"><img src="<?php echo get_template_directory_uri() . '/images/default-logo.png' ?>" height="74px" alt="<?php bloginfo('name'); ?>" /></a>
        </div><!-- end of #logo container -->  
    
    <?php get_sidebar('top'); ?>
			    <div class="menu-container">
				<?php wp_nav_menu(array(
				    'container'       => '',
					'theme_location'  => 'header-menu'
					)
					); 
				?>
                
            <?php if (has_nav_menu('sub-header-menu', 'responsive')) { ?>
	            <?php wp_nav_menu(array(
				    'container'       => '',
					'menu_class'      => 'sub-header-menu',
					'theme_location'  => 'sub-header-menu')
					);
				?>
            <?php } ?>
				</div><!-- end of #menu container -->
    <?php responsive_header_end(); // after header hook ?>
    </div><!-- end of #header -->
    
	<?php responsive_wrapper(); // before wrapper ?>
    <div id="wrapper" class="clearfix">
    <?php responsive_in_wrapper(); // wrapper hook ?>