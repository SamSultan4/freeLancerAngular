import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutUsComponent } from 'src/AboutUs/aboutUs.component';
import { FooterComponent } from 'src/Footer/footer.component';
import { HeaderComponent } from 'src/Header/header.component';
import { MainContentComponent } from 'src/MainContent/mainContent.component';
import { SideBarComponent } from 'src/SideBar/sideBar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    SideBarComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
