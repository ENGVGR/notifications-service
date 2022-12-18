import { SendNotification } from './../../../application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller(
  'notifications',
) /* Pode escrever entre () uma rota. Ex.: 'app', ai para acessar tem que ir em www.localhost/app. Os que estão dentro dele continuam a rota */
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post() // Esse parâmetro @body, recebe o body da requisição
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return notification;
  }
}
