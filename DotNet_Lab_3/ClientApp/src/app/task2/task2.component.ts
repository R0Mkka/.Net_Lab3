import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SecondTaskService } from '../services/second-task.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component implements OnInit {
  public numbersInputControl: FormControl;
  public result: number = null;

  constructor(
    private secondTaskService: SecondTaskService,
  ) { }

  public ngOnInit(): void {
    this.initControl();
  }

  public countGcd(): void {
    this.secondTaskService.numberListGcd({
      numberList: this.getNumbersFromString(this.numbersInputControl.value),
    })
    .subscribe(({ resultNumber }) => this.result = resultNumber);
  }

  private getNumbersFromString(numberListAsString: string): number[] {
    return numberListAsString.split(',').map(Number);
  } 

  private initControl(): void {
    this.numbersInputControl = new FormControl('');
  }
}
