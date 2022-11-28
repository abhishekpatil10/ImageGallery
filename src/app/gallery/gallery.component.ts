import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router,
    private activatedRoute: ActivatedRoute) {

  }
  photos: any = [];
  api = "https://jsonplaceholder.typicode.com/photos?limit=30"
  loading = true;
  ngOnInit() {
    this.http.get(this.api).subscribe(data => {
      this.photos = data;
      this.loading = false;
    });
  }
  show_gallery = (a: any) => {
    const ab = '/gallerydetail/' + a;
    this.router.navigate([ab]);
  }
}
