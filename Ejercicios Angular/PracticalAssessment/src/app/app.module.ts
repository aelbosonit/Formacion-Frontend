import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchOnTypeComponent } from './components/search-on-type/search-on-type.component';
import { DisplayHideComponent } from './components/display-hide/display-hide.component';
import { SearchInputComponent } from './components/search-on-type/search-input/search-input.component';
import { CounterComponent } from './components/counter/counter.component';
import { ComponentCommunicationComponent } from './components/component-communication/component-communication.component';
import { ChildComponent } from './components/component-communication/child/child.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';
import { ControllerComponent } from './components/light-switch/controller/controller.component';
import { TrafficLightComponent } from './components/light-switch/traffic-light/traffic-light.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchOnTypeComponent,
    DisplayHideComponent,
    SearchInputComponent,
    CounterComponent,
    ComponentCommunicationComponent,
    ChildComponent,
    LightSwitchComponent,
    ControllerComponent,
    TrafficLightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
