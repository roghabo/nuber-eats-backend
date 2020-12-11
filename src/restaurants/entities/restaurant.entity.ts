import { Field, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@ObjectType()
@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number;

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5, 10)
    name: string;

    @Field(type => Boolean, {nullable:true})
    @Column({default: true })
    @IsBoolean()
    isVegan: boolean;

    @Field(type => String, {defaultValue:"kangnum"})
    @Column()
    @IsString()
    address: string;
    
    @Field(type => String)
    @Column()
    @IsString()
    ownersName: string;

    @Field(type=> String)
    @Column()
    @IsString() 
    categoryName: string;
}