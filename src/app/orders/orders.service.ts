import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  public products = [
    { name :"Gold Filter", qauntity: 0},
    { name :"Gold Flake SPL", qauntity: 0},
    { name :"Gold Flake RED", qauntity: 0},
    { name :"Gold Flake BLUE", qauntity: 0},
    { name :"Scissors", qauntity: 0},
    { name :"Flake Gold Crest", qauntity: 0},
    { name :"IndieMint", qauntity: 0},
    { name :"Wave", qauntity: 0},
    { name :"Wave Boss", qauntity: 0},
    { name :"Navy Cut(Wills)", qauntity: 0},
    { name :"Classic Connect", qauntity: 0},
    { name :"Classic TM", qauntity: 0},
    { name :"Mixpod", qauntity: 0},
    { name :"SLK", qauntity: 0},
    { name :"Duke", qauntity: 0},
    { name :"Berkley", qauntity: 0}
  ];
}
