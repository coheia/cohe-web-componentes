import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-activity-round')
export class SwcIActivityRound extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-4.339-3.332a.794.794 0 0 0-.791-.792h-.268v.767A1.11 1.11 0 0 1 9.91 7.334H6.99a1.11 1.11 0 0 1-1.11-1.108v-.767h-.267a.794.794 0 0 0-.792.792v7.403a.794.794 0 0 0 .792.792h5.673a.794.794 0 0 0 .791-.792zm-1.077 2.522H5.787v.792h5.214zm0 1.713H5.787v.792h5.214zm0 1.713H5.787v.791h5.214zM6.673 6.226a.318.318 0 0 0 .317.317h2.92a.318.318 0 0 0 .317-.317v-.914a.318.318 0 0 0-.316-.317h-.557v-.843a.318.318 0 0 0-.317-.316H7.864a.318.318 0 0 0-.317.316v.843H6.99a.318.318 0 0 0-.317.317zm1.384-1.581a.396.396 0 1 1 .396.396.396.396 0 0 1-.396-.396z"/></svg>`;
  }
}