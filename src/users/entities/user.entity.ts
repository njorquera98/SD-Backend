import { Column, Entity } from "typeorm";

@Entity()

export class User {
  
  @Column({primary: true, generated: true })
  id: number;
  
  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  name: string;
}
