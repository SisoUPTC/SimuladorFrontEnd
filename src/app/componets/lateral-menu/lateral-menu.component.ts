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
      text: 'Simulación Procesador',
      icon: 'assets/icons/start_icon.png',
      disabled: false,
    },
    {
      id: 2,
      text: 'Gráficos Procesador',
      icon: 'assets/icons/charts_icon.png',
      disabled: true,
    },
    {
      id: 3,
      text: 'Resultados Procesador',
      icon: 'assets/icons/results_icon.png',
      disabled: true,
    },
    {
      id: 4,
      text: 'Simulación Memoria',
      icon: 'assets/icons/start_icon.png',
      disabled: false,
    },
    {
      id: 5,
      text: 'Gráficos Memoria',
      icon: 'assets/icons/charts_icon.png',
      disabled: true,
    },
    {
      id: 6,
      text: 'Resultados Memoria',
      icon: 'assets/icons/results_icon.png',
      disabled: true,
    },
  ];

  constructor(
    private router: Router,
    private simulationService: SimulationService
  ) { }

  redirectToMenu() {
    this.router.navigate(['/menu/welcome']);
  }

  async showWindow() {
    const { value: formValues } = await Swal.fire({
      title: 'Datos de Entrada',
      html: `
      <p>Digite tiempo de simulación (Segundos) (1 - 20000)</p>
      <input type="number" id="swal-input1" class="swal2-input">
      <hr style="margin-top: 20px">
      <p style="margin-top: 20px">Digite delay de simulación (segundos)</p>
      <input type="number" id="swal-input2" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        const inputOne: HTMLElement | null =
          document.getElementById('swal-input1');
        let valueOne;
        const inputTwo: HTMLElement | null =
          document.getElementById('swal-input2');
        let valueTwo;
        if (inputOne instanceof HTMLInputElement && inputTwo instanceof HTMLInputElement) {
          valueOne = inputOne?.value;
          valueTwo = inputTwo?.value;
        }
        return [valueOne, valueTwo];
      },
    });
    if (formValues && formValues.length == 2 && formValues[0] > 0 && formValues[0] <= 20000) {
      MenuComponent.isLoading = true;
      this.simulationService.delay = formValues[1] * 1000;
      await this.simulationService.startSimulation({ time: formValues[0], option: 0 });
      MenuComponent.isLoading = false;
      this.listButtons[1].disabled = false;
      this.listButtons[2].disabled = false;
      this.router.navigate(['/menu/simulation/cpu']);
    } else {
      MenuComponent.isLoading = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos! Los datos no cumplen con el formato esperado.',
      });
    }
  }

  redirectToGraphics() {
    this.router.navigate(['/menu/graphics']);
  }

  redirectToSimulation() {
    this.router.navigate(['/menu/simulation/cpu']);
  }

  goTo(index: number) {
    switch (index) {
      case 1: this.showWindow(); break;
      case 2: this.redirectToGraphics(); break;
      case 3: this.redirectToSimulation(); break;
      case 4: this.showMemoryWindow(); break;
      case 5: this.redirectToGraphicsMemory(); break;
      case 6: this.redirectToSimulationMemory(); break;
    }
  }
  redirectToSimulationMemory() {
    this.router.navigate(['/menu/simulation/memory']);
  }
  redirectToGraphicsMemory() {
    this.router.navigate(['/menu/graphics/memory']);
  }

  async showMemoryWindow() {
    const { value: formValues } = await Swal.fire({
      title: 'Datos de Entrada',
      html: `
      <p>Digite tiempo de simulación (Segundos) (1 - 20000)</p>
      <input type="number" id="swal-input1" class="swal2-input">
      <hr style="margin-top: 20px">
      <p style="margin-top: 20px">Digite delay de simulación (segundos)</p>
      <input type="number" id="swal-input2" class="swal2-input">
      <hr style="margin-top: 20px">
      <p style="margin-top: 20px">Tamaño de la memoria (GB)</p>
      <input type="number" id="swal-input3" min="0" class="swal2-input">
      <hr style="margin-top: 20px">
      <p style="margin-top: 20px">Algoritmo de particionamiento variable de la memoria</p>
      <select id="swal-input4" class="swal2-select border border-gray rounded">
        <option value="0">First-fit</option>
        <option value="1">Best-fit</option>
        <option value="2">Worst-fit</option>
        <option value="3">Next-fit</option>
      </select>`,
      focusConfirm: false,
      preConfirm: () => {
        const inputOne: HTMLElement | null =
          document.getElementById('swal-input1');
        let valueOne;
        const inputTwo: HTMLElement | null =
          document.getElementById('swal-input2');
        let valueTwo;
        const inputThree: HTMLElement | null =
          document.getElementById('swal-input3');
        let valueThree;
        const inputFour: HTMLElement | null =
          document.getElementById('swal-input4');
        let valueFour;
        if (inputOne instanceof HTMLInputElement && inputTwo instanceof HTMLInputElement && inputThree instanceof HTMLInputElement && inputFour instanceof HTMLSelectElement) {
          valueOne = inputOne?.value;
          valueTwo = inputTwo?.value;
          valueThree = inputThree?.value;
          valueFour = inputFour?.value;
        }
        return [valueOne, valueTwo, valueThree, valueFour];
      },
    });
    if (formValues && formValues.length == 4 && formValues[0] > 0 && formValues[0] <= 20000 && formValues[2] <= 128) {
      MenuComponent.isLoading = true;
      this.simulationService.delay = formValues[1] * 1000;
      await this.simulationService.startSimulation({ time: formValues[0], option: 1, sizeMemory: formValues[2] * 1024, typeAlghoritm: formValues[3] });
      MenuComponent.isLoading = false;
      this.listButtons[4].disabled = false
      this.listButtons[5].disabled = false
      this.router.navigate(['/menu/simulation/memory']);
    } else {
      MenuComponent.isLoading = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos! Los datos no cumplen con el formato esperado.',
      });
    }
  }
}
