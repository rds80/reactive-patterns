import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesListComponent } from './core/services/recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    MyComponentComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
