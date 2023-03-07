import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-lit')
export class SwcILit extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="m2.4 9.6 4.8 4.8V24l-4.8-4.8V9.6zm4.8-4.8v9.6L12 9.6V0L7.2 4.8zM12 9.6v9.6l4.8-4.8V4.8L12 9.6zm4.8 4.8V24l4.8-4.8V9.6l-4.8 4.8z"/></svg>`;
  }
}