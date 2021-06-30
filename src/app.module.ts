import { PostModule } from './posts/post.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    PostModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
