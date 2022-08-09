import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe.component';
import { ListadosComponent } from './listados/listados.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadosComponent
    ],
    exports: [
        ListadosComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}