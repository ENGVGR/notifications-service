import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

interface getRecipientNotificationsRequest {
  recipientId: string;
}

interface getRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable() /* Necessário, para em http.module.ts conseguir utilizar essa classe em providers */
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: getRecipientNotificationsRequest,
  ): Promise<getRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
