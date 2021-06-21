import { LitElement, css, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

import './app-window.js';
import './start-menu.js';
import { Manifest } from './models';

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
      width: 800px;
      height: 533px;
      position: relative;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
      left: 287px;
      width: 19px;
      height: 19px;
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
      width: 8px;
      height: 8.5px;
      cursor: pointer;
      position: absolute;
      bottom: 5px;
      left: 7.5px;
      transition: 300ms background-color ease-in-out
    }

    .menu-toggler:hover {
      background-color: rgb(0, 120, 215);
      opacity: 0.7;
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

  /**
   * If true, the start menu is open.
   */
  @state() private isMenuOpen = true;
  private toggleMenu = () => { this.isMenuOpen = !this.isMenuOpen; }

  render() {
    return html`
      <div class="background">
        <div class="desktop-container">
          <img class="desktop" alt="Windows desktop" src="../assets/images/desktop.png" />
          ${this.iconUrl ? 
            html`
              <div class="taskbar-icon" @click=${this.openAppWindow}>
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
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'manifest-previewer': ManifestPreviewer;
  }
}
