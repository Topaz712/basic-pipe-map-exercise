import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
// import { map} from 'rxjs/operators'
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foodssearch:string=""
  // example:type = ""

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //localhost:4200/foods/chheese
    this.route.params.pipe(map((haha)=>{
      // {search: 'chheese'}
      // haha['search'] -> 'chheese'
      // "this is what you searched for chheese"
      return "this is what you searched for " + haha['search'].toUpperCase();
      // foods -> this is what you searched for chheese
    })).subscribe(foods=>{
      this.foodssearch = foods;
      console.log(foods);
    })
    // this.route.params.pipe(map((anyname)=>{
    // {search: 'blahblah'}
      // haha['search'] -> 'blahblah'
      // "this is what you searched for blahblah"
    //return "this is what you searched for " + haha['search'];
    // })).subscribe(reftodatabeingreferenced=>{
    //   this.foodssearch = reftodatabeingreferenced;
    //   console.log(reftodatabeingreferenced);
    // })
  }
}
