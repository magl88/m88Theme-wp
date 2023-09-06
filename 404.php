<!DOCTYPE html>
<html lang="<?php echo get_bloginfo('language');?>">

<head>
  <?php wp_head(); ?>
</head>

<body <?php body_class('404') ?>>
  <?php wp_body_open(); ?>
  <?php get_header(); ?>
  <main>
    <?php get_template_part('inc/sections/content'); ?>
  </main>
  <?php get_footer(); ?>
  <?php wp_footer(); ?>
</body>

</html>