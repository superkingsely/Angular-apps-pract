import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { HomeComponent } from './main/home/home.component';
import { ResumeComponent } from './main/resume/resume.component';
import { ContactComponent } from './main/contact/contact.component';
import { CardComponent } from './main/portfolio/card/card.component';
import { ProjectsService } from './projects.service';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import { ModalComponent } from './modal/modal.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    MainComponent,
    PageNotFoundComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    CardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
