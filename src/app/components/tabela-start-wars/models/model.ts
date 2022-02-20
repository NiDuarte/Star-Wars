export class PlanetaDTO {
  name;
  rotation_period;
  orbital_period;
  diameter;
  climate;
  gravity;
  terrain;
  surface_water;
  population;
  residents: string[];
  films: string[];
  created;
  edited;
  url;

  dadostr;
  constructor(reg = null) {
    if (reg) {
      this.name = reg.name;
      this.rotation_period = reg.rotation_period;
      this.orbital_period = reg.orbital_period;
      this.diameter = reg.diameter;
      this.climate = reg.climate;
      this.gravity = reg.gravity;
      this.terrain = reg.terrain;
      this.surface_water = reg.surface_water;
      this.population = reg.population;
      this.residents = reg.residents;
      this.films = reg.films;
      this.created = reg.created;
      this.edited = reg.edited;
      this.url = reg.url;
      this.dadostr = this.toString();

    }
  }
}

export class ColecaoPlentaDTO {
  count;
  next;
  previous;
  results: PlanetaDTO[];
}

export class Coluna{
  field;
  header;
  filter;
}
