import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interface/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  project!:Project;

  constructor(private projectService:ProjectsService){}

  ngOnInit(): void {
    this.project=this.projectService.getProjectsById(0)
  }

}
