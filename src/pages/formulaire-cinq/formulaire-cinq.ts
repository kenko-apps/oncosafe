import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

/*import { FormulaireResultat } from '../formulaire-resultat/formulaire-resultat';*/

@Component({
  selector: 'formulaire-cinq',
  templateUrl: 'formulaire-cinq.html'
})
export class FormulairePageCinq {

  slideCinqForm: FormGroup;
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    // we will initialize our form here
    this.slideCinqForm = this.formBuilder.group({
      phytotraitement: this.formBuilder.array([
        this.initPhytoNom(),
      ])
    });
  } 

  initPhytoNom() {
    // initialize our phyto treatment
    return this.formBuilder.group({
      phytonom: ['', Validators.compose([ Validators.pattern('([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)([\-]*)'), Validators.required])],
      phytodate: ['']
    });
  }

  addPhyto() {
      // add phyto treatment to the list
      const control = <FormArray>this.slideCinqForm.controls['phytotraitement'];
      control.push(this.initPhytoNom());
  }

  removePhyto(i: number) {
      // remove phyto treatment from the list
      const control = <FormArray>this.slideCinqForm.controls['phytotraitement'];
      control.removeAt(i);
  }

  nextPage() {
    this.submitAttempt = true;
    if(this.slideCinqForm.valid){
      /*this.navCtrl.push(FormulaireResultat);*/
      console.log("success!")
      console.log(this.slideCinqForm.value);
    }
  }
}