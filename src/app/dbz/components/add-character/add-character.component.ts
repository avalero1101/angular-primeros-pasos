import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Este componente, es el hijo de main-page y le va a emitir un character para que lo añada en la lista
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  /**
   * Asignar estas características a un formulario en add-character.html
   */
  public character: Character = {
    name: '',
    power: 0
  }


  //Método para añadir el nuevo personaje a la lista
  emitCharacter(){
      console.log(this.character);
      //validamos que no nos puedan enviar un personaje sin nombre
      if(this.character.name.length === 0) return;
      //Vamos a emitir el valor de los inputs
    this.onNewCharacter.emit(this.character)
      //Poner los valores por defecto cuando se envíe la información
    //Esto funciona gracias al two way DataBinding
    this.character = {name: '', power: 0};
  }
}
