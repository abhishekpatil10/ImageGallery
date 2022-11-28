import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
  param_id: any;
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) {
  }
  photos: any = [];
  api = "https://jsonplaceholder.typicode.com/photos?id="
  loading = true;
  ngOnInit() {
    console.log('GalleryDetailComponent');
    this.param_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api = this.api + this.param_id;
    this.http.get(this.api).subscribe(data => {
      this.photos = data;
      this.loading = false;
    });
  }
}
