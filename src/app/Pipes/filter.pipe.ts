import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], search: string): any[] {
    if (!search ) {
      return value;
    }

    return value.filter(item => item.name.toLowerCase().includes(search));
  }

}

/*transform(items: any[], searchText: string): any[] {
  if (!items) return [];
  if (!searchText) return items;
  searchText = searchText.toLowerCase();
  
  return items.filter(item => {
    // Remplacez 'name' par la propriété que vous souhaitez filtrer
    return item.name.toLowerCase().includes(searchText);
  });
}*/