import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModuleRoutingModule } from './app-module-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
   // AppComponent,
    BrowserModule,
    HttpClientModule,
    AppModuleRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleModule { }
