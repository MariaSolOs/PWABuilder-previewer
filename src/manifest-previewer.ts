import { LitElement, css, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

import './app-window.js';
import './start-menu.js';
import './code-editor.js';
import './jump-list.js';
import MANIFEST_TEMPLATE from './manifest.js';
import { Manifest, CodeEditorEvents, CodeEditorUpdateEvent, TextLeaf } from './models';

@customElement('manifest-previewer')
export class ManifestPreviewer extends LitElement {
  static styles = css`
    .background {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
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
      background: linear-gradient(252.83deg, #5039A8 2.36%, #6AA2DB 99.69%);
      opacity: 0.3;
    }

    .desktop-container {
      overflow: hidden;
      width: 700px;
      height: 466px;
      position: relative;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-right: 50px;
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
      bottom: 2px;
      right: 240.5px;
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 300ms ease-in-out;
      border-radius: 2px;
    }

    .taskbar-icon:hover {
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

    .menu-toggler:hover {
      background-image: radial-gradient(transparent, #FFF);
    }

    /* @media(max-width: 1100px) {
      .desktop-container { 
        display: none; 
      }
    } */
  `;

  /**
   * The input web manifest.
   */
  @state() manifest: Manifest;

  /**
   * The url where the manifest resides.
   */
  @property() manifestUrl = '';

  /**
   * The URL used for icon previews, or undefined if the manifest specifies no icons.
   */
  @state() private iconUrl = '';

  firstUpdated() {
    if (this.manifest.icons) {
      // Try to get the largest icon, or the first one by default
      let iconUrl = this.manifest.icons[0].src;
      for (const icon of this.manifest.icons) {
        if (icon.sizes?.includes('192x192')) {
          iconUrl = icon.src;
          break;
        }
      }
      const absoluteUrl = new URL(iconUrl, this.manifestUrl).href;
      this.iconUrl = `https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${absoluteUrl}`;
    }
  }

  /**
   * If true, the application's window is open.
   */
  @state() private isAppOpen = false;
  private openAppWindow = () => { 
    this.isAppOpen = true; 
    this.closeJumplist();
    this.closeStartMenu();
  }
  private closeAppWindow = () => { this.isAppOpen = false; }

  /**
   * If true, the start menu is open.
   */
  @state() private isMenuOpen = false;
  private openStartMenu = () => { 
    this.isMenuOpen = true;
    this.closeJumplist();
  }
  private closeStartMenu = () => { this.isMenuOpen = false; }

  /**
   * If true, the jump list is open.
   */
  @state() private isJumplistOpen = true;
  private openJumplist = () => { this.isJumplistOpen = true; }
  private closeJumplist = () => { this.isJumplistOpen = false; }

  constructor() {
    super();

    this.manifest = JSON.parse(MANIFEST_TEMPLATE);
    // Update the manifest every time the code changes.
    this.addEventListener(CodeEditorEvents.update, event => {
      const e = event as CustomEvent<CodeEditorUpdateEvent>;
      const doc: TextLeaf = e.detail.transaction.newDoc as any;
      this.manifest = JSON.parse(doc.text.join(''));
    });
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

  private handleContextMenuDisable = (event: Event) => { 
    event.preventDefault();
  }

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
    return html`
      <div class="background">
        <div class="desktop-container">
          <img @click=${this.handleBackdropClick} class="desktop" alt="Windows desktop" src="../assets/images/desktop.png" />
          ${this.iconUrl ? 
            html`
              <div class="taskbar-icon" @mousedown=${this.handleTaskbarClick} @click=${this.handleTaskbarClick}>
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
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}>
          </app-window>
          <jump-list
          .isListOpen=${this.isJumplistOpen}
          .shortcuts=${this.manifest.shortcuts}>
          </jump-list>
        </div>
        <code-editor .startText=${MANIFEST_TEMPLATE}></code-editor>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'manifest-previewer': ManifestPreviewer;
  }
}
