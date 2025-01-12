import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EventInfoWrapper } from '@angular/core/primitives/event-dispatch';

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imgs: string[] = [
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
  ];
  hide: boolean = false;
  hideLayer: boolean[] = [false, false, false, false, false, false];
  url: string = '';
  show(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const id: number = Number(target.id);
    this.hideLayer[id] = true;
  }

  hideen(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const id: number = Number(target.id);
    this.hideLayer[id] = false;
  }

  zoom(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const id: number = Number(target.id);
    this.hideLayer[id] = false;
    this.url = this.imgs[id];
    this.hide = true;
  }

  close(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (target.id == '20') {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }
}
