import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;
  validationMessage: string;
  user: User;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signinForm = this.formBuilder.group({
      mail: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }

  onSubmit(){
    const mail = this.signinForm.get('mail').value;
    const pwd = this.signinForm.get('pwd').value;

    this.authService.signInUser(mail, pwd).subscribe(
      (data: User) => {
        this.user = data;
        this.validationMessage = "CONNECTE";
        localStorage.setItem("uno", JSON.stringify(data));
        this.router.navigate(['/homepage']);
      }, (error) => {
        if(error.status = '404'){
          this.errorMessage = "Invalid Credentials";
        }
      }
    );
  }
}
