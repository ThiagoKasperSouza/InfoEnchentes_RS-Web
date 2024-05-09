import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  data: any = {
    title:"Canais do yotube",
    subtitle: "Principais canais encontrados que estão informando notícias:",
    videos: [
      {
        link: "https://www.youtube.com/@gzhdigital",
        image: "../../../assets/images/plantao-gaucha.png",
        text:"Plantão Gaucha",
        lastUpdate: "Ultima atualização: 8 de maio"
      },

      {
        link: "https://www.youtube.com/@RadioGuaibaOficial",
        image: "../../../assets/images/radio-guaiba.png",
        text:"Rádio guaíba",
        lastUpdate: "Ultima atualização: 8 de maio"
      },
    ],
    tools: {
      title: "Ferramentas úteis",
      content: [
        {
          link: "https://docs.google.com/spreadsheets",
          text:"Planilhas google"
        },
        {
          link: "https://www.defesacivil.rs.gov.br/inicial",
          text:"Defesa civil"
        },
        {
          link: "https://ssp.rs.gov.br/corpo-de-bombeiros-militar",
          text:"Bombeiros"
        },
        {
          link: "https://cvbrs.org.br/",
          text:"Cruz vermelha"
        },
      ]
    }
  }
}
