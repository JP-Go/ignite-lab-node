import { Module } from '@nestjs/common';
import { NotificationController } from './infra/notification.controller';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [PrismaService],
})
export class NotificationModule {}
