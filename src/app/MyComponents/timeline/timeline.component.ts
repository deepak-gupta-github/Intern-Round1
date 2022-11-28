import { Component, OnInit } from '@angular/core';
import { Timeline } from './Timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  
  timeline:Timeline[];
  constructor() {
    this.timeline = [
    {
      company: "CURE.FIT", 
      duration: "Full-Time | July 2021 - June 2022 | Bangalore, India",
      role: "BACK-END Java | Spring Boot",
      desc: "Reduced the manual efforts of the Ops team by 90% by automating the sales of packs.",
      active: true
    },
    {
      company: "SAP LABS INDIA",
      duration: "Summer Intern | May - Aug 2020 | Gurgaon, India",
      role: "WEB SECURITY Java | Spring Security",
      desc: "Provided security to the online brainstorming session app by enabling authentication and providing roles to each user.",
      active: true
    }
  ]
  }

  ngOnInit(): void {
    
  }
}
