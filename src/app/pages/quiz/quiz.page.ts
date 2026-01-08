import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonRow, IonRadio, IonRadioGroup, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonPopover } from '@ionic/angular/standalone';
import { TimerComponent } from "../../components/timer/timer.component";
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { help, logoApple, settingsSharp } from 'ionicons/icons';
import { TranslateModule } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular/standalone';
import { LanguageService } from '../../service/i18n'

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
    IonRadioGroup,
    IonRow,
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
        { answer: 'A', isCorrect: true },
        { answer: 'H', isCorrect: false },
        { answer: 'B', isCorrect: false },
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

  currentIndex = 0;
  selectedAnswer: any = null;
  score = 0;

  @ViewChild('popover') popover!: HTMLIonPopoverElement;
  isOpen = false;

  constructor(
    private toastCtrl: ToastController,
    private langService: LanguageService
  ) {
    addIcons({ help });
  }

  ngOnInit() { }

  /** Current step question */
  get currentQuestion() {
    return this.quizElements[this.currentIndex];
  }

  selectAnswer(answer: any) {
    this.selectedAnswer = answer;
  }

  async nextQuestion() {
    if (!this.selectedAnswer) return;

    if (this.selectedAnswer.isCorrect) {
      this.score++;

      const RIGHT_ANSWER =
        this.langService.t('QUIZ.RIGHT_ANSWER');

      await this.showToast(RIGHT_ANSWER, 'success');

      this.currentIndex++;
      this.selectedAnswer = null;

      // End of quiz
      if (this.currentIndex >= this.quizElements.length) {
        await this.showToast(
          `Quiz finalizado! Pontuação: ${this.score}`,
          'primary'
        );
      }
    } else {
      await this.showToast(
        'Resposta incorreta. Tente novamente.',
        'danger'
      );
    }
  }

  restartQuiz(): void {
    this.currentIndex = 0;
    this.selectedAnswer = null;
    this.score = 0;
  }

  async showToast(
    message: string,
    color: 'success' | 'danger' | 'primary'
  ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top',
      color
    });
    toast.present();
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
