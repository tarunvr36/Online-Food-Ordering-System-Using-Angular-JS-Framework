import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  searchItem:string = '';
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.searchItem = params['searchItem'];
    })
  }
  search(): void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/' +this.searchItem)
  }

}
