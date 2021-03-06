import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {
  @Output() OnToggle = new EventEmitter()
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() policyDateSelected: Date;
  @Input() policyLengthEntered: number;
  registerForm: FormGroup;
  todaydate = new Date()
  day = ''
  month = ''
  mindate = ""

  constructor(private formBuilder: FormBuilder, private commonDataService: CommonDataService, private GAService: GoogleAnalyticsService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      policyDate: ['', Validators.required],
      policyLength: ['', Validators.required],
      check1: ['', Validators.requiredTrue],
      check2: ['', Validators.requiredTrue]
    });
    this.todaydate.setDate(this.todaydate.getDate() + 1);
    if ((this.todaydate.getMonth() + 1) < 10) {
      this.month = "0" + (this.todaydate.getMonth() + 1)
    } else {
      this.month = "" + (this.todaydate.getMonth() + 1)
    }
    if (this.todaydate.getDate() < 10) {
      this.day = "0" + this.todaydate.getDate()
    } else {
      this.day = "" + this.todaydate.getDate()
    }
    this.mindate = "" + this.todaydate.getFullYear() + "-" + this.month + "-" + this.day
  }
  submit = () => {
    this.GAService.event('Calculate Button clicked', 'Policy Details', 'Calculate')
    this.commonDataService.policy.next(this.registerForm.value)
    this.OnSubmission.emit('Policy Details form is submitted!')
  }
  change = () => {
    if (this.registerForm.valid) {
      this.OnToggle.emit(true)
      this.commonDataService.policy.next(this.registerForm.value)
    } else {
      this.OnToggle.emit(false)
    }
  }
  get formControls() {
    return this.registerForm.controls
  }
}
