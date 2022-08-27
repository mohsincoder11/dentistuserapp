import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {

  transform(value: any): any{
    console.log(moment().format('YYYY-MM-DD'));
    let current_time=moment().format('YYYY-MM-DD H:mm');

   var current_time2 = moment(current_time, 'HH:mm');
   var end_time = moment(value, 'HH:mm');
   return end_time.unix()-current_time2.unix();
   
     
    }
}
