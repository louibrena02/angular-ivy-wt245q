import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProfileComponent } from "./profile/profile.html"

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
