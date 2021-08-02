export class Model {
  constructor(controller) {
    this.controller = controller;
    this.data = [
      {
        title: "Cat",
        description:
          "I am a monster cat (Weaown Waeown). Don't come near me. I will not bite you but will roast your insecurities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",
        imageURL: "images/cat.jpeg",
      },
      {
        title: "Dog",
        description:
          "I am a cool puppy (aow aow). You can play with me or take me to a walk. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",
        imageURL: "images/dog.jpeg",
      },
      {
        title: "Horse",
        description:
          "I am a horse (HeHeHe). I will blow your mind and ride you to oblivion. You will never forget me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",
        imageURL: "images/horse.webp",
      },
      {
        title: "Cata",
        description:
          "I am a monster cat (Weaown Waeown). Don't come near me. I will not bite you but will roast your insecurities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",
        imageURL: "images/cat.jpeg",
      },
      {
        title: "Dogi",
        description:
          "I am a cool puppy (aow aow). You can play with me or take me to a walk. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",
        imageURL: "images/dog.jpeg",
      },
      {
        title: "Horsea",
        description:
          "I am a horse (HeHeHe). I will blow your mind and ride you to oblivion. You will never forget me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit velit, convallis id consectetur ut, varius et diam. Nam lacus orci, elementum et bibendum ultricies, tincidunt nec lectus. Duis blandit et mi in sodales. Fusce nec purus porttitor, pharetra mi a, accumsan nisi. Integer neque urna, cursus sed ex id, auctor vehicula mi. Donec ac finibus magna. Proin sollicitudin erat sit amet orci tincidunt, facilisis lacinia dolor ornare.",
        imageURL: "images/horse.webp",
      },
    ];
    this.currentItemIndex = null;
  }
  getData() {
    return this.data;
  }
}
