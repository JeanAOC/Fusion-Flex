import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { WhatsappComponent } from "../whatsapp/whatsapp.component";


@Component({
  selector: 'app-vitamina-c',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, WhatsappComponent],
  templateUrl: './vitamina-c.component.html',
  styleUrl: './vitamina-c.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VitaminaCComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
