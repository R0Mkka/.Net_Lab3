import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FirstTaskService } from '../services/first-task.service';

import { IResultObject } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public twoNumbersForm: FormGroup;
  public result: IResultObject = null;

  constructor(
    private formBuilder: FormBuilder,
    private firstTaskService: FirstTaskService,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public get resultNumber(): string {
    return !!this.result ? `${this.result.resultNumber}` : '-';
  }

  public get spentTime(): string {
    return !!this.result ? `${this.result.spentTime}` : '-';
  }

  public countGcd(): void {
    this.firstTaskService.gcd(this.twoNumbersForm.value)
      .subscribe((resultObject: IResultObject) => this.result = resultObject);
  }

  private initForm(): void {
    this.twoNumbersForm = this.formBuilder.group({
      firstNumber: [''],
      secondNumber: [''],
    });
  }
}
