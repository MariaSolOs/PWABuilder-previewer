import { LitElement, css, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

import './app-window.js';
import './start-menu.js';
import './code-editor.js';
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
      bottom: 0;
      left: 292px;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #3B3436;
      cursor: pointer;
      transition: background-color 300ms ease-in-out
    }

    .taskbar-icon:hover {
      background-color: #8D8A90;
    }

    .taskbar-icon img {
      width: 80%;
    }

    .menu-toggler {
      width: 7px;
      height: 8.5px;
      cursor: pointer;
      position: absolute;
      bottom: 5px;
      left: 6.5px;
      transition: 300ms background-color ease-in-out
    }

    .menu-toggler:hover {
      background-color: rgb(0, 120, 215);
      opacity: 0.7;
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
  manifest = {} as Manifest;

  /**
   * The url where the manifest resides.
   */
  @property() manifestUrl = '';

  /**
   * The URL used for icon previews, or undefined if the manifest specifies no icons.
   */
  private _iconUrl: string | undefined;

  @state()
  private get iconUrl() {
    if (typeof this._iconUrl === 'undefined' && this.manifest.icons) {
      // Try to get the icon for Android Chrome, or the first one by default
      let iconUrl = this.manifest.icons[0].src;
      for (const icon of this.manifest.icons) {
        if (icon.sizes?.includes('192x192')) {
          iconUrl = icon.src;
          break;
        }
      }
      const absoluteUrl = new URL(iconUrl, this.manifestUrl).href;
      this._iconUrl = `https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${absoluteUrl}`;
    }

    return this._iconUrl;
  }

  /**
   * If true, the application's window is open.
   */
  @state() private isAppOpen = false;
  private openAppWindow = () => { this.isAppOpen = true; }
  private closeAppWindow = () => { this.isAppOpen = false; }

  private handleTaskbarClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const isRightClick = event.buttons === 2;
    console.log(isRightClick);
  }

  /**
   * If true, the start menu is open.
   */
  @state() private isMenuOpen = false;
  private toggleMenu = () => { this.isMenuOpen = !this.isMenuOpen; }

  /**
   * To show the jumplist when right-clicking, disable the default 
   * context menu.
   */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('contextmenu', this.handleContextMenuDisable);

    this.addEventListener(CodeEditorEvents.update, event => {
      const e = event as CustomEvent<CodeEditorUpdateEvent>;
      const doc: TextLeaf = e.detail.transaction.newDoc as any;
      console.log(JSON.parse(doc.text.join('')))
    });
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('contextmenu', this.handleContextMenuDisable);
  }

  private handleContextMenuDisable = (event: Event) => { 
    event.preventDefault();
  }

  render() {
    return html`
      <div class="background">
        <div class="desktop-container">
          <img class="desktop" alt="Windows desktop" src="../assets/images/desktop.png" />
          ${this.iconUrl ? 
            html`
              <div class="taskbar-icon" @mousedown=${this.handleTaskbarClick} @click=${this.openAppWindow}>
                <img alt="App icon" src=${this.iconUrl} />
              </div>` : 
            null}
          <div class="menu-toggler" @click=${this.toggleMenu}></div>
          <start-menu
          .isMenuOpen=${this.isMenuOpen}
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}
          .onClose=${this.toggleMenu}
          .onOpenApp=${this.openAppWindow}>
          </start-menu>
          <app-window 
          .isWindowOpen=${this.isAppOpen}
          .onClose=${this.closeAppWindow}
          .backgroundColor=${this.manifest.background_color}
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}>
          </app-window>
        </div>
        <code-editor></code-editor>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'manifest-previewer': ManifestPreviewer;
  }
}
