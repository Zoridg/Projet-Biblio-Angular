import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  public ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.signupForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pwd: ['', Validators.required],
      pseudo: ['', Validators.required]
    });
  }

  public onSubmit() {
    const user = {
      mail: this.signupForm.get('mail').value,
      pwd: this.signupForm.get('pwd').value,
      pseudo: this.signupForm.get('pseudo').value,
      fake: 1
    } as User;

    this.authService.createNewUser(user).subscribe(
      (data: User) => {
        this.authService.user = data;
        this.router.navigate(['events']);
      },
      (error) => {
        if (error.status = '406') {
          this.errorMessage = 'L\'adresse mail existe déjà';
        }
      }
    );
  }

}
