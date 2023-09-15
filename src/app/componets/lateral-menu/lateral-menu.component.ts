import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
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
    }
  ]

  constructor(private router: Router){}

  redirectToMenu(){
    this.router.navigate(['/menu']);
  }

  async showWindow() {
    const { value: formValues } = await Swal.fire({
      title: 'Datos de Entrada',
      html:
      `<p>Digite numero de procesos</p>
      <input id="swal-input1" class="swal2-input">
      <p>Digite delay (Segundos)</p>
      <input id="swal-input2" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        const inputOne: HTMLElement | null = document.getElementById('swal-input1')
        const inputTwo: HTMLElement | null = document.getElementById('swal-input2')
        let valueOne
        let valueTwo
        if (inputOne instanceof HTMLInputElement && inputTwo instanceof HTMLInputElement) {
          valueOne = inputOne?.value
          valueTwo = inputTwo?.value
        }
        return [
          valueOne, valueTwo
        ]
      }
    })
  }
}
