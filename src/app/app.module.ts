import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { FeedComponent } from './components/options/home/feed/feed.component';
import { PostTweetComponent } from './components/options/home/post-tweet/post-tweet.component';
import { OptionsComponent } from './components/options/options.component';
import { NotificationsComponent } from './components/options/notifications/notifications.component';
import { HomeComponent } from './components/options/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    FeedComponent,
    PostTweetComponent,
    OptionsComponent,
    NotificationsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
