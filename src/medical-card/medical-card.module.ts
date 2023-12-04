import { Module } from '@nestjs/common';
import { MedicalCardService } from './medical-card.service';
import { MedicalCardController } from './medical-card.controller';
import { OpdService_MedicalCard } from './medical-card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([OpdService_MedicalCard]),],
    providers: [MedicalCardService],
    controllers: [MedicalCardController]
})
export class MedicalCardModule {}
