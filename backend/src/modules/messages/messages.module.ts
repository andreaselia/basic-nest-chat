import { Module } from '@nestjs/common';
import { MessageController } from './messages.controller';
import { MessageGateway } from './messages.gateway';

@Module({
  controllers: [MessageController],
  providers: [MessageGateway],
})
export class MessageModule {}
