type Resources = {
  images: Map<string, any>;
  videos: Map<string, any>;
  models: Map<string, any>;
  shaders: Map<string, any>;
  fonts: Array<string>;
};

export const resources: Resources = {
  images: new Map([
    ['spaceship', 'spaceship.png'],
    ['rock', 'rock.png'],
    ['bullet', 'bullet.png'],
    ['explosion', 'explosion.png'],
  ]),
  videos: new Map([]),
  models: new Map([]),
  shaders: new Map([]),
  fonts: [],
};
