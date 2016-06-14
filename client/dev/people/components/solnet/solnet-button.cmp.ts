import {Component} from '@angular/core';

@Component({
  selector: 'solnet-button',
  styles: [`
    .solnet-button-wrapper {
      cursor: pointer;
      padding: 12px 24px;
      
      text-align: center;
      border-radius: 40px;
      
      min-width: 128px;
      display: inline-block;
      
      background: #fff;
      opacity: 0.6;
      color: #3E5868;
      font-weight: 500;
      font-style: italic;
      font-family: 'adelle';
      
      margin: 12px;
      
      transition: all 200ms ease;

    }
    
    .solnet-button-wrapper:hover {
      opacity: 0.8;    
    }
  `],
  template: `<div class="solnet-button-wrapper"><ng-content></ng-content></div>`,
})
export class SolnetButton { }
