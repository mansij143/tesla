import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './type/model.type';
import { Observable } from 'rxjs';
import { Configs } from './type/configs.type';
import { Config } from './type/config.type';
import { Color } from './type/color.type';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  selectedModel?: Model 
  selectedColor?: Color 
  selectedConfig?: Config;
  towHitchOpted: boolean = false;
  yokeOpted: boolean = false;

  readonly towHitchPrice: number = 1000;
  readonly yokePrice: number = 1000;

  getModel(): Observable<Model[]> {
    return this.http.get<Model[]>('/models');
  }

  getConfig(): Observable<Configs> {
    return this.http.get<Configs>('/options/'+this.selectedModel?.code);
  }

  canActivateConfig(): boolean {
    return this.selectedModel? true : false && this.selectedColor? true : false;
  }

  canActivateSummary(): boolean {
    return this.selectedModel? true : false && 
    this.selectedColor? true : false && 
    this.selectedConfig? true : false;
  }

  // get isConfigSelected(): boolean {
  //   return this.selectedConfig? true : false;
  // }
}
