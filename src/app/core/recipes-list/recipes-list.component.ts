import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Recipe } from '../model/recipe';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];
  destroy$ = new Subject<void>();

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().pipe(
      takeUntil(this.destroy$)).
      subscribe(result => {
        this.recipes = result;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
