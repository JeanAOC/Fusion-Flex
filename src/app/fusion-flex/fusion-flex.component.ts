import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-fusion-flex',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './fusion-flex.component.html',
  styleUrl: './fusion-flex.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusionFlexComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
