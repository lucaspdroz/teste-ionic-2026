
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonSelect, IonSelectOption, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bodyOutline, bodySharp, heartOutline, heartSharp, barChartOutline, barChartSharp } from 'ionicons/icons';
import { LanguageService } from './service/i18n';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonSelect, IonSelectOption, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Braile', url: '/braile-page', icon: 'body' },
    { title: 'Quiz', url: '/quiz', icon: 'bar-chart' },
    { title: 'Star Wars - Personagens', url: '/starwars-people', icon: 'heart' },
  ];

  async ngOnInit() {
    const savedLang = localStorage.getItem('lang') || 'pt';
    await this.langService.init(savedLang);
  }
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private langService: LanguageService) {
    addIcons({
      bodyOutline,
      bodySharp,
      barChartOutline,
      barChartSharp,
      heartOutline,
      heartSharp,
    });
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
