import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SecondTaskService } from '../services/second-task.service';

import { IResultObject } from '../models';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component implements OnInit {
  public numbersInputControl: FormControl;
  public result: IResultObject = null;

  constructor(
    private secondTaskService: SecondTaskService,
  ) { }

  public ngOnInit(): void {
    this.initControl();
  }

  public get resultNumber(): string {
    return !!this.result ? `${this.result.resultNumber}` : '-';
  }

  public get spentTime(): string {
    return !!this.result ? `${this.result.spentTime}` : '-';
  }

  public countGcd(): void {
    this.secondTaskService.numberListGcd({
      numberList: this.getNumbersFromString(this.numbersInputControl.value),
    })
      .subscribe((resultObject: IResultObject) => this.result = resultObject);
  }

  private getNumbersFromString(numberListAsString: string): number[] {
    return numberListAsString.split(',').map(Number);
  } 

  private initControl(): void {
    this.numbersInputControl = new FormControl('');
  }
}
