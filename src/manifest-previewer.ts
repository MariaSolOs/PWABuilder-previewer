import { LitElement, css, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import './app-window.js';
import './start-menu.js';
import './code-editor.js';
import './jump-list.js';
import './store-window.js';
import './explanation-text.js';
import MANIFEST_TEMPLATE from './manifest-template.js';
import { Manifest, CodeEditorEvents, CodeEditorUpdateEvent } from './models';

@customElement('manifest-previewer')
export class ManifestPreviewer extends LitElement {
  static styles = css`
    .background {
      position: relative;
      width: 100vw;
      height: 100vh;
    }

    .background::before {
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--page-background);
      opacity: 0.3;
    }

    .content {
      display: flex;
      justify-content: center;
      padding-top: 12%;
    }

    .desktop-container {
      overflow: hidden;
      width: 700px;
      height: 466px;
      position: relative;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0 30px 18px 0;
    }

    img.desktop {
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .taskbar-icon {
      position: absolute;
      bottom: 1.5px;
      width: 15.5px;
      height: 15.5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 300ms ease-in-out;
      border-radius: 2px;
    }

    .taskbar-icon.taskbar-app-icon {
      right: 240px;
    }

    .store-icon {
      right: 295px;
    }

    .taskbar-app-icon:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }

    .taskbar-icon img {
      width: 80%;
    }

    .menu-toggler {
      cursor: pointer;
      position: absolute;
      left: 240px;
      bottom: 2px;
      right: 240.5px;
      width: 15px;
      height: 15px;
      border-radius: 2px;
    }

    .menu-toggler:hover, .store-icon:hover {
      background-image: radial-gradient(transparent, #FFF);
    }

    .invalid-message {
      color: #B90E0A;
      font-weight: 600;
      margin: 8px 0 0;
      font-size: 14px;
      height: 18px;
    }

    @media(max-width: 1100px) {
      .desktop-container { 
        display: none; 
      }
    }
  `;

  /**
   * The input web manifest.
   */
  @property({ 
    type: Object,
    converter: value => {
      if (!value) {
        return undefined;
      }
      
      return JSON.parse(value);
    }
  }) 
  manifest: Manifest = MANIFEST_TEMPLATE;

  /**
   * The url where the manifest resides.
   */
  @property() manifestUrl = 'https://www.pwabuilder.com/manifest.json';

  /**
   * The website's URL
   */
  @property() siteUrl = '';

  /**
   * The background of the entire page.
   */
  @property() pageBackground = '';

  /**
   * If true, the code editor is hidden.
   */
  @property({ type: Boolean }) hideEditor = false;

  /**
   * The URL used for icon previews, or undefined if the manifest specifies no icons.
   */
  @state() private iconUrl = '';

  /**
   * If true, the application's window is open.
   */
  @state() private isAppOpen = false;

   /**
   * If true, the start menu is open.
   */
  @state() private isMenuOpen = false;

  /**
   * If true, the jump list is open.
   */
  @state() private isJumplistOpen = false;

  /**
   * If true, the MSFT store window is 
   */
  @state() private isStoreOpen = false;

  /**
   * If true, the manifest's JSON has a syntax error.
   */
  @state() private invalidJSON = false;

  /**
   * The message explaining the current preview content.
   */
  @state() private explanationMessage = 'Do you see something familiar on the taskbar?';
  @state() private isMessageFadingIn = false;
  @state() private isMessageFadingOut = false;

  constructor() {
    super();

    // Update the manifest every time the code changes.
    this.addEventListener(CodeEditorEvents.update, event => {
      const e = event as CustomEvent<CodeEditorUpdateEvent>;
      const doc: any = e.detail.transaction.newDoc;
      try {
        // TODO: Sometimes the new doc is a TextNode and sometimes it is a TexLeaf.
        // There's probably a cleaner way to deal with this...
        let text: string[] = [];
        if (doc.children) {
          text = text.concat(...doc.children.map((child: any) => child.text));
        } else {
          text = doc.text;
        }
        this.manifest = JSON.parse(text.join(''));
        this.invalidJSON = false;
      } catch (err) {
        // Ignore the syntax error but show error message
        this.invalidJSON = true;
      }
    });
  }

  firstUpdated() {
    // Set the site URL if not defined (assuming it can be derived from the manifest's URL)
    if (!this.siteUrl) {
      this.siteUrl = this.manifestUrl.substring(0, this.manifestUrl.lastIndexOf('manifest.json'));
    }

    if (this.manifest.icons) {
      // Try to get the largest icon, or the first one by default
      let iconUrl = this.manifest.icons[0].src;
      for (const icon of this.manifest.icons) {
        if (icon.sizes?.includes('512x512')) {
          iconUrl = icon.src;
          break;
        }
      }
      const absoluteUrl = new URL(iconUrl, this.manifestUrl).href;
      this.iconUrl = `https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${absoluteUrl}`;
    }
  }

  /**
   * To show the jump list when right-clicking, disable the default 
   * context menu.
   */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('contextmenu', this.handleContextMenuDisable);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('contextmenu', this.handleContextMenuDisable);
  }

  // Show explanation messages when the user interacts with the simulator.
  private handleNewExplanation = (message: string) => {
    this.isMessageFadingOut = true;
    setTimeout(() => {
      this.explanationMessage = message;
      this.isMessageFadingOut = false;
      this.isMessageFadingIn = true;

      setTimeout(() => {
        this.isMessageFadingOut = true;
      }, 5000);
    }, 400);
  }

  private handleContextMenuDisable = (event: Event) => { 
    event.preventDefault();
  }

  private openAppWindow = () => { 
    this.handleNewExplanation("The background color, theme color and display attributes determine several UI aspects of your PWA, such as the titlebar.");
    this.isAppOpen = true; 
    this.closeJumplist();
    this.closeStartMenu();
  }
  private closeAppWindow = () => { this.isAppOpen = false; }

  private openStartMenu = () => { 
    this.handleNewExplanation("The application's name and icon are used in the start menu.");
    this.isMenuOpen = true;
    this.closeJumplist();
  }
  private closeStartMenu = () => { this.isMenuOpen = false; }

  private openJumplist = () => { 
    this.handleNewExplanation("The actions listed on the shortcuts attribute define a context menu that is displayed when right-clicking on the taskbar icon.");
    this.isJumplistOpen = true; 
  }
  private closeJumplist = () => { this.isJumplistOpen = false; }

  private openStore = () => {
    this.handleNewExplanation("Screenshots, a complete description and categories will enhance your app's listing in the Microsoft Store.");
    this.isStoreOpen = true;
    this.closeJumplist();
  }
  private closeStore = () => { this.isStoreOpen = false; }

  /**
   * Depending on the click, open the jump list or application when clicking
   * taskbar icon.
   */
  private handleTaskbarClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const isRightClick = event.buttons === 2;
    if (isRightClick) {
      this.openJumplist();
    } else {
      this.openAppWindow();
    }
  }

  /**
   * When clicking on the backgroud image, close the menus.
   */
  private handleBackdropClick = () => {
    this.closeJumplist();
    this.closeStartMenu();
  }

  render() {
    console.log(this.hideEditor)
    return html`
      <div class="background" style=${styleMap({ '--page-background': this.pageBackground })}>
        <div class="content">
          <div class="desktop-container">
            <img @click=${this.handleBackdropClick} class="desktop" alt="Windows desktop" src="../assets/images/desktop.png" />
            <div @click=${this.openStore} class="taskbar-icon store-icon"></div>
            ${this.iconUrl ? 
              html`
                <div class="taskbar-icon taskbar-app-icon" @mousedown=${this.handleTaskbarClick} @click=${this.handleTaskbarClick}>
                  <img alt="App icon" src=${this.iconUrl} />
                </div>` : 
              null}
            <div class="menu-toggler" @click=${this.isMenuOpen ? this.closeStartMenu : this.openStartMenu}></div>
            <start-menu
            .isMenuOpen=${this.isMenuOpen}
            .appName=${this.manifest.name}
            .iconUrl=${this.iconUrl}
            .onClose=${this.closeStartMenu}
            .onOpenApp=${this.openAppWindow}>
            </start-menu>
            <app-window 
            .isWindowOpen=${this.isAppOpen}
            .onClose=${this.closeAppWindow}
            .backgroundColor=${this.manifest.background_color}
            .themeColor=${this.manifest.theme_color}
            .appName=${this.manifest.name}
            .iconUrl=${this.iconUrl}
            .siteUrl=${this.siteUrl}
            .display=${this.manifest.display || 'standalone'}>
            </app-window>
            <jump-list
            .isListOpen=${this.isJumplistOpen}
            .shortcuts=${this.manifest.shortcuts}
            .manifestUrl=${this.manifestUrl}>
            </jump-list>
            <store-window
            .isWindowOpen=${this.isStoreOpen}
            .onClose=${this.closeStore}
            .iconUrl=${this.iconUrl}
            .manifestUrl=${this.manifestUrl}
            .appName=${this.manifest.name || this.manifest.short_name}
            .description=${this.manifest.description || 'An amazing progressive web app!'}
            .screenshots=${this.manifest.screenshots}
            .categories=${this.manifest.categories}>
            </store-window>
          </div>
          <div>
            ${this.hideEditor ? null :
              html`
                <code-editor 
                .startText=${JSON.stringify(this.manifest, null, '  ')}>
                </code-editor>
                <p class="invalid-message">${this.invalidJSON ? 'Invalid JSON!' : ''}</p>`}
          </div>
        </div>
        <explanation-text 
        .message=${this.explanationMessage}
        .isFadingIn=${this.isMessageFadingIn}
        .isFadingOut=${this.isMessageFadingOut}>
        </explanation-text>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'manifest-previewer': ManifestPreviewer;
  }
}
