import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import { FormulairePageDeux } from './../formulaire-deux/formulaire-deux';

@Component({
  templateUrl: 'formulaire-un.html'
})
export class FormulairePageUn {

  slideUnForm: FormGroup;
  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public formBuilder: FormBuilder) {
    this.slideUnForm = formBuilder.group({
        prenom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)([\-]?)([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)'), Validators.required])],
        nom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)([\-]?)([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)'), Validators.required])],
        date_naissance: ['', Validators.required],
        onco_ref: ['', Validators.required],
    }); 
  }

  nextPage() {
    this.navCtrl.push(FormulairePageDeux);
  }

}
