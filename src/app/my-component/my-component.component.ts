import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: '',
  template: '<html></html>'
})
export class MyComponentComponent implements OnInit {
  form!: FormGroup;
  

  ngOnInit(): void {
    const ratingControl = this.form.get('rating');
    ratingControl?.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    )
  }

}
