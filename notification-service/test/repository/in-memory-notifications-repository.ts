import { NotificationRepository } from '@application/repositories/notification-repository';
import { Notification } from '@application/entities/notification';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
