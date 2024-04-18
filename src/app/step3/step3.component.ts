import { Component } from '@angular/core';
import { ModelService } from '../model.service';
import { Model } from '../type/model.type';
import { Config } from '../type/config.type';
import { Color } from '../type/color.type';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {
  constructor(private modelService : ModelService) {}

  getModel(): Model | undefined {
    return this.modelService.selectedModel; 
  }

  getColor(): Color | undefined {
    return this.modelService.selectedColor; 
  }

  getConfig(): Config | undefined {
    return this.modelService.selectedConfig; 
  }

  getTowHitchPrice(): number {
    return this.modelService.towHitchPrice; 
  }

  getYokePrice(): number {
    return this.modelService.yokePrice; 
  }

  isTowHitchOpted(): boolean {
    return this.modelService.towHitchOpted; 
  }

  isYokeOpted(): boolean {
    return this.modelService.yokeOpted; 
  }

  getTotalCost(): number {
    const colorPrice: number =  this.modelService.selectedColor?.price??0 
    const configPrice: number =  this.modelService.selectedConfig?.price??0 
    const towHitchPrice = this.modelService.towHitchOpted?this.modelService.towHitchPrice: 0;
    const yokePrice = this.modelService.yokeOpted?this.modelService.yokePrice: 0;
    const totalCost = colorPrice + configPrice + towHitchPrice + yokePrice;

    return totalCost;
  }

}
