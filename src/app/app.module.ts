import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocRendererComponent } from './poc-renderer/poc-renderer.component';

import {PocRendererDirective} from './Directives/poc-renderer.directive';

@NgModule({
  declarations: [
    AppComponent,
    PocRendererComponent,
    PocRendererDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
