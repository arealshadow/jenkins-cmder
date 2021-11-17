import { Component, OnInit } from '@angular/core';
import { JenkinsApiService } from '../jenkins-api.service'
import { JenkinsHomeData } from '../../data/jenkins.home.data'
import { JenkinsHome } from '../../data/jenkins.home'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public home: JenkinsHomeData[];
  
  constructor(
    private jenkinsApiService: JenkinsApiService
  ) { }

  ngOnInit(): void {
    this.jenkinsApiService.getJenkinsHomeApi().subscribe(data => {
        this.home = data.home;
      }
    )
  }

}
