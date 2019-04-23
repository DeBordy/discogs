import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlbumDescriptionComponent } from './components/album-description/album-description.component';
import { AlbumNavigationComponent } from './components/album-navigation/album-navigation.component';
import { AlbumPresentationComponent } from './components/album-presentation/album-presentation.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { TrackComponent } from './components/track/track.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { UserCollectionComponent } from './components/user-collection/user-collection.component';

import { appReducers } from './store/reducers/app.reducers';
import { CollectionEffects } from './store/effects/collection.effects';
import { CollectionService } from "./services/collection.service";
import { FolderEffects } from './store/effects/folder.effects';
import { FolderService } from './services/folder.service';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AlbumDescriptionComponent,
    AlbumNavigationComponent,
    AlbumPresentationComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    TrackComponent,
    TrackListComponent,
    UserCollectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      CollectionEffects,
      FolderEffects,
    ]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  providers: [
    CollectionService,
    FolderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
