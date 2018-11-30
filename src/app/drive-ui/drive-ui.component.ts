import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GapiSession } from '../sessions/gapi-session';

@Component({
  selector: 'app-drive-ui',
  templateUrl: './drive-ui.component.html',
  styleUrls: ['./drive-ui.component.css']
})
export class DriveUiComponent implements OnInit {

//   constructor(
//     private gapiSession: GapiSession,
//     private router: Router
// ) {

// }

// signIn() {
//     this.gapiSession.signIn()
//         .then(() => {
//             if (this.gapiSession.isSignedIn) {
//                 this.router.navigate(["/dashboard"]);
//             }
//         });
// }


  ngOnInit() {
  }

}
