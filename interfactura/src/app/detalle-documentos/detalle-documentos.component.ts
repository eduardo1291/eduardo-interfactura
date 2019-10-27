import { data } from './../../assets/data.components';
import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-detalle-documentos',
  templateUrl: './detalle-documentos.component.html',
  styleUrls: ['./detalle-documentos.component.scss']
})
export class DetalleDocumentosComponent implements OnInit {
  dataSource: any;

  constructor() { }
  displayedColumns =['estado','documento','autor','firmante','creado','ver']
  ngOnInit() {
   
    this.dataSource = data.documents ;
    
  }

}
