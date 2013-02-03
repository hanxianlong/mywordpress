<?php

// Exit if accessed directly
if ( !defined('ABSPATH')) exit;

/**
 * Home Page
 *
 * Note: You can overwrite home.php as well as any other Template in Child Theme.
 * Create the same file (name) include in /responsive-child-theme/ and you're all set to go!
 * @see            http://codex.wordpress.org/Child_Themes
 *
 * @file           home.php
 * @package        Responsive 
 * @author         Emil Uzelac 
 * @copyright      2003 - 2013 ThemeID
 * @license        license.txt
 * @version        Release: 1.0
 * @filesource     wp-content/themes/responsive/home.php
 * @link           http://codex.wordpress.org/Template_Hierarchy
 * @since          available since Release 1.0
 */
?>
<?php get_header(); ?>
 <?php $options = get_option('responsive_theme_options');?>
<div id="featured" class="grid col-940">
	<div class="left right-margin"  >
		<?php 
			if($options['home_focus_left1_link']){
				echo '<a href="' . $options['home_focus_left1_link'] . '">';
			}
			if ($options['home_focus_left1_img']) {
				echo '<img src="' .$options['home_focus_left1_img'] .'"';
			} 
			if ($options['home_focus_left1_title']) {
				echo ' title="' .$options['home_focus_left1_title'] .'"' ;
			}
			echo '/>';

		if ($options['home_focus_left1_title']) {
			echo '<p>' .$options['home_focus_left1_title'] .'</p>' ;
		}
		
		if($options['home_focus_left1_link']){
			echo '</a>';
		}
		?>
	</div>
	<div class="middle right-margin">
		<div class="half-height bottom-margin clear" >
			<?php 
			if($options['home_focus_middle1_link']){
				echo '<a href="' . $options['home_focus_middle1_link'] . '">';
			}
			if ($options['home_focus_middle1_img']) {
				echo '<img src="' .$options['home_focus_middle1_img'] .'"';
			} 
			if ($options['home_focus_middle1_title']) {
				echo ' title="' .$options['home_focus_middle1_title'] .'"' ;
			}
			echo '/>';

			if ($options['home_focus_middle1_title']) {
				echo '<p>' .$options['home_focus_middle1_title'] .'</p>' ;
			}
			
			if($options['home_focus_middle1_link']){
				echo '</a>';
			}
			?>
		</div>
		<div class="half-height clear">
			<div class="half-width" >
				<?php 
				if($options['home_focus_middle2_link']){
					echo '<a href="' . $options['home_focus_middle2_link'] . '">';
				}
				if ($options['home_focus_middle2_img']) {
					echo '<img src="' .$options['home_focus_middle2_img'] .'"';
				} 
				if ($options['home_focus_middle2_title']) {
					echo ' title="' .$options['home_focus_middle2_title'] .'"' ;
				}
				echo '/>';

				if ($options['home_focus_middle2_title']) {
					echo '<p>' .$options['home_focus_middle2_title'] .'</p>' ;
				}
			
				if($options['home_focus_middle2_link']){
					echo '</a>';
				}
				?>
			</div>
			<div class="half-width" >
				<?php 
				if($options['home_focus_middle3_link']){
					echo '<a href="' . $options['home_focus_middle3_link'] . '">';
				}
				if ($options['home_focus_middle3_img']) {
					echo '<img src="' .$options['home_focus_middle3_img'] .'"';
				} 
				if ($options['home_focus_middle3_title']) {
					echo ' title="' .$options['home_focus_middle3_title'] .'"' ;
				}
				echo '/>';

				if ($options['home_focus_middle3_title']) {
					echo '<p>' .$options['home_focus_middle3_title'] .'</p>' ;
				}
				
				if($options['home_focus_middle3_link']){
					echo '</a>';
				}
				?>
			</div>
		</div>
	</div>
	<div class="right">
		<div class="half-height bottom-margin clear" >
				<?php 
				if($options['home_focus_right1_link']){
					echo '<a href="' . $options['home_focus_right1_link'] . '">';
				}
				if ($options['home_focus_right1_img']) {
					echo '<img src="' .$options['home_focus_right1_img'] .'"';
				} 
				if ($options['home_focus_right1_title']) {
					echo ' title="' .$options['home_focus_right1_title'] .'"' ;
				}
				echo '/>';

				if ($options['home_focus_right1_title']) {
					echo '<p>' .$options['home_focus_right1_title'] .'</p>' ;
				}
				
				if($options['home_focus_right1_link']){
					echo '</a>';
				}
				?>
			
		</div>
		<div class="half-height clear"  >
				<?php 
				if($options['home_focus_right2_link']){
					echo '<a href="' . $options['home_focus_right2_link'] . '">';
				}
				if ($options['home_focus_right2_img']) {
					echo '<img src="' .$options['home_focus_right2_img'] .'"';
				} 
				if ($options['home_focus_right2_title']) {
					echo ' title="' .$options['home_focus_right2_title'] .'"' ;
				}
				echo '/>';

				if ($options['home_focus_right2_title']) {
					echo '<p>' .$options['home_focus_right2_title'] .'</p>' ;
				}
				
				if($options['home_focus_right2_link']){
					echo '</a>';
				}
				?>
		</div>
	</div>
</div>
<?php get_sidebar('home'); ?>
<?php get_footer(); ?>