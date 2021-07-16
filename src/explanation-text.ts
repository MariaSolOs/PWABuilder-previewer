import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('explanation-text')
export class ExplanationText extends LitElement {
  static styles = css`
    .container {
      margin: 0 auto;
      width: fit-content;
      transition: opacity 400ms ease-in-out;
    }

    .fading-in {
      opacity: 1;
    }

    .fading-out {
      opacity: 0;
    }

    @media(max-width: 1100px) {
      :host { 
        display: none; 
      }
    }
  `;

  /**
   * The explanation message to display
   */
  @property() message = '';

  /**
   * For having some nice fade-in-and-out effects.
   */
  @property({ type: Boolean }) isFadingIn = false;
  @property({ type: Boolean }) isFadingOut = false;

  render() {
    return html`
      <div 
      class=${classMap({ 
        container: true, 
        'fading-in': this.isFadingIn,
        'fading-out': this.isFadingOut
      })}>
        ${this.message}
      </div>
    `;
  }
}