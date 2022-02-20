import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { TabelaStartWarsComponent } from './components/tabela-start-wars/tabela-start-wars.component';
import { TabelaStartWarsService } from './components/tabela-start-wars/tabela-start-wars.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TabelaStartWarsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [
    TabelaStartWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
