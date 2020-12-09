import { Restaurant } from './entities/restaurant.entity';
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateBatchDelegateFnOptions } from 'graphql-tools';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';


@Resolver(of => Restaurant)
export class RestaurantResolver {
    @Query(returns => [Restaurant])
    restaurants(@Args("veganOnly") veganOnly:boolean):Restaurant[] {
        return [];
    }
    @Mutation(returns => Boolean)
    createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto
    ): boolean {
        return true;
    }
}