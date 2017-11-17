import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-landing-team',
  templateUrl: './landing-team.component.html'
})
export class LandingTeamComponent implements OnInit {
  teamMembers = [
    {
      name: 'Jon',
      title: 'Owner',
      blurb: 'An animal lover to the core, Jon has over ten years of experience working in the pet care industry with all sorts of animals from cocker spaniels to conures',
      img: 'assets/img/team/jon.png',
      img_alt: 'Jon - Owner'
    },
    {
      name: 'Ray',
      title: 'Manager',
      blurb: 'Having been raised with several pets throughout his childhood, Ray has a passion for pet care and a penchant for keeping schedules organized',
      img: 'assets/img/team/ray.png',
      img_alt: 'Ray - Manager'
    },
    {
      name: 'Julia',
      title: 'Lead',
      blurb: 'Like a ray of sunshine, Julia brightens everyone\'s day by providing pet parents and pets peace of mind and the best possible service and care',
      img: 'assets/img/team/julia.png',
      img_alt: 'Julia - Lead'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
