import { Pipe, PipeTransform } from '@angular/core';

import { Quiz } from 'src/app/modeles/quiz';
@Pipe({
  name: 'qcmFilter'
})
export class QCMFilterPipe implements PipeTransform {

  transform(quizes: Quiz[], searchText: any): Quiz[] {
    if(!quizes || !searchText)
    {return (quizes)
  }

    return quizes.filter(quiz => quiz.category.toLowerCase().indexOf(searchText.toLowerCase())!== -1);
  }

}
