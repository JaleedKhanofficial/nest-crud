import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: number;
    
}