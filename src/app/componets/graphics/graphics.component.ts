import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
})
export class GraphicsComponent implements OnInit {
  quantyProcessQueues: any[] = [];
  view: [number, number] = [800, 200];
  view2: [number, number] = [800, 230];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Colas de Procesos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Cantidad de Procesos';

  colorScheme: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFCC05', '#FF7D05', '#FC7765', '#FFBA7A'],
  };

  //

  viewPie: [number, number] = [200, 200];
  quantyEndendCPU: any[] = [
    {
      name: 'Procesos atendidos por CPU',
      series: [],
    },
  ];

  //

  pieTTL: any[] = [];
  pieIO: any[] = [];
  pieNextIO: any[] = [];
  totalEndedProccess: number = 0;

  constructor(private simulationService: SimulationService) {}

  ngOnInit(): void {
    this.getGraphics();
  }

  async getGraphics() {
    const results = await this.simulationService.getGraphics();
    this.quantyProcessQueues = [
      {
        name: 'Listos',
        value: results.data.quantyProcessQueues[0],
      },
      {
        name: 'Bloqueados',
        value: results.data.quantyProcessQueues[1],
      },
    ];
    this.quantyEndendCPU = [
      {
        name: 'Procesos atendidos por CPU',
        series: results.data.quantyEndendCPU.map((value: any) => {
          return {
            name: `${value ? value.name : ''}`,
            value: value ? value.value : 0,
          };
        }),
      },
    ];
    this.totalEndedProccess = results.data.totalEndedProccess;
    this.pieTTL = [
      {
        name: results.data.timesTTL[0].name,
        value: results.data.timesTTL[0].value,
      },
      {
        name: results.data.timesTTL[1].name,
        value: results.data.timesTTL[1].value,
      },
      {
        name: results.data.timesTTL[2].name,
        value: results.data.timesTTL[2].value,
      },
      {
        name: results.data.timesTTL[3].name,
        value: results.data.timesTTL[3].value,
      },
      {
        name: results.data.timesTTL[4].name,
        value: results.data.timesTTL[4].value,
      },
      {
        name: results.data.timesTTL[5].name,
        value: results.data.timesTTL[5].value,
      },
      {
        name: results.data.timesTTL[6].name,
        value: results.data.timesTTL[6].value,
      },
      {
        name: results.data.timesTTL[7].name,
        value: results.data.timesTTL[7].value,
      },
      {
        name: results.data.timesTTL[8].name,
        value: results.data.timesTTL[8].value,
      },
      {
        name: results.data.timesTTL[9].name,
        value: results.data.timesTTL[9].value,
      },
      {
        name: results.data.timesTTL[10].name,
        value: results.data.timesTTL[10].value,
      },
      {
        name: results.data.timesTTL[11].name,
        value: results.data.timesTTL[11].value,
      },
      {
        name: results.data.timesTTL[12].name,
        value: results.data.timesTTL[12].value,
      },
      {
        name: results.data.timesTTL[13].name,
        value: results.data.timesTTL[13].value,
      },
      {
        name: results.data.timesTTL[14].name,
        value: results.data.timesTTL[14].value,
      },
      {
        name: results.data.timesTTL[15].name,
        value: results.data.timesTTL[15].value,
      },
      {
        name: results.data.timesTTL[16].name,
        value: results.data.timesTTL[16].value,
      },
      {
        name: results.data.timesTTL[17].name,
        value: results.data.timesTTL[17].value,
      },
      {
        name: results.data.timesTTL[18].name,
        value: results.data.timesTTL[18].value,
      },
      {
        name: results.data.timesTTL[19].name,
        value: results.data.timesTTL[19].value,
      },
      {
        name: results.data.timesTTL[20].name,
        value: results.data.timesTTL[20].value,
      }
    ];
    this.pieNextIO = [
      {
        name: results.data.timesNextIO[0].name,
        value: results.data.timesNextIO[0].value,
      },
      {
        name: results.data.timesNextIO[1].name,
        value: results.data.timesNextIO[1].value,
      },
      {
        name: results.data.timesNextIO[2].name,
        value: results.data.timesNextIO[2].value,
      },
      {
        name: results.data.timesNextIO[3].name,
        value: results.data.timesNextIO[3].value,
      },
      {
        name: results.data.timesNextIO[4].name,
        value: results.data.timesNextIO[4].value,
      },
    ];
    this.pieIO = [
      {
        name: results.data.timesIO[0].name,
        value: results.data.timesIO[0].value,
      },
      {
        name: results.data.timesIO[1].name,
        value: results.data.timesIO[1].value,
      },
      {
        name: results.data.timesIO[2].name,
        value: results.data.timesIO[2].value,
      },
      {
        name: results.data.timesIO[3].name,
        value: results.data.timesIO[3].value,
      },
      {
        name: results.data.timesIO[4].name,
        value: results.data.timesIO[4].value,
      },
    ];
    console.log(this.pieTTL);
  }
}
