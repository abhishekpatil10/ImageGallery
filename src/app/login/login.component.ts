import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }
  username = '';
  password = '';
  check_login = () => {
    console.log('-->',this.username,this.password);
    if (this.username == "admin" && this.password == "password") {
      alert('login chcek');
      const ab = '/gallery';
      this.router.navigate([ab]);
    }
    else {
      alert('invalid credits');
    }
  }
}
