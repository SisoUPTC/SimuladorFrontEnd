import { Component } from '@angular/core';
import { Process } from 'src/app/models/process';
import { ResponseApi } from 'src/app/models/responseApi';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-simulation-memory',
  templateUrl: './simulation-memory.component.html',
  styleUrls: ['./simulation-memory.component.css']
})
export class SimulationMemoryComponent {
  columns = ['id', 'lifeTime', 'nextIO', 'io', 'state', 'quantum'];
  readyProceesses: Process[] = [];
  blockProcesses: Process[] = [];
  actualClock = 0;
  cpuStatus: 'IDLE' | 'BUSY' = 'IDLE';
  cpuProcess?: Process;
  events: string[] = [];
  totalTimes: number = 0;
  isFinished = false;

  constructor(private simulationService: SimulationService) { }

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
    this.startSimulation();
  }

  previousClock() {
    if (this.actualClock > 0) {
      this.getResult(--this.actualClock);
    }
  }

  startSimulation() {
    const delay = this.simulationService.delay
    const timeOut = setTimeout(async () => {
      if (await this.nextClock()) {
        console.log('termino')
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
