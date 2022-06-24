interface ISlider {
  title: string;
  desc: string;
  image: string;
}

export class SliderClass {
  constructor(public title: string, public desc: string, public image: string) {
  }
}

export let Sliders:SliderClass[] = [
  new SliderClass("Technology is best when it brings people together.", "first description", "assets/sliderImg/slider1.png"),
  new SliderClass("It has become appallingly obvious that our technology has exceeded our humanity", "second description", "assets/sliderImg/slider2.png"),
  new SliderClass("The Web as I envisaged it, we have not seen it yet", "third description", "assets/sliderImg/slider2.png"),
  new SliderClass("Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road", "forth description", "assets/sliderImg/slider2.png"),
  new SliderClass("It's not a faith in technology. It's faith in people", "fifth description", "assets/sliderImg/slider2.png"),
];
