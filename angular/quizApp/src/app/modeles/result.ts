import { Quiz } from './quiz';
import { User } from './user';

export class Result {



    id: String;
    name:String;
    score:number;
    answers: String[];
    date: Date;
    test:Quiz;
    user:User;
      
}
