import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent {
  listButtons = [
    {
      text: 'Iniciar Simulación',
      icon: 'assets/icons/start_icon.png',
      disabled: false
    },
    {
      text: 'Gráficos',
      icon: 'assets/icons/charts_icon.png',
      disabled: true
    },
    {
      text: 'Resultados',
      icon: 'assets/icons/results_icon.png',
      disabled: true
    }
  ]

  constructor(private router: Router){}

  redirectToMenu(){
    this.router.navigate(['/menu']);
  }
}
