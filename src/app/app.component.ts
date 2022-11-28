import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  title = 'Myapp';
  new_ap = 'abhi';
  ngOnInit(): void {
  }
  check_login = () => {
    alert('login chcek');
    const ab = '/gallery';
    this.router.navigate([ab]);
  }
}
