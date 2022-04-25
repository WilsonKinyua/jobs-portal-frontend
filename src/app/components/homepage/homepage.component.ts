import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  categories: any = [];

  constructor(private catService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.catService.getCategories().subscribe(
      (response) => {
        this.categories = response;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
