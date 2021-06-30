import { PostController } from './post.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        PostController,],
    providers: [],
})
export class PostModule { }
