import { FormGroup } from '@angular/forms';

export class TherapieValidator {
    
    static isValid(group: FormGroup): any {
        var therapies = group.controls.therapies_check.value;
        var phytotherapie = group.controls.phytotherapie.value;
        var extrait = group.controls.extrait.value;
        var homeopathie = group.controls.homeopathie.value;
        var acupuncture = group.controls.acupuncture.value;
        var aromatherapie = group.controls.aromatherapie.value;
        var autres = group.controls.autres.value;
        var autres_text = group.controls.autres_text.value;
        
        if(therapies =="oui"){
            if (autres && autres_text==''){
                group.controls.autres_text.setErrors({"autres_empty": true});
            }
            if (!phytotherapie && !extrait && !homeopathie && !acupuncture && !aromatherapie && !autres){
                return {
                    "empty": true
                };
            }else{
                return null;
            }
        }
    }
}