import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/AboutUs/aboutUs.component';
import { MainContentComponent } from 'src/MainContent/mainContent.component';
import { SideBarComponent } from 'src/SideBar/sideBar.component';

const routes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'Home', component: MainContentComponent },
  { path: '', component: MainContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
