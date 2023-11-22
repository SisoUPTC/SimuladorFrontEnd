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
  actualClock = 0;
  events: string[] = [];
  totalTimes: number = 0;
  isFinished = false;
  readyQueue: Array<any> = []
  memory: any = {}

  constructor(private simulationService: SimulationService) { }

  ngOnInit(): void {
    this.getResult(this.actualClock)
  }

  private async getResult(clock: number) {
    const results: ResponseApi = await this.simulationService.getResultsMemory(clock);
    this.totalTimes = results.data.totalTimes;
    this.readyQueue = results.data.readyProceesses;
    this.memory = results.data.memoryProccesses;
    this.startSimulation();
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
