import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/core/header/header.component';
import { AboutComponent } from './layout/about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/core/footer/footer.component';
import { SkillsComponent } from './layout/skills/skills.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { AcademicComponent } from './layout/academic/academic.component';
import { ContactComponent } from './layout/contact/contact.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    LayoutComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    AcademicComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
