import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
isaccopen: boolean=false
  constructor(private render:Renderer2){}

  ngOnInit(): void {
  }
  downloadFile(){
    const link =this.render.createElement('a')
    link.setAttribute('target','_blank')
    link.setAttribute('href','/portfolio')
    // link.setAttribute('download','filename')
    link.click()
    link.remove()

  }

}
