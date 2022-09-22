import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchOnTypeComponent } from './components/search-on-type/search-on-type.component';
import { DisplayHideComponent } from './components/display-hide/display-hide.component';
import { SearchInputComponent } from './components/search-on-type/search-input/search-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchOnTypeComponent,
    DisplayHideComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
