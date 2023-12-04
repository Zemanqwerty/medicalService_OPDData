export class MedicalCardResponseDto {
    user_id: number;
    message: string;

    constructor(user_id: number, message: string) {
        this.user_id = user_id;
        this.message = message;
    }
}