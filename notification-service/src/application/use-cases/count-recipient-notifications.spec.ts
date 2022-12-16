import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repository/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notification test', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(makeNotification());

    await notificationRepository.create(makeNotification());

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count: count1 } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    const { count: count2 } = await countRecipientNotifications.execute({
      recipientId: 'recipient-2',
    });

    expect(count1).toEqual(2);
    expect(count2).toEqual(1);
  });
});
