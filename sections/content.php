<?php if ( have_posts() ) while ( have_posts() ) : the_post();
$the_content = apply_filters( 'the_content', get_the_content() );
if ( ! empty( $the_content ) ) {
?>
<section id="section-content" class="section-content">
  <div class="container">
    <article id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
      <h2 class="section-content__title"><?php the_title(); ?></h2>
      <div class="section-content__text">
        <?php the_content(); ?>
      </div>
    </article>
  </div>
</section>
<?php }
endwhile; ?>