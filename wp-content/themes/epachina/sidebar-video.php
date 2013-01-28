<?php

// Exit if accessed directly
if ( !defined('ABSPATH')) exit;

/**
 * Video Template
 *
   Template Name:  Video Page
 *
 * @file           sidebar-video.php
 * @package        Responsive 
 * @author         hanxianlong
 * @copyright      2003 - 2011 ThemeID
 * @license        license.txt
 * @version        Release: 1.0
 * @filesource     wp-content/themes/responsive/content-sidebar-half-page.php
 * @link           http://codex.wordpress.org/Theme_Development#Pages_.28page.php.29
 * @since          available since Release 1.0
 */
?>
<?php get_header(); ?>
        <div id="content" >
		<?php $options = get_option('responsive_theme_options'); ?>
		<?php if ($options['breadcrumb'] == 0): ?>
		<?php echo responsive_breadcrumb_lists(); ?>
        <?php endif; ?>
		<div style="clear:both">
		<?php 
		the_post();
		the_content();
		?>
		</div>
		<h2 class="heading"><span>最新视频</span></h2>
<?php 
$cate_name=get_post_meta(get_the_ID(),'video_cate_name',true);
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$query_string='posts_per_page=20&paged='.$paged . '&category_name='.$cate_name;
query_posts($query_string);
if (have_posts()) :
 ?>
		<?php while (have_posts()) : the_post(); ?>
	<div class="video-item">
			<a href="/?p=<?php the_ID() ?>" title="<?php the_title_attribute(); ?>">
<img src="http://www.thinkplus.cc/media/images/2012/11/15/479f0cdb3fb5.jpg" />
			</a>
			<div>
			<a href="/?p=<?php the_ID() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></div>
	</div>
        <?php endwhile; ?>

        <?php if (  $wp_query->max_num_pages > 1 ) : ?>
	<div class="navigation" style="clear:both; text-align:center;width:300px;">
            <div class="previous"><?php previous_posts_link( '上一页' ); ?></div>
			<div class="next"><?php next_posts_link( '下一页' ); ?></div>
</div><!-- end of .navigation -->
        <?php endif; ?>

	    <?php else : ?>

        <h1 class="title-404"><?php _e('404 &#8212; Fancy meeting you here!', 'responsive'); ?></h1>

        <p><?php _e('Don&#39;t panic, we&#39;ll get through this together. Let&#39;s explore our options here.', 'responsive'); ?></p>

        <h6><?php printf( __('You can return %s or search for the page you were looking for.', 'responsive'),
        	sprintf( '<a href="%1$s" title="%2$s">%3$s</a>',
        			esc_url( get_home_url() ),
        			esc_attr__('Home', 'responsive'),
        			esc_attr__('&larr; Home', 'responsive')
        			)); 
        ?></h6>

        <?php get_search_form(); ?>

<?php endif; ?>  
      
        </div><!-- end of #content -->
<script language="javascript">
	jQuery(".video-item").hover(function(){jQuery(this).fadeTo(0.8,0.5)}).mouseleave(function(){jQuery(this).fadeTo(0.8,1);});
</script>
<?php get_footer(); ?>
