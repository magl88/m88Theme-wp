<!DOCTYPE html>
<html lang="en">
<?php include 'inc/blocks/head.php'; ?>

<body <?php body_class() ?>>
  <?php wp_body_open(); ?>
  <?php get_header(); ?>
  <main>
    <?php get_template_part('sections/content'); ?>
  </main>
  <?php get_footer(); ?>
  <?php wp_footer(); ?>
</body>

</html>