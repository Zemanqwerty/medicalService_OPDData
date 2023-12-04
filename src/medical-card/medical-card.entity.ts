import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany } from 'typeorm';

@Entity()
export class OpdService_MedicalCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  complaints: string;

  @Column()
  anamnesis_vite: string;

  @Column()
  anamnesis_morbi: string;

  @Column()
  objective_status: string;

  @Column()
  diagnosis: string;

  @Column()
  treatment: string;

  @Column()
  recommendations: string;

  @Column()
  referrals_to_related_specialists: string;

  @Column()
  referrals_for_additional_examinations: string;

  @Column()
  user_id: number;
}
