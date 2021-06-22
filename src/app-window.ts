import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

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
   * The background color specified on the manifest.
   */
  @property() backgroundColor: string | undefined;

  /**
   * The name specified on the manifest.
   */
  @property() appName: string | undefined;

  /**
   * The application icon's URL.
   */
  @property() iconUrl: string | undefined;

  /**
   * The color to use on top of the background color, such that the text is visible.
   */
  @state()
  private _contrastingBackgroundColor = '';
   
  @state()
  private get contrastingBackgroundColor() {
    if (!this._contrastingBackgroundColor) {
      this._contrastingBackgroundColor = this.backgroundColor ? getContrastingColor(this.backgroundColor) : '#000';
    }
    return this._contrastingBackgroundColor;
  }

  render() {
    return this.isWindowOpen ?
      html`
        <div class="screen" style=${styleMap({ backgroundColor: this.backgroundColor || '#FFF' })}>
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
        </div>
      ` : null;
  }
}