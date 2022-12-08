import { Component } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { Matiere } from '../model/matiere.model';
import { EnseignantService } from '../service/enseignant.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent {
  enseignants! : Enseignant[];
  IdMatiere! : number;
  matiere! : Matiere[];
  constructor(private enseignantService: EnseignantService) {
    //this.enseignants = [];
    }
  ngOnInit(): void {
    this.enseignantService.listeCategories().
    subscribe(cats => {this.matiere = cats;
      console.log(cats);
    });
    }

    onChange() {
      this.enseignantService.rechercherParCategorie(this.IdMatiere).
      subscribe(prods =>{this.enseignants=prods});
      }
    
}
