import { MatTabsModule, MatCardModule, MatDividerModule, MatTableModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleDocumentosComponent } from './detalle-documentos/detalle-documentos.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentosComponent,
    DetalleDocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
