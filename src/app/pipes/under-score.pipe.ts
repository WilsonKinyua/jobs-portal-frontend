import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underScore',
})
export class UnderScorePipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.replace(/_/g, ' ') : value;
  }
}
