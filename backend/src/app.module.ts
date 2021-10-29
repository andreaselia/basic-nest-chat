import { Module } from '@nestjs/common';
import { MessageModule } from './modules/messages/messages.module';

@Module({
  imports: [MessageModule],
})
export class AppModule {}
