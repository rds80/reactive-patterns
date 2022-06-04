import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  criteria: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url
      .subscribe(url => console.log(`The url changed to: ${url}`));

    this.activatedRoute.queryParams.subscribe(params => {
      this.processCriteria(params.criteria);
    });
  }
  processCriteria(criteria: any) {
    this.criteria = criteria;
  }

}
