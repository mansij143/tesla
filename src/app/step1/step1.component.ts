import { Component } from '@angular/core';
import { Model } from '../type/model.type';
import { Color } from '../type/color.type';
import { ModelService } from '../model.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  models: Model[] = [];
  colors: Color[] = [];

  constructor(private modelService: ModelService) { }
  ngOnInit(): void {
    this.modelService.getModel().subscribe(
      data => {
        this.models = data;
        this.colors = this.filterColor(this.modelService.selectedModel?.code ?? '');
      }

    );
    this.modelForm.controls.modelSelect.setValue(this.modelService.selectedModel?.code ?? '');
    this.modelForm.controls.colorSelect.setValue(this.modelService.selectedColor?.code ?? '');

  }
  modelForm = new FormGroup({
    modelSelect: new FormControl(this.modelService.selectedModel?.code ?? ''),
    colorSelect: new FormControl(this.modelService.selectedColor?.code ?? ''),
  });

  private filterColor(value: string): Color[] {
    const selectedModel = this.models.find(c => c.code === value);
    return selectedModel ? selectedModel?.colors : [];
  }

  onModelChange(): void {
    this.modelForm.controls.colorSelect.reset();
    const model = this.modelForm.get('modelSelect')?.value ?? ''
    this.colors = this.filterColor(model);
    this.modelService.selectedModel = this.models.find(c => c.code === model);
    this.modelForm.controls.colorSelect.setValue(this.colors[0].code);
    this.modelService.selectedColor = this.colors[0];
  }

  onColorChange(): void {
    this.modelService.selectedColor = this.colors.find(c => c.code === this.modelForm.get('colorSelect')?.value ?? '');
  }

  get model() {
    return this.modelService.selectedModel;
  }

  get color() {
    return this.modelService.selectedColor;
  }

  get showColorDropdown(): boolean {
    return this.modelService.selectedModel != undefined;
  }
}
