import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Card {
  tag: string,
  title: string,
  subtitle: string,
  desc: string,
  link:string,
  src: string,
  alt: string,
  goto: string,
}

@Component({
  selector: 'app-top-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-content.component.html',
  styleUrl: './top-content.component.scss'
})
export class TopContentComponent {
  cards : Card[]  = [
    {
      tag: 'Análise',
      title: 'Windy.com',
      subtitle: '8 de maio',
      desc: 'Análise meteorologica de eventos naturais',
      link: 'https://www.windy.com/pt/-Tempestades-thunder?thunder,-29.727,-51.958,10',
      src: '../../../assets/images/windy-img.png',
      alt: 'imagem do app windy.com',
      goto: 'Ir ao site',
    },
    {
      tag: 'Previsão',
      title: 'Climatempo',
      subtitle: '8 de maio',
      desc: 'Previsão para os próximos 15 dias',
      link: 'https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/363/portoalegre-rs" class="icon-link gap-1 icon-link-hover stretched-link',
      src: '../../../assets/images/climatempo.png',
      alt: 'imagem do site climatempo',
      goto: 'Ir ao site'
    },

  ]
 
}
