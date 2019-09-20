import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { ProductInMemDataService } from './product-in-mem-data.service';
import { ProductFilterPipe } from './ProductFilter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
//import { ProductFilterPipe } from './ProductFilter.pipe';



const productroutes:Routes = [
  {path:'products',component:ProductsComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'deleteproduct/:id',component:DeleteProductComponent},
  {path:'editproduct/:id',component:EditProductComponent},
];
@NgModule({
  declarations: [AddProductComponent, EditProductComponent, DeleteProductComponent, ProductsComponent,ProductFilterPipe, ProductDetailsComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(productroutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class ProductModule { }
