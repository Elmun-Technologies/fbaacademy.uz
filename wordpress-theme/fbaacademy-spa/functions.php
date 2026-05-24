<?php
if (!defined('ABSPATH')) {
  exit;
}

const FBA_THEME_VERSION = '1.3.2';
const FBA_TEXT_DOMAIN = 'fbaacademy-spa';

function fba_after_setup_theme() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
}
add_action('after_setup_theme', 'fba_after_setup_theme');

function fba_safe_json_decode($raw, $fallback = array()) {
  if (!is_string($raw)) {
    return $fallback;
  }

  $raw = trim($raw);
  if ($raw === '') {
    return $fallback;
  }

  $decoded = json_decode($raw, true);
  return is_array($decoded) ? $decoded : $fallback;
}

function fba_get_meta_string($post_id, $key, $default = '') {
  $value = get_post_meta($post_id, $key, true);
  if (!is_string($value) || trim($value) === '') {
    return $default;
  }

  return $value;
}

function fba_get_meta_json_array($post_id, $key) {
  return fba_safe_json_decode((string) get_post_meta($post_id, $key, true), array());
}

function fba_get_meta_bool($post_id, $key, $default = true) {
  $raw = get_post_meta($post_id, $key, true);
  if (!is_string($raw) || trim($raw) === '') {
    return (bool) $default;
  }

  $value = strtolower(trim($raw));
  if (in_array($value, array('0', 'false', 'off', 'no'), true)) {
    return false;
  }
  if (in_array($value, array('1', 'true', 'on', 'yes'), true)) {
    return true;
  }

  return (bool) $default;
}

/**
 * Featured image (large) first, then meta fallback: full URL, protocol-relative URL,
 * site-relative path, or attachment ID stored as int/string in post meta.
 */
function fba_resolve_post_image_url($post_id, $meta_fallback_key) {
  $thumb_id = (int) get_post_thumbnail_id($post_id);
  if ($thumb_id > 0) {
    $src = wp_get_attachment_image_url($thumb_id, 'large');
    if (is_string($src) && $src !== '') {
      return $src;
    }
  }

  $raw = get_post_meta($post_id, $meta_fallback_key, true);
  if ($raw === '' || $raw === null) {
    return '';
  }

  if (is_numeric($raw)) {
    $id = (int) $raw;
    if ($id > 0) {
      $src = wp_get_attachment_image_url($id, 'large');
      return is_string($src) ? $src : '';
    }
  }

  if (!is_string($raw)) {
    return '';
  }

  $s = trim($raw);
  if ($s === '') {
    return '';
  }

  if (ctype_digit($s)) {
    $id = (int) $s;
    if ($id > 0) {
      $src = wp_get_attachment_image_url($id, 'large');
      return is_string($src) ? $src : '';
    }
  }

  if (strlen($s) >= 2 && $s[0] === '/' && $s[1] === '/') {
    return (is_ssl() ? 'https:' : 'http:') . $s;
  }

  if ($s[0] === '/') {
    return home_url($s);
  }

  return esc_url_raw($s);
}

function fba_sanitize_json_text($value) {
  $value = trim((string) wp_unslash($value));
  if ($value === '') {
    return '';
  }

  $decoded = json_decode($value, true);
  if (!is_array($decoded)) {
    return '';
  }

  return wp_json_encode($decoded, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}

function fba_sanitize_plain_text($value) {
  return sanitize_text_field(wp_unslash((string) $value));
}

function fba_sanitize_textarea($value) {
  return sanitize_textarea_field(wp_unslash((string) $value));
}

function fba_sanitize_boolean_text($value) {
  $value = trim((string) wp_unslash($value));
  return in_array(strtolower($value), array('1', 'true', 'on', 'yes'), true) ? '1' : '0';
}

function fba_meta_fields_config() {
  return array(
    'fba_course' => array(
      array('key' => 'subtitle', 'label' => 'Subtitle', 'type' => 'text'),
      array('key' => 'category', 'label' => 'Category', 'type' => 'text'),
      array('key' => 'category_slug', 'label' => 'Category Slug', 'type' => 'text'),
      array('key' => 'duration', 'label' => 'Duration', 'type' => 'text'),
      array('key' => 'price', 'label' => 'Price', 'type' => 'text'),
      array('key' => 'old_price', 'label' => 'Old Price', 'type' => 'text'),
      array('key' => 'discount', 'label' => 'Discount', 'type' => 'text'),
      array('key' => 'show_price', 'label' => 'Show Price (toggle)', 'type' => 'boolean'),
      array('key' => 'show_program', 'label' => 'Show Program Section (toggle)', 'type' => 'boolean'),
      array('key' => 'level', 'label' => 'Level', 'type' => 'text'),
      array('key' => 'short_description', 'label' => 'Short Description', 'type' => 'textarea'),
      array('key' => 'mentor_id', 'label' => 'Mentor ID (teacher slug)', 'type' => 'text'),
      array('key' => 'image_url', 'label' => 'Image URL (fallback if no featured image)', 'type' => 'text'),
      array('key' => 'video_id', 'label' => 'Video ID (YouTube)', 'type' => 'text'),
      array('key' => 'practice_hours', 'label' => 'Practice Hours', 'type' => 'text'),
      array('key' => 'theory_hours', 'label' => 'Theory Hours', 'type' => 'text'),
      array('key' => 'projects', 'label' => 'Projects', 'type' => 'text'),
      array('key' => 'rating', 'label' => 'Rating', 'type' => 'text'),
      array('key' => 'students_count', 'label' => 'Students Count', 'type' => 'text'),
      array('key' => 'modules_json', 'label' => 'Modules JSON', 'type' => 'json'),
      array('key' => 'for_whom_json', 'label' => 'For Whom JSON', 'type' => 'json'),
      array('key' => 'skills_json', 'label' => 'Skills JSON', 'type' => 'json'),
      array('key' => 'tools_json', 'label' => 'Tools JSON', 'type' => 'json'),
      array('key' => 'salary_levels_json', 'label' => 'Salary Levels JSON', 'type' => 'json'),
      array('key' => 'support_team_json', 'label' => 'Support Team JSON', 'type' => 'json'),
    ),
    'fba_teacher' => array(
      array('key' => 'role', 'label' => 'Role', 'type' => 'text'),
      array('key' => 'experience', 'label' => 'Experience', 'type' => 'text'),
      array('key' => 'avatar_url', 'label' => 'Avatar URL (fallback if no featured image)', 'type' => 'text'),
      array('key' => 'courses_json', 'label' => 'Courses JSON', 'type' => 'json'),
    ),
    'fba_testimonial' => array(
      array('key' => 'role', 'label' => 'Role', 'type' => 'text'),
      array('key' => 'course_name', 'label' => 'Course Name', 'type' => 'text'),
      array('key' => 'rating', 'label' => 'Rating (1-5)', 'type' => 'text'),
      array('key' => 'avatar_url', 'label' => 'Avatar URL', 'type' => 'text'),
      array('key' => 'text', 'label' => 'Text', 'type' => 'textarea'),
    ),
    'fba_faq' => array(
      array('key' => 'category', 'label' => 'Category', 'type' => 'text'),
      array('key' => 'answer', 'label' => 'Answer', 'type' => 'textarea'),
    ),
    'fba_graduate_result' => array(
      array('key' => 'before_role', 'label' => 'Before Role', 'type' => 'text'),
      array('key' => 'after_role', 'label' => 'After Role', 'type' => 'text'),
      array('key' => 'company', 'label' => 'Company', 'type' => 'text'),
      array('key' => 'salary_increase', 'label' => 'Salary Increase', 'type' => 'text'),
      array('key' => 'course_name', 'label' => 'Course Name', 'type' => 'text'),
      array('key' => 'video_id', 'label' => 'YouTube video ID (home cards)', 'type' => 'text'),
      array('key' => 'avatar_url', 'label' => 'Avatar URL (fallback if no featured image)', 'type' => 'text'),
      array('key' => 'story', 'label' => 'Story', 'type' => 'textarea'),
    ),
  );
}

function fba_register_content_post_types() {
  register_post_type('fba_lead', array(
    'labels' => array(
      'name' => __('Leads', FBA_TEXT_DOMAIN),
      'singular_name' => __('Lead', FBA_TEXT_DOMAIN),
    ),
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 25,
    'menu_icon' => 'dashicons-email-alt',
    'supports' => array('title'),
  ));

  register_post_type('fba_course', array(
    'labels' => array(
      'name' => __('Courses', FBA_TEXT_DOMAIN),
      'singular_name' => __('Course', FBA_TEXT_DOMAIN),
    ),
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 26,
    'menu_icon' => 'dashicons-welcome-learn-more',
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'page-attributes'),
    'show_in_rest' => true,
    'rewrite' => false,
  ));

  register_post_type('fba_teacher', array(
    'labels' => array(
      'name' => __('Teachers', FBA_TEXT_DOMAIN),
      'singular_name' => __('Teacher', FBA_TEXT_DOMAIN),
    ),
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 27,
    'menu_icon' => 'dashicons-groups',
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'page-attributes'),
    'show_in_rest' => true,
    'rewrite' => false,
  ));

  register_post_type('fba_testimonial', array(
    'labels' => array(
      'name' => __('Testimonials', FBA_TEXT_DOMAIN),
      'singular_name' => __('Testimonial', FBA_TEXT_DOMAIN),
    ),
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 28,
    'menu_icon' => 'dashicons-format-status',
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'page-attributes'),
    'show_in_rest' => true,
    'rewrite' => false,
  ));

  register_post_type('fba_faq', array(
    'labels' => array(
      'name' => __('FAQ', FBA_TEXT_DOMAIN),
      'singular_name' => __('FAQ Item', FBA_TEXT_DOMAIN),
    ),
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 29,
    'menu_icon' => 'dashicons-editor-help',
    'supports' => array('title', 'editor', 'page-attributes'),
    'show_in_rest' => true,
    'rewrite' => false,
  ));

  register_post_type('fba_graduate_result', array(
    'labels' => array(
      'name' => __('Graduate Results', FBA_TEXT_DOMAIN),
      'singular_name' => __('Graduate Result', FBA_TEXT_DOMAIN),
    ),
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 30,
    'menu_icon' => 'dashicons-awards',
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'page-attributes'),
    'show_in_rest' => true,
    'rewrite' => false,
  ));
}
add_action('init', 'fba_register_content_post_types');

function fba_register_content_meta() {
  $config = fba_meta_fields_config();

  foreach ($config as $post_type => $fields) {
    foreach ($fields as $field) {
      $sanitize_callback = 'fba_sanitize_plain_text';
      if ($field['type'] === 'textarea') {
        $sanitize_callback = 'fba_sanitize_textarea';
      }
      if ($field['type'] === 'json') {
        $sanitize_callback = 'fba_sanitize_json_text';
      }
      if ($field['type'] === 'boolean') {
        $sanitize_callback = 'fba_sanitize_boolean_text';
      }

      register_post_meta($post_type, $field['key'], array(
        'single' => true,
        'type' => 'string',
        'show_in_rest' => true,
        'sanitize_callback' => $sanitize_callback,
        'auth_callback' => function() {
          return current_user_can('edit_posts');
        },
      ));
    }
  }
}
add_action('init', 'fba_register_content_meta');

function fba_add_meta_boxes() {
  $config = fba_meta_fields_config();

  foreach ($config as $post_type => $fields) {
    add_meta_box(
      'fba_meta_' . $post_type,
      __('FBA Fields', FBA_TEXT_DOMAIN),
      'fba_render_meta_box',
      $post_type,
      'normal',
      'high',
      array('post_type' => $post_type, 'fields' => $fields)
    );
  }
}
add_action('add_meta_boxes', 'fba_add_meta_boxes');

function fba_render_meta_box($post, $box) {
  $fields = isset($box['args']['fields']) ? $box['args']['fields'] : array();
  wp_nonce_field('fba_save_meta', 'fba_meta_nonce');

  echo '<table class="form-table" role="presentation">';
  foreach ($fields as $field) {
    $value = get_post_meta($post->ID, $field['key'], true);
    if (!is_string($value)) {
      $value = '';
    }

    echo '<tr>';
    echo '<th scope="row"><label for="fba_' . esc_attr($field['key']) . '">' . esc_html($field['label']) . '</label></th>';
    echo '<td>';

    if ($field['type'] === 'textarea' || $field['type'] === 'json') {
      echo '<textarea id="fba_' . esc_attr($field['key']) . '" name="fba_meta[' . esc_attr($field['key']) . ']" rows="5" class="large-text code">' . esc_textarea($value) . '</textarea>';
      if ($field['type'] === 'json') {
        echo '<p class="description">JSON formatda yozing: [] yoki [{...}]</p>';
      }
    } elseif ($field['type'] === 'boolean') {
      $checked = $value === '' ? true : $value === '1';
      echo '<label for="fba_' . esc_attr($field['key']) . '">';
      echo '<input type="hidden" name="fba_meta[' . esc_attr($field['key']) . ']" value="0" />';
      echo '<input id="fba_' . esc_attr($field['key']) . '" name="fba_meta[' . esc_attr($field['key']) . ']" type="checkbox" value="1" ' . checked($checked, true, false) . ' />';
      echo ' Yoqilgan';
      echo '</label>';
    } else {
      echo '<input id="fba_' . esc_attr($field['key']) . '" name="fba_meta[' . esc_attr($field['key']) . ']" type="text" class="regular-text" value="' . esc_attr($value) . '" />';
    }

    echo '</td>';
    echo '</tr>';
  }
  echo '</table>';
}

function fba_save_meta_box_data($post_id, $post) {
  if (!isset($_POST['fba_meta_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['fba_meta_nonce'])), 'fba_save_meta')) {
    return;
  }

  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
    return;
  }

  if (!current_user_can('edit_post', $post_id)) {
    return;
  }

  $config = fba_meta_fields_config();
  if (!isset($config[$post->post_type])) {
    return;
  }

  $raw_meta = isset($_POST['fba_meta']) && is_array($_POST['fba_meta']) ? $_POST['fba_meta'] : array();

  foreach ($config[$post->post_type] as $field) {
    $key = $field['key'];
    $value = isset($raw_meta[$key]) ? $raw_meta[$key] : '';

    if ($field['type'] === 'json') {
      $sanitized = fba_sanitize_json_text($value);
    } elseif ($field['type'] === 'boolean') {
      $sanitized = fba_sanitize_boolean_text($value);
    } elseif ($field['type'] === 'textarea') {
      $sanitized = fba_sanitize_textarea($value);
    } else {
      $sanitized = fba_sanitize_plain_text($value);
    }

    if ($field['type'] === 'boolean') {
      update_post_meta($post_id, $key, $sanitized);
      continue;
    }

    if ($sanitized === '') {
      delete_post_meta($post_id, $key);
    } else {
      update_post_meta($post_id, $key, $sanitized);
    }
  }
}
add_action('save_post', 'fba_save_meta_box_data', 10, 2);

function fba_settings_fields() {
  return array(
    array('key' => 'fba_site_phone', 'label' => 'Phone', 'type' => 'text', 'sanitize' => 'fba_sanitize_plain_text'),
    array('key' => 'fba_site_email', 'label' => 'Email', 'type' => 'text', 'sanitize' => 'sanitize_email'),
    array('key' => 'fba_site_address', 'label' => 'Address', 'type' => 'text', 'sanitize' => 'fba_sanitize_plain_text'),
    array('key' => 'fba_telegram', 'label' => 'Telegram URL', 'type' => 'text', 'sanitize' => 'esc_url_raw'),
    array('key' => 'fba_instagram', 'label' => 'Instagram URL', 'type' => 'text', 'sanitize' => 'esc_url_raw'),
    array('key' => 'fba_facebook', 'label' => 'Facebook URL', 'type' => 'text', 'sanitize' => 'esc_url_raw'),
    array('key' => 'fba_youtube', 'label' => 'YouTube URL', 'type' => 'text', 'sanitize' => 'esc_url_raw'),
    array('key' => 'fba_default_seo_title', 'label' => 'Default SEO Title', 'type' => 'text', 'sanitize' => 'fba_sanitize_plain_text'),
    array('key' => 'fba_default_seo_description', 'label' => 'Default SEO Description', 'type' => 'textarea', 'sanitize' => 'fba_sanitize_textarea'),
    array('key' => 'fba_categories_json', 'label' => 'Categories JSON', 'type' => 'json', 'sanitize' => 'fba_sanitize_json_text'),
    array('key' => 'fba_stats_json', 'label' => 'Stats JSON', 'type' => 'json', 'sanitize' => 'fba_sanitize_json_text'),
    array('key' => 'fba_partner_companies_json', 'label' => 'Partner Companies JSON', 'type' => 'json', 'sanitize' => 'fba_sanitize_json_text'),
    array('key' => 'fba_why_us_features_json', 'label' => 'Why Us Features JSON', 'type' => 'json', 'sanitize' => 'fba_sanitize_json_text'),
  );
}

function fba_register_settings() {
  foreach (fba_settings_fields() as $field) {
    register_setting('fba_settings_group', $field['key'], array(
      'type' => 'string',
      'sanitize_callback' => $field['sanitize'],
      'default' => '',
    ));
  }
}
add_action('admin_init', 'fba_register_settings');

function fba_add_settings_page() {
  add_menu_page(
    __('FBA Settings', FBA_TEXT_DOMAIN),
    __('FBA Settings', FBA_TEXT_DOMAIN),
    'manage_options',
    'fba-settings',
    'fba_render_settings_page',
    'dashicons-admin-generic',
    31
  );
}
add_action('admin_menu', 'fba_add_settings_page');

function fba_render_settings_page() {
  if (!current_user_can('manage_options')) {
    return;
  }

  echo '<div class="wrap">';
  echo '<h1>' . esc_html__('FBA Settings', FBA_TEXT_DOMAIN) . '</h1>';
  echo '<p>' . esc_html__('Bu bolimda sayt kontenti va SEO uchun global malumotlarni boshqarasiz.', FBA_TEXT_DOMAIN) . '</p>';
  echo '<form method="post" action="options.php">';
  settings_fields('fba_settings_group');

  echo '<table class="form-table" role="presentation">';
  foreach (fba_settings_fields() as $field) {
    $value = (string) get_option($field['key'], '');

    echo '<tr>';
    echo '<th scope="row"><label for="' . esc_attr($field['key']) . '">' . esc_html($field['label']) . '</label></th>';
    echo '<td>';

    if ($field['type'] === 'textarea' || $field['type'] === 'json') {
      echo '<textarea id="' . esc_attr($field['key']) . '" name="' . esc_attr($field['key']) . '" rows="6" class="large-text code">' . esc_textarea($value) . '</textarea>';
      if ($field['type'] === 'json') {
        echo '<p class="description">JSON array kiriting. Misol: [{"value":"5000+","label":"Bitiruvchilar"}]</p>';
      }
    } else {
      echo '<input id="' . esc_attr($field['key']) . '" type="text" class="regular-text" name="' . esc_attr($field['key']) . '" value="' . esc_attr($value) . '" />';
    }

    echo '</td>';
    echo '</tr>';
  }
  echo '</table>';

  submit_button();
  echo '</form>';
  echo '</div>';
}

function fba_estimate_read_time($content) {
  $words = str_word_count(wp_strip_all_tags((string) $content));
  $minutes = max(1, (int) ceil($words / 200));
  return $minutes . ' daqiqa';
}

function fba_bootstrap_courses() {
  $posts = get_posts(array(
    'post_type' => 'fba_course',
    'post_status' => 'publish',
    'numberposts' => -1,
    'orderby' => 'menu_order title',
    'order' => 'ASC',
  ));

  $items = array();

  foreach ($posts as $post) {
    $image = fba_resolve_post_image_url($post->ID, 'image_url');

    $items[] = array(
      'id' => $post->post_name,
      'title' => $post->post_title,
      'subtitle' => fba_get_meta_string($post->ID, 'subtitle', ''),
      'category' => fba_get_meta_string($post->ID, 'category', ''),
      'categorySlug' => fba_get_meta_string($post->ID, 'category_slug', ''),
      'duration' => fba_get_meta_string($post->ID, 'duration', ''),
      'price' => fba_get_meta_string($post->ID, 'price', ''),
      'oldPrice' => fba_get_meta_string($post->ID, 'old_price', ''),
      'discount' => fba_get_meta_string($post->ID, 'discount', ''),
      'showPrice' => fba_get_meta_bool($post->ID, 'show_price', true),
      'showProgram' => fba_get_meta_bool($post->ID, 'show_program', true),
      'level' => fba_get_meta_string($post->ID, 'level', ''),
      'description' => wp_strip_all_tags($post->post_content),
      'shortDescription' => fba_get_meta_string($post->ID, 'short_description', $post->post_excerpt),
      'modules' => fba_get_meta_json_array($post->ID, 'modules_json'),
      'forWhom' => fba_get_meta_json_array($post->ID, 'for_whom_json'),
      'skills' => fba_get_meta_json_array($post->ID, 'skills_json'),
      'tools' => fba_get_meta_json_array($post->ID, 'tools_json'),
      'salaryLevels' => fba_get_meta_json_array($post->ID, 'salary_levels_json'),
      'supportTeam' => fba_get_meta_json_array($post->ID, 'support_team_json'),
      'mentorId' => fba_get_meta_string($post->ID, 'mentor_id', ''),
      'image' => $image,
      'videoId' => fba_get_meta_string($post->ID, 'video_id', ''),
      'practiceHours' => fba_get_meta_string($post->ID, 'practice_hours', ''),
      'theoryHours' => fba_get_meta_string($post->ID, 'theory_hours', ''),
      'projects' => fba_get_meta_string($post->ID, 'projects', ''),
      'rating' => fba_get_meta_string($post->ID, 'rating', ''),
      'studentsCount' => fba_get_meta_string($post->ID, 'students_count', ''),
    );
  }

  return $items;
}

function fba_bootstrap_teachers() {
  $posts = get_posts(array(
    'post_type' => 'fba_teacher',
    'post_status' => 'publish',
    'numberposts' => -1,
    'orderby' => 'menu_order title',
    'order' => 'ASC',
  ));

  $items = array();

  foreach ($posts as $post) {
    $avatar = fba_resolve_post_image_url($post->ID, 'avatar_url');

    $items[] = array(
      'id' => $post->post_name,
      'name' => $post->post_title,
      'role' => fba_get_meta_string($post->ID, 'role', ''),
      'experience' => fba_get_meta_string($post->ID, 'experience', ''),
      'bio' => wp_strip_all_tags($post->post_content),
      'courses' => fba_get_meta_json_array($post->ID, 'courses_json'),
      'avatar' => $avatar,
    );
  }

  return $items;
}

function fba_bootstrap_testimonials() {
  $posts = get_posts(array(
    'post_type' => 'fba_testimonial',
    'post_status' => 'publish',
    'numberposts' => -1,
    'orderby' => 'menu_order date',
    'order' => 'DESC',
  ));

  $items = array();

  foreach ($posts as $post) {
    $avatar = fba_resolve_post_image_url($post->ID, 'avatar_url');

    $rating_raw = fba_get_meta_string($post->ID, 'rating', '5');
    $rating = (int) $rating_raw;
    if ($rating < 1 || $rating > 5) {
      $rating = 5;
    }

    $items[] = array(
      'id' => $post->post_name,
      'name' => $post->post_title,
      'role' => fba_get_meta_string($post->ID, 'role', ''),
      'text' => fba_get_meta_string($post->ID, 'text', wp_strip_all_tags($post->post_content)),
      'avatar' => $avatar,
      'rating' => $rating,
      'courseName' => fba_get_meta_string($post->ID, 'course_name', ''),
    );
  }

  return $items;
}

function fba_bootstrap_blog_posts() {
  $posts = get_posts(array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'numberposts' => 50,
    'orderby' => 'date',
    'order' => 'DESC',
  ));

  $items = array();

  foreach ($posts as $post) {
    $image = get_the_post_thumbnail_url($post, 'large');
    if (!is_string($image)) {
      $image = '';
    }

    $categories = get_the_category($post->ID);
    $category_name = 'Blog';
    if (is_array($categories) && !empty($categories)) {
      $category_name = $categories[0]->name;
    }

    $items[] = array(
      'id' => $post->post_name,
      'title' => $post->post_title,
      'excerpt' => has_excerpt($post) ? $post->post_excerpt : wp_trim_words(wp_strip_all_tags($post->post_content), 32),
      'content' => apply_filters('the_content', $post->post_content),
      'category' => $category_name,
      'date' => get_the_date('Y-m-d', $post),
      'readTime' => fba_estimate_read_time($post->post_content),
      'author' => get_the_author_meta('display_name', (int) $post->post_author),
      'image' => $image,
    );
  }

  return $items;
}

function fba_bootstrap_faq_items() {
  $posts = get_posts(array(
    'post_type' => 'fba_faq',
    'post_status' => 'publish',
    'numberposts' => -1,
    'orderby' => 'menu_order date',
    'order' => 'ASC',
  ));

  $items = array();

  foreach ($posts as $post) {
    $items[] = array(
      'id' => $post->post_name,
      'question' => $post->post_title,
      'answer' => fba_get_meta_string($post->ID, 'answer', wp_strip_all_tags($post->post_content)),
      'category' => fba_get_meta_string($post->ID, 'category', 'Umumiy'),
    );
  }

  return $items;
}

function fba_bootstrap_graduate_results() {
  $posts = get_posts(array(
    'post_type' => 'fba_graduate_result',
    'post_status' => 'publish',
    'numberposts' => -1,
    'orderby' => 'menu_order date',
    'order' => 'DESC',
  ));

  $items = array();

  foreach ($posts as $post) {
    $avatar = fba_resolve_post_image_url($post->ID, 'avatar_url');

    $items[] = array(
      'id' => $post->post_name,
      'name' => $post->post_title,
      'beforeRole' => fba_get_meta_string($post->ID, 'before_role', ''),
      'afterRole' => fba_get_meta_string($post->ID, 'after_role', ''),
      'company' => fba_get_meta_string($post->ID, 'company', ''),
      'salaryIncrease' => fba_get_meta_string($post->ID, 'salary_increase', ''),
      'avatar' => $avatar,
      'story' => fba_get_meta_string($post->ID, 'story', wp_strip_all_tags($post->post_content)),
      'courseName' => fba_get_meta_string($post->ID, 'course_name', ''),
      'videoId' => fba_get_meta_string($post->ID, 'video_id', ''),
    );
  }

  return $items;
}

function fba_bootstrap_categories_from_courses($courses) {
  $by_slug = array();
  foreach ($courses as $course) {
    $slug = isset($course['categorySlug']) ? (string) $course['categorySlug'] : '';
    $name = isset($course['category']) ? (string) $course['category'] : '';
    if ($slug === '' || $name === '' || isset($by_slug[$slug])) {
      continue;
    }

    $icon = 'Award';
    if ($slug === 'finance') {
      $icon = 'TrendingUp';
    }
    if ($slug === 'law') {
      $icon = 'Briefcase';
    }
    if ($slug === 'accounting') {
      $icon = 'Code';
    }

    $by_slug[$slug] = array(
      'name' => $name,
      'slug' => $slug,
      'icon' => $icon,
    );
  }

  return array_values($by_slug);
}

function fba_build_bootstrap_payload() {
  $courses = fba_bootstrap_courses();

  return array(
    'courses' => $courses,
    'teachers' => fba_bootstrap_teachers(),
    'testimonials' => fba_bootstrap_testimonials(),
    'blogPosts' => fba_bootstrap_blog_posts(),
    'faqItems' => fba_bootstrap_faq_items(),
    'graduateResults' => fba_bootstrap_graduate_results(),
    'categories' => fba_safe_json_decode((string) get_option('fba_categories_json', ''), fba_bootstrap_categories_from_courses($courses)),
    'stats' => fba_safe_json_decode((string) get_option('fba_stats_json', ''), array()),
    'partnerCompanies' => fba_safe_json_decode((string) get_option('fba_partner_companies_json', ''), array()),
    'whyUsFeatures' => fba_safe_json_decode((string) get_option('fba_why_us_features_json', ''), array()),
  );
}

function fba_get_manifest() {
  static $manifest = null;

  if ($manifest !== null) {
    return $manifest;
  }

  $manifest_path = get_template_directory() . '/assets/.vite/manifest.json';
  if (!file_exists($manifest_path)) {
    $manifest = array();
    return $manifest;
  }

  $content = file_get_contents($manifest_path);
  if ($content === false) {
    $manifest = array();
    return $manifest;
  }

  $decoded = json_decode($content, true);
  $manifest = is_array($decoded) ? $decoded : array();

  return $manifest;
}

function fba_find_entry_chunk_key($manifest) {
  $preferred_keys = array(
    'client/src/main.tsx',
    'main.tsx',
    'index.html',
  );

  foreach ($preferred_keys as $preferred_key) {
    if (!empty($manifest[$preferred_key]['isEntry']) && !empty($manifest[$preferred_key]['file'])) {
      return $preferred_key;
    }
  }

  foreach ($manifest as $key => $chunk) {
    if (empty($chunk['isEntry']) || empty($chunk['file'])) {
      continue;
    }

    $file = ltrim((string) $chunk['file'], '/');
    if ($file === 'main.js' || substr($file, -7) === '/main.js') {
      return $key;
    }
  }

  foreach ($manifest as $key => $chunk) {
    if (!empty($chunk['isEntry'])) {
      return $key;
    }
  }

  return null;
}

function fba_collect_css_files($manifest, $chunk_key, &$visited_chunks, &$css_files) {
  if (isset($visited_chunks[$chunk_key])) {
    return;
  }

  $visited_chunks[$chunk_key] = true;

  if (empty($manifest[$chunk_key]) || !is_array($manifest[$chunk_key])) {
    return;
  }

  $chunk = $manifest[$chunk_key];

  if (!empty($chunk['css']) && is_array($chunk['css'])) {
    foreach ($chunk['css'] as $css_file) {
      $css_files[$css_file] = true;
    }
  }

  if (!empty($chunk['imports']) && is_array($chunk['imports'])) {
    foreach ($chunk['imports'] as $import_key) {
      fba_collect_css_files($manifest, $import_key, $visited_chunks, $css_files);
    }
  }
}

function fba_enqueue_spa_assets() {
  $manifest = fba_get_manifest();
  if (empty($manifest)) {
    return;
  }

  $entry_key = fba_find_entry_chunk_key($manifest);
  if ($entry_key === null || empty($manifest[$entry_key]['file'])) {
    return;
  }

  $entry_file = $manifest[$entry_key]['file'];
  $asset_base = trailingslashit(get_template_directory_uri() . '/assets');

  $visited_chunks = array();
  $css_files = array();
  fba_collect_css_files($manifest, $entry_key, $visited_chunks, $css_files);

  $css_index = 0;
  foreach (array_keys($css_files) as $css_file) {
    wp_enqueue_style(
      'fba-spa-style-' . $css_index,
      $asset_base . ltrim($css_file, '/'),
      array(),
      FBA_THEME_VERSION
    );
    $css_index++;
  }

  wp_enqueue_script(
    'fba-spa-app',
    $asset_base . ltrim($entry_file, '/'),
    array(),
    FBA_THEME_VERSION,
    true
  );
  wp_script_add_data('fba-spa-app', 'type', 'module');

  $api_base = rtrim(rest_url('fba/v1'), '/');
  $bootstrap = fba_build_bootstrap_payload();
  $site_url = untrailingslashit(home_url('/'));
  $default_og_image = trailingslashit(get_template_directory_uri()) . 'assets/og-image.svg';

  $inline = 'document.documentElement.classList.add("dark");' . "\n";
  $inline .= 'if (document.body) { document.body.classList.add("dark"); }' . "\n";
  $inline .= 'window.FBA_API_BASE = ' . wp_json_encode($api_base) . ';' . "\n";
  $inline .= 'window.FBA_SITE_URL = ' . wp_json_encode($site_url) . ';' . "\n";
  $inline .= 'window.FBA_ASSET_BASE = ' . wp_json_encode($asset_base) . ';' . "\n";
  $inline .= 'window.FBA_SEO_DEFAULT_OG_IMAGE = ' . wp_json_encode($default_og_image) . ';' . "\n";
  $inline .= 'window.FBA_BOOTSTRAP = ' . wp_json_encode($bootstrap, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . ';';
  wp_add_inline_script('fba-spa-app', $inline, 'before');
}
add_action('wp_enqueue_scripts', 'fba_enqueue_spa_assets');

function fba_add_module_type($tag, $handle, $src) {
  if ($handle === 'fba-spa-app') {
    $tag = str_replace('<script ', '<script type="module" ', $tag);
  }
  return $tag;
}
add_filter('script_loader_tag', 'fba_add_module_type', 10, 3);

function fba_block_legacy_plugin_hooks() {
  if (is_admin() || !fba_is_spa_request()) {
    return;
  }

  remove_all_actions('wp_body_open');

  global $wp_filter;
  if (!isset($wp_filter['wp_footer']) || !is_object($wp_filter['wp_footer'])) {
    return;
  }

  $keep_footer_callbacks = array(
    'wp_print_footer_scripts',
    '_wp_footer_scripts',
  );

  foreach ($wp_filter['wp_footer']->callbacks as $priority => $callbacks) {
    foreach (array_keys($callbacks) as $callback_id) {
      $callback = $callbacks[$callback_id]['function'];
      if (is_string($callback) && in_array($callback, $keep_footer_callbacks, true)) {
        continue;
      }

      unset($wp_filter['wp_footer']->callbacks[$priority][$callback_id]);
    }
  }
}
add_action('template_redirect', 'fba_block_legacy_plugin_hooks', 999);

function fba_cleanup_frontend_scripts() {
  if (is_admin() || !fba_is_spa_request()) {
    return;
  }

  global $wp_scripts;
  global $wp_styles;

  if (isset($wp_scripts->queue)) {
    foreach ($wp_scripts->queue as $handle) {
      if ($handle !== 'fba-spa-app' && $handle !== 'admin-bar' && strpos($handle, 'fba-spa') === false) {
        wp_dequeue_script($handle);
        wp_deregister_script($handle);
      }
    }
  }

  if (isset($wp_styles->queue)) {
    foreach ($wp_styles->queue as $handle) {
      if ($handle !== 'admin-bar' && $handle !== 'dashicons' && strpos($handle, 'fba-spa') === false) {
        wp_dequeue_style($handle);
        wp_deregister_style($handle);
      }
    }
  }
}
add_action('wp_enqueue_scripts', 'fba_cleanup_frontend_scripts', 9999);
add_action('wp_print_scripts', 'fba_cleanup_frontend_scripts', 1);

function fba_spa_header_overflow_fix() {
  echo '<style id="fba-header-overflow-fix">';
  echo 'header[data-testid="header"] .grid{overflow:visible !important}';
  echo 'header[data-testid="header"] nav{overflow:visible !important}';
  echo 'header[data-testid="header"] [data-testid="dropdown-courses"]{overflow-y:auto !important}';
  echo '</style>' . "\n";
}
add_action('wp_head', 'fba_spa_header_overflow_fix', 99);

function fba_get_spa_static_paths() {
  return array(
    '/courses',
    '/teachers',
    '/about',
    '/blog',
    '/cabinet',
    '/contacts',
    '/career',
    '/case-studies',
    '/faq',
    '/corporate',
    '/partnership',
    '/grants',
    '/privacy',
    '/achievements',
  );
}

function fba_get_spa_dynamic_path_patterns() {
  return array(
    '#^/course/[^/]+$#',
    '#^/blog/[^/]+$#',
  );
}

function fba_register_spa_routes() {
  $patterns = array(
    '^course/[^/]+/?$',
    '^blog/[^/]+/?$',
  );

  foreach (fba_get_spa_static_paths() as $path) {
    $slug = trim($path, '/');
    if ($slug === '') {
      continue;
    }

    $patterns[] = '^' . preg_quote($slug, '#') . '/?$';
  }

  foreach ($patterns as $pattern) {
    add_rewrite_rule($pattern, 'index.php?fba_spa=1', 'top');
  }
}
add_action('init', 'fba_register_spa_routes');

function fba_is_spa_path($path) {
  $normalized = '/' . trim((string) $path, '/');
  if ($normalized === '/') {
    return true;
  }

  if (in_array($normalized, fba_get_spa_static_paths(), true)) {
    return true;
  }

  foreach (fba_get_spa_dynamic_path_patterns() as $pattern) {
    if (preg_match($pattern, $normalized) === 1) {
      return true;
    }
  }

  return false;
}

function fba_register_query_vars($vars) {
  $vars[] = 'fba_spa';
  return $vars;
}
add_filter('query_vars', 'fba_register_query_vars');

function fba_is_spa_route() {
  return (bool) get_query_var('fba_spa');
}

function fba_is_spa_request() {
  return fba_is_spa_route() || fba_is_spa_path(fba_get_current_spa_path());
}

function fba_intercept_spa_routes() {
  $path = fba_get_current_spa_path();

  if ($path === '/achievements') {
    wp_safe_redirect(home_url('/case-studies'), 301);
    exit;
  }
}
add_action('template_redirect', 'fba_intercept_spa_routes', 1);

function fba_spa_template_include($template) {
  if (is_admin()) {
    return $template;
  }

  if (fba_is_spa_request() || is_front_page()) {
    return get_template_directory() . '/index.php';
  }

  return $template;
}
add_filter('template_include', 'fba_spa_template_include', 99);

function fba_disable_canonical_for_spa($redirect_url) {
  if (fba_is_spa_request()) {
    return false;
  }

  return $redirect_url;
}
add_filter('redirect_canonical', 'fba_disable_canonical_for_spa');

function fba_get_home_path_prefix() {
  $home_path = parse_url(home_url('/'), PHP_URL_PATH);
  if (!is_string($home_path) || $home_path === '') {
    return '';
  }

  $normalized = '/' . trim($home_path, '/');
  if ($normalized === '/') {
    return '';
  }

  return $normalized;
}

function fba_get_current_spa_path() {
  $uri = isset($_SERVER['REQUEST_URI']) ? (string) $_SERVER['REQUEST_URI'] : '/';
  $path = parse_url($uri, PHP_URL_PATH);
  if (!is_string($path) || $path === '') {
    return '/';
  }

  $path = rawurldecode($path);
  $home_path_prefix = fba_get_home_path_prefix();
  if (
    $home_path_prefix !== '' &&
    ($path === $home_path_prefix || strpos($path, $home_path_prefix . '/') === 0)
  ) {
    $path = substr($path, strlen($home_path_prefix));
    if (!is_string($path) || $path === '') {
      $path = '/';
    }
  }

  if ($path === '/index.php') {
    $path = '/';
  } elseif (strpos($path, '/index.php/') === 0) {
    $path = substr($path, strlen('/index.php'));
  }

  $normalized = '/' . trim($path, '/');
  return $normalized === '/' ? '/' : untrailingslashit($normalized);
}

function fba_humanize_slug($slug) {
  $slug = trim((string) $slug);
  if ($slug === '') {
    return 'Sahifa';
  }

  if ($slug === '1c-course') {
    return '1C Kursi';
  }

  $parts = array_filter(explode('-', $slug));
  if (empty($parts)) {
    return 'Sahifa';
  }

  $parts = array_map(function($part) {
    return ucfirst(strtolower((string) $part));
  }, $parts);

  return implode(' ', $parts);
}

function fba_course_meta_defaults() {
  return array(
    'acca' => array(
      'title' => 'ACCA Kursi Toshkent | FBA Academy',
      'description' => 'ACCA bo\'yicha professional kurs: Applied Knowledge, Applied Skills va Strategic Professional modullari.',
    ),
    'applied-knowledge' => array(
      'title' => 'ACCA Applied Knowledge | FBA Academy',
      'description' => 'ACCA Applied Knowledge bosqichi: BT, MA, FA fanlari bo\'yicha fundament kurs.',
    ),
    'applied-skills' => array(
      'title' => 'ACCA Applied Skills | FBA Academy',
      'description' => 'ACCA Applied Skills bosqichi: LW, PM, TX, FR, AA, FM fanlari bo\'yicha kurs.',
    ),
    'strategic-professional' => array(
      'title' => 'ACCA Strategic Professional | FBA Academy',
      'description' => 'ACCA Strategic Professional bosqichi: SBL, SBR va ixtiyoriy modullar bo\'yicha tayyorlov.',
    ),
    'dipifr' => array(
      'title' => 'DipIFR Kursi Toshkent | FBA Academy',
      'description' => 'ACCA DipIFR kursi: IFRS standartlari, konsolidatsiya va imtihon tayyorlovi.',
    ),
    'financial-modeling' => array(
      'title' => 'Financial Modeling Kursi | FBA Academy',
      'description' => 'Moliyaviy modellashtirish kursi: Excel, valuation, forecast va biznes tahlil.',
    ),
    'jurisprudence' => array(
      'title' => 'Huquqshunoslik Kursi | FBA Academy',
      'description' => 'Huquqshunoslik bo\'yicha amaliy kurs: qonunchilik, shartnomalar va yuridik amaliyot.',
    ),
    '1c-course' => array(
      'title' => '1C Buxgalteriya Kursi | FBA Academy',
      'description' => '1C: Buxgalteriya 8.3 kursi: hujjatlar, ish haqi, soliq hisobotlari va amaliyot.',
    ),
  );
}

function fba_resolve_server_seo() {
  $home = home_url('/');
  $default_title = (string) get_option('fba_default_seo_title', 'FBA Academy');
  $default_description = (string) get_option('fba_default_seo_description', 'FBA Academy - professional talim platformasi.');

  $seo = array(
    'title' => $default_title,
    'description' => $default_description,
    'canonical' => $home,
    'image' => trailingslashit(get_template_directory_uri()) . 'assets/og-image.svg',
    'type' => 'website',
    'robots' => 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  );

  $path = fba_get_current_spa_path();

  if ($path === '/' || $path === '') {
    return $seo;
  }

  if ($path === '/courses') {
    $seo['title'] = 'Kurslar | FBA Academy';
    $seo['description'] = 'ACCA, DipIFR, Financial Modeling va boshqa kurslar katalogi.';
    $seo['canonical'] = home_url('/courses');
    return $seo;
  }

  $static_page_meta = array(
    '/about' => array(
      'title' => 'Biz haqimizda | FBA Academy',
      'description' => 'FBA Academy haqida: missiya, oquv markazi va professional mentorlar.',
    ),
    '/teachers' => array(
      'title' => 'Oqituvchilar | FBA Academy',
      'description' => 'FBA Academy mentorlari: ACCA, DipIFR va moliya yonalishidagi tajribali ekspertlar.',
    ),
    '/contacts' => array(
      'title' => 'Boglanish | FBA Academy',
      'description' => 'FBA Academy bilan boglanish: telefon, manzil va konsultatsiya.',
    ),
    '/cabinet' => array(
      'title' => 'My cabinet | FBA Academy',
      'description' => 'Talabalar shaxsiy kabinetiga kirish sahifasi.',
    ),
    '/career' => array(
      'title' => 'Ishga joylashish | FBA Academy',
      'description' => 'Bitiruvchilar uchun karyera markazi va ishga joylashish yordami.',
    ),
    '/case-studies' => array(
      'title' => 'Natijalar | FBA Academy',
      'description' => 'Bitiruvchilar natijalari va muvaffaqiyat tarixi.',
    ),
    '/faq' => array(
      'title' => 'FAQ | FBA Academy',
      'description' => 'Kop beriladigan savollar: kurslar, tolov va oqish jarayoni.',
    ),
    '/corporate' => array(
      'title' => 'Korporativ Treninglar | FBA Academy',
      'description' => 'Korporativ jamoalar uchun maxsus ta lim dasturlari.',
    ),
    '/partnership' => array(
      'title' => 'Hamkorlik | FBA Academy',
      'description' => 'FBA Academy bilan hamkorlik yonalishlari va shartlari.',
    ),
    '/grants' => array(
      'title' => 'Aksiyalar va Grantlar | FBA Academy',
      'description' => 'Chegirmalar, grantlar va maxsus takliflar.',
    ),
  );

  if ($path === '/achievements') {
    $seo['title'] = 'Natijalar | FBA Academy';
    $seo['description'] = 'Bitiruvchilar natijalari va muvaffaqiyat tarixi.';
    $seo['canonical'] = home_url('/case-studies');
    return $seo;
  }

  if (isset($static_page_meta[$path])) {
    $meta = $static_page_meta[$path];
    $seo['title'] = (string) $meta['title'];
    $seo['description'] = (string) $meta['description'];
    $seo['canonical'] = home_url($path);
    if ($path === '/cabinet') {
      $seo['robots'] = 'noindex,nofollow';
    }
    return $seo;
  }

  if ($path === '/blog') {
    $seo['title'] = 'Blog | FBA Academy';
    $seo['description'] = 'Moliya, ACCA, DipIFR va karyera boyicha maqolalar.';
    $seo['canonical'] = home_url('/blog');
    return $seo;
  }

  if (strpos($path, '/course/') === 0) {
    $slug = basename($path);
    $seo['canonical'] = home_url('/course/' . $slug);
    $seo['type'] = 'article';

    $fallback_map = fba_course_meta_defaults();
    if (isset($fallback_map[$slug])) {
      $seo['title'] = (string) $fallback_map[$slug]['title'];
      $seo['description'] = (string) $fallback_map[$slug]['description'];
    } else {
      $human = fba_humanize_slug($slug);
      $seo['title'] = $human . ' | FBA Academy';
      $seo['description'] = $human . ' bo\'yicha kurs va dastur tafsilotlari.';
    }

    $course = get_page_by_path($slug, OBJECT, 'fba_course');
    if ($course instanceof WP_Post) {
      $seo['title'] = $course->post_title . ' | FBA Academy';
      $seo['description'] = has_excerpt($course) ? $course->post_excerpt : wp_trim_words(wp_strip_all_tags($course->post_content), 28);
      $image = get_the_post_thumbnail_url($course, 'large');
      if (is_string($image) && $image !== '') {
        $seo['image'] = $image;
      }
    }
    return $seo;
  }

  if (strpos($path, '/blog/') === 0) {
    $slug = basename($path);
    $seo['canonical'] = home_url('/blog/' . $slug);
    $seo['type'] = 'article';
    $human = fba_humanize_slug($slug);
    $seo['title'] = $human . ' | FBA Academy Blog';
    $seo['description'] = 'FBA Academy blog maqolasi: ' . $human . '.';

    $post = get_page_by_path($slug, OBJECT, 'post');
    if ($post instanceof WP_Post) {
      $seo['title'] = $post->post_title . ' | FBA Academy Blog';
      $seo['description'] = has_excerpt($post) ? $post->post_excerpt : wp_trim_words(wp_strip_all_tags($post->post_content), 28);
      $image = get_the_post_thumbnail_url($post, 'large');
      if (is_string($image) && $image !== '') {
        $seo['image'] = $image;
      }
    }
    return $seo;
  }

  $seo['canonical'] = home_url($path);
  return $seo;
}

function fba_pre_get_document_title($title) {
  if (!fba_is_spa_request() && !is_front_page()) {
    return $title;
  }

  $seo = fba_resolve_server_seo();
  return isset($seo['title']) ? (string) $seo['title'] : $title;
}
add_filter('pre_get_document_title', 'fba_pre_get_document_title');

function fba_output_server_seo_meta() {
  if ((defined('WPSEO_VERSION') || defined('RANK_MATH_VERSION')) && fba_is_spa_request()) {
    return;
  }

  if (!fba_is_spa_request() && !is_front_page()) {
    return;
  }

  $seo = fba_resolve_server_seo();

  echo '<meta name="description" content="' . esc_attr((string) $seo['description']) . '" />' . "\n";
  if (!empty($seo['robots'])) {
    echo '<meta name="robots" content="' . esc_attr((string) $seo['robots']) . '" />' . "\n";
  }
  $canonical = (string) $seo['canonical'];
  echo '<link rel="canonical" href="' . esc_url($canonical) . '" />' . "\n";
  echo '<link rel="alternate" hreflang="uz" href="' . esc_url($canonical) . "\" />\n";
  echo '<link rel="alternate" hreflang="ru" href="' . esc_url(add_query_arg('lang', 'ru', $canonical)) . "\" />\n";
  echo '<link rel="alternate" hreflang="en" href="' . esc_url(add_query_arg('lang', 'en', $canonical)) . "\" />\n";
  echo '<link rel="alternate" hreflang="x-default" href="' . esc_url($canonical) . "\" />\n";

  echo '<meta property="og:type" content="' . esc_attr((string) $seo['type']) . '" />' . "\n";
  echo '<meta property="og:title" content="' . esc_attr((string) $seo['title']) . '" />' . "\n";
  echo '<meta property="og:description" content="' . esc_attr((string) $seo['description']) . '" />' . "\n";
  echo '<meta property="og:url" content="' . esc_url($canonical) . '" />' . "\n";
  echo '<meta property="og:image" content="' . esc_url((string) $seo['image']) . '" />' . "\n";

  echo '<meta name="twitter:card" content="summary_large_image" />' . "\n";
  echo '<meta name="twitter:title" content="' . esc_attr((string) $seo['title']) . '" />' . "\n";
  echo '<meta name="twitter:description" content="' . esc_attr((string) $seo['description']) . '" />' . "\n";
  echo '<meta name="twitter:image" content="' . esc_url((string) $seo['image']) . '" />' . "\n";
  echo '<meta name="twitter:site" content="@fbaacademyuz" />' . "\n";
}
add_action('wp_head', 'fba_output_server_seo_meta', 2);

function fba_output_server_jsonld() {
  if ((defined('WPSEO_VERSION') || defined('RANK_MATH_VERSION')) && fba_is_spa_request()) {
    return;
  }

  if (!fba_is_spa_request() && !is_front_page()) {
    return;
  }

  $phone = (string) get_option('fba_site_phone', '+998781138090');
  $email = (string) get_option('fba_site_email', 'fbaacademyuz1@gmail.com');
  $address = (string) get_option('fba_site_address', 'Toshkent, Yunusabad');
  $path = fba_get_current_spa_path();
  $canonical = home_url($path === '/' ? '/' : $path);

  $graph = array(
    array(
      '@type' => 'EducationalOrganization',
      '@id' => home_url('/#organization'),
      'name' => 'FBA Academy',
      'url' => home_url('/'),
      'sameAs' => array(
        'https://t.me/fbaacademyuz',
        'https://www.instagram.com/fbaacademyuz/',
        'https://www.youtube.com/@FBAAcademy',
        'https://www.facebook.com/fbaacademyuz/',
      ),
      'telephone' => $phone,
      'email' => $email,
      'address' => array(
        '@type' => 'PostalAddress',
        'streetAddress' => $address,
        'addressCountry' => 'UZ',
      ),
    ),
    array(
      '@type' => 'WebSite',
      '@id' => home_url('/#website'),
      'url' => home_url('/'),
      'name' => 'FBA Academy',
      'publisher' => array('@id' => home_url('/#organization')),
    ),
    array(
      '@type' => 'WebPage',
      '@id' => $canonical . '#webpage',
      'url' => $canonical,
      'name' => wp_get_document_title(),
      'isPartOf' => array('@id' => home_url('/#website')),
      'about' => array('@id' => home_url('/#organization')),
    ),
  );

  $breadcrumb_items = array(
    array(
      '@type' => 'ListItem',
      'position' => 1,
      'name' => 'Bosh sahifa',
      'item' => home_url('/'),
    ),
  );

  if ($path !== '/' && $path !== '') {
    $crumb_label = ucwords(str_replace(array('-', '/'), ' ', trim($path, '/')));
    $breadcrumb_items[] = array(
      '@type' => 'ListItem',
      'position' => 2,
      'name' => $crumb_label === '' ? 'Sahifa' : $crumb_label,
      'item' => $canonical,
    );
  }

  $graph[] = array(
    '@type' => 'BreadcrumbList',
    '@id' => $canonical . '#breadcrumb',
    'itemListElement' => $breadcrumb_items,
  );

  $payload = array(
    '@context' => 'https://schema.org',
    '@graph' => $graph,
  );

  echo '<script type="application/ld+json">' . wp_json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
}
add_action('wp_head', 'fba_output_server_jsonld', 3);

function fba_sitemap_lastmod_for_post($post) {
  if (!($post instanceof WP_Post)) {
    return gmdate('Y-m-d');
  }

  if (is_string($post->post_modified_gmt) && $post->post_modified_gmt !== '0000-00-00 00:00:00') {
    $timestamp = strtotime($post->post_modified_gmt . ' GMT');
    if (is_int($timestamp) && $timestamp > 0) {
      return gmdate('Y-m-d', $timestamp);
    }
  }

  return gmdate('Y-m-d');
}

function fba_build_sitemap_entries() {
  $entries = array();
  $today = gmdate('Y-m-d');

  $static_paths = array_values(array_filter(
    fba_get_spa_static_paths(),
    function ($path) {
      return $path !== '/achievements';
    }
  ));

  $static_paths = array_merge(array('/'), $static_paths);
  foreach ($static_paths as $path) {
    $entries[] = array(
      'loc' => home_url($path),
      'lastmod' => $today,
      'changefreq' => $path === '/' ? 'daily' : 'weekly',
      'priority' => $path === '/' ? '1.0' : '0.7',
    );
  }

  $course_posts = get_posts(array(
    'post_type' => 'fba_course',
    'post_status' => 'publish',
    'numberposts' => -1,
    'orderby' => 'modified',
    'order' => 'DESC',
    'no_found_rows' => true,
  ));

  foreach ($course_posts as $course_post) {
    $slug = $course_post->post_name;
    if (!is_string($slug) || $slug === '') {
      continue;
    }

    $entries[] = array(
      'loc' => home_url('/course/' . $slug),
      'lastmod' => fba_sitemap_lastmod_for_post($course_post),
      'changefreq' => 'weekly',
      'priority' => '0.8',
    );
  }

  $blog_posts = get_posts(array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'numberposts' => -1,
    'orderby' => 'modified',
    'order' => 'DESC',
    'no_found_rows' => true,
  ));

  foreach ($blog_posts as $blog_post) {
    $slug = $blog_post->post_name;
    if (!is_string($slug) || $slug === '') {
      continue;
    }

    $entries[] = array(
      'loc' => home_url('/blog/' . $slug),
      'lastmod' => fba_sitemap_lastmod_for_post($blog_post),
      'changefreq' => 'monthly',
      'priority' => '0.7',
    );
  }

  $deduped = array();
  foreach ($entries as $entry) {
    $loc = isset($entry['loc']) ? (string) $entry['loc'] : '';
    if ($loc === '') {
      continue;
    }
    $deduped[$loc] = $entry;
  }

  return array_values($deduped);
}

function fba_output_custom_sitemap() {
  $entries = fba_build_sitemap_entries();
  nocache_headers();
  header('Content-Type: application/xml; charset=UTF-8');

  echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n";
  foreach ($entries as $entry) {
    $loc = isset($entry['loc']) ? (string) $entry['loc'] : '';
    echo "  <url>\n";
    echo '    <loc>' . esc_xml($loc) . "</loc>\n";
    echo '    <lastmod>' . esc_xml((string) $entry['lastmod']) . "</lastmod>\n";
    echo '    <changefreq>' . esc_xml((string) $entry['changefreq']) . "</changefreq>\n";
    echo '    <priority>' . esc_xml((string) $entry['priority']) . "</priority>\n";
    echo '    <xhtml:link rel="alternate" hreflang="uz" href="' . esc_xml($loc) . "\" />\n";
    echo '    <xhtml:link rel="alternate" hreflang="ru" href="' . esc_xml(add_query_arg('lang', 'ru', $loc)) . "\" />\n";
    echo '    <xhtml:link rel="alternate" hreflang="en" href="' . esc_xml(add_query_arg('lang', 'en', $loc)) . "\" />\n";
    echo '    <xhtml:link rel="alternate" hreflang="x-default" href="' . esc_xml($loc) . "\" />\n";
    echo "  </url>\n";
  }
  echo "</urlset>\n";
}

function fba_handle_custom_sitemap() {
  if (fba_get_current_spa_path() !== '/sitemap.xml') {
    return;
  }

  fba_output_custom_sitemap();
  exit;
}
add_action('template_redirect', 'fba_handle_custom_sitemap', 0);

function fba_robots_txt($output, $public) {
  if ('0' === (string) $public) {
    return $output;
  }

  $lines = array(
    'User-agent: *',
    'Allow: /',
    'Disallow: /wp-admin/',
    '',
    'Sitemap: ' . home_url('/sitemap.xml'),
    'Sitemap: ' . home_url('/wp-sitemap.xml'),
  );

  return implode("\n", $lines) . "\n";
}
add_filter('robots_txt', 'fba_robots_txt', 10, 2);

function fba_register_rest_routes() {
  register_rest_route('fba/v1', '/leads', array(
    'methods' => 'POST',
    'callback' => 'fba_handle_lead_submission',
    'permission_callback' => '__return_true',
  ));

  register_rest_route('fba/v1', '/bootstrap', array(
    'methods' => 'GET',
    'callback' => 'fba_handle_bootstrap_request',
    'permission_callback' => '__return_true',
  ));
}
add_action('rest_api_init', 'fba_register_rest_routes');

function fba_handle_bootstrap_request() {
  return new WP_REST_Response(fba_build_bootstrap_payload(), 200);
}

function fba_handle_lead_submission($request) {
  $payload = $request->get_json_params();
  if (!is_array($payload)) {
    $payload = $request->get_body_params();
  }

  $name = isset($payload['name']) ? sanitize_text_field(wp_unslash($payload['name'])) : '';
  $phone = isset($payload['phone']) ? sanitize_text_field(wp_unslash($payload['phone'])) : '';
  $source = isset($payload['source']) ? sanitize_text_field(wp_unslash($payload['source'])) : 'website';

  if (mb_strlen($name) < 2 || mb_strlen($phone) < 9) {
    return new WP_REST_Response(
      array('error' => 'Invalid data'),
      400
    );
  }

  $post_id = wp_insert_post(array(
    'post_type' => 'fba_lead',
    'post_status' => 'publish',
    'post_title' => sprintf('%s (%s)', $name, current_time('mysql')),
  ), true);

  if (is_wp_error($post_id)) {
    return new WP_REST_Response(
      array('error' => 'Internal server error'),
      500
    );
  }

  update_post_meta($post_id, 'name', $name);
  update_post_meta($post_id, 'phone', $phone);
  update_post_meta($post_id, 'source', $source);
  update_post_meta($post_id, 'submitted_at', current_time('mysql'));

  return new WP_REST_Response(
    array(
      'id' => (string) $post_id,
      'name' => $name,
      'phone' => $phone,
      'source' => $source,
    ),
    201
  );
}

function fba_on_theme_switch() {
  fba_register_spa_routes();
  flush_rewrite_rules();
  update_option('fba_theme_version', FBA_THEME_VERSION);
}
add_action('after_switch_theme', 'fba_on_theme_switch');

function fba_maybe_flush_rewrite_rules() {
  $saved_version = (string) get_option('fba_theme_version', '');
  if ($saved_version === FBA_THEME_VERSION) {
    return;
  }

  fba_register_spa_routes();
  flush_rewrite_rules(false);
  update_option('fba_theme_version', FBA_THEME_VERSION);
}
add_action('init', 'fba_maybe_flush_rewrite_rules', 99);

function fba_on_theme_deactivate() {
  flush_rewrite_rules();
}
add_action('switch_theme', 'fba_on_theme_deactivate');
