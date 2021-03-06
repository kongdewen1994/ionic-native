import { Cordova, CordovaProperty, Plugin } from './plugin';

declare var window;

/**
 * @name Screen Orientation
 * @description
 * Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, WP8 and Blackberry 10.
 * This plugin is based on an early version of Screen Orientation API so the api does not currently match the current spec.
 *
 * Requires Cordova plugin: `cordova-plugin-screen-orientation`. For more info, please see the [Screen Orientation plugin docs](https://github.com/apache/cordova-plugin-screen-orientation).
 *
 * @usage
 * ```typescript
 * import { ScreenOrientation } from 'ionic-native';
 *
 *
 * // set to either landscape
 * ScreenOrientation.lockOrientation('landscape');
 *
 * // allow user rotate
 * ScreenOrientation.unlockOrientation();
 * ```
 *
 * @advanced
 *
 * Accepted orientation values:
 *
 * | Value                         | Description                                                                  |
 * |-------------------------------|------------------------------------------------------------------------------|
 * | portrait-primary              | The orientation is in the primary portrait mode.                             |
 * | portrait-secondary            | The orientation is in the secondary portrait mode.                           |
 * | landscape-primary             | The orientation is in the primary landscape mode.                            |
 * | landscape-secondary           | The orientation is in the secondary landscape mode.                          |
 * | portrait                      | The orientation is either portrait-primary or portrait-secondary (sensor).   |
 * | landscape                     | The orientation is either landscape-primary or landscape-secondary (sensor). |
 *
 */
@Plugin({
  pluginName: 'ScreenOrientation',
  plugin: 'cordova-plugin-screen-orientation',
  pluginRef: 'window.screen',
  repo: 'https://github.com/apache/cordova-plugin-screen-orientation',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class ScreenOrientation {

  /**
   * Lock the orientation to the passed value.
   * See below for accepted values
   * @param {orientation} The orientation which should be locked. Accepted values see table below.
   */
  @Cordova({ sync: true })
  static lockOrientation(orientation: string): void { }

  /**
   * Unlock and allow all orientations.
   */
  @Cordova({ sync: true })
  static unlockOrientation(): void { }

  /*
   * Get the current orientation of the device.
   */
  @CordovaProperty
  static get orientation() {
    return window.screen.orientation;
  }
}
