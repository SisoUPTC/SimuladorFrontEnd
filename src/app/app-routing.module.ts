import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { WelcomeComponent } from './componets/welcome/welcome.component';
import { SimulationComponent } from './componets/simulation/simulation.component';
import { GraphicsComponent } from './componets/graphics/graphics.component';
import { simulationGuard } from './guards/simulation.guard';
import { SimulationMemoryComponent } from './componets/simulation-memory/simulation-memory.component';
import { GraphicsMemoryComponent } from './componets/graphics-memory/graphics-memory.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu/welcome', pathMatch: 'full' },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'simulation/cpu', component: SimulationComponent, canActivate: [simulationGuard] },
      { path: 'simulation/memory', component: SimulationMemoryComponent, canActivate: [simulationGuard] },
      { path: 'graphics', component: GraphicsComponent, canActivate: [simulationGuard]},
      { path: 'graphics/memory', component: GraphicsMemoryComponent, canActivate: [simulationGuard]},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
