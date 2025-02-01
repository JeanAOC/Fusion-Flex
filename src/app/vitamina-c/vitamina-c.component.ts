import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-vitamina-c',
  imports: [NavbarComponent],
  templateUrl: './vitamina-c.component.html',
  styleUrl: './vitamina-c.component.css'
})
export class VitaminaCComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
