import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-fusion-flex',
  imports: [NavbarComponent],
  templateUrl: './fusion-flex.component.html',
  styleUrl: './fusion-flex.component.css'
})
export class FusionFlexComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
