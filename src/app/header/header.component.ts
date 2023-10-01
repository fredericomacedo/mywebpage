import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;
  constructor(private router: Router){}
  collapseNav() {
    this.isCollapsed = true;
  }
  navegateToEducationClick(): void{
    this.router.navigate(['/education'])
  }
}
