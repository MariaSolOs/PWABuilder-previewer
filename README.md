# PWABuilder - Manifest previewer
A [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) that allows you to preview your PWA on Windows, Android and iOS, based on your app's `manifest.json` file!

The table below shows the manifest attributes that this component covers.

Attribute | Description | Screen
----------| ----------- |------- 
`display` | Determines the developers' preferred display mode for the website. The display mode changes how much of browser UI is shown to the user and can range from fullscreen to browser (the default mode). | ![Display](/assets/readme-images/display.png)
`screenshots` | Defines an array of screenshots that showcases the application, used by progressive web app stores. | ![Screenshots](/assets/readme-images/screenshots.png)
`background_color` | Placeholder background color for the application page to display before its stylesheet is loaded. Several platforms use this value to style the splash screen. | ![Background color](/assets/readme-images/backgroundcolor.jpeg)
`name` | String that represents the name of the PWA as it is usually displayed to the user (e.g., amongst a list of other applications in settings, or in menus). | ![Name](/assets/readme-images/name.png)
`short_name` | String that represents the name of the PWA displayed to the user if there is not enough space to display the `name` (e.g., as a label for the app's icon on the phone home screen).| ![Short name](/assets/readme-images/shortname.png)
`theme_color` | Defines the default color theme for the application, and affects how the platform displays the site. | ![Theme color](/assets/readme-images/themecolor.png)
`shortcuts` | Array of shortcuts or links to key tasks or pages within a web app, assembling a context menu to be displayed by the OS when a user engages with the app's icon. | ![Shortcuts](/assets/readme-images/shortcuts.png)
`categories` | Defines the names of categories that describe your application. Used by stores for listing web applications. | ![Categories](/assets/readme-images/categories.png)
`share_target` | Allows the PWA to receive media content from other apps. | ![Share target](/assets/readme-images/sharetarget.png)

## Built with
- [Lit](https://lit.dev/)
- [Typescript](https://www.typescriptlang.org/)
- The project generator from [Open Web Components](https://open-wc.org/docs/development/generator/)
- [FAST components](https://www.fast.design/docs/introduction)

## Prerequisites
To run this project, you will need to have [`node.JS`](https://nodejs.org/en/) and [`npm`](https://docs.npmjs.com/getting-started) installed on your computer. Knowledge of Typescript, web components and CSS is also encouraged. 

## Using this component
The `manifest-previewer` web component needs the following attributes to be defined:
- `manifestUrl`: The URL of the `manifest.json` file. This is necessary for generating the `src` URLs of image previews.
- `manifest`: A valid `manifest.json` file. For the best experience with this tool, this file should at least contain the entries especified above.
  - Default:
  ```
  {
    "name": "PWA App",
    "background_color": "#FFF",
    "theme_color": "#EBD0FE",
    "description": "A description of your app.",
    "display": "standalone"
  }
  ```

In addition, the properties below can be added for further programmatic control:
- `siteUrl`: The PWA's URL.
  - Default: The result of `this.manifestUrl.substring(0, this.manifestUrl.lastIndexOf('manifest.json'))`
- `platform`: The platform to preview (this component currently supports `'windows'`, `'android'` and `'iOS'`). Note that clicking the platform buttons also changes the value of this property.
  - Default: `windows`
- `stage`: The preview screen. It must be one of `'install'`, `'splashScreen'`, `'name'`, `'shortName'`
`'themeColor'`, `'shortcuts'`, `'display'`, `'categories'`, or `'shareTarget'`.
The navigation arrows change this value as well. 
  - Default: `name`

## Development
Run `npm install` and then `npm start`. This will start the web dev server in your default browser. Your changes will be automatically reflected on the running application.

## Customization
This application exposes the platform buttons, title, and navigation arrows for CSS customization (via the [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) pseudo-element). 