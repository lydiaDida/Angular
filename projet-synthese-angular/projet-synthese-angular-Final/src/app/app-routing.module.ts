import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HebergementComponent } from './hebergement/hebergement.component';
import { HomeComponent } from './accueil/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
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



//Definir les routes 
const routes: Routes = [
{path:'', component:HomeComponent},
{path:'propos', component: ProposComponent},
{path:'connexion', component:ConnexionComponent},
{path:'connexionProp', component:ConnexionPropComponent},


{path:'admin', component:AdminComponent},
{path:'listeProprietaire', component:ListeProprietaireComponent},
{path:'listeHebergement', component:ListeHebergementComponent},
{path:'listeLocataire', component:ListeLocataireComponent},


{path:'hebergement', component:HebergementComponent},
{path:'inscreption', component:InscreptionComponent},
{path:'espaceLocataire', component:EspaceLocataireComponent},
{path:'espaceProprietaire', component:EspaceProprietaireComponent},
{path:'inscreptionProp', component:InscreptionPropComponent},
{path:'',redirectTo:'' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
