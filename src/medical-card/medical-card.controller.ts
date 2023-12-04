import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MedicalCardService } from "./medical-card.service";
import { MedicalCardNoteDto } from "src/dto/MedicalCard/MedicalCardNote.dto";


@Controller('medical-card')
export class MedicalCardController {
    constructor(private readonly medicalCardService: MedicalCardService) {};

    @Post('addnote')
    async addNewNote(@Body() noteData: MedicalCardNoteDto) {
        try {
            return await this.medicalCardService.addNote(noteData);
        } catch (e) {
            return e
        }
    }

    @Get(':id')
    async getNotesById(@Param() params: any) {
        try {
            return await this.medicalCardService.getNotesById(params.id);
        } catch (e) {
            return e;
        }
    }
}