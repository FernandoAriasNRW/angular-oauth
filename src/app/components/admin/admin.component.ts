import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  public profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe( profile => {
      console.log(profile);
      this.profile = profile
    });
  }

}
