export class Model {
  constructor(controller) {
    this.controller = controller;
    this.data = [
      {
        title: "Cat",
        description:
          "I am a monster cat (Weaown Waeown). Don't come near me. I will not bite you but will roast your insecurities.",
        imageURL: "images/cat.jpeg",
      },
      {
        title: "Dog",
        description:
          "I am a cool puppy (aow aow). You can play with me or take me to a walk",
        imageURL: "images/dog.jpeg",
      },
      {
        title: "Horse",
        description:
          "I am a horse (HeHeHe). I will blow your mind and ride you to oblivion",
        imageURL: "images/horse.webp",
      },
    ];
    this.currentItemIndex = null;
  }
  getData() {
    return this.data;
  }
}
