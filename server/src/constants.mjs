export const POLLING_RATE_MS = 500;

// export const THERMOMETERS = {
//     wand: [0x28, 0xFF, 0x61, 0xD3, 0x50, 0x16, 0x04, 0x41],          // 28FF61D350160441
//     hotLiquorTank: [0x28, 0xFF, 0x34, 0x57, 0x51, 0x16, 0x04, 0x7A], // 28FF34575116047A
//     mashTun: [0x28, 0xFF, 0x5C, 0x0C, 0x51, 0x16, 0x04, 0x19],       // 28FF5C0C51160419
//     boilKettle: [0x28, 0xFF, 0x78, 0x71, 0x72, 0x15, 0x01, 0xD1],    // 28FF7871721501D1    
//     wortChiller: [0x28, 0xFF, 0x75, 0xF2, 0x50, 0x16, 0x04, 0xDD],   // 28FF75F2501604DD
// }

export const THERMOMETERS = {
    wand: "28-ff61d350160441",
    hotLiquorTank: "28-ff34575116047a",
    mashTun: "28-ff5c0c51160419",
    boilKettle: "28-ff7871721501d1",    
    wortChiller: "28-ff75f2501604dd",
}

const NUM_LEDS = 34;

export const CONSTANTS = {
    GLOBAL: {
        WAND_ADDR: THERMOMETERS.wand,
        LEVEL_ADDR: null,
        HEATER_PIN: null,
    },
    HOT_LIQUOR: {
        TEMP_ADDR: THERMOMETERS.hotLiquorTank,
        LED_GPIO_PIN: 12, // WS2812B
        LEVEL_ADDR: null,
        HEATER_PIN: null,
    },
    MASH: {
        TEMP_ADDR: THERMOMETERS.mashTun,
        LED_GPIO_PIN: 13, // WS2812B
        LEVEL_ADDR: null,
        HEATER_PIN: null,
    },
    BOIL: {
        TEMP_ADDR: THERMOMETERS.boilKettle,
        LED_GPIO_PIN: 18, // WS2812B
        LEVEL_ADDR: null,
        HEATER_PIN: null,
    }, 
    WORT: {
        TEMP_ADDR: THERMOMETERS.wortChiller,
        LED_GPIO_PIN: 19, // WS2812B
        CHILLER_PIN: null,
    }
}

// GPIO10, GPIO12, GPIO18 or GPIO21
// PIN 19, PIN 32, PIN 12 or PIN 40