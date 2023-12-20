import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'//Le cambio el nombre a v4 usando as
//v4 es una función que genera id
console.log(uuid());
import {Character} from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Componente que actúa de padre enviando los datos de characters al hijo, en este caso list.component
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //Método para que reciba el nuevo personaje del hijo (crea un nuevo personaje)
  getNewCharacter(character: Character){
    console.log('Main page');
    console.log(character);

    const newCharacter: Character = {
      id: uuid(), ...character //Estamos usando la propiedad spread, que lo que hace es coger todas las propiedades de Character y las
      //añade a la nueva propiedad. Esto es muy útil cuando tenemos un objeto que tiene muchas propiedades
    };

    this.characters.push(newCharacter);
  }

  /*onDeleteCharacterMain(character:Character){
    console.log(character);
    this.characters.splice(0,1);
  }*/

  deleteCharacterById(id: string){
  this.characters = this.characters.filter(character => character.id !== id);//Va a coger a todos los elementos que no tenga el id que se recibe por
  //parámetro, que es precisamente el que se elimina.
    console.log(this.characters);
}

  constructor() { }
}
