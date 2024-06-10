import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  userName: string = 'Marina Miranda';
  identificationTypes = ['Identification Card', 'Passport', 'Driver License'];
  constructor(private form: FormBuilder) 
  {
    this.contactForm = this.form.group({
      name: ['', Validators.required],
      identficationType: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.contactForm.get('name')?.setValue(this.userName);
    this.contactForm.get('name')?.disable();
  }

  hasError(controlName: string, errorType: string) {    
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched;
  }

  onSubmit() {
    // return this.contactForm.valid;
    console.log(this.contactForm);
    return this.contactForm.markAllAsTouched();
  }  

}
