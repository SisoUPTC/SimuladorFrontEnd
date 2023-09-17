export interface Process{

    id: string;
    lifeTime: number;
    nextIOTime: number;
    timeToLive: number;
    nextIOTTL: number;
    status: 'READY' | 'RUNNING' | 'BLOCKED';
    quantum: number;
    iotime: number;
    iotimeToLive: number;

}