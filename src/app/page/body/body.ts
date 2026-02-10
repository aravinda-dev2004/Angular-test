import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-body',
  imports: [FormsModule],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

  name:string = '';

  clickMe() {
    alert('Hello, ' + this.name + '!');
  }
}
