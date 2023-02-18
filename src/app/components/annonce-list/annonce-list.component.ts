import { AnnonceService } from './../../services/annonce.service';
import { Annonce } from './../../models/annonce';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {

  Annonces:any = [];


  constructor(private annonceService: AnnonceService
  ) { }

  ngOnInit(): void {
    this.annonceService.GetAnnonces().subscribe(res => {
      console.log(res)
      this.Annonces =res;
    });

}


delete(id:any, i:any) {
  console.log(id);
  if(window.confirm('Do you want to go ahead?')) {
    this.annonceService.deleteAnnonce(id).subscribe((res) => {
      this.Annonces.splice(i, 1);
    })
  }
}
}
