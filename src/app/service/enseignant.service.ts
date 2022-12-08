import { Injectable } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { Matiere } from '../model/matiere.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  enseignants! : Enseignant[]; 
  matiere! : Matiere[];

  enseignant!:Enseignant;
  apiURL: string = 'http://localhost:8080/enseignants/api';
  apiURLCat: string = 'http://localhost:8080/produits/cat';
  constructor(private http : HttpClient) {
  }
  listeEnseignantt(): Observable<Enseignant[]>{
  return this.http.get<Enseignant[]>(this.apiURL);
  }
  ajouterEnseignant( prod: Enseignant):Observable<Enseignant>{
    return this.http.post<Enseignant>(this.apiURL, prod, httpOptions);
    }
    

    supprimerEnseignant(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      

      consulterProduit(id: number): Observable<Enseignant> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Enseignant>(url);
        }


   
        updateProduit(prod :Enseignant) : Observable<Enseignant>
        {
        return this.http.put<Enseignant>(this.apiURL, prod, httpOptions);
        }
        
        listeCategories():Observable<Matiere[]>{
          return this.http.get<Matiere[]>(this.apiURL+"/mat");
          }
          
  consulterCategorie(id:number): Matiere{ 
  return this.matiere.find(cat => cat.idMat == id)!;
  }
  rechercherParCategorie(idMat: number):Observable<Enseignant[]> {
    const url = `${this.apiURL}/ensmat/${idMat}`;
    return this.http.get<Enseignant[]>(url);
    }


    rechercherParNom(nom: string):Observable< Enseignant[]> {
      const url = `${this.apiURL}/prodsByName/${nom}`;
      return this.http.get<Enseignant[]>(url);
      }
      
  
}
