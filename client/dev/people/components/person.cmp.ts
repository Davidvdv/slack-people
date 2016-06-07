import {Component} from '@angular/core'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button'
import {SlackService} from "../services/slack.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'person-cmp',
  templateUrl: './people/templates/person.cmp.html',
  providers: [SlackService],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class PersonComponent {


  usersStream: Observable<any>;
  
  constructor(private slackService: SlackService){
    this.usersStream = slackService.getUsersAsStream();
    
    // this.usersStream.subscribe(users => {
    //   console.log('Person component users', users);
    // })
  }
  
  
}
