import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string): void { // domyślnie void, ale chce mieć jasno zadeklarowane
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
