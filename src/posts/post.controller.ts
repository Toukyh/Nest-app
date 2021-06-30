import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo } from './entities/post.entity';

@Controller('posts')
export class PostController {

    constructor() {
        this.posts = [];
    }
    posts: Todo[];
    @Get()
    getpost() {
        return this.posts;
    }

    @Get('/:id')
    showPost(
        @Param('id') id
    ) {
        return this.posts.find((actualPost: Todo) => actualPost.id === +id);
    }

    @Post()
    addPost(
        @Body() newPost: Todo
    ) {
        this.posts.push(newPost);
        return newPost;
    }

}

