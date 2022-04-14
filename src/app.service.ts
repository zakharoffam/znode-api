import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly phrases: string[] = [
    'Привет!',
    'Что, как?',
    'Я работаю. Не мешай.',
  ];

  /**
   * Получить случайное число от min до max+1
   * @param min
   * @param max
   * @private
   */
  static getRandomInteger(min, max): number {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  /**
   * Получить случайную фразу
   */
  public getRandomPhrase(): string {
    const randomIndex = AppService.getRandomInteger(0, this.phrases.length - 1);
    console.log(randomIndex);
    return this.phrases[randomIndex];
  }
}
