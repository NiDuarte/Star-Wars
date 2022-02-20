import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterMatchMode, FilterService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ColecaoPlentaDTO, Coluna } from './models/model';
import { TabelaStartWarsService } from './tabela-start-wars.service';

@Component({
  selector: 'app-tabela-start-wars',
  templateUrl: './tabela-start-wars.component.html',
  styleUrls: ['./tabela-start-wars.component.css']
})
export class TabelaStartWarsComponent implements OnInit {
  planetas = [];
  configuracaoTabela: ColecaoPlentaDTO;
  planetasSelecionados = [];
  activityValues = [];
  statuses = [];
  @ViewChild('dt1') dt1: Table;
  loading = false;
  representatives = [];
  textoFiltro = null;
  matchModeOptions: { label: string; value: any; }[];
  colunas: Coluna[] = [];
  matchModeOptionsNumerico: { label: string; value: string; }[];
  matchModeOptionsTexto: { label: string; value: string; }[];
  constructor(
    private servico: TabelaStartWarsService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.inicializaConfiguracaoTabela();
    this.listarPlanetas();
    this.inicializaFilters();
    this.inicializaColunas();

  }
  inicializaConfiguracaoTabela() {
    this.configuracaoTabela = new ColecaoPlentaDTO();
  }
  inicializaColunas() {
    this.colunas = [
      { field: 'name', header: 'Nome', filter: this.matchModeOptionsTexto },
      { field: 'rotation_period', header: 'Período de Rotação', filter: this.matchModeOptionsNumerico },
      { field: 'orbital_period', header: 'Período Orbital', filter: this.matchModeOptionsNumerico },
      { field: 'diameter', header: 'Diâmetro', filter: this.matchModeOptionsNumerico },
      { field: 'climate', header: 'Clima', filter: this.matchModeOptionsTexto },
      { field: 'gravity', header: 'Gravidade', filter: this.matchModeOptionsTexto },
      { field: 'terrain', header: 'Terreno', filter: this.matchModeOptionsTexto },
      { field: 'surface_water', header: 'Água na Terra', filter: this.matchModeOptionsNumerico },
      { field: 'population', header: 'População', filter: this.matchModeOptionsNumerico },
      { field: 'residents', header: 'Residentes', filter: this.matchModeOptionsTexto },
      { field: 'films', header: 'Filmes', filter: this.matchModeOptionsTexto },
      { field: 'created', header: 'Criado', filter: this.matchModeOptionsTexto },
      { field: 'edited', header: 'Editado', filter: this.matchModeOptionsTexto },
    ]
  }
  inicializaFilters() {


    this.matchModeOptionsNumerico = [
      { label: 'Maior que', value: FilterMatchMode.GREATER_THAN },
      { label: 'Menor que', value: FilterMatchMode.LESS_THAN },
      { label: 'Igual', value: FilterMatchMode.EQUALS },
    ];

    this.matchModeOptionsTexto = [

      { label: 'Igual', value: FilterMatchMode.EQUALS },
      { label: 'Contém', value: FilterMatchMode.CONTAINS },
      { label: 'Começa com', value: FilterMatchMode.STARTS_WITH },
    ];
  }
  clear() {

    this.textoFiltro = null;

  }

  filter(value) {

  }

  filterGlobal() {

    this.loading = true;
    this.servico.listarPlanetas().then(
      (dadosPlaneta) => {
        dadosPlaneta.results = dadosPlaneta.results.filter(r => r.dadostr.toLowerCase().includes(this.textoFiltro.toLowerCase()));
        this.configuracaoTabela = dadosPlaneta;
        this.loading = false;
      },
      (e) => {
        this.loading = false;
      }
    );
  }

  getFiltro($event) {
    if ($event) {
      const filtros = $event.filters;
      for (let index = 0; index < this.colunas.length; index++) {
        let coluna = this.colunas[index];
        if (filtros[coluna.field]) {
          return filtros[coluna.field][0];
        }
      }

    }

    return null;
  }
  filtrarRegistros(filtro,dadosPlaneta){
    if (filtro && filtro.value) {
      switch (filtro.matchMode) {
        case FilterMatchMode.EQUALS:
          dadosPlaneta.results = dadosPlaneta.results.filter(r => r.dadostr.toLowerCase() == (filtro.value.toLowerCase()));
          break;
        case FilterMatchMode.CONTAINS:
          dadosPlaneta.results = dadosPlaneta.results.filter(r => r.dadostr.toLowerCase().includes(filtro.value.toLowerCase()));
          break;
        case FilterMatchMode.STARTS_WITH:
          dadosPlaneta.results = dadosPlaneta.results.filter(r => r.dadostr.toLowerCase().startsWith(filtro.value.toLowerCase()));
          break;
        default:
          dadosPlaneta.results = dadosPlaneta.results;
          break;
      }
    }

  }
  listarPlanetas($event = null) {
    let page = $event ? ($event.first / $event.rows) + 1 : 1;
    let filtro = this.getFiltro($event);
    this.loading = true;
    this.servico.listarPlanetas(page).then(
      (dadosPlaneta) => {
        this.filtrarRegistros(filtro,dadosPlaneta);
        this.configuracaoTabela = dadosPlaneta;
        this.loading = false;
      },
      (e) => {
        this.loading = false;
      }
    );
  }

}
