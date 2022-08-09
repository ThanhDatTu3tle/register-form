
import { Validator } from './node_modules/auto-alidation-form/validator.js';

var form =  new Validator('#register-form', '.input-field', '.form-message'); 
console.log(form);
form.onSubmit = (formData) => { // đối tượng 'form' dùng để call API
    console.log(formData);
}
