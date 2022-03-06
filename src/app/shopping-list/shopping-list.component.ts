import { Component, OnInit } from '@angular/core';
import { Ingedient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingedient[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
