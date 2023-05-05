import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { FormapiService } from 'src/app/services/formapi/formapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private apiService: FormapiService) {}
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
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    products: this.fb.array([
      this.fb.control('')
    ])
  });

  get products() {
    return this.profileForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(this.fb.control(''));
  }

  ngOnInit() {
    // this.name = this.route.url;
    // console.log(this.fullName.value);
    this.profileForm.patchValue({
      firstName: 'Ram Enjam',
      address: {
        street: '123 Drew Street, Ram Add'
      }
    });

    this.apiService.getDummyData().subscribe((data: any) => {
      console.log('Back-end Data Requested', data);
    })

  }

  updateNameonClick() {
    this.fullName.setValue('Ram Enjam');
  }

  onSubmit(){
    // console.warn(this.profileForm.value);
    const formData = {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      address: this.profileForm.value.address,
      products: this.profileForm.value.products
    }

    // console.log(formData);

    this.apiService.submitFormData(formData).subscribe(response => {
      console.log(response);
    })

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
