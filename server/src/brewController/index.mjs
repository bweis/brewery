import { POLLING_RATE_MS } from "../constants";

export default class BrewController {
    constructor(test) {
        this.test = test;
    }

    init() {
        this.interval = setInterval(() => console.log(this.test), POLLING_RATE_MS)
    }

    kill() {
        clearInterval(this.interval);
        console.log("killed")
    }
}