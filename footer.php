<footer id="footer" class="footer">
  <div class="container">
    <div class="footer__content">
      <div class="footer__logo">
        <a href="<?php echo get_bloginfo('url');?>">
          <?php do_action( 'add_picture', 'logo', get_bloginfo('name'));?>
        </a>
      </div>
      <?php wp_nav_menu([
          'theme_location' => 'footer_menu',
          'container'      => 'nav',
          'container_class' => 'footer__nav',
        ]);?>
      <div class="footer__contacts">
        <div class="footer__contacts-title">
          <?php esc_html_e('Contacts:');?>
        </div>
        <div class="footer__contacts-content">
          <ul>
            <li><a href="tel:0000">+0 (000) 000-00-00</a></li>
            <li><a href="tel:0000">+0 (000) 000-00-00</a></li>
          </ul>
        </div>
        <div class="footer__contacts-soc">
          <ul>
            <li><a href="#">soc 1</a></li>
            <li><a href="#">soc 2</a></li>
            <li><a href="#">soc 3</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer__copy">
      <?php esc_html_e("Copyright &copy; 1988 - ". date("Y") . " " . get_bloginfo('name'), 'm88them'); ?>
    </div>
  </div>
</footer>