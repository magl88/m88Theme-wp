<?php

/**
 * Replaces query version in registered scripts or styles with file modified time
 * @param string $src Source url
 * @param string $baseUrl Site base url
 * @return string
 */
function put_modified_time_version($src, $baseUrl)
{
    // Only work with objects from baseUrl
    if ($src && strpos($src, $baseUrl) === 0) {
        // Remove any version
        $newSrc = remove_query_arg('ver', $src);
        // Get path after base_url
        $path = substr($newSrc, strlen($baseUrl));
        $path = wp_parse_url($path, PHP_URL_PATH);
        // Apply modified time version if exists
        if ($mtime = @filemtime(untrailingslashit(ABSPATH) . $path)) {
            $src = add_query_arg('ver', $mtime, $newSrc);
        }
    }
    return $src;
}

/**
 * Filters style sources to put file modified time as query string
 * @param $src
 * @return string
 */
function modified_time_version_style($src) {
    // base_url from WP_Versions is already in memory
    return ($src) ? put_modified_time_version($src, wp_styles()->base_url) : $src;
}

/**
 * Filters script sources to put file modified time as query string
 * @param $src
 * @return string
 */
function modified_time_version_script($src) {
    // base_url from WP_Styles is already in memory
    return ($src) ? put_modified_time_version($src, wp_scripts()->base_url) : $src;
}

add_filter('style_loader_src', 'modified_time_version_style', 15, 1);
add_filter('script_loader_src', 'modified_time_version_script', 15, 1);
?>