import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing-module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { MissionComponent } from './components/mission/mission.component';
import { HomeComponent } from './pages/home/home.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { MainpageslidingComponent } from './pages/mainpagesliding/mainpagesliding.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainpageComponent,
    FooterComponent,
    ServicesComponent,
    MissionComponent,
    HomeComponent,
    ExpertiseComponent,
    PartnershipComponent,
    MainpageslidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
