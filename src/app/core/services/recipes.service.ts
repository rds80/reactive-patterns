import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';
import { environment } from 'src/environments/environment';

const BASE_PATH = environment

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpClient: HttpClient) { }
  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${BASE_PATH}/recipes`)
  }
}
