import TemperatureSensor from "./TemperatureSensor"

export const KEG_TYPE = {
    HEATER: Symbol("heater"),
    CHILLER: Symbol("chiller"),
}

export default class Keg {
    #isActive;

    constructor(name, ledStrip, thermometerAddress, type) {
        this.name = name
        this.ledStrip = ledStrip
        this.type = type
        this.#isActive = false;
        this.temperatureSensor = new TemperatureSensor(thermometerAddress)
    }

    setActive() {
        this.#isActive = true;
    }

    isActive() {
        return this.#isActive
    }

    toJSON() {
        return {
            name: this.name,
            leds: this.ledStrip.toJSON(),
            type: this.type,
            temp: this.temperatureSensor.getTemp()
        }
    }
}