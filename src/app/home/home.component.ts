import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, NavbarComponent, FooterComponent, WhatsappComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
