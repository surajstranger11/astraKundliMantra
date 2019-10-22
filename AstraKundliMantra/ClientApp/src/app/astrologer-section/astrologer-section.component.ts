import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astrologer-section',
  templateUrl: './astrologer-section.component.html',
  styleUrls: ['./astrologer-section.component.css']
})
export class AstrologerSectionComponent implements OnInit {
    showDialog: boolean = false;
  constructor() { }

  ngOnInit() {
  }
    CheckSignup(num: number) {
        console.log('checksignup called');
        this.showDialog = true;
    }
}
