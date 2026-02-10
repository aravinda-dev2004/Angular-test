import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Customer {
  name: string;
  age: number;
  address: string;
}

@Component({

  selector: 'app-body',
  imports: [FormsModule],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  customers: Customer= {
    name: '',
    age: 0,
    address: ''
  };

  name:string = '';

  clickMe() {
    alert('Hello, ' + this.customers.name + '!');
  }
}
