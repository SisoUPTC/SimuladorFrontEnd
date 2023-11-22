import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ResponseApi } from 'src/app/models/responseApi';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-graphics-memory',
  templateUrl: './graphics-memory.component.html',
  styleUrls: ['./graphics-memory.component.css']
})
export class GraphicsMemoryComponent implements OnInit {

  quantyProcessQueues: any[] = [];
  view: [number, number] = [800, 200];
  view2: [number, number] = [800, 230];
  view3: [number, number] = [400, 250];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Memoria RAM';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Cantidad de Procesos';

  colorScheme: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFCC05', '#FF7D05', '#FC7765', '#FFBA7A'],
  };

  colorSchemeRG: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FF7D05', '#7AC270'],
  };

  //

  viewPie: [number, number] = [200, 200];
  promedioSizeProcess: any[] = [
    {
      name: 'Procesos atendidos por CPU',
      series: [],
    },
  ];

  //
  // cantidad de procesos en la memoria, 
  // porcentaje ocupacion de la memoria, 
  // bloques libres y bloques ocupados, 
  // promedio de tamano de procesos

  piePercentageUse: any[] = [];
  quantyBlocksUseFree: any[] = [];
  pieIO: any[] = [];
  pieNextIO: any[] = [];
  percentageUse: number = 0;
  isFinished: boolean = true;
  actualClock: number = 0;
  totalTimes: number = 0;

  constructor(private simulationService: SimulationService) { }

  async getResult(clock: number) {
    const results = await this.simulationService.getGraphicsMemory(clock);
    this.totalTimes = results.data.totalTimes;
    this.quantyProcessQueues = [
      {
        name: 'Proceos en ejecución',
        value: results.data.quantyProcessMemory,
      },
      {
        name: 'Proceos en espera',
        value: results.data.quantyProcessWait,
      }
    ];
    this.promedioSizeProcess = [
      {
        name: 'Procesos atendidos por CPU',
        series: results.data.promedioSizeProcess.map((promedio: any) => ({
          name: `${promedio.name}`,
          value: `${promedio.value}`
        }))
      },
    ];
    this.percentageUse = results.data.percentageUse;
    this.piePercentageUse = [
      {
        name: 'En uso',
        value: results.data.percentageUse,
      },
      {
        name: 'Libre',
        value: results.data.percentageFree,
      },
    ];
    this.quantyBlocksUseFree = [
      {
        name: 'Bloques libres',
        value: results.data.blocksFree,
      },
      {
        name: 'Bloques ocupados',
        value: results.data.blocksUsed,
      }
    ]
    this.startSimulation();
  }

  async previousClock() {
    if (this.actualClock > 0) {
      await this.getResult(--this.actualClock);
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.getResult(this.actualClock)
  }

  startSimulation() {
    const delay = this.simulationService.delay
    const timeOut = setTimeout(async () => {
      if (await this.nextClock()) {
        clearTimeout(timeOut);
        this.isFinished = true;
        return
      }
    }, delay)
  }

  async nextClock() {
    if (this.actualClock < this.totalTimes) {
      await this.getResult(++this.actualClock);
      return false;
    } else {
      return true;
    }
  }

  getClock(clock: string) {
    if (clock) {
      const clockNumber = parseInt(clock);
      if (clockNumber >= 0 && clockNumber <= this.totalTimes) {
        this.getResult(clockNumber);
      }
    }
  }

}
