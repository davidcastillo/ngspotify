import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import {SpotifyService} from './services/spotify.service';


import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
  imports: [BrowserModule,routing, FormsModule,HttpModule],
  declarations: [ AppComponent, AboutComponent, SearchComponent, NavbarComponent, ArtistComponent, AlbumComponent],
  providers: [ appRoutingProviders, SpotifyService ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
