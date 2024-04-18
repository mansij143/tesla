import { Component } from '@angular/core';
import { ModelService } from '../model.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-display-image',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './display-image.component.html',
  styleUrl: './display-image.component.scss'
})
export class DisplayImageComponent {
  readonly IMG_BASE_URL = 'https://interstate21.com/tesla-app/images';

  constructor(private modelService: ModelService) { }

  getUrl(modelCode: string, colorCode: string): string {
    return `${this.IMG_BASE_URL}/${modelCode}/${colorCode}.jpg`;
  }

  get isModelSelected(): boolean {
    return this.modelService.selectedModel? true: false;
  }

  get src(): string {
    return this.getUrl(this.modelCode, this.colorCode);
  }

  get alt(): string {
    return `Tesla model ${this.modelCode} in ${this.colorCode}`;
  }

  get modelCode(): string {
    return this.modelService.selectedModel?.code??'';
  }

  get colorCode(): string {
    return this.modelService.selectedColor?.code??'';
  }

}
