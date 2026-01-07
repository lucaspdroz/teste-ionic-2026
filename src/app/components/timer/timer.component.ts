import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IonToast } from '@ionic/angular/standalone';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone: true,
  imports: [DecimalPipe, IonToast],
})

export class TimerComponent implements OnInit {
  minutes = 3;
  seconds = 0;
  timerInterval: any;
  showToast = !false;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.timerInterval);
          document.getElementById('open-toast')?.click();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
      this.showToast = true;
    }, 1000);
  }

  setRoleMessage(event: CustomEvent) {
    console.log('Toast dismissed');
  }
}
