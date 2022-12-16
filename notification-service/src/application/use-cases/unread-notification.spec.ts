import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repository/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Unread notification test', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    const notification = makeNotification({ readAt: new Date() });
    await notificationRepository.create(notification);

    await unreadNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'example-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
