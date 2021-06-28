import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ScreenTemplate } from './screen-template.js';
import '../disclaimer-message.js';

@customElement('shortname-screen')
export class ShortnameScreen extends ScreenTemplate {
  static get styles() {
    return [
      super.styles,
      css`
        .windows-message {
          margin: 100px auto 0px;
          width: 70%;
        }

        .container {
          position: relative;
          width: 260px;
          margin: 70px auto 0;
        }

        .android .homescreen {
          width: 100%;
          border-radius: 10px;
        }

        .android .background {
          background: linear-gradient(#bc8aa3 0%,#eaa4c3 100%);
          width: 100%;
          position: absolute;
          top: 20px;
          bottom: 0;
          border-radius: 0 0 10px 10px;
        }

        .android .icon-container {
          display: flex;
          align-items: center;
          position: absolute;
          flex-direction: column;
          top: 50px;
          left: 10px;
        }

        .android .app-icon {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

        .android .app-name {
          text-align: center;
          color: #FFF;
          font-size: 14px;
          text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.46);
        }

        .ios .background {
          width: 100%;
          position: absolute;
          top: 0;
        }

        .ios .app-name {
          position: absolute;
          top: 79px;
          left: 75px;
          width: 50px;
          text-align: center;
          background-color: rgb(113, 137, 150);
          color: rgb(255, 255, 255);
          font-family: var(--ios-font-family);
          font-size: 9px;
        }

        .ios .app-icon {
          background-color: rgb(0, 0, 0);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          position: absolute;
          top: 27px;
          left: 74px;
          height: 50px;
          border-radius: 11px;
        }

        .ios .app-icon img {
          width: 80%;
        }
      `
    ];  
  }


  /**
   * Short name attribute on the manifest.
   */
  @property() appShortName?: string;
 
  /**
   * The URL to use for icon previews, or undefined if the manifest has no
   * icons.
   */
  @property() iconUrl?: string;

  renderWindows() {
    return html`
      <div class="windows-message">
        <disclaimer-message>
          Windows always uses the application's name and ignores
          its short name.
        </disclaimer-message>
      </div>
    `;
  }

  renderAndroid() {
    return html`
      <div class="android container">
        <div class="background"></div>
        <div class="icon-container">
          ${this.iconUrl ?
            html`<img alt="Application's icon" src=${this.iconUrl} class="app-icon" />` : null}
          <div class="app-name">${this.appShortName || 'PWA App'}</div>
        </div>
        <img class="homescreen" alt="Android's home screen" src="../assets/images/android/homescreen.png" />
      </div>
    `;
  }

  renderiOS() {
    return html`
      <div class="ios container">
        <img class="background" alt="iOS home screen" src="../assets/images/ios/homemenu.png" />
        <div class="app-name">${this.appShortName || 'PWA App'}</div>
        ${this.iconUrl ? 
          html`<div class="app-icon"><img alt="Application's icon" src=${this.iconUrl} /></div>` : 
          null}
      </div>
    `;
  }
}