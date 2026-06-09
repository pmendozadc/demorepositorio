import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle2',
  imports: [],
  templateUrl: './detalle2.html',
  styleUrl: './detalle2.css',
})
export class Detalle2 {

  constructor(private route: ActivatedRoute) {
     this.route.params.subscribe(params => {
     console.log(params['miparam']);
  });
}

}
