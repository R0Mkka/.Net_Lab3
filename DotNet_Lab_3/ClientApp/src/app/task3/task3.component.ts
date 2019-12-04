import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ThirdTaskService } from '../services/third-task.service';

import { IResultObject } from '../models';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
})
export class Task3Component implements OnInit {
  public twoNumbersForm: FormGroup;
  public result: IResultObject = null;

  constructor(
    private formBuilder: FormBuilder,
    private thirdTaskService: ThirdTaskService,
  ) { }

  public get resultNumber(): string {
    return !!this.result ? `${this.result.resultNumber}` : '-';
  }

  public get spentTime(): string {
    return !!this.result ? `${this.result.spentTime}` : '-';
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public countGcd(): void {
    this.thirdTaskService.gcdBinary(this.twoNumbersForm.value)
      .subscribe((resultObject: IResultObject) => this.result = resultObject);
  }

  private initForm(): void {
    this.twoNumbersForm = this.formBuilder.group({
      firstNumber: [''],
      secondNumber: [''],
    });
  }
}
