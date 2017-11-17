import { Injectable } from '@angular/core';

import swal from 'sweetalert2';

@Injectable()
export class ErrorService {
  public handleError(error) {
    swal({
      title: 'Oops...',
      type: 'error',
      text: error.message
    });
    console.log(error)
  }

  constructor() { }
}
