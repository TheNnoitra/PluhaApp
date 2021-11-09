import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PluhaAppComponent} from './pluha-app/pluha-app.component';
import {LoaderComponent} from './pluha-app/loader/loader.component';
import {GitRequestComponent} from './pluha-app/git-request/git-request.component';
import {ResponseListComponent} from './pluha-app/git-request/response-list/response-list.component';
import {ResponseItemComponent} from './pluha-app/git-request/response-list/response-item/response-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PluhaAppComponent,
    LoaderComponent,
    GitRequestComponent,
    ResponseListComponent,
    ResponseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
