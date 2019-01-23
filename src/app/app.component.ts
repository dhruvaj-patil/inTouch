import { Component } from '@angular/core';
import {  OnInit, OnDestroy } from '@angular/core';
import { ContactListService } from './services/contact-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  contacts: any;
  searchContacts: any;
  subs: Subscription;
  p: any;

  //details
  userDetails = {
    Anniversary: "",
    Birthday: "",
​​​    "Business Address":"",
​    "Business Address 2": "",
​​​    "Business City": "",
​​​    "Business Country": "",
​​​    "Business Fax": "",
​​    "Business Phone": "",
​​    "Business Postal Code": "",
​​​    "Business State": "",
​​​     Categories: "",
​​​    "Country Code": "",
​​​     Department: "",
​​​    "Display Name": "",
​​​    "E-mail 2 Address": "",
​​​    "E-mail 3 Address": "",
​​​    "E-mail Address": "",
​    "First Name": "",
​​​     Gender: "",
​​​     "Home Address 2": "",
​​​     "Home City": "",
​​​     "Home Country": "",
​​​     "Home Fax": "",
​​​     "Home Phone": "",
​​​     "Home Postal Code": "",
​​​     "Home State": "",
​​​     "Home Street": "",
​​​     "Job Title": "",
​​     "Last Name": "",
​​​     "Mobile Phone": "",
​     Nickname: "",
​​     Notes: "",
​​     Organization: "",
​​​     Pager: "",
​​​     "Related name": "",
​​​     "Web Page": "",​​​
     "Web Page 2": ""
  }

  

  constructor(private cls:ContactListService) { 
    this.getContactList();
  }

  ngOnInit() {
  }

  getContactList() {
   this.subs =  this.cls.geList()
    .subscribe(res => {
      this.contacts = this.searchContacts = res;
      this.userDetails = this.contacts[0];
    });
  }

  search(query: string) {
    console.log(/^[0-9]+$/.test(query));
    if( /^[0-9()-]+$/.test(query) ) {
      console.log('in if');
      this.searchContacts = (query) ?
      this.contacts.filter(c => c['Home Phone'].includes(query)) :
      this.contacts;

    } else {
      this.searchContacts = (query) ?
      this.contacts.filter(c => c['First Name'].toLowerCase().includes(query.toLowerCase())) :
      this.contacts;
    }

  }

  getDetails(user) {
    console.log(user);
    this.userDetails = user;
  }

  ngOnDestroy() {
     this.subs.unsubscribe();
  }
  
}
