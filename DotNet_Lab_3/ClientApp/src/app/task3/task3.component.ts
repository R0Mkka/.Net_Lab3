import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ThirdTaskService } from '../services/third-task.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
})
export class Task3Component implements OnInit {
  public twoNumbersForm: FormGroup;
  public result: number = null;

  constructor(
    private formBuilder: FormBuilder,
    private thirdTaskService: ThirdTaskService,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public countGcd(): void {
    this.thirdTaskService.gcdBinary(this.twoNumbersForm.value)
      .subscribe(({ resultNumber }) => this.result = resultNumber);
  }

  private initForm(): void {
    this.twoNumbersForm = this.formBuilder.group({
      firstNumber: [''],
      secondNumber: [''],
    });
  }
}
