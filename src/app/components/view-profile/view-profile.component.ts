import { Component, OnInit, Input } from '@angular/core';
import { GitHubData } from '../../models/github-model';



@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  constructor() { }

  @Input() profile: GitHubData;

  ngOnInit() {
    if (this.profile) {
      this.profile = <GitHubData>
      {
        name: 'Search User',
        avatar_url: 'https://avatars1.githubusercontent.com/u/607358?s=88&v=4',
        company: 'GitHub',
        public_repos: 0,
        followers: 0,
        following: 0


      };

    }
  }
}
