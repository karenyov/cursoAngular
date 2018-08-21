import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
