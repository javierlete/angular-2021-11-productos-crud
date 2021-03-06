import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { MensajesComponent } from './mensajes/mensajes.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
