import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Controller(
  'notifications',
) /* Pode escrever entre () uma rota. Ex.: 'app', ai para acessar tem que ir em .../app. Os que estão dentro dele continuam a rota */
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post() // Esse parâmetro @body, recebe o body da requisição
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(), //gera um id único global
        content,
        category,
        recipientId,
      },
    });
  }
}
