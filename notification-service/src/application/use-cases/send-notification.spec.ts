import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

let notifications: Notification[] = [];
const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification test', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Nova solicitação de seguir',
      recipientId: 'some-example-id',
    });

    expect(notifications).toHaveLength(1);
    expect(notification).toBeTruthy();
  });
});
