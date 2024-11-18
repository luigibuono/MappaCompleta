import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarradiricercaComponent } from './componenti/barradiricerca/barradiricerca.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './componenti/nav/nav.component';
import { ToggleComponent } from './componenti/toggle/toggle.component';
import { ReactiveFormComponent } from './componenti/reactive-form/reactive-form.component';
import { DriverFormComponent } from './componenti/driver-form/driver-form.component';
import { ButtonRComponent } from './componenti/button-r/button-r.component';
import { LoadingComponent } from './componenti/loading/loading.component';
import { CarouselComponent } from './componenti/carousel/carousel.component';
import { LazyLComponent } from './componenti/lazy-l/lazy-l.component';
import { AutenticazioneComponent } from './componenti/autenticazione/autenticazione.component';
import { ResponsiveComponent } from './componenti/responsive/responsive.component';
import { TuningComponent } from './componenti/tuning/tuning.component';
import { ModalComponent } from './componenti/modal/modal.component';
import { StateManagementComponent } from './componenti/state-management/state-management.component';
import { SicurezzaComponent } from './componenti/sicurezza/sicurezza.component';
import { MetodiCrudComponent } from './componenti/metodi-crud/metodi-crud.component';
import { SpringSecurityComponent } from './componenti/spring-security/spring-security.component';
import { PaginazioneEfiltriComponent } from './componenti/paginazione-efiltri/paginazione-efiltri.component';
import { CaricaFileComponent } from './componenti/carica-file/carica-file.component';
import { NotificheRealLifeComponent } from './componenti/notifiche-real-life/notifiche-real-life.component';
import { GestioneOrdiniComponent } from './componenti/gestione-ordini/gestione-ordini.component';
import { SistemiCommentiLikeComponent } from './componenti/sistemi-commenti-like/sistemi-commenti-like.component';
import { InsureComponent } from './componenti/insure/insure.component';
import { AutomotiveComponent } from './componenti/automotive/automotive.component';
import { AeronauticaComponent } from './componenti/aeronautica/aeronautica.component';
import { PlcComponent } from './componenti/plc/plc.component';
import { LogisticaComponent } from './componenti/logistica/logistica.component';

@NgModule({
  declarations: [
    AppComponent,
    BarradiricercaComponent,
    HomeComponent,
    NavComponent,
    ToggleComponent,
    ReactiveFormComponent,
    DriverFormComponent,
    ButtonRComponent,
    LoadingComponent,
    CarouselComponent,
    LazyLComponent,
    AutenticazioneComponent,
    ResponsiveComponent,
    TuningComponent,
    ModalComponent,
    StateManagementComponent,
    SicurezzaComponent,
    MetodiCrudComponent,
    SpringSecurityComponent,
    PaginazioneEfiltriComponent,
    CaricaFileComponent,
    NotificheRealLifeComponent,
    GestioneOrdiniComponent,
    SistemiCommentiLikeComponent,
    InsureComponent,
    AutomotiveComponent,
    AeronauticaComponent,
    PlcComponent,
    LogisticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
