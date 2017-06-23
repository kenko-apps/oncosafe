import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import { FormulairePageDeux } from './../formulaire-deux/formulaire-deux';

@Component({
  selector: 'formulaire-un',
  templateUrl: 'formulaire-un.html'
})
export class FormulairePageUn {

  slideUnForm: FormGroup;
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public formBuilder: FormBuilder) {
    this.slideUnForm = formBuilder.group({
        prenom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)([\-]?)([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)'), Validators.required])],
        nom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)([\-]?)([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)'), Validators.required])],
        date_naissance: ['', Validators.required],
        onco_ref: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('([a-zA-Zéèêëàäâùüûïîöôçÿ. ]*)([\-]?)([a-zA-Zéèêëàäâùüûïîöôçÿ ]*)')])],
    }); 
  }

  nextPage() {
    this.submitAttempt = true;
 
    if(!this.slideUnForm.valid){
    } else {
      this.navCtrl.push(FormulairePageDeux);
      console.log("success!")
      console.log(this.slideUnForm.value);
    }
  }
}
