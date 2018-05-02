import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<any> = [];
  person: string;
  message: string;
  createdAt: Date;

  constructor() { }

  addAccessItem(person, message){
    this.createdAt = new Date;
    const data = {
      person, 
      message, 
      createdAt: this.createdAt
    }
    this.logMessages.push(data);
  }

  getAccessLog(){
    return this.logMessages;
  }

}
 