import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('user_profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fistname: string;

  @Column()
  lastname: string;

  @Column({ nullable: true })
  age: number;
}
