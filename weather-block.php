<?php
/**
 * Plugin Name:   Weather
 * Description:   Weather block
 * Version:       1.0.0
 * Author:        me
 * Text Domain:   QR code
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_weather_block() {
	\register_block_type( __DIR__ . '/build' );
}
\add_action( 'init', 'create_weather_block' );
