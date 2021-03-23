import { Component} from '@angular/core';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.css']
})
export class TempDrivenFormComponent  {
  myArrayData = [];
  submitData(formData: any) {
    console.log(formData)
    this.myArrayData.push(formData)
  }
  
}
