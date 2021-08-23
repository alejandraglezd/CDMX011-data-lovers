// import data from '../src/data/pokemon/pokemon.js'
import {pokemonesMock} from './data.Mock.js'
import { filterByType } from '../src/data.js';
import {allPokemon} from '../src/data.js'
import { expect } from '@jest/globals';

const pokemones = pokemonesMock;

describe('filtra data por tipo',() => {
  it('should be a function',() => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns filtrado por tipo', () => {
    expect(filterByType(type, 'fire')).toHaveLenght(3);
  });
}
)