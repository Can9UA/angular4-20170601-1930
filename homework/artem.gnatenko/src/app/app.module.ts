import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { TimeElapsedPipe } from './time-elapsed.pipe';
import { MailComponent } from './mail-box/mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    TimeElapsedPipe,
    MailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
