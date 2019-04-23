import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCollectionComponent } from './components/user-collection/user-collection.component';

const routes: Routes = [
  {path: '', component: UserCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
