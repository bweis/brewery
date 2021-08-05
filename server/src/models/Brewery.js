import { THERMOMETERS } from "../constants.mjs";
import Keg, { KEG_TYPE } from "./Keg";
import { hotLiquorLEDs, mashLEDs, boilLEDs, wortLEDs } from "./LedStrips";
import TemperatureSensor from "./TemperatureSensor";

class Brewery {
  constructor() {
    this.hotLiquorTank = new Keg(
      "Hot Liquor Tank",
      hotLiquorLEDs,
      THERMOMETERS.hotLiquorTank,
      KEG_TYPE.HEATER
    );
    this.mashTank = new Keg(
      "Mash Tank",
      mashLEDs,
      THERMOMETERS.mashTun,
      KEG_TYPE.HEATER
    );
    this.boilTank = new Keg(
      "Boil Tank",
      boilLEDs,
      THERMOMETERS.boilKettle,
      KEG_TYPE.HEATER
    );
    this.wortTank = new Keg(
      "Wort Tank",
      wortLEDs,
      THERMOMETERS.wortChiller,
      KEG_TYPE.CHILLER
    );

    this.wandThermometer = new TemperatureSensor(THERMOMETERS.wand)

    this.emergencyStop = false;
  }
}
const brewery = new Brewery();
export default brewery;
