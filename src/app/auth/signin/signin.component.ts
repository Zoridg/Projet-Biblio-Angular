import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup = new FormGroup({});
  user: User;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if(this.authService.isConnected()) {
      this.router.navigate(['/events']);
    }
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      mail: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const mail = this.signinForm.get('mail').value;
    const pwd = this.signinForm.get('pwd').value;

    this.authService.signInUser(mail, pwd).subscribe(
      (data: User) => {
        this.authService.user = data;
        this.router.navigate(['events']);
      },
      (error) => {
        if (error.status = '404') {
          this.errorMessage = 'Login et mot de passe incorrect';
        }
      }
    );
  }
}
