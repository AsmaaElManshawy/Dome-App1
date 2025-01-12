import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  addcl: boolean[] = [false, false, false, false];
  changeclass(e: KeyboardEvent): void {
    const target = e.target as HTMLInputElement;
    const id: number = Number(target.id);
    const value: string = target.value;

    if (!value) {
      this.addcl[id] = false;
    } else {
      this.addcl[id] = true;
    }
  }
}
