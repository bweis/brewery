import sensor from 'ds18b20-raspi';

export default class TemperatureSensor {
  constructor(address) {
    this.address = address;
    this.sensorInterface = sensor;
  }

  getTemp() {
      return this.sensorInterface.readF(this.address, 2)
  }
}