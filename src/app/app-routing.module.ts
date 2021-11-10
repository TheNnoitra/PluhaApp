import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoaderComponent} from '../components/loader/loader.component';
import {GitRequestComponent} from '../components/git-request/git-request.component';

const routes: Routes = [
  {path: 'loader', component: LoaderComponent},
  {path: 'request', component: GitRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
