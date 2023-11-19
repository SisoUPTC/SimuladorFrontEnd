import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { ButtonComponent } from './button/button.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SimulationComponent } from './simulation/simulation.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { LoadingComponent } from './loading/loading.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SimulationMemoryComponent } from './simulation-memory/simulation-memory.component';
import { GraphicsMemoryComponent } from './graphics-memory/graphics-memory.component';


@NgModule({
  declarations: [
    LateralMenuComponent,
    ButtonComponent,
    WelcomeComponent,
    SimulationComponent,
    ToggleButtonComponent,
    CardComponent,
    TableComponent,
    LoadingComponent,
    GraphicsComponent,
    SimulationMemoryComponent,
    GraphicsMemoryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  exports: [
    LateralMenuComponent,
    ButtonComponent,
    WelcomeComponent, 
    ToggleButtonComponent,
    LoadingComponent
  ]
})
export class ComponetsModule { }
