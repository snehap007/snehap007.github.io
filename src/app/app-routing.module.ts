import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { AcademicComponent } from './layout/academic/academic.component';
import { ContactComponent } from './layout/contact/contact.component';
import { HomeComponent } from './layout/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { SkillsComponent } from './layout/skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: LayoutComponent, 
    children: [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'academic', component: AcademicComponent},
    { path: 'contact', component: ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
