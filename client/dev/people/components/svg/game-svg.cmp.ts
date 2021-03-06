import {Component} from '@angular/core';

@Component({
  selector: 'game-svg',
  styles: [`
    :host {
      cursor: pointer;
      height: 30px;
      width: 30px;
      display: inline-block;
    }
    .cls-1{fill:#b1c8db;}.cls-2{fill:none;stroke:#b1c8db;stroke-miterlimit:10;stroke-width:3.03px;}
    :host.router-link-active .cls-1, :host.router-link-active .cls-2 {fill:#fff;}
  `],
  template: `<svg id="Artwork" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs></defs><title>icon</title><path class="cls-1" d="M42,51.67l1-7c4.72-.47,9.24-2,9.24-7.5,0-2.56-1.49-3.73-4.44-3.73a14,14,0,0,0-3.14.27,0.92,0.92,0,0,0-.83.79l-0.82,2.63-2.83.16,0.75-5.38a21.78,21.78,0,0,1,7.27-1.42c4.56,0,7.86,1.65,7.86,6.68,0,5.86-4,8.88-9.82,9.86l-0.63,4.6H42Zm0.71,7.78c-1.49,0-2.28-.71-2.28-2a2.65,2.65,0,0,1,3-2.91c1.49,0,2.28.71,2.28,2A2.65,2.65,0,0,1,42.67,59.45Z"/><path class="cls-2" d="M76.17,18.25c-4-5-14.36-13.45-27.9-13.45-9.05,0-17.67,3.79-25.61,11.25l0,0c-7.74,8-6.73,15.32-5.45,24.63l0.24,1.74c0.21,1.58-1.17,4-2.51,6.39-2,3.55-4.1,7.22-1.55,9,4.35,3,5.1,8.79,5.83,14.44,0.17,1.34.35,2.73,0.58,4.07,0.39,2.32,2.35,3.45,6,3.45a44.91,44.91,0,0,0,5-.39,36.87,36.87,0,0,1,3.88-.32,5.68,5.68,0,0,1,1.45.15c4.38,1.19,8.21,10,9.59,15.35a1.26,1.26,0,0,0,2.08.59L70.24,73.72a1.26,1.26,0,0,0,.33-1.29c-2-6.2,2.14-12.26,5.77-17.6a52.29,52.29,0,0,0,4.11-6.7C85.18,38.11,81.78,25.26,76.17,18.25Z"/></svg>`,
})
export class GameSvg { }
