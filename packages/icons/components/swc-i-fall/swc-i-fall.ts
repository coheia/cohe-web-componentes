import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-fall')
export class SwcIFall extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-3 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M6.942 8.426a.554.554 0 0 0-.784-.784l-4.373 4.374C.543 10.169.7 7.695 3.048 5.346 5.747 2.649 11.732 3 11.732 3a.549.549 0 0 1 .502.501s.35 5.985-2.349 8.684c-2.276 2.277-4.672 2.494-6.499 1.373l-1.688 1.688a.554.554 0 0 1-.784-.784z"/></svg>`;
  }
}