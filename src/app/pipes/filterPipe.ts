import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterProduct'
})

export class FilterPipe implements PipeTransform {

    transform(array: any[], key: string): any[] {

        if(key === undefined || key.length == 0) return array;
        else 
            return array.filter(item => {
                if (item.name.toLowerCase().indexOf(key.toLowerCase()) === -1)
                    return false
                else
                    return true
                
            })
    }

}