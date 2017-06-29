import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

/*import { FormulairePageQuatre } from './../formulaire-quatre/formulaire-quatre';*/

@Component({
  selector: 'formulaire-trois',
  templateUrl: 'formulaire-trois.html'
})
export class FormulairePageTrois {

  slideTroisForm: FormGroup;
  submitAttempt: boolean = false;
  labelFrequenceTabac: boolean = false;
  questionsTabac: boolean = false;
  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public formBuilder: FormBuilder) {
    this.slideTroisForm = formBuilder.group({
        tabac_check:  ['', Validators.required],
        frequence_tabac:  ['', Validators.required],
        date_tabac: ['', Validators.required],
        activite_check: ['', Validators.required]
    }); 
  }

  fumeOui() {
    this.questionsTabac = true;
  }

  fumeNon() {
    this.questionsTabac = false;
  }

  changeLabel() {
    this.labelFrequenceTabac = true;
  }
  
  nextPage() {
    this.submitAttempt = true;
    if(this.slideTroisForm.valid){
      /*this.navCtrl.push(FormulairePageQuatre);*/
      console.log("success!")
      console.log(this.slideTroisForm.value);
    }
  }
}