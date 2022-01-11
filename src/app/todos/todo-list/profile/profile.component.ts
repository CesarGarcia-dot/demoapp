import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile = Object.assign({});

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.data.subscribe(data => {
      this.profile = data['profile'];
    });
  }

  ngOnInit(): void {
  }

}
