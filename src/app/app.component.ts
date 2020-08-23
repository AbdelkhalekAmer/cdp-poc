import { Component } from '@angular/core';

import {
  Router, NavigationStart,
  RoutesRecognized,
  ActivationStart,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  GuardsCheckStart,
  ChildActivationStart,
  GuardsCheckEnd,
  ResolveStart,
  ResolveEnd,
  ChildActivationEnd,
  ActivationEnd,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cdp-poc';

  constructor(private router: Router) {
    this.router.events
      .subscribe(
        (event) => {
          // the Angular router stats the navigation.	
          if (event instanceof NavigationStart) {
            console.log('NavigationStart');
          }

          // the Router parses the URL and the routes are recognized.
          if (event instanceof RoutesRecognized) {
            console.log('RoutesRecognized');
          }

          // the Router begins the Guards phase of routing.
          if (event instanceof GuardsCheckStart) {
            console.log('GuardsCheckStart');
          }

          // the Router begins activating a route's children.
          if (event instanceof ChildActivationStart) {
            console.log('ChildActivationStart');
          }

          // the Router begins activating a route.
          if (event instanceof ActivationStart) {
            console.log('ActivationStart');
          }

          // the Router finishes the Guards phase of routing successfully.
          if (event instanceof GuardsCheckEnd) {
            console.log('GuardsCheckEnd');
          }

          // the Router begins the Resolve phase of routing.
          if (event instanceof ResolveStart) {
            console.log('ResolveStart');
          }

          // the Router finishes the Resolve phase of routing successfully.
          if (event instanceof ResolveEnd) {
            console.log('ResolveEnd');
          }

          // the Router finishes activating a route.
          if (event instanceof ActivationEnd) {
            console.log('ActivationEnd');
          }

          // the Router finishes activating a route's children.
          if (event instanceof ChildActivationEnd) {
            console.log('ChildActivationEnd');
          }

          // navigation ends successfully.
          if (event instanceof NavigationEnd) {
            console.log('NavigationEnd');
          }

          // the Router lazy loads a route configuration.
          if (event instanceof RouteConfigLoadStart) {
            console.log('RouteConfigLoadStart');
          }

          // after a route has been lazy-loaded.
          if (event instanceof RouteConfigLoadEnd) {
            console.log('RouteConfigLoadEnd');
          }

          // navigation is canceled. This is due to a Route Guard returning false during navigation.
          if (event instanceof NavigationCancel) {
            console.log('NavigationCancel');
          }

          // navigation fails due to an unexpected error.
          if (event instanceof NavigationError) {
            console.log('NavigationError');
          }
        });
  }
}
