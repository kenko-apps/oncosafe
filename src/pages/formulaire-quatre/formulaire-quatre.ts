import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import { TherapieValidator } from '../../validators/questionTherapie'

import { FormulaireResultat } from '../formulaire-resultat/formulaire-resultat';
import { FormulairePageCinq } from '../formulaire-cinq/formulaire-cinq';

@Component({
  selector: 'formulaire-quatre',
  templateUrl: 'formulaire-quatre.html'
})
export class FormulairePageQuatre {

  slideQuatreForm: FormGroup;
  submitAttempt: boolean = false;
  questionsTherapie: boolean = false;
  checkAutres: boolean = false;
  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public formBuilder: FormBuilder) {
    this.slideQuatreForm = formBuilder.group({
        therapies_check: ['',Validators.required],
        phytotherapie: [false],
        extrait: [false],
        homeopathie: [false],
        acupuncture: [false],
        aromatherapie: [false],
        autres: [false],
        autres_text: ['']
    },{ validator: TherapieValidator.isValid}); 
  }

  therapieOui() {
    this.questionsTherapie = true;
  }

  therapieNon() {
    this.questionsTherapie = false;
    this.slideQuatreForm.controls.phytotherapie.setValue(false);
    this.slideQuatreForm.controls.extrait.setValue(false);
    this.slideQuatreForm.controls.homeopathie.setValue(false);
    this.slideQuatreForm.controls.acupuncture.setValue(false);
    this.slideQuatreForm.controls.aromatherapie.setValue(false);
    this.slideQuatreForm.controls.autres.setValue(false);
    this.slideQuatreForm.controls.autres_text.setValue('');
  }

  autres(){
    if(this.checkAutres == false){
      this.checkAutres = true;
    }else{
      this.checkAutres = false;
      this.slideQuatreForm.controls.autres.setValue(false);
      this.slideQuatreForm.controls.autres_text.setValue('');
    }
  }

  nextPage() {
    this.submitAttempt = true;
    if(this.slideQuatreForm.valid){
      if (this.slideQuatreForm.controls.phytotherapie.value){
        this.navCtrl.push(FormulairePageCinq);
      }else{
        this.navCtrl.push(FormulaireResultat);
      }
      console.log("success!");
      console.log(this.slideQuatreForm.value);
    }
  }
}