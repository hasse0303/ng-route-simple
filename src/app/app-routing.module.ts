import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './product/detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent,
  children : [
    {path: 'detail', component: DetailComponent ,
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
