import { Module } from '@nestjs/common';
import { MessageModule } from '../messages/messages.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [MessageModule],
  providers: [AppGateway],
})
export class AppModule {}
