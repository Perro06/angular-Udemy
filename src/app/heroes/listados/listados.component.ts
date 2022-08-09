import { Component} from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html'
})
export class ListadosComponent  {
  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  heroesCaidos: string[] = [];

  borrarHeroe(): void{
    let heroeCaido = this.heroes.shift();
    heroeCaido? this.heroesCaidos.push(heroeCaido): null;
  }

  matarHeroe(heroe: string): void{
    // this.heroes.filter()
    // this.heroes.splice(index, -1);
    console.table(this.heroes);
    let heroeCaido = this.heroes.shift();
    heroeCaido? this.heroesCaidos.push(heroeCaido): null;
    console.table(this.heroesCaidos);
  }

  revivirHeroe(heroe: string): void{

  }

}
