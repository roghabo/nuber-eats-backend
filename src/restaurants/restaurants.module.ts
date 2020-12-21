import { Dish } from './entities/dish.entity';
import { CategoryRepository } from './repositories/category.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantResolver, DishResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Dish, CategoryRepository])],
  providers: [
    RestaurantResolver,
    CategoryRepository,
    DishResolver,
    RestaurantService,
  ],
})
export class RestaurantsModule {}
