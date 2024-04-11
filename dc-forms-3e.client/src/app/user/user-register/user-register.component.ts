import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import { User } from '../../model/user';
// import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  // registrationForm: FormGroup;
  // user: User;
  // userSubmitted: boolean;
  // emailregex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
  // constructor(
  //   private fb: FormBuilder,
  //   private userServeice: UserService) { }
  // ngOnInit() {
  //   //   this.registrationForm = new FormGroup({
  //   //     name : new FormControl('',Validators.required),
  //   //     // email : new FormControl('',[Validators.required,Validators.pattern(this.emailregex)]),
  //   //     email : new FormControl('',Validators.required),
  //   //     mobile : new FormControl('',Validators.required),
  //   //     pass : new FormControl('',Validators.required),
  //   //     confpass : new FormControl('',Validators.required)
  //   //   },this.passwordMatchingValidator);
  //   this.createRegistrationForm();
  // }
  // onSubmit() {
  //   // console.log(this.registrationForm);
  //   this.userSubmitted = true;
  //   if (this.registrationForm.valid) {
  //     // this.user = Object.assign(this.user, this.registrationForm.value);
  //     this.userServeice.addUser(this.userData());
  //     // this.registrationForm.reset();
  //     this.userSubmitted = false;
  //     // alertyfy.success("Good");
  //   }
  // }
  // get fget() {
  //   return this.registrationForm.controls;
  // }
  // createRegistrationForm() {
  //   this.registrationForm = this.fb.group
  //     ({
  //       name: ['deven', Validators.required],
  //       email: ['admin@gmail.com', [Validators.required, Validators.email]],
  //       mobile: ['9999999999', Validators.required],
  //       password: ['111', [Validators.required, Validators.minLength(3)]],
  //       confpass: ['111', Validators.required]
  //     },
  //       { validators: this.passwordMatchingValidator }
  //     );
  // }
  // passwordMatchingValidator(fg: AbstractControl): ValidationErrors | null {
  //   return fg.get('password')?.value === fg.get('confpass')?.value ? null :
  //     { notmatched: true };
  // };
  // userData(): User {
  //   if (this.registrationForm) {
  //     return this.user = {
  //       name: this.name ? this.name.value : '',
  //       email: this.email ? this.email.value : '',
  //       password: this.password ? this.password.value : '',
  //       mobile: this.mobile ? this.mobile.value : ''
  //     };
  //   } else {
  //     return {} as User;
  //   }
  // }

  // // getter methods
  // get name() {
  //   return this.registrationForm.get('name') as FormControl;
  // }
  // get email() {
  //   return this.registrationForm.get('email') as FormControl;
  // }
  // get password() {
  //   return this.registrationForm.get('password') as FormControl;
  // }
  // get confpass() {
  //   return this.registrationForm.get('confpass') as FormControl;
  // }
  // get mobile() {
  //   return this.registrationForm.get('mobile') as FormControl;
  // }

}
