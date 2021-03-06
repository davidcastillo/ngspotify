import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';


const appRoutes: Routes = [
    {path:'', component: SearchComponent},
    {path:'about', component: AboutComponent},
    {path:'artist/:id', component: ArtistComponent},
    {path:'album/:id', component: AlbumComponent}
    ];

// este const es las rutas que muestra al dar clic en el navbar

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);