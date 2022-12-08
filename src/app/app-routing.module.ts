import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
{path: "enseignants", component : EnseignantsComponent},
{path: "add-enseignant", component : AddEnseignantComponent},
{ path: "", redirectTo: "enseignants", pathMatch: "full" },
{path: "updateEnseignant/:id", component: UpdateEnseignantComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{path: "rechercheParNom", component : RechercheParNomComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
