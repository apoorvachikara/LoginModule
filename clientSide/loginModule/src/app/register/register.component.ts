import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public registrationForm : FormGroup = new FormGroup({
              name : new FormControl(''),
              phoneNumber : new FormControl(''),
              company : new FormControl(''),
              city : new FormControl(''),
      });

}
