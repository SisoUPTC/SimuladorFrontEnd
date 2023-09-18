import { CanActivateFn, Router } from '@angular/router';
import { SimulationService } from '../services/simulation.service';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';

export const simulationGuard: CanActivateFn = async (route, state) => {
  const simulationService: SimulationService = inject(SimulationService);
  const router: Router = inject(Router);
  console.log((await simulationService.isSimulationRunning()).data);
  if (!(await simulationService.isSimulationRunning()).data) {
    Swal.fire({
      title: 'Error!',
      text: 'La simulación no se ha iniciado',
      icon: 'error',
      confirmButtonText: 'Ok',
    })
    router.navigate(['/menu/welcome']);
    return false;
  }
  return true;
};
