<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cl54-a-wordp-18z');

/** MySQL database username */
define('DB_USER', 'cl54-a-wordp-18z');

/** MySQL database password */
define('DB_PASSWORD', '4-wrgg.yJ');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4Aasb2aw^Ft4H-y54KH1lAV^o=7=tK0TbzWsq-VVZ8JomK^FtX+pNIRHAs6/NM_U');
define('SECURE_AUTH_KEY',  'rhPbBGIFPQT+_R614IS2heXyHX9+u4CibfB_/RRt/DaxWdfNW-ZbV7tU2aM8o1vo');
define('LOGGED_IN_KEY',    '#PJtA_zHKUot/nnBp^qxRfWJ6iv_2DaWh+W!6YXYkJwqB6Y/mBCom=5dIqoD+SY6');
define('NONCE_KEY',        'YUD9Y5HXwm1-Dd)WvDGPk5H7BnqWp2TGhFQAz6UmXS4wL-Arzl(!wyoHTU93BoD6');
define('AUTH_SALT',        'f(+m5LnVvr01E/z9rG99A_9WkHt9ioYNVdcYw_dYZf#pUzMvK14hNZR4j83eGD=F');
define('SECURE_AUTH_SALT', '+3FO7N25Ib#+#bGA_wUQQI2xr38_A!TGs9aWlEq7LQmaFS_Q^fm4S^ev1iCt)!AA');
define('LOGGED_IN_SALT',   'W3C!fa+q!R0)Ru^/aJHOwAXIPiZhl7X1C4cpj2UOKB24!dwxwjge7)ZvrIMDWtVN');
define('NONCE_SALT',       'Lh_EJ/e(he5CvyvqXzkkoeG-V87n_ffdjt#CzlBVxt6zRdi=bT/4IKc9!)1YAJQy');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de.mo to wp-content/languages and set WPLANG to 'de' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 *  Change this to true to run multiple blogs on this installation.
 *  Then login as admin and go to Tools -> Network
 */
define('WP_ALLOW_MULTISITE', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/* Destination directory for file streaming */
define('WP_TEMP_DIR', ABSPATH . 'wp-content/');

