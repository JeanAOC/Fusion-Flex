import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-fusion-flex',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './fusion-flex.component.html',
  styleUrl: './fusion-flex.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusionFlexComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
