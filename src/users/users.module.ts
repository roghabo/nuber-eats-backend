import { Verification } from './entities/verification.entity';
import { UserService } from './users.service';
import { UserResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Verification]),],
    providers: [UserResolver, UserService],
    exports: [UserService],
})
export class UsersModule {}
