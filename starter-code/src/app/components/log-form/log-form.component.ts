import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  
  feedbackEnabled = false;
  error = null;
  processing = false;
  person: string;
  message: string;
  arrayOfPersons: Array<string> = []
  // ... model (e,g. username: String)
  constructor(
    private accessControlLogService: AccessControlLogService
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      // this.someService.method(... data ...)
      //   .then((result) => {
      //     // ... handle result, reset form, etc...
      //     // ... navigate with this.router.navigate(['...'])
      //     // ... maybe turn this to false if your're staying on the page - this.processing = false;
      //   })
      //   .catch((err) => {
      //     this.error = err.error.error; // :-)
      //     this.processing = false;
      //     this.feedbackEnabled = false;
      //   });
      this.arrayOfPersons = this.accessControlLogService.getAccessLog();
      for (let i=0; i<this.arrayOfPersons.length; i++){
        console.log(this.arrayOfPersons[i])
      }
      // console.log(this.arrayOfPersons);
    }
  }



}
