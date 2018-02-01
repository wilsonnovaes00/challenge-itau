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
  }

}
