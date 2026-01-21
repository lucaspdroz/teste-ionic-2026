
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonSelect,
  IonSelectOption,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
  IonContent,
  // IonTabBar,
  // IonTabButton,
  // IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import {
  bodyOutline,
  bodySharp,
  heartOutline,
  barChartSharp,
  heartSharp,
  barChartOutline,
  library,
  playCircle,
  radio,
  search,
  heart
} from 'ionicons/icons';

import { LanguageService } from './service/i18n';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    // IonTabButton,
    // IonTabBar,
    // IonTabs,
    IonApp,
    IonSplitPane,
    IonSelect,
    IonSelectOption,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    IonContent,
    IonIcon,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Braile', url: '/braile-page', icon: 'body-sharp', tab: 'braile-page' },
    { title: 'Quiz', url: '/quiz', icon: 'bar-chart-sharp', tab: 'quiz' },
    { title: 'Star Wars', url: '/starwars-people', icon: 'heart', tab: 'starwars-people' },
  ];

  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }

  async ngOnInit() {
    const savedLang = localStorage.getItem('lang') || 'pt-br';
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
      library,
      heart,
      playCircle,
      radio,
      search
    });
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
