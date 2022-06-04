import { Output } from "@angular/core";
import * as EventEmitter from "events";

export class RecipesEventComponent {
    @Output() updateRating = new EventEmitter();
    updateRecipe(value: string) {
        this.updateRating.emit(value);
    }
}