/*
 * dateutils.js
 * Useful tools for working with date and time.
 */

class DateUtils {
    constructor() {
        // do nothing
    }

    static weekday(number) {
        const days = [
            'Вс',
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб',
        ]

        return days[number];
    }
}
