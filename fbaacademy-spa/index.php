<?php
if (!defined('ABSPATH')) {
  exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?> class="dark">
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
  </head>
  <body <?php body_class('fba-spa-theme dark'); ?>>
    <?php wp_body_open(); ?>
    <div id="root"></div>
    <noscript><?php esc_html_e('Bu sayt JavaScript talab qiladi.', 'fbaacademy-spa'); ?></noscript>
    <?php wp_footer(); ?>
  </body>
</html>
