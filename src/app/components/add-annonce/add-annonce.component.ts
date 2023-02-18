import { Annonce } from './../../models/annonce';
import { Component, NgZone, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/services/annonce.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  annonceForm: FormGroup;

  constructor(private annonceService: AnnonceService,

    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,) {

      this.annonceForm = this.formBuilder.group({
        title: [''],
        description: [''],
        date_ajout: [''],
        image: ['']

      })
     }

  ngOnInit(): void {
  }


  onSubmit(): any {
    this.annonceService.AddAnnonce(this.annonceForm.value)
    .subscribe(() => {
        console.log('annonce added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/annonces'))
      }, (err: any) => {
        console.log(err);
    });
  }

}
