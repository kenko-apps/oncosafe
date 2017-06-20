import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

/*import { FormulairePageTrois } from './../formulaire-trois/formulaire-trois';*/

@Component({
  templateUrl: 'formulaire-deux.html'
})
export class FormulairePageDeux {

  slideDeuxForm: FormGroup;
  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public formBuilder: FormBuilder) {
    this.slideDeuxForm = formBuilder.group({
        organe_primitif: ['', Validators.compose([ Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        date_diagnostic: [''],
        nom_traitement: [''],
    }); 
  }

/*  nextPage() {
    this.navCtrl.push(FormulairePageTrois);
  }*/


}
