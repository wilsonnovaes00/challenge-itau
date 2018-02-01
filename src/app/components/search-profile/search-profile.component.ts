import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubServiceService } from '../../services/github-service.service';
import { GitHubData } from '../../models/github-model';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.scss']
})
export class SearchProfileComponent implements OnInit {

  profileName: string;

  @Output() profileRecived: EventEmitter<GitHubData> = new EventEmitter();

  constructor(private serviceGit: GithubServiceService) { }

  ngOnInit() {
  }
  send() {
    this.serviceGit.searchUser(this.profileName).
    subscribe(dados => {
      this.profileRecived.emit(dados);
    });
  }
}

