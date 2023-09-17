import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/pages/menu/menu.component';
import { SimulationService } from 'src/app/services/simulation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css'],
})
export class LateralMenuComponent {
  listButtons = [
    {
      id: 1,
      text: 'Iniciar Simulación',
      icon: 'assets/icons/start_icon.png',
      disabled: false,
    },
    {
      id: 2,
      text: 'Gráficos',
      icon: 'assets/icons/charts_icon.png',
      disabled: true,
    },
    {
      id: 3,
      text: 'Resultados',
      icon: 'assets/icons/results_icon.png',
      disabled: true,
    },
  ];

  constructor(
    private router: Router,
    private simulationService: SimulationService
  ) {}

  redirectToMenu() {
    this.router.navigate(['/menu']);
  }

  async showWindow() {
    const { value: formValues } = await Swal.fire({
      title: 'Datos de Entrada',
      html: `
      <p>Digite tiempo de simulación (Segundos) (1 - 20000)</p>
      <input type="number" id="swal-input1" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        const inputOne: HTMLElement | null =
          document.getElementById('swal-input1');
        let valueOne;
        if (inputOne instanceof HTMLInputElement) {
          valueOne = inputOne?.value;
        }
        return [valueOne];
      },
    });
    if (formValues && formValues.length == 1 && formValues[0] > 0 && formValues[0] <= 20000) {
      MenuComponent.isLoading = true;
      await this.simulationService.startSimulation(formValues[0]);
      MenuComponent.isLoading = false;
      this.listButtons[1].disabled = false;
      this.listButtons[2].disabled = false;
      this.router.navigate(['/menu/simulation']);
    } else {
      MenuComponent.isLoading = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos! Los datos no cumplen con el formato esperado.',
      });
    }
  }

  redirectToGraphics(){
    this.router.navigate(['/menu/graphics']);
  }

  redirectToSimulation(){
    this.router.navigate(['/menu/simulation']);
  }
}
