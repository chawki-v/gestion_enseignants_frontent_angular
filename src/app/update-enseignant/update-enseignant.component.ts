import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Enseignant } from '../model/enseignant.model';
import { Matiere } from '../model/matiere.model';
import { EnseignantService } from '../service/enseignant.service';


@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent {

  currentEnseignant = new Enseignant();
  matiere! : Matiere[];
updatedMatId! : number;

constructor(private activatedRoute: ActivatedRoute,private enseignantService: EnseignantService,private router :Router  ) { }
ngOnInit(): void {
  this.enseignantService.listeCategories().
  subscribe(cats => {this.matiere = cats;
  console.log(cats);
  });
  this.enseignantService.consulterProduit(this.activatedRoute.snapshot.params['id']).
  subscribe( prod =>{ this.currentEnseignant = prod; 
  this.updatedMatId = 
  this.currentEnseignant.matiere.idMat;
  } ) ;
  }
updateEnseignant()
{ //console.log(this.currentProduit);
  this.currentEnseignant.matiere = this.matiere.
 find(cat => cat.idMat == this.updatedMatId)!;
this.enseignantService.updateProduit(this.currentEnseignant).subscribe(prod => {
this.router.navigate(['enseignants']); }
);


}

}


