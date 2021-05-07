import { LitElement, html, css } from 'lit-element';

class LitRoundedButton extends LitElement {

  
    static get styles() {
        return css`
          :host {
            display: inline-block;
          }
          button {
            box-sizing: content-box !important;
            border-color: transparent;
            border-radius: var(--lit-rounded-button-border-radius, 30px);
            border-style: solid;
            border-width: 1px;
            box-sizing: inherit;
            cursor: pointer;
            display: inline-block;
            line-height: normal;
            margin: 0;
            padding-left: var(--lit-rounded-button-padding-x, 20px);
            padding-right: var(--lit-rounded-button-padding-x, 20px);
            padding-top: var(--lit-rounded-button-padding-y, 5px);
            padding-bottom: var(--lit-rounded-button-padding-y, 5px);
            position: relative;
            text-decoration: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border-radius: var(--lit-rounded-button-height, 30px);
            font-size: var(--lit-rounded-button-font-size, 1em);
            font-weight: var(--lit-rounded-button-font-weight, normal);
            text-transform: var(--lit-rounded-button-text-transform, uppercase);
            height: var(--lit-rounded-button-height, 30px);
            text-align: center;
            transition: all var(--lit-rounded-button-animation-time, 0.3s) ease;
            background-color: var(--lit-rounded-button-background-color, #e74c3c);
            color: var(--lit-rounded-button-text-color, #fff);
          }
          button:hover {
            background-color: var(--lit-rounded-button-hover-background-color, #303030);
            color: var(--lit-rounded-button-hover-text-color, #fff);
          }
          button[disabled] {
            cursor: default;
            opacity: 0.6;
            background-color: var(--lit-rounded-button-background-color, #e74c3c);
            color: var(--lit-rounded-button-text-color, #fff);
          }
        `;
      }
    
    static get properties() {
        return {
            disabled: { type: Boolean}
        };
    }

    constructor() {
        super();
        this.disabled = false;
    }


    render() {
        return html`
        <button @click+=${this.onClick} ?disabled=${this.disabled}><slot></slot></button>
        `;
    }

    onClick(){
        this.dispatchEvent(new CustomEvent('lit-rounded-button'));
    }
}
customElements.define('lit-rounded-button', LitRoundedButton);