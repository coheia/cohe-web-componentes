import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-chevron-left')
export class SwcIChevronLeft extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="${this.size}" height="${this.size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3165 19.0976 14.6834 19.0976 14.2929 18.7071L8.46963 12.8839C7.98148 12.3957 7.98148 11.6043 8.46963 11.1161L14.2929 5.29289C14.6834 4.90237 15.3165 4.90237 15.7071 5.29289Z" fill="#0F1729"/>
</svg>`;
  }
}