import { FormGroup } from '@angular/forms';

export class TabacValidator {
    
    static isValid(group: FormGroup): any {
        var userTabac = group.controls.tabac_check.value;
        var frequenceTabac = group.controls.frequence_tabac.value;
        var dateTabac = group.controls.date_tabac.value;
        
        if(userTabac =="oui"){
            if (dateTabac =="" || frequenceTabac ==""){
                if (dateTabac =="" && frequenceTabac ==""){
                    group.controls.date_tabac.setErrors({"date_empty": true});
                    group.controls.frequence_tabac.setErrors({"freq_empty": true});
                    return {
                        "empty": true
                    };
                }
                if(dateTabac ==""){
                    group.controls.date_tabac.setErrors({"date_empty": true});
                    return {
                        "empty": true
                    };
                }
                if(frequenceTabac ==""){
                    group.controls.frequence_tabac.setErrors({"freq_empty": true});
                    return {
                        "empty": true
                    };
                }
            }else{
                return null;
            }
        }
    }
}