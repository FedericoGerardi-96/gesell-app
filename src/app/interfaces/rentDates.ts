import { client } from './client';

export interface rentDates {
  id?: string;
  startDate?: string | Date;
  endDate?: string | Date;
  descripcion?: string;
  totalCobrado: number;
  seña?: number;
  pagoTotal?: boolean;
  finalizado: boolean;
  person?: client;
  clientId: string;
  name: string;
}
