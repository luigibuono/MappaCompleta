import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarradiricercaComponent } from './componenti/barradiricerca/barradiricerca.component';
import { HomeComponent } from './home/home.component';
import { ToggleComponent } from './componenti/toggle/toggle.component';
import { ReactiveFormComponent } from './componenti/reactive-form/reactive-form.component';
import { DriverFormComponent } from './componenti/driver-form/driver-form.component';
import { ButtonRComponent } from './componenti/button-r/button-r.component';
import { LoadingComponent } from './componenti/loading/loading.component';
import { CarouselComponent } from './componenti/carousel/carousel.component';
import { InsureComponent } from './componenti/insure/insure.component';
import { AutomotiveComponent } from './componenti/automotive/automotive.component';
import { AeronauticaComponent } from './componenti/aeronautica/aeronautica.component';
import { PlcComponent } from './componenti/plc/plc.component';
import { LogisticaComponent } from './componenti/logistica/logistica.component';

const routes: Routes = [
  { path: 'barra', component: BarradiricercaComponent },
  { path: 'toggle', component: ToggleComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'driver', component: DriverFormComponent },
  { path: 'buttonR', component: ButtonRComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'insure', component: InsureComponent},
  { path: 'automotive', component: AutomotiveComponent},
  { path: 'aeronautica', component: AeronauticaComponent },
  { path: 'plc', component: PlcComponent},
  { path: 'logistica', component: LogisticaComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
