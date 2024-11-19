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
import { TuningComponent } from './componenti/tuning/tuning.component';
import { ModalComponent } from './componenti/modal/modal.component';
import { StateManagementComponent } from './componenti/state-management/state-management.component';
import { SicurezzaComponent } from './componenti/sicurezza/sicurezza.component';
import { MetodiCrudComponent } from './componenti/metodi-crud/metodi-crud.component';
import { SpringSecurityComponent } from './componenti/spring-security/spring-security.component';
import { PaginazioneEfiltriComponent } from './componenti/paginazione-efiltri/paginazione-efiltri.component';
import { NotificheRealLifeComponent } from './componenti/notifiche-real-life/notifiche-real-life.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { AuthGuard } from './componenti/auth-guard.guard';
import { GestioneOrdiniComponent } from './componenti/gestione-ordini/gestione-ordini.component';
import { SistemacommentielikeComponent } from './componenti/sistemacommentielike/sistemacommentielike.component';
import { GestionePreferenzeUtenteComponent } from './componenti/gestione-preferenze-utente/gestione-preferenze-utente.component';
import { StatisticheeAnalisiComponent } from './componenti/statistichee-analisi/statistichee-analisi.component';
import { InternalizzazioneElocalizzazioneComponent } from './componenti/internalizzazione-elocalizzazione/internalizzazione-elocalizzazione.component';
import { SessioniERuoliComponent } from './componenti/sessioni-eruoli/sessioni-eruoli.component';
import { LogMonitoraggioComponent } from './componenti/log-monitoraggio/log-monitoraggio.component';
import { BackupComponent } from './componenti/backup/backup.component';
import { AnalyticsComponent } from './componenti/analytics/analytics.component';
import { AsyncComponent } from './componenti/async/async.component';
import { FeedbackComponent } from './componenti/feedback/feedback.component';
import { ChatComponent } from './componenti/chat/chat.component';
import { AbbonamentiEPagamentiComponent } from './componenti/abbonamenti-epagamenti/abbonamenti-epagamenti.component';
import { SistemiTerzePartiComponent } from './componenti/sistemi-terze-parti/sistemi-terze-parti.component';
import { MappeComponent } from './componenti/mappe/mappe.component';
import { PushComponent } from './componenti/push/push.component';
import { LinguaeTraduzioneComponent } from './componenti/linguae-traduzione/linguae-traduzione.component';
import { FaqComponent } from './componenti/faq/faq.component';
import { GdprComponent } from './componenti/gdpr/gdpr.component';
import { CaricaFileComponent } from './componenti/carica-file/carica-file.component';
import { InvitoComponent } from './componenti/invito/invito.component';
import { SondaggiComponent } from './componenti/sondaggi/sondaggi.component';
import { PromozioniComponent } from './componenti/promozioni/promozioni.component';
import { MachineLearningComponent } from './componenti/machine-learning/machine-learning.component';

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
  { path: 'tuning', component: TuningComponent},
  { path: 'modal', component: ModalComponent},
  { path: 'state', component: StateManagementComponent},
  { path: 'sicurezza', component: SicurezzaComponent},
  { path: 'crud', component: MetodiCrudComponent},
  { path: 'spring', component: SpringSecurityComponent},
  { path: 'pag', component: PaginazioneEfiltriComponent},
  { path: 'notifiche', component: NotificheRealLifeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'spring', redirectTo: 'spring', pathMatch: 'full' },
  { path: 'gestioneOrdini', component: GestioneOrdiniComponent},
  { path: 'commentiLike', component: SistemacommentielikeComponent},
  { path: 'gestionePref', component: GestionePreferenzeUtenteComponent},
  { path: 'statistiche', component: StatisticheeAnalisiComponent},
  { path: 'internalizzazione', component: InternalizzazioneElocalizzazioneComponent},
  { path: 'sessioni', component: SessioniERuoliComponent},
  { path: 'log', component: LogMonitoraggioComponent},
  { path: 'backup', component: BackupComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'asincrono', component: AsyncComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'abbonamento', component: AbbonamentiEPagamentiComponent},
  { path: 'terzeparti', component: SistemiTerzePartiComponent },
  { path: 'mappe', component: MappeComponent},
  { path: 'push', component: PushComponent },
  { path: 'lingue', component: LinguaeTraduzioneComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'gdpr', component: GdprComponent },
  { path: 'caricafile', component: CaricaFileComponent },
  { path: 'invito', component: InvitoComponent},
  { path: 'sondaggi', component: SondaggiComponent },
  { path: 'promozioni', component: PromozioniComponent },
  { path: 'machine', component: MachineLearningComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
