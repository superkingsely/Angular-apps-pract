import { Injectable } from '@angular/core';
import { Project } from './interface/project';
import { Tag } from './class/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects:Project[]=[
    {
      id: 0,
      name: 'sample python project',
      pictures: ['pyton1','pyton2','pyton3'],
      projectLink: '',
      summary: 'python Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, t',
      tags:[Tag.PYTHON],
      description: 'python Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora.'
    },
    {
      id: 1,
      name: 'sample Agular project',
      pictures: ['Angular1','angula2','angula3'],
      projectLink: '',
      summary: 'Angular Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, t',
      tags:[Tag.ANGULAR,Tag.TYPESCRIPT,Tag.NODEJS],
      description: 'Angular Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora.'
    },
    {
      id: 2,
      name: 'sample .Net project',
      pictures: ['net','.net2','.net3'],
      projectLink: '',
      summary: 'NET Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, te',
      tags:[Tag.REACT,Tag.CSHARP,Tag.ASPNET],
      description: '.NET Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora.'
    },
    {
      id: 3,
      name: 'sample WEBAPI project',
      pictures: ['pyton1','pyton2','pyton3'],
      projectLink: '',
      summary: 'WEBAPI Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempo',
      tags:[Tag.CSHARP,Tag.ASPNET],
      description: 'WEBAPI Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora.'
    },
    {
      id: 4,
      name: 'sample Chrome project',
      pictures: ['pyton1','pyton2','pyton3'],
      projectLink: '',
      summary: '.chrome Lorem ipsum dolor sit amet consectetur adipisicin',
      tags:[Tag.JAVASCRIPT],
      description: '.chrome Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora.'
    },
    {
      id: 5,
      name: 'sample Mobile App project',
      pictures: ['pyton1','pyton2','pyton3'],
      projectLink: '',
      summary: 'mobile app Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora',
      tags:[Tag.JAVA],
      description: 'mobile app Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora.'
    }
  ]
  constructor() { }

  getProjects(){
    return this.projects;
  }
  getProjectsById(id:number){
    let project=this.projects.find(project=>project.id===id)
    if(project===undefined){
      throw new TypeError(`there is no prjects that matches this id ${id}`)
    }
    return project
  }

  getProjectByfilter(tags:Tag[]){
    let filteredProj:Project[]=[]
    this.projects.forEach(project=>{
      let foundAll=true;

      tags.forEach(tag=>{
        if(project.tags?.includes(tag)==false){
          foundAll=false
        }
      })
      if(foundAll){
        filteredProj.push(project)
      }
    })
    return filteredProj
  }

}
