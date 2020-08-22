import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events
      .subscribe(
        (event) => {
          if (event instanceof NavigationStart) {
            console.log('NavigationStart');
          }

          if (event instanceof RoutesRecognized) {
            console.log('RoutesRecognized');
          }

          if (event instanceof NavigationStart) {
            console.log(event);
          }

          if (event instanceof NavigationStart) {
            console.log(event);
          }

          if (event instanceof NavigationStart) {
            console.log(event);
          }
        });
  }

  ngOnInit(): void {
  }

}
