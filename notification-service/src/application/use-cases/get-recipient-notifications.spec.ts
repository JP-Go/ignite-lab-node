import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repository/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notification test', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(makeNotification());

    await notificationRepository.create(makeNotification());

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { notifications: notifications1 } =
      await getRecipientNotifications.execute({
        recipientId: 'recipient-1',
      });

    expect(notifications1).toHaveLength(2);
    expect(notifications1).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
