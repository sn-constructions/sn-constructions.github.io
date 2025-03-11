import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'work', component: OurWorkComponent },
    { path: 'service', component: ServicesComponent },
    { path: 'projects', component: ProjectsComponent },
    
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppModule { }
 