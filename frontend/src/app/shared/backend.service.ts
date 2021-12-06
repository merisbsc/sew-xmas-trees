import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

const BASE_URL: string = 'http://localhost:8080/tree'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private readonly http: HttpClient) { }

  public getAllTreeTypes(): Promise<TreeType[]> {
    const res = this.http.get<TreeType[]>(`${BASE_URL}/types`);
    return firstValueFrom(res);
  }
}

export enum TreeType {
  Blaufichte,
  Nordmanntanne
}

export interface ITree {
  id: number,
  type: TreeType,
  heightMeters: number,
  price: number,
  sold: boolean
}