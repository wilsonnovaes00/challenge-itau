import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { GithubServiceService } from '../../services/github-service.service';
import { GitHubData } from '../../models/github-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.scss']
})
export class SearchProfileComponent implements OnInit {

  @ViewChild('myForm')
  private myForm: NgForm;

  profileName: string;
  @Output() profileRecived: EventEmitter<GitHubData> = new EventEmitter();

  constructor(private serviceGit: GithubServiceService) { }

  ngOnInit() {
  }

  send(myForm: NgForm) {
    if (myForm.value) {
      this.serviceGit.searchUser(this.profileName)
          .subscribe(dados => {
            this.profileRecived.emit(dados);
          console.log(myForm.value);
      });
    }

  }
}

