import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag} from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }



  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.
        includes(tag));

  }

  getAllTag():Tag[]{
   return [
     { name: 'All', count: 8 },
     { name: 'FastFood', count: 6 },
     { name: 'Pizza', count: 4 },
     { name: 'Lunch', count: 3 },
     { name: 'SlowFood', count: 2 },
     { name: 'Hamburger', count: 1 },
     { name: 'Fry', count: 1 },
     { name: 'Soup', count: 1 },
   ];
    
    
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', "Pizza", 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 10,
        cookTime: '10-20',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 4.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        star: 3.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france', 'india'],
        star: 3.3,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['indian', 'asia'],
        star: 3.0,
        imageUrl: '/assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', "Pizza", 'Lunch'],
      },
      {
        id: 7,
        name: 'Vegetables burgur',
        price: 10,
        cookTime: '20-30',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood',"Pizza"],
      },
      {
        id: 8,
        name: 'Vegetables spicy Pizza',
        price: 5,
        cookTime: '10-15',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', "Pizza"],
      }
    ];
  }
}
