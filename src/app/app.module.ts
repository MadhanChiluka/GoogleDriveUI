import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DriveUiComponent } from './drive-ui/drive-ui.component';
import { GapiSession } from './sessions/gapi-session';

@NgModule({
  declarations: [
    AppComponent,
    DriveUiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GapiSession
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
