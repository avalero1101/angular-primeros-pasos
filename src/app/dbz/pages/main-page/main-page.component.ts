import { Component } from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {DbzService} from "../../services/dbz.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    //Inyección de dependencias. Inyectamos en el constructor el servicio para poder usarlo en este componente
    constructor(private dbzService: DbzService ) {
    }

    get characters(): Character[]{
      return [...this.dbzService.characters];//Hacemos un spread para hacer una copia del array del contenido del objeto Character
    }

    onDeleteCharacter(id: string){
      this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character){
      this.dbzService.getNewCharacter(character);
    }
}
