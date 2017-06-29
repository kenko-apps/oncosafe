import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

/*import { FormulairePageCinq } from '../formulaire-quatre/formulaire-cinq';*/

@Component({
  selector: 'formulaire-quatre',
  templateUrl: 'formulaire-quatre.html'
})
export class FormulairePageQuatre {

  slideQuatreForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public formBuilder: FormBuilder) {
    this.slideQuatreForm = formBuilder.group({
        phytotherapie:  [''],
        extrait:  [''],
        homeopathie: [''],
        acupuncture: [''],
        aromatherapie: ['']
    }); 
  }

  nextPage() {
    this.submitAttempt = true;
    if(this.slideQuatreForm.valid){
      /*this.navCtrl.push(FormulairePageCinq);*/
      console.log("success!")
      console.log(this.slideQuatreForm.value);
    }
  }
}