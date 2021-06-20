import { LitElement, css, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

import './app-window.js';
import { Manifest } from './models';

@customElement('manifest-previewer')
export class ManifestPreviewer extends LitElement {
  static styles = css`
    .page-container {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .desktop-container {
      width: 800px;
      height: 530px;
      position: relative;
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
      bottom: -3.5px;
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
   * The website's URL, assuming it can be derived from the manifest's URL.
   */
  private _siteUrl: string | undefined;

  @state()
  private get siteUrl() {
    if (typeof this._siteUrl === 'undefined') {
      this._siteUrl = this.manifestUrl.substring(0, this.manifestUrl.lastIndexOf('manifest.json'));
    }

    return this._siteUrl;
  }

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

  render() {
    console.log(this.siteUrl)
    return html`
      <div class="page-container">
        <div class="desktop-container">
          <img class="desktop" alt="Windows desktop" src="../assets/images/desktop.png" />
          ${this.iconUrl ? 
            html`
              <div class="taskbar-icon" @click=${() => { this.isAppOpen = true; }}>
                <img alt="App icon" src=${this.iconUrl} />
              </div>` : 
            null}
          <app-window 
          .isWindowOpen=${this.isAppOpen}
          .onClose=${() => { this.isAppOpen = false; }}
          .backgroundColor=${this.manifest.background_color}
          .appName=${this.manifest.name}>
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
