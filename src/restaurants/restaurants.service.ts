import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(Restaurant)
        private readonly restaurants: Repository<Restaurant>,
    ){}
    getAll(): Promise<Restaurant[]>{
        return this.restaurants.find(); 
    }
    createRestaurant (createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        const newRestaurant = this.restaurants.create(createRestaurantDto) //새로운 instance를 생성 ( 데이터베이스는 건들지 않음 )
        //DB에 저장하고 싶으면 save메소드를 사용해야 함
         return this.restaurants.save(newRestaurant);
    }
    updateRestaurant ({id, data }:UpdateRestaurantDto) {
        this.restaurants.update(id, {...data})
    }
}