import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './accueil/home.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { ConnexionComponent } from './connexion/connexion.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProposComponent } from './propos/propos.component';
import { InscreptionComponent } from './inscreption/inscreption.component';
import { ConnexionPropComponent } from './connexion-prop/connexion-prop.component';
import { InscreptionPropComponent } from './inscreption-prop/inscreption-prop.component';
import { AdminComponent } from './admin/admin.component';
import { EspaceLocataireComponent } from './espace-locataire/espace-locataire.component';
import { EspaceProprietaireComponent } from './espace-proprietaire/espace-proprietaire.component';
import { ListeHebergementComponent } from './liste-hebergement/liste-hebergement.component';
import { ListeProprietaireComponent } from './liste-proprietaire/liste-proprietaire.component';
import { ListeLocataireComponent } from './liste-locataire/liste-locataire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HebergementComponent,
    ConnexionComponent,
    ProposComponent,
    InscreptionComponent,
    ConnexionPropComponent,
    InscreptionPropComponent,
    AdminComponent,
    EspaceLocataireComponent,
    EspaceProprietaireComponent,
    ListeHebergementComponent,
    ListeProprietaireComponent,
    ListeLocataireComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
