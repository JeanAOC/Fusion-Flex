import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { WhatsappComponent } from "../whatsapp/whatsapp.component";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NavbarComponent, FooterComponent, WhatsappComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initAnimations();
  }

  initAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('header', {
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
    });
  
    // Animación del título (efecto de letras escalonadas)
    gsap.from('header h1', {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.1, // Efecto escalonado para cada letra
      delay: 0.5,
      ease: 'power2.out',
    });
  
    // Animación del subtítulo (efecto de palabras escalonadas)
    gsap.from('header .subtitle', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2, // Efecto escalonado para cada palabra
      delay: 1.5,
      ease: 'power2.out',
    });

    // Animación de botones
    gsap.from('.btn', {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      delay: 1.5,
      ease: 'elastic.out(1, 0.5)',
    });
  }
}
