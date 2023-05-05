import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  name: any;
  fullName = new FormControl('');
  // profileForm = new FormGroup({
  //   firstName: new FormControl('', [Validators.required]),
  //   lastName: new FormControl('', [Validators.required]),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })
  
  profileForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  ngOnInit() {
    // this.name = this.route.url;
    // console.log(this.fullName.value);
    this.profileForm.patchValue({
      firstName: 'Ram ENjam',
      address: {
        street: '123 Drew Street, Ram Add'
      }
    });
  }

  updateNameonClick() {
    this.fullName.setValue('Ram Enjam');
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  updateprofileonClick(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
