<!DOCTYPE html>
<html lang="en">
<?php include 'inc/blocks/head.php'; ?>

<body <?php body_class() ?>>
  <?php wp_body_open(); ?>
  <div class="wrapper">
    <?php get_header(); ?>
    <main>
      <?php get_template_part('sections/content'); ?>
      <div class="test">
        <a href="#footer">FOO</a>
      </div>
    </main>
    <?php get_footer(); ?>
  </div>
  <?php wp_footer(); ?>
</body>

</html>