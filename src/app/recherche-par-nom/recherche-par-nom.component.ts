import { Component } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { Matiere } from '../model/matiere.model';
import { EnseignantService } from '../service/enseignant.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {


  nomEnseignant! : string;
  enseignant! : Enseignant[];
  IdMatiere! : number;
  produits! : Enseignant[];
  allProduits! : Enseignant[];
searchTerm!: string;

  constructor(private enseignantService: EnseignantService) {
    //this.enseignants = [];
    }
  rechercherProds(){
    this.enseignantService.rechercherParNom(this.nomEnseignant).
    subscribe(prods => {
    this.produits = prods; 
    console.log(prods)});
    }
    ngOnInit(): void {
      this.enseignantService.listeEnseignantt().subscribe(prods => {
      console.log(prods);
      this.allProduits = prods;
      });
      }
      onKeyUp(filterText : string){
      this.produits = this.allProduits.filter(item =>
      item.nomEnseignant!.toLowerCase().includes(filterText));
      }


}
