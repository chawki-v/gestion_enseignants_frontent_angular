import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../service/enseignant.service';
import { Matiere } from '../model/matiere.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit{
  newEnseignant = new Enseignant(); 
  message:string="";
  matiere! : Matiere[];
newIdMat! : number;
newMatiere! : Matiere;

  constructor(private produitService: EnseignantService,
    private router :Router) { }
    ngOnInit(): void {
      this.produitService.listeCategories().
      subscribe(cats => {this.matiere = cats;
      console.log(cats);
      });
      }
      


  addEnseignant()
  {
    this.newEnseignant.matiere = this.matiere.find(cat => cat.idMat == this.newIdMat)!;
    this.produitService.ajouterEnseignant(this.newEnseignant)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['enseignants']);
    });
  

}

}
