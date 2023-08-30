<?php
if (!function_exists("pagination")) {
  function pagination() {
    global $wp_query;
    $big = 999999999;
    $links = paginate_links([
      "base" => str_replace($big, "%#%", esc_url(get_pagenum_link($big))),
      "format" => "?paged=%#%",
      "current" => max(1, get_query_var("paged")),
      "type" => "array",
      "prev_text" => "<<",
      "next_text" => ">>",
      "total" => $wp_query->max_num_pages,
      "show_all" => false,
      "end_size" => 15,
      "mid_size" => 15,
      "add_args" => false,
      "add_fragment" => "",
      "before_page_number" => "",
      "after_page_number" => "",
    ]);
    if (is_array($links)) {
      echo '<ul class="pagination">';
      foreach ($links as $link) {
        if (strpos($link, "current") !== false) {
          echo "<li class='active'>$link</li>";
        } else {
          echo "<li class='page-item'>$link</li>";
        }
      }
      echo "</ul>";
    }
  }
}
?>