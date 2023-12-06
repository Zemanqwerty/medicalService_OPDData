import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OpdService_MedicalCard } from "./medical-card.entity";
import { Repository } from "typeorm";
import { MedicalCardNoteDto } from "src/dto/MedicalCard/MedicalCardNote.dto";
import { MedicalCardResponseDto } from "src/dto/MedicalCard/MedicalCardResponse.dto";


@Injectable()
export class MedicalCardService {
    constructor(
        @InjectRepository(OpdService_MedicalCard)
        private medicalCardRepository: Repository<OpdService_MedicalCard>,
    ) {};

    async addNote(noteData: MedicalCardNoteDto) {
        const newNote = this.medicalCardRepository.create(noteData);
        await this.medicalCardRepository.save(newNote);

        return new MedicalCardResponseDto(noteData.user_id, 'Новая запись добавлена');
    }

    async getNotesById(userId: number) {
        const notes = await this.medicalCardRepository.findBy({user_id: userId})

        return notes;
    }
}