import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entity/address.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
     UserModule,
     CityModule,
    ],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
