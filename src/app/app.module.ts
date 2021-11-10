import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoaderComponent} from '../components/loader/loader.component';
import {GitRequestComponent} from '../components/git-request/git-request.component';
import {ResponseItemComponent} from '../components/git-request/response-item/response-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    GitRequestComponent,
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
