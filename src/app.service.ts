import { Injectable } from '@nestjs/common';

@Injectable() /* Injeta essa classe quando estiver marcada como Provider em app.module */
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
