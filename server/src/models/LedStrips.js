import ws281x from "rpi-ws281x-native";
import { CONSTANTS } from "../constants.mjs";

const DEFAULT_COLOR = 0xff0000; // red
const NUM_LEDS = 34;

const LED_OPTIONS = {
  freq: 800000,
  channels: [
    {
      count: NUM_LEDS,
      gpio: CONSTANTS.HOT_LIQUOR.LED_GPIO_PIN,
      invert: false,
      brightness: 255,
      stripType: "ws2812",
    },
    {
      count: NUM_LEDS,
      gpio: CONSTANTS.MASH.LED_GPIO_PIN,
      invert: false,
      brightness: 255,
      stripType: "ws2812",
    },
    {
      count: NUM_LEDS,
      gpio: CONSTANTS.BOIL.LED_GPIO_PIN,
      invert: false,
      brightness: 255,
      stripType: "ws2812",
    },
    {
      count: NUM_LEDS,
      gpio: CONSTANTS.WORT.LED_GPIO_PIN,
      invert: false,
      brightness: 255,
      stripType: "ws2812",
    },
  ],
};

class LedStrip {
  constructor(ledInterface) {
    this.ledInterface = ledInterface;
    this.brightness = 255;
    this.color = DEFAULT_COLOR;
    this.leds = new Uint32Array(NUM_LEDS).fill(DEFAULT_COLOR);
  }

  clear() {
    this.ledInterface.reset();
  }

  setBrightness(brightness) {
    this.brightness = brightness;
    this.ledInterface.setBrightness(this.brightness);
  }

  setStripColor(color) {
    this.color = color;
    this.leds = new Uint32Array(NUM_LEDS).fill(color);
    this.ledInterface.array.set(this.leds);
    this.ledInterface.render();
  }

  toJSON() {
    return {
      color: this.color,
      brightness: this.brightness,
    };
  }
}

const [hotLiquorLEDs, mashLEDs, boilLEDs, wortLEDs] = ws281x
  .init(LED_OPTIONS)
  .map((ledInterface) => new LedStrip(ledInterface));

export { hotLiquorLEDs, mashLEDs, boilLEDs, wortLEDs };
