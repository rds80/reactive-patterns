import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(result => {
      this.recipes = result;
    });
  }

}
