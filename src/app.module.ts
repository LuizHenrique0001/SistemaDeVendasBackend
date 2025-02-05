import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { State } from './state/entity/state.entity';
import { City } from './city/entity/city.entity';
import { Address } from './address/entity/address.entity';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [ 
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'postgres',
      entities: [State, User, City, Address],
      synchronize: true,
    }),
    CacheModule,
    
  ],
})
export class AppModule {}
