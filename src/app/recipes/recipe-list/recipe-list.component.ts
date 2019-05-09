import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [new Recipe('Thai', 'this is from Buffalo wild wings',
  'https://assets3.thrillist.com/v1/image/2746686/size/gn-gift_guide_variable_c;jpeg_quality=20.jpg'),
  new Recipe('Thai', 'this is from Buffalo wild wings',
    'https://assets3.thrillist.com/v1/image/2746686/size/gn-gift_guide_variable_c;jpeg_quality=20.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
