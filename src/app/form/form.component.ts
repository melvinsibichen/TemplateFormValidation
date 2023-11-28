import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  userData: any = {}  

  onSubmit(x: any) {
    console.log(x)
    alert('Form saved sucessfully!');
    // x.reset();
  }
}
