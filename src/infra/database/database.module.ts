import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      /* As duas linhas seguintes significam: Que se pedir pela NotificationsRepository, vai reveber PrismaNotificationsRepository */
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [
    NotificationsRepository,
  ] /* Nome do provider que será exportado para o http.module.ts q está usando esse provider */,
})
export class DatabaseModule {}
