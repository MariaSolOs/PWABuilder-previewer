import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import type { Shortcut } from './models';

@customElement('jump-list')
export class JumpList extends LitElement {
  static styles = css`
    :host {
      --windows-background: #d9e8f0;
    }

    .container {
      position: absolute;
      width: 120px;
      bottom: 22px;
      right: 184px;
      height: 137px;
      opacity: 0;
      transform: translateY(159px);
      transition: all 200ms ease-in-out;
    }

    .container.open {
      opacity: 1;
      transform: translateY(0);
    }

    img.list {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    .shortcuts {
      position: absolute;
      background-color: var(--windows-background);
      width: 118px;
      height: 105px;
      bottom: 16px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  `;

  /**
   * If true, the jump list is open.
   */
  @property({ type: Boolean }) isListOpen = false;

  /**
   * The shortcuts attribute on the manifest.
   */
  @property({ type: Array }) shortcuts?: Shortcut[];

  render() {
    return html`
      <div class=${classMap({ container: true, open: this.isListOpen })}>
        <img alt="Window's jump list" src="../assets/images/jumplist.png" class="list" />
        <ul class="shortcuts">
          ${this.shortcuts?.map(shortie => 
            html`
              <li>
                ${shortie.icons ? null : null}
                ${shortie.name}
              </li>
            `)}
        </ul>
      </div>
    `;
  }
}