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
        nom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        prenom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        date_naissance: [''],
        onco_ref: [''],
    }); 
  }

  nextPage() {
    this.navCtrl.push(FormulairePageDeux);
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
