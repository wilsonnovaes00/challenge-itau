import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GithubServiceService } from './services/github-service.service';
import { GitHubData } from './models/github-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showFiller = false;

  userGit: GitHubData;

  constructor() { }

  ngOnInit() {
  }

}
