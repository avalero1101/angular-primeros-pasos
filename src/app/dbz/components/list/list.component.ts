import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()//Actúa como hijo recibiendo los datos del padre, en este caso recibe de main-page.component
  //Si no recibe nada muestra Trunks por defecto
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onNewIdCharacter: EventEmitter<string> = new EventEmitter;

  //Elimina un personaje
  onDeleteCharacter(id: string | undefined){
    //TODO: Emitir el id del personaje
    console.log(id);
    this.onNewIdCharacter.emit(id);
  }
}
