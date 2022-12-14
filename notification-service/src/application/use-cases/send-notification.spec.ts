import { InMemoryNotificationRepository } from '../../../test/repository/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification test', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Nova solicitação de seguir',
      recipientId: 'some-example-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
