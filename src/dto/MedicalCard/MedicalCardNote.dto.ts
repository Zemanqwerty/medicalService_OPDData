export class MedicalCardNoteDto {
  id: number;
  complaints: string;
  anamnesis_vite: string;
  anamnesis_morbi: string;
  objective_status: string;
  diagnosis: string;
  treatment: string;
  recommendations: string;
  referrals_to_related_specialists: string;
  referrals_for_additional_examinations: string;
  user_id: number;
}
