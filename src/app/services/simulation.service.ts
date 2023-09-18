import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ResponseApi } from '../models/responseApi';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private url = 'https://simuladorbackend-production.up.railway.app/simulator';
  delay: number = 1000;

  constructor(private http: HttpClient) {}

  async startSimulation(time: number) {
    return await firstValueFrom(
      this.http.post<ResponseApi>(`${this.url}/start/${time}`, null)
    );
  }

  async getResults(clock: number) {
    return await firstValueFrom(
      this.http.get<ResponseApi>(`${this.url}/results/${clock}`)
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
