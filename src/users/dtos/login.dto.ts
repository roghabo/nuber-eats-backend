import { User } from './../entities/user.entity';
import { CoreOutput } from './../../common/dtos/output.dto';
import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";

@InputType()
export class LoginInput extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class LoginOutput extends CoreOutput{
    @Field(type => String, {nullable:true})
    token?: string;
}