import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foo: number;

  constructor() {}

  /**
   * Workaround to ionic framework issue #7121 where ion-input of type number
   * is not converted from string to number.
   * https://github.com/driftyco/ionic/issues/7121
   */
  event2Num(event) : number {
    return +event;
  }

}
