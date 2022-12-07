import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operator'
})
export class OperatorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'eq':
        return '=';

      case 'gt':
        return '>';

      case 'gte':
        return '>=';

      case 'lt':
        return '<';

      default:
        return '<=';
    }
  }

}
