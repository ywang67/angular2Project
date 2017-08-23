import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Output() RecipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.RecipeSelected.emit();
  }

}
