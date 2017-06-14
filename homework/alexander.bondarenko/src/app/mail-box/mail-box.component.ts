import { Component, OnInit } from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  startReceiving(evt) {

  }

  stopReceiving(evt) {

  }

}

/*
* 1. mail-box component:
*   mail-list
*   mail
*
* */
