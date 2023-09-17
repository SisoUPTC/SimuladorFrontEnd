import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process';
import { ResponseApi } from 'src/app/models/responseApi';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css'],
})
export class SimulationComponent implements OnInit {
  columns = ['id', 'lifeTime', 'nextIO', 'io', 'state', 'quantum'];
  readyProceesses: Process[] = [];
  blockProcesses: Process[] = [];
  actualClock = 0;
  cpuStatus: 'IDLE' | 'BUSY' = 'IDLE';
  cpuProcess?: Process;
  events: string[] = [];
  totalTimes: number = 0;

  constructor(private simulationService: SimulationService) {}

  ngOnInit(): void {
    this.getResult(this.actualClock);
  }

  private async getResult(clock: number) {
    const results: ResponseApi = await this.simulationService.getResults(clock);
    this.actualClock = results.data.clock;
    this.cpuStatus = results.data.cpuStatus;
    this.cpuProcess = results.data.cpuProcess;
    this.totalTimes = results.data.totalTimes;
    this.readyProceesses = results.data.readyProceesses;
    this.blockProcesses = results.data.blockProcesses;
    this.events = results.data.events;
  }

  previousClock() {
    if (this.actualClock > 0) {
      this.getResult(--this.actualClock);
    }
  }

  nextClock() {
    if (this.actualClock < this.totalTimes) {
      this.getResult(++this.actualClock);
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
