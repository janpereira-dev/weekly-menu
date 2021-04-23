import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './atomic/templates/menu-list/menu-list.component';

const routes: Routes = [
  { path: '', component: MenuListComponent },
  { path: '**', component: MenuListComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
