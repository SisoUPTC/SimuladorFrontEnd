import { Component } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent {
  columns = ['id', 'lifeTime', 'nextIO', 'io', 'state', 'quantum']
  dataReady = [
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
  ]
  dataBloqued = [
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
    { id: '1', lifeTime: '1/2', nextIO: '1/2', io: '1/2', state: 'Ready', quantum: '3' },
  ]

}
