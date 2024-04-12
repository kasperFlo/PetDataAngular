import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IndexMainComponent } from './index-main/index-main.component';
import { IndexPetsComponent } from './index-pets/index-pets.component';
import { IndexOwnersComponent } from './index-owners/index-owners.component';
import { DetailsPetsComponent } from './details-pets/details-pets.component';
import { DetailsOwnersComponent } from './details-owners/details-owners.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexMainComponent,
    IndexPetsComponent,
    IndexOwnersComponent,
    DetailsPetsComponent,
    DetailsOwnersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
