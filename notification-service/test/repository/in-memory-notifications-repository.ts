import { NotificationRepository } from '@application/repositories/notification-repository';
import { Notification } from '@application/entities/notification';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  async findById(notificationId: string) {
    return this.notifications.find(({ id }) => id === notificationId) ?? null;
  }
  async save(notification: Notification): Promise<void> {
    const { id: notificationId } = notification;
    this.notifications = this.notifications.filter(({ id }) => {
      id === notificationId;
    });
    this.notifications.push(notification);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }
}
