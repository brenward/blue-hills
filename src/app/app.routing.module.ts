import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from "app/projects/projects.component";

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}