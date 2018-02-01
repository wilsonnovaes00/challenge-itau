import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GitHubData } from '../../models/github-model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  profile: GitHubData;

  constructor() { }

  ngOnInit() {
    this.profile = <GitHubData>{ login: 'teste' };
  }

  onProfileRecived(argProfile: GitHubData) {
    this.profile = argProfile;
  }
}
