import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import type { Display } from './models';
import { getContrastingColor } from './utils/colors';

@customElement('app-window')
export class AppWindow extends LitElement {
  static styles = css`
    .screen {
      position: absolute;
      width: 40%;
      height: 200px;
      top: 25%;
      left: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--pwa-background-color);
    }

    .window-actions {
      position: absolute;
      top: 4px;
      right: 4px;
      width: fit-content;
      display: flex;
      align-items: center;
      cursor: pointer
    }

    .collapse {
      width: 6px;
      height: 0.1px;
      margin-right: 5px;
    }

    .app-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .app-info p {
      margin: 0;
      font-size: 20px;
      font-weight: var(--font-bold);
    }

    .app-info img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    
    .browser-img {
      width: 100%;
    }

    .app-url {
      top: -11.5px;
      position: absolute;
      left: 50px;
      font-size: 3.5px;
      width: 162px;
      overflow-x: hidden;
      white-space: nowrap;
      background-color: white;
    }
    
    .display-background {
      width: 98.9%;
      position: absolute;
      top: -4.5px;
      left: 0px;
      height: 230.7px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: var(--pwa-background-color);
    }

    .display-background.fullscreen {
      top: -15px;
      height: 241.2px;
    }

    .display-background .name {
      width: fit-content;
      margin: 10px auto 0px;
      font-size: 12px;
    }

    .display-background .icon {
      width: 55px;
      height: 55px;
    }

    .browser-close {
      position: absolute;
      cursor: pointer;
      width: 10px;
      height: 10px;
      top: -27px;
      right: 0;
    }

    /*

    .app-background.fullscreen {
      top: 12px;
      height: 222.8px;
    }

    .app-background.minimal-ui {
      width: 260px;
    }

    .app-background.standalone {
      width: 260px;
    } */

    /*
     
     .title-bar {
      width: 260px;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      background-color: var(--pwa-theme-color);
    }
     .nav-actions {
      display: flex;
      align-items: center;
    }
     .nav-actions img {
      width: 10px;
      height: 8px;
      margin: 4px 2px 0;
      opacity: 0.8;
    }
     .nav-actions svg {
      margin: 4px 5px 0;
    }
     .nav-actions .collapse {
      margin: 4px 5px 0;
      width: 6px;
      height: 1px;
    }
     .nav-actions .enlarge {
      margin: 4px 5px 0;
      width: 6px;
      height: 6px;
      border-width: 1px;
      border-style: solid;
    }
     .title-bar .app-name {
      margin: 4px;
      font-size: 6px;
    } */
  `;

  /**
   * If true, show the application's window.
   */
  @property({ type: Boolean }) isWindowOpen = false;

  /**
   * Callback fired when closing the window.
   */
  @property() onClose = () => {};

  /**
   * The background color attribute on the manifest.
   */
  @property() backgroundColor?: string;

  /**
   * The theme color attribute on the manifest.
   */
  @property() themeColor?: string;

  /**
   * The name attribute on the manifest.
   */
  @property() appName?: string;

  /**
   * The application icon's URL.
   */
  @property() iconUrl?: string;

  /**
   * The application's URL.
   */
  @property() siteUrl = '';

  /**
   * The display attribute on the manifest.
   */
  @property() display: Display = 'browser';

  /**
   * Colors for making sure the text is visible.
   */
  @state() private contrastingBackgroundColor = '';
  @state() private contrastingThemeColor = '';

  /**
   * When true, the window is no longer showing the splashscreen and instead there's
   * a preview of the display.
   */
  @state() private showDisplay = false;
  
  firstUpdated() {
    this.contrastingBackgroundColor = this.backgroundColor ? getContrastingColor(this.backgroundColor) : '#000';
    this.contrastingThemeColor = this.themeColor ? getContrastingColor(this.themeColor) : '#000';
  }
  
  willUpdate(changedProps: Map<string, any>) {
    // When opening the window, show the splash screen and then preview the app display
    if (changedProps.has('isWindowOpen') && !changedProps.get('isWindowOpen')) {
      // this.showDisplay = false;
      this.showDisplay = true;
      // setTimeout(() => {
      //   this.showDisplay = true;
      // }, 3000);
    }
  }

  displayPreview() {
    const appSplash = 
    html`
      <div class="display-background ${this.display}" style=${styleMap({ '--pwa-background-color': this.backgroundColor })}>
        ${this.iconUrl ?
          html`<img class="icon" alt="App icon" src=${this.iconUrl} />` : null}
        <h4 class="name" style=${styleMap({ color: this.contrastingBackgroundColor })}>
          ${this.appName || 'PWA App'}
        </h4>
      </div>
    `;

    switch (this.display) {
      case 'fullscreen':
        return html`
          <img class="browser-img" alt="Window's browser" src="../assets/images/browser-window.png" />
          <div class="browser-close" @click=${this.onClose}></div>
          ${appSplash}
        `;
      case 'browser':
        return html`
          <img class="browser-img" alt="Window's browser" src="../assets/images/browser-window.png" />
          <span class="app-url">${this.siteUrl}</span>
          <div class="browser-close" @click=${this.onClose}></div>
          ${appSplash}
        `;
      case 'minimal-ui': 
        return html`
          <div 
          class="title-bar"
          style=${styleMap({ '--pwa-background-color': this.themeColor })}>
            <div class="nav-actions">
              <img alt="Go back" src="../assets/images/windows/backarrow.svg" />
              <img alt="Refresh page" src="../assets/images/windows/refresharrow.svg" />
            </div>
            <span class="app-name">${this.appName}</span>
            <div class="nav-actions">
              <div class="collapse" style=${styleMap({ backgroundColor: this.contrastingThemeColor })}></div>
              <div class="enlarge" style=${styleMap({ borderColor: this.contrastingThemeColor })}></div>
              <svg class="close" width="6px" height="6px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                <g><path style="fill:${this.contrastingThemeColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
              </svg>
            </div>
          </div>
          ${appSplash}
        `;
      case 'standalone':
        return html`
          <div 
          class="title-bar"
          style=${styleMap({ '--pwa-background-color': this.themeColor })}>
            <span class="app-name">${this.appName}</span>
            <div class="nav-actions">
              <div class="collapse" style=${styleMap({ backgroundColor: this.contrastingThemeColor })}></div>
              <div class="enlarge" style=${styleMap({ borderColor: this.contrastingThemeColor })}></div>
              <svg class="close" width="6px" height="6px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                <g><path style="fill:${this.contrastingThemeColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
              </svg>
            </div>
          </div>
          ${appSplash}
        `;
      default: return null;
    }
  }

  render() {
    return this.isWindowOpen ?
      html`
        <div 
        class="screen" 
        style=${styleMap({ '--pwa-background-color': this.backgroundColor })}>
          ${this.showDisplay ? 
            this.displayPreview() : 
            html`
              <div class="window-actions">
                <div class="collapse" style=${styleMap({ backgroundColor: this.contrastingBackgroundColor })}></div>
                <svg @click=${this.onClose} class="close" width="6px" height="6px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                  <g><path style="fill:${this.contrastingBackgroundColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
                </svg>
              </div>
              <div class="app-info">
                ${this.iconUrl ? 
                  html`<img alt="Application icon" src=${this.iconUrl} />`: null}
                <p style=${styleMap({ color: this.contrastingBackgroundColor })}>
                  ${this.appName || 'PWA App'}
                </p>
              </div>
            `}
        </div>
      ` : null;
  }
}