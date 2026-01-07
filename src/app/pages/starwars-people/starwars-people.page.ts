import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { GetStarwarsPeople } from '../../service/get-starwars-people';
import { Person } from 'src/app/models/person.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-starwars-people',
  templateUrl: './starwars-people.page.html',
  styleUrls: ['./starwars-people.page.scss'],
  standalone: true,
  imports: [IonContent, TranslateModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class StarwarsPeoplePage implements OnInit {

  constructor() { }

  private swapiService = inject(GetStarwarsPeople);
  characters: Person[] = [];

  ngOnInit(): void {
    this.swapiService.getPeople().subscribe({
      next: (data) => {
        this.characters = data;
        // console.log('Dados recebidos:', data);
      },
      error: (err) => console.error('Erro ao buscar dados', err)
    });
  }

}
