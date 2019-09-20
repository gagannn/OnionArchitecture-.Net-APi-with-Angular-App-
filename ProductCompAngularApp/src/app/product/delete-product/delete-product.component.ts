import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Product } from '../Entities/Product.Entity';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
//import { ProductInMemDataService } from '../product-in-mem-data.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productidtodelete:any;
  deleteProductForm:FormGroup;
  producttodelete;
  constructor(private route :ActivatedRoute, private appservice:AppService, private fb:FormBuilder, private router:Router) { }
Title:string;
  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.productidtodelete=data.id;

    })   
    
  }

  prod:Product;
  
  deleteProduct(){
    this.route.params.subscribe((data)=>{
      this.appservice.deleteProduct(data.id).subscribe(data=>{
      this.prod=data;
      console.log(this.prod);
    });
    })
    
    this.router.navigate(['home']);
  }

  Goback():void{
    this.router.navigate(['home'])
  }

}
