import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { MyInterestComponent } from './my-interest/my-interest.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileImageComponent,
    MyInterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
