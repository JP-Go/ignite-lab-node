import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [PrismaService],
})
export class NotificationModule {}
