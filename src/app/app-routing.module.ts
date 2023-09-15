import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { WelcomeComponent } from './componets/welcome/welcome.component';
import { SimulationComponent } from './componets/simulation/simulation.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu/welcome', pathMatch: 'full' },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'simulation', component: SimulationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
