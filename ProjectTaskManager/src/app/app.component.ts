import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { RouterLoggerService } from './router-logger.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { fadeAnimation } from './MyAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fadeAnimation]
})
export class AppComponent {
  constructor(public loginService:LoginService, private routerLoggerService:RouterLoggerService, private router:Router){}

  ngOnIntIt(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let userName = (this.loginService.currentUserName) ? this.loginService.currentUserName : "anonymous";

        let logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;

        this.routerLoggerService.log(logMsg).subscribe();
      }
    });
  }

  getState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute.snapshot.url[0].path : "none";
  }
}
