// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { MenuListComponent } from './atomic/templates/menu-list/menu-list.component';

// Service
import { MenusService } from './services/menus.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
