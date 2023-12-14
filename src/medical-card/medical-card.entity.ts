import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date
}
