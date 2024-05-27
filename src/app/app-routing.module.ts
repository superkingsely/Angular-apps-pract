import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SinglecategoryComponent } from './pages/singlecategory/singlecategory.component';
import { SinglepostComponent } from './pages/singlepost/singlepost.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsandconditionComponent } from './pages/termsandcondition/termsandcondition.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'category',
    component:SinglecategoryComponent
  },
  {
    path:'post',
    component:SinglepostComponent
  },
  {
    path:'terms',
    component:TermsandconditionComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
