import {Component, Input, Output, EventEmitter} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import {QuizService} from "../../services/quiz.service";
import {SOLNET_LIST_DIRECTIVES} from "../solnet/solnet-list.cmp";
import {SolnetButton} from "../solnet/solnet-button.cmp";
import {SVG_DIRECTIVES} from "../svg/index";



@Component({
  selector: 'question-avatar-cmp',
  styles: [`
    
    .option-status {
      transition: all 200ms ease;
      background-color: #fff;
      border: 1px solid #aaa;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .option-status.option-selected {
      background-color: #0E5895;
      border-color: #0E5895;
    }
    .option-status.option-correct {
      background-color: #83C441;
      border-color: #83C441;
    }
    .option-status.option-incorrect {
      background-color: #E04332;
      border-color: #E04332;
    }
    
    .avatar-container .option-status {
      height: 48px;
      width: 48px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .list-item {
      min-height: 70px;
      padding: 0 20px;
      cursor: pointer;
      border-radius: 40px;
      transition: background-color 200ms ease;
    }
    
    .list-item:hover {
      background-color: #eee;
    }
    
    img.question-avatar{
      border-radius: 50%;
      width: 192px;
    }
    
    solnet-list {
      width: 300px;
      margin-top: 12px;
    }
    
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
  `],
  template: `
    
    <img class="question-avatar" src="{{quiz.question}}" />

    <solnet-list>
      <solnet-list-item class="list-item" (click)="selectOption(option)" *ngFor="let option of quiz.options">
        
        <div class="avatar-container">
          <div class="option-status {{getOptionClass(option)}}">
            <tick-svg *ngIf="option.correct === true"></tick-svg>
            <cross-svg *ngIf="option.correct === false"></cross-svg>
          </div>
        </div>
  
        <div class="user-content-container">
          <h3>{{option.name}}</h3>
        </div>
      </solnet-list-item>
    </solnet-list>

  `,
  directives: [SOLNET_LIST_DIRECTIVES, SolnetButton, SVG_DIRECTIVES]
})
export class QuestionAvatarComponent {

  @Input()
  quiz: any;

  @Output()
  onOptionSelect: EventEmitter<string> = new EventEmitter();

  constructor(){}

  selectOption(option){
    this.onOptionSelect.emit(option);
  }

  getOptionClass(option){
    return option.correct === undefined ?
      (option.selected ? 'option-selected' : '') :
      (option.correct ? 'option-correct' : 'option-incorrect');
  }

}