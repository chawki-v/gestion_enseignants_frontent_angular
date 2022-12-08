import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../service/enseignant.service';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent  implements OnInit{

  enseignants? : Enseignant[];

constructor(private enseignantService: EnseignantService) {
  //this.enseignants = [];
  }

  ngOnInit(): void {
    this.chargerProduits();
    }
    chargerProduits(){
    this.enseignantService.listeEnseignantt().subscribe(prods => {
    console.log(prods);
    this.enseignants = prods;
    }); 
    }
    supprimerEnseignant(p: Enseignant)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.enseignantService.supprimerEnseignant(p.idEnseignant!).subscribe(() => {
    console.log("produit supprimé");
    this.chargerProduits();
    });
    } 
    
  

}
