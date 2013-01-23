<?php get_header(); ?>
<div id="content">

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
<?php echo the_meta(); ?>
<?php the_content(); ?>

<p><?php the_time('F j, Y'); ?> at <?php the_time('g:i a'); ?> | <?php the_category(', '); ?> | <?php comments_number('No comment', '1 comment', '% comments'); ?></p>
<?php endwhile; else: ?>
<h2>对不起，没有内容..</h2>
<p>请稍后再来
snapshot:<?php 
echo get_post_meta(66, "snapshot",true);
?>
</p>
<?php endif; ?>
<p align="center"><?php posts_nav_link(); ?></p>

</div>
<?php get_footer(); ?>