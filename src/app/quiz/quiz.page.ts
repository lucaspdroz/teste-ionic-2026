import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonRow, IonRadio, IonRadioGroup, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonPopover } from '@ionic/angular/standalone';
import { TimerComponent } from "../components/timer/timer.component";
import { BrailleComponent } from '../components/braile-text/braile-text.component'
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { help, logoApple, settingsSharp } from 'ionicons/icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    IonIcon,
    IonContent,
    IonRadio,
    BrailleComponent,
    IonRadioGroup,
    IonHeader,
    IonRow,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    TimerComponent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonPopover
  ]
})

export class QuizPage implements OnInit {
  public quizElements = [
    {
      title: 'Inbox',
      url: '/assets/braileIcons/b',
      questions: "Que letra braile é essa?",
      possibleAnswers: [
        { answer: 'A', isCorrect: false },
        { answer: 'H', isCorrect: false },
        { answer: 'B', isCorrect: true },
        { answer: 'Z', isCorrect: false }
      ]
    },
    {
      title: 'Inbox',
      url: '/assets/braileIcons/r',
      questions: "Que letra braile é essa?",
      possibleAnswers: [
        { answer: 'N', isCorrect: false },
        { answer: 'H', isCorrect: false },
        { answer: 'R', isCorrect: true },
        { answer: 'J', isCorrect: false }
      ]
    }, {
      title: 'Inbox',
      url: '/assets/braileIcons/a',
      questions: "Que letra braile é essa?",
      possibleAnswers: [
        { answer: 'A', isCorrect: false },
        { answer: 'H', isCorrect: false },
        { answer: 'B', isCorrect: true },
        { answer: 'Z', isCorrect: false }
      ]
    }, {
      title: 'Inbox',
      url: '/assets/braileIcons/i',
      questions: "Que letra braile é essa?",
      possibleAnswers: [
        { answer: 'A', isCorrect: false },
        { answer: 'H', isCorrect: false },
        { answer: 'I', isCorrect: true },
        { answer: 'Z', isCorrect: false }
      ]
    }, {
      title: 'Inbox',
      url: '/assets/braileIcons/l',
      questions: "Que letra braile é essa?",
      possibleAnswers: [
        { answer: 'A', isCorrect: false },
        { answer: 'L', isCorrect: true },
        { answer: 'H', isCorrect: false },
        { answer: 'Z', isCorrect: false }
      ]
    }, {
      title: 'Inbox',
      url: '/assets/braileIcons/e',
      questions: "Que letra braile é essa?",
      possibleAnswers: [
        { answer: 'A', isCorrect: false },
        { answer: 'H', isCorrect: false },
        { answer: 'E', isCorrect: true },
        { answer: 'Z', isCorrect: false }
      ]
    }, {
      title: 'Inbox',
      url: '/assets/braileIcons/exclamation',
      questions: "Que letra braile é essa?",
      possibleAnswers: [
        { answer: ';', isCorrect: false },
        { answer: '?', isCorrect: false },
        { answer: '!', isCorrect: true },
        { answer: '.', isCorrect: false }
      ]
    }
  ];

  constructor() {
    addIcons({ logoApple, settingsSharp, help });

  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  }

  ngOnInit() {
  }


  @ViewChild('popover') popover!: HTMLIonPopoverElement;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
