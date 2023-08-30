<?php
if (!function_exists("add_scripts")) {
  // если ф-я уже есть в дочерней теме - нам не надо её определять
  function add_scripts() {
    if (is_admin()) {
      return false;
    }
    // =======================================
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js', false, '3.7.0');
    wp_enqueue_script( 'jquery' );
    // =======================================
    // wp_deregister_script('fancybox');
    // wp_register_script('jquery', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js', false, '5.0');
    // wp_enqueue_script( 'fancybox' );
    // =======================================
    wp_deregister_script('libs');
    wp_register_script('libs', get_template_directory_uri() . "/js/libs.js");
    wp_enqueue_script( 'libs' );
    // =======================================
    wp_deregister_script('libsScripts');
    wp_register_script('libsScripts', get_template_directory_uri() . "/js/scripts.js");
    wp_enqueue_script( 'libsScripts' );
    // =======================================
    wp_deregister_script('main');
    wp_register_script('main', get_template_directory_uri() . "/js/main.js");
    wp_enqueue_script( 'main' );
  }
}

add_action("wp_footer", "add_scripts"); // приклеем ф-ю на добавление скриптов в футер
?>