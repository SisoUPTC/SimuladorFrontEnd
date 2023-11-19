import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ResponseApi } from '../models/responseApi';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  
  private url = 'http://localhost:8080/simulator';
  delay: number = 1000;

  constructor(private http: HttpClient) { }

  async startSimulation(params: any) {
    if (params.option == 0) {
      return await firstValueFrom(
        this.http.post<ResponseApi>(`${this.url}/start/${params.time}`, null)
      );
    } else {
      return await firstValueFrom(
        this.http.post<ResponseApi>(`${this.url}/start/memory`, { time: params.time, sizeMemory: params.sizeMemory, typeAlghoritm: params.typeAlghoritm })
      );
    }
  }

  async getResults(clock: number) {
    return await firstValueFrom(
      this.http.get<ResponseApi>(`${this.url}/results/${clock}`)
    );
  }

  async getResultsMemory(clock: number){
    return await firstValueFrom(
      this.http.get<ResponseApi>(`${this.url}/results/memory/${clock}`)
    );
  }

  async getGraphics() {
    return await firstValueFrom(
      this.http.get<ResponseApi>(`${this.url}/graphics`)
    );
  }

  async isSimulationRunning() {
    return await firstValueFrom(
      this.http.get<ResponseApi>(`${this.url}/isStarted`)
    );
  }
}
