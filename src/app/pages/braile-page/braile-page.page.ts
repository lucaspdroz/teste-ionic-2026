import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { BrailleComponent } from 'src/app/components/braile-text/braile-text.component';

@Component({
  selector: 'app-braile-page',
  templateUrl: './braile-page.page.html',
  styleUrls: ['./braile-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, BrailleComponent]
})
export class BrailePagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
