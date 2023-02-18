import { AnnonceService } from 'src/app/services/annonce.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.component.html',
  styleUrls: ['./annonce-details.component.css']
})
export class AnnonceDetailsComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private annonceService: AnnonceService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.annonceService.GetAnnonce(this.getId).subscribe(res => {
      this.updateForm.setValue({
        title: res['title'],
        description: res['description'],
        date_ajout: res['date_ajout'],
        image: res['image']

      });
    });
    this.updateForm = this.formBuilder.group({
      title: [''],
      description: [''],
      date_ajout: [''],
      image: ['']

    })
  }

  onUpdate(): any {
    this.annonceService.updateAnnonce(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('annonce updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/annonces'))
      }, (err) => {
        console.log(err);
    });
  }
  ngOnInit(): void {
  }

}
