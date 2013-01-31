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
			<!--<img src="http://www.astd.org/~/media/Images/Tile-320X310/Homepage/011315CPLP-website-ad_v2.png"/>
				<p>立即注册，立即获得30万美金返利！</p>-->
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
			<!--<img src="http://www.astd.org/~/media/Images/Community-Featured-Image/GOV.jpg"/> -->
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
			<!--<img src="http://www.astd.org/~/media/Images/Community-Featured-Image/Shake.jpg"/>
				<p>新闻标题</p> -->
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
			<!--<img src="http://www.astd.org/~/media/Images/Community-Featured-Image/caps.jpg"/>
				<p>新闻标题</p> -->
			</div>
		</div>
	</div>
	<div class="right">
		<div class="half-height bottom-margin clear" >
			<!--<img src="http://www.astd.org/~/media/Images/Community-Featured-Image/climbbooksLnD.jpg"/>
				<p>新闻标题</p> -->
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
			<!--<img src="http://www.astd.org/~/media/Images/Community-Featured-Image/boardroom2.jpg"/>
				<p>新闻标题</p> -->
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
        <div id="featured" class="grid col-940" style="display:none">
        
        <div class="grid col-460" style="display:none">

            <?php $options = get_option('responsive_theme_options');
            // First let's check if headline was set
            if ($options['home_focus_left1']) {
            	echo '<img src=' .$options['home_focus_left1'] .'/>';
            }
            ?>
                    
            <?php $options = get_option('responsive_theme_options');
            // First let's check if headline was set
            if ($options['home_subheadline']) {
            	echo '<h2 class="featured-subtitle">'; 
            	echo $options['home_subheadline'];
            	echo '</h2>'; 
            	// If not display dummy headline for preview purposes
            } else { 
            	echo '<h2 class="featured-subtitle">';
            	echo __('Your H2 subheadline here','responsive');
            	echo '</h2>';
            }
            ?>
            
            <?php $options = get_option('responsive_theme_options');
            // First let's check if content is in place
            if (!empty($options['home_content_area'])) {
            	echo '<p>'; 
            	echo do_shortcode($options['home_content_area']);
            	echo '</p>'; 
            	// If not let's show dummy content for demo purposes
            } else { 
            	echo '<p>';
            	echo __('Your title, subtitle and this very content is editable from Theme Option. Call to Action button and its destination link as well. Image on your right can be an image or even YouTube video if you like.','responsive');
            	echo '</p>';
            }
            ?>
            
            <?php $options = get_option('responsive_theme_options'); ?>
		    <?php if ($options['cta_button'] == 0): ?>     
	<div class="call-to-action">

            <?php $options = get_option('responsive_theme_options');
            // First let's check if headline was set
            if (!empty($options['cta_url']) && $options['cta_text']) {
            	echo '<a href="'.$options['cta_url'].'" class="blue button">'; 
            	echo $options['cta_text'];
            	echo '</a>';
            	// If not display dummy headline for preview purposes
            } else { 
            	echo '<a href="#nogo" class="blue button">'; 
            	echo __('Call to Action','responsive');
            	echo '</a>';
            }
            ?>  

</div><!-- end of .call-to-action -->
            <?php endif; ?>         
            
        </div><!-- end of .col-460 -->

        <div id="featured-image" class="grid col-460 fit" style="display:none"> 
                           
            <?php $options = get_option('responsive_theme_options');
            // First let's check if image was set
            if (!empty($options['featured_content'])) {
            	echo do_shortcode($options['featured_content']);
            	// If not display dummy image for preview purposes
            } else {             
            	echo '<img class="aligncenter" src="'.get_stylesheet_directory_uri().'/images/featured-image.png" width="440" height="300" alt="" />'; 
            }
            ?> 
                                   
        </div><!-- end of #featured-image --> 
        
        </div><!-- end of #featured -->
               
<?php get_sidebar('home'); ?>
<?php get_footer(); ?>