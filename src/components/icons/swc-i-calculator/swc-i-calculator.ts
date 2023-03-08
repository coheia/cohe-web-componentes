import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-calculator')
export class SwcICalculator extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M11.146 2.964v13.212a.476.476 0 0 1-.475.475H1.33a.476.476 0 0 1-.475-.475V2.964a.476.476 0 0 1 .475-.475h9.342a.476.476 0 0 1 .475.475zm-1.108.633H1.962v2.726h8.076zM3.653 8.608a.792.792 0 0 0-.791-.791h-.003a.792.792 0 1 0 0 1.583h.003a.792.792 0 0 0 .791-.792zm0 2.634a.792.792 0 0 0-.791-.791h-.003a.792.792 0 1 0 0 1.583h.003a.792.792 0 0 0 .791-.792zm0 2.634a.792.792 0 0 0-.791-.791h-.003a.792.792 0 1 0 0 1.583h.003a.792.792 0 0 0 .791-.792zm3.04-2.634a.792.792 0 0 0-.792-.791H5.9a.792.792 0 1 0 0 1.583.792.792 0 0 0 .792-.792zm0 2.634a.792.792 0 0 0-.792-.791H5.9a.792.792 0 1 0 0 1.583.792.792 0 0 0 .792-.792zm.048-5.268a.792.792 0 0 0-.791-.791h-.005a.792.792 0 0 0 0 1.583h.005a.792.792 0 0 0 .791-.792zm3.086 0a.792.792 0 0 0-.792-.791h-.002a.792.792 0 0 0 0 1.583h.002a.792.792 0 0 0 .792-.792zm0 2.587a.792.792 0 1 0-1.584 0v2.681a.792.792 0 0 0 1.584 0z"/></svg>`;
  }
}