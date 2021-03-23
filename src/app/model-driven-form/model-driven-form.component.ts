import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent  {
  myArrData=[]
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    gender: new FormControl('',[Validators.required]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6,6}$')])
    }),
    isAccept: new FormControl('', [Validators.required])
  })
  // userForm = new FormGroup({​​​​​​​​
  // name:new FormControl('',[ Validators.required, Validators.pattern('^[a-z\\s]{​​​​​​​​5,15}​​​​​​​​$')]),
  // email:new FormControl('',[ Validators.required, Validators.pattern('^[a-z\\s]{​​​​​​​​5,15}​​​​​​​​$')])
  // }​​​​​​​​)

  submitData() {
    console.log(this.userForm.value)
    this.myArrData.push(this.userForm.value)
  }

}






