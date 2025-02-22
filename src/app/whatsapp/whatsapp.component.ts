import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  imports: [CommonModule],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {
  isTooltipVisible: boolean = true; // Estado para controlar la visibilidad del tooltip

  // Método para ocultar el tooltip
  closeTooltip() {
    this.isTooltipVisible = false;
  }
}
