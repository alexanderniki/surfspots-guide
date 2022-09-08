/*
 * weatherutils.js
 * Useful tools for workung with weather forecast.
 */

 class WeatherUtils {

    constructor () {
        // do nothing
    }

    static windDirection(degrees) {
        let direction = "";
        if (degrees > 22.5 && degrees < 67.5 ) {
            direction = "NE";
        }
        else if (degrees >= 67.5 && degrees < 112.5) {
            direction = "E";
        }
        else if (degrees >= 112.5 && degrees < 157.5) {
            direction = "SE";
        }
        else if (degrees >= 157.5 && degrees < 202.5) {
            direction = "S";
        }
        else if (degrees >= 202.5 && degrees < 247.5) {
            direction = "SW";
        }
        else if (degrees >= 247.5 && degrees < 292.5) {
            direction = "W";
        }
        else if (degrees >= 292.5 && degrees < 337.5) {
            direction = "NW";
        }
        else {
            direction = "N"
        }
        return direction;
    }

    static avgTemp(bottom, top) {
        let avg = (bottom + top) / 2;
        return avg
    }

    static temperatureSign(temperature) {
        let sign = "";
        if (temperature < 0) {
            sign = "-";
        } else if (temperature > 0) {
            sign = "+";
        } else {
            sign = "";
        }
        return sign;
    }
}
