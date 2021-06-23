import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('jump-list')
export class JumpList extends LitElement {
  static styles = css`
    .container {
      position: absolute;
      width: 120px;
      bottom: 16px;
      left: 240px;
      height: 136px;
      opacity: 0;
      transform: translateY(152px);
      transition: all 200ms ease-in-out;
    }

    .container.open {
      opacity: 1;
      transform: translateY(0);
    }

    img.list {
      width: 100%;
      height: 100%;
    }
  `;

  /**
   * If true, the jump list is open.
   */
  @property({ type: Boolean }) isListOpen = false;

  render() {
    return html`
      <div class=${classMap({ container: true, open: this.isListOpen })}>
        <img alt="Window's jump list" src="../assets/images/jumplist.png" class="list" />
      </div>
    `;
  }
}