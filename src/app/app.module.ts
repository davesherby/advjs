import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChannelInputComponent } from './channel-input/channel-input.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelsComponent } from './channels/channels.component';


@NgModule({
  declarations: [
    AppComponent,
    ChannelInputComponent,
    ChannelComponent,
    ChannelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
