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
  filtering:boolean=false;

  typescript: boolean=false
  python:  boolean=false;
  java:  boolean=false;
  csharp:  boolean=false;
  angular:  boolean=false;
  javascript:  boolean=false;
  nodeJS: boolean=false;
  react: boolean=false;
  net: boolean=false;

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
    if(this.python){
      tags.push(Tag.PYTHON)
    }
    if(this.java){
      tags.push(Tag.JAVA)
    }
    if(this.csharp){
      tags.push(Tag.CSHARP)
    }
    if(this.angular){
      tags.push(Tag.ANGULAR)
    }
    if(this.javascript){
      tags.push(Tag.JAVASCRIPT)
    }
    if(this.nodeJS){
      tags.push(Tag.NODEJS)
    }
    if(this.react){
      tags.push(Tag.REACT)
    }
    if(this.net){
      tags.push(Tag.ASPNET)
    }
    if(this.angular||this.csharp||this.java||this.javascript||this.net||this.nodeJS||this.react||this.typescript||this.python){
      this.filtering=true
    }else{
      this.filtering=false
    }
    this.projects=this.projectsService.getProjectByfilter(tags)
  }
  resetfilter(){
  this.typescript=false
  this.python=false;
  this.java=false;
  this.csharp=false;
  this.angular=false;
  this.javascript=false;
  this.nodeJS=false;
  this.react=false;
  this.net=false;
  this.filtering=false;
  this.projects=this.projectsService.getProjects()
  }
}
