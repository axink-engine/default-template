import { Axink, Color } from '@axink/core';
import entities from '@game/entities';
import scripts from '@game/scripts';
import { resources } from '@game/resources';
import { interfaces } from './resources/interfaces/index.ts';

console.log('INIT TECH DEMO a!');

const GAME = new Axink({
  graphics: {
    background: 0x000000,
    scaleFactor: 32,
  },
  physics: {
    gravity: {
      x: 0.0,
      y: 0.0,
      z: 0.0,
    },
  },
});

GAME.init({ entities, resources, scripts, interfaces });

GAME.addScene({
  name: 'Menu',
  order: 0,
  entities: [
    'Manager',
    'MenuInterface',
    'MainCamera',
    'Spaceship',
  ],
  background: new Color().setHSL(0.6, 0, 1),
  scripts: [],
  childScenes: [],
});

GAME.start();
