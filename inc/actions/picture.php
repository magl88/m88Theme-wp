<?php
function add_picture_tag($imgName, $alt = 'image', $type = 'png' ) {
  if($imgName != '') {
    echo '
      <picture>
      <source srcset="'.  get_template_directory_uri() . '/assets/avif/' . $imgName . '.avif" type="image/avif">
      <source srcset="'.  get_template_directory_uri() . '/assets/webp/' . $imgName .'.webp" type="image/webp">
      <img src="'.  get_template_directory_uri() . '/assets/img/' . $imgName . '.' . $type . '"
        alt="'. $alt .'" width="300" height="200" loading="lazy" decoding="async">
      </picture>
    ';
  } else {
    echo 'Set name image file!';
  }
}

add_action( 'add_picture', 'add_picture_tag', 10, 3);
?>