import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/class/tag';
import { Project } from 'src/app/interface/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css','./card/card.component.css']
})
export class PortfolioComponent implements OnInit{

  projects!:Project[]
  iscollapse:boolean=true;
  typescript: boolean=false

  constructor(private projectsService:ProjectsService){

  }
  ngOnInit(): void {
    this.projects=this.projectsService.getProjects();

  }

  filter(){
    let tags:Tag[]=[]
    if(this.typescript){
      tags.push(Tag.TYPESCRIPT)
    }
    this.projects=this.projectsService.getProjectByfilter(tags)
  }

}
