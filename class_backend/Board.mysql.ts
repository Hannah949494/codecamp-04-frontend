import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export default class Board extends BaseEntity {
    @PrimaryGeneratedColumn("increment") // uuid <- unique 한 아이디
    number! : number;

    @Column({type : "text"})
    writer! : string;
    
    @Column({type : "text"})  // @ <- decorator
    title! : string;
    
    @Column({type : "integer"})
    age! : number;

}