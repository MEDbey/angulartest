import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdttableComponent } from './edttable/edttable.component';
import { EdtmodulesComponent } from './edtmodules/edtmodules.component';
import { EdtmateresComponent } from './edtmateres/edtmateres.component';
import { EdtPeriodeComponent } from './edt-periode/edt-periode.component';

@NgModule({
  declarations: [
    AppComponent,
    EdttableComponent,
    EdtmodulesComponent,
    EdtmateresComponent,
    EdtPeriodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
