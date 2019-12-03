import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FirstTaskService } from '../services/first-task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public twoNumbersForm: FormGroup;
  public result: number = null;

  constructor(
    private formBuilder: FormBuilder,
    private firstTaskService: FirstTaskService,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public countGcd(): void {
    this.firstTaskService.gcd(this.twoNumbersForm.value)
      .subscribe(({ resultNumber }) => this.result = resultNumber);
  }

  private initForm(): void {
    this.twoNumbersForm = this.formBuilder.group({
      firstNumber: [''],
      secondNumber: [''],
    });
  }
}
