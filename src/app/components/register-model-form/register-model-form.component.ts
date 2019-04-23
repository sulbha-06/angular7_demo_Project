import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-model-form',
  templateUrl: './register-model-form.component.html',
  styleUrls: ['./register-model-form.component.css']
})
export class RegisterModelFormComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }
  updateName() {
    this.name.setValue('Nancy');
  }
  onSubmit(){
    console.warn(this.name.value);
  }
}
