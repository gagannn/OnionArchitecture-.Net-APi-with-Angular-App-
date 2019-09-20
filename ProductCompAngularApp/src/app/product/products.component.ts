import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    setTimeout(( )=>this.appservice .getProducts().subscribe(data => {this.products=data;}),200
  )
  //   this.appservice .getProducts().subscribe(data => {this.products=data;});
  //
 }
  products: any=[];
  searchText="";
 // showImage=false;
  imageWidth=50;
  imageMargin=2;
  name="Gagan";
  toggleImage():void{
    //this.showImage=!this.showImage;
  }

  constructor(private appservice:AppService,private router:Router) { }

  ngOnInit() {
    // this.products=this.sc.getProducts();
    this.appservice .getProducts().subscribe(data => {this.products=data;});
    console.log(this.products);
  }
  editproduct(id):void{
    this.router.navigate(['editproduct',id])
  }
  productDetails(id):void{
    
    this.router.navigate(['productdetails',id])
  }
  DeleteProd(id):void{
    this.router.navigate(['deleteproduct',id])
  }
  

}
