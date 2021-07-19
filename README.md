# PWABuilder: Interactive manifest previewer
A [web component](https://medium.com/pwabuilder/building-pwas-with-web-components-33f986bf8e4c) that allows you to preview your PWA on the platform of your choice, based on your app's `manifest.json` file!

## Built with
- [Lit](https://lit.dev/)
- [Typescript](https://www.typescriptlang.org/)
- The project generator from [Open Web Components](https://open-wc.org/docs/development/generator/)
- [FAST components](https://www.fast.design/docs/introduction)

## Using this component
This component accepts the following configuration. All properties are optional and have default values, but for the optimal experience these should be modified as needed.
Note that in the HTML markup, property names should be all in lowercase. For more information refer to [lit's documentation](https://lit.dev/docs/components/properties/#attributes).

- `manifestUrl`: URL where the manifest resides.
  - Default: [https://www.pwabuilder.com/manifest.json](https://www.pwabuilder.com/manifest.json)
- `siteUrl`: The application's URL. This property should be set if the manifest isn't at the root of the application.
  - Default: The result of `this.manifestUrl.substring(0, this.manifestUrl.lastIndexOf('manifest.json'))`.
- `manifest`: The input manifest object.
  - Default:
  ```
  {
    name: 'PWA App',
    background_color: '#FFF',
    theme_color: '#E3CEF6',
    categories: [],
    shortcuts: [],
    display: 'standalone',
    description: 'An amazing progressive web app!',
    icons: [
      {
        src: '/assets/icons/icon_512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
  ```
- `pageBackground`: The CSS background of the entire page. 
  - Default: `linear-gradient(252.83deg, #5039A8 2.36%, #6AA2DB 99.69%)`
- `hideEditor`: If true, the code editor is hidden and only the preview window is displayed.
  - Default: `false`
- `explanations`: Object containing the explanation messages that are displayed when the user interacts with the previewer. `initial` is the starting message (can be used to suggest an initial action to the user). `appWindow`, `startMenu`, `jumpList` and `store` are all shown when the respective window is open. If a value isn't specified, the default message is used.
  - Default:
  ```
  {
    initial: "Do you see something familiar on the taskbar?",
    appWindow: "The background color, theme color and display attributes determine several UI aspects of your PWA, such as the titlebar.",
    startMenu: "The application's name and icon are used in the start menu.",
    jumpList: "The actions listed on the shortcuts attribute define a context menu that is displayed when right-clicking on the taskbar icon.",
    store: "Screenshots, a complete description and categories will enhance your app's listing in the Microsoft Store."
  }
  ```
- `explanationDisplayTime`: The duration (in milliseconds) of the explanation message display, after which it fades out.
  - Default: 5000 (5 seconds)
- `invalidJsonMessage`: The message displayed to the user when the code editor signals a JSON syntax error. An empty string will completely disable the error alert.
  - Default: "Invalid JSON!"
