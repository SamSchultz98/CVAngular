import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationExperienceComponent } from './education-experience/education-experience.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    WorkExperienceComponent,
    EducationExperienceComponent
  ]
})
export class AppModule { }
