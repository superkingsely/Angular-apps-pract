import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { HomeComponent } from './main/home/home.component';
import { ResumeComponent } from './main/resume/resume.component';
import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'portfolios',
    component: PortfolioComponent,
  },
  {
    path: 'resumes',
    component: ResumeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
