<?php
if (!function_exists("add_styles")) {
  // если ф-я уже есть в дочерней теме - нам не надо её определять
  function add_styles() { // добавление стилей
    if (is_admin()) {// если мы в админке - ничего не делаем
      return false;
    }
    // =======================================
    // wp_deregister_style( 'fancybox' );
    // wp_register_style( 'fancybox', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css', false, '5.0' );
    // wp_enqueue_style( 'fancybox' );
    // =======================================
    wp_deregister_style( 'theme-style' );
    wp_register_style( 'theme-style', get_template_directory_uri() . "/css/main.css", "", null);
    wp_enqueue_style( 'theme-style' );
    // =======================================
    wp_enqueue_style("m88thems-wp-style", get_stylesheet_uri(), "", null);
    // =======================================
  }
}

add_action("wp_print_styles", "add_styles");
?>