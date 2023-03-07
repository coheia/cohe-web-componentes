import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-chameleon')
export class SwcIChameleon extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="${this.size}" width="${this.size}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512.001 512.001" xml:space="preserve">
<path style="fill:#82C35F;" d="M412.904,64l-74.323,8.258c-33.032,0-49.548-66.065-82.581-66.065s-49.548,66.065-82.581,66.065
	L99.097,64c0,0-8.258,33.032-33.032,41.29l8.258,165.162c0,30.279,0,60.559,0,90.839c0,44.042,111.484,132.129,181.678,132.129
	s181.678-88.086,181.678-132.129c0-30.279,0-60.559,0-90.839l8.258-165.162C421.162,97.032,412.904,64,412.904,64z"/>
<path style="fill:#73AF55;" d="M74.323,353.033c0,2.753,0,5.505,0,8.258c0,44.042,111.484,132.129,181.678,132.129
	s181.678-88.086,181.678-132.129c0-2.753,0-5.505,0-8.258H74.323z"/>
<g>
	<ellipse style="fill:#F0E178;" cx="156.904" cy="286.968" rx="8.258" ry="16.516"/>
	<path style="fill:#F0E178;" d="M437.694,377.807c-0.975,0-1.967-0.089-2.968-0.266c-45.944-8.355-132.798-16.25-178.726-16.25
		s-132.783,7.895-178.726,16.25c-8.952,1.597-17.565-4.33-19.202-13.299c-1.629-8.967,4.322-17.572,13.299-19.202
		c48.306-8.781,136.306-16.781,184.629-16.781s136.322,8,184.629,16.783c8.976,1.629,14.928,10.234,13.299,19.202
		C452.476,372.219,445.525,377.807,437.694,377.807z"/>
</g>
<path style="fill:#96CD78;" d="M99.097,97.032C44.367,97.032,0,141.399,0,196.129c0,54.729,44.367,99.097,99.097,99.097
	c24.774,0,49.548-44.368,49.548-99.097C148.645,141.399,123.871,97.032,99.097,97.032z"/>
<circle style="fill:#F0E178;" cx="90.839" cy="204.388" r="41.29"/>
<circle style="fill:#464655;" cx="90.839" cy="204.388" r="24.774"/>
<path style="fill:#96CD78;" d="M412.904,97.032c54.729,0,99.097,44.367,99.097,99.097c0,54.729-44.367,99.097-99.097,99.097
	c-24.774,0-49.548-44.368-49.548-99.097C363.356,141.399,388.13,97.032,412.904,97.032z"/>
<circle style="fill:#F0E178;" cx="421.162" cy="204.388" r="41.29"/>
<circle style="fill:#464655;" cx="421.162" cy="204.388" r="24.774"/>
<path style="fill:#96CD78;" d="M256.001,97.032c-33.032,0-82.581-49.548-140.387-49.548l24.774,33.032l90.839,239.484h49.548
	l90.839-239.484l24.774-33.032C338.581,47.484,289.033,97.032,256.001,97.032z"/>
<g>
	<path style="fill:#96A087;" d="M231.241,320.001c-4.734,0-9.428-2.024-12.694-5.944c-18.862-22.629-30.572-62.896-42.968-105.517
		c-15.976-54.936-34.081-117.202-65.758-129.073c-8.54-3.209-12.871-12.726-9.669-21.267c3.218-8.533,12.726-12.838,21.267-9.669
		c47.169,17.694,66.847,85.347,85.879,150.782c10.904,37.492,22.177,76.266,36.622,93.597c5.838,7.008,4.895,17.419-2.113,23.258
		C238.716,318.742,234.966,320.001,231.241,320.001z"/>
	<path style="fill:#96A087;" d="M280.76,320.001c4.734,0,9.428-2.024,12.694-5.944c18.862-22.629,30.572-62.896,42.968-105.517
		c15.976-54.936,34.081-117.202,65.758-129.073c8.54-3.209,12.871-12.726,9.669-21.267c-3.218-8.533-12.726-12.838-21.267-9.669
		c-47.169,17.694-66.847,85.347-85.879,150.782c-10.904,37.492-22.177,76.266-36.621,93.597c-5.838,7.008-4.895,17.419,2.113,23.258
		C273.284,318.742,277.034,320.001,280.76,320.001z"/>
</g>
<g>
	<ellipse style="fill:#F0E178;" cx="355.098" cy="286.968" rx="8.258" ry="16.516"/>
	<path style="fill:#F0E178;" d="M256.001,505.807c-6.839,0-12.387-5.548-12.387-12.387V410.84c0-6.839,5.548-12.387,12.387-12.387
		s12.387,5.548,12.387,12.387v82.581C268.388,500.259,262.839,505.807,256.001,505.807z"/>
</g>
</svg>`;
  }
}