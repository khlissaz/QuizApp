import { Question } from './question';

export class Quiz {
   _id:String;
    name:String;
    description:String;
    category:String;
    dateTest: Date;
    difficultyLevel: string;
    questions : Question [];
  
}
