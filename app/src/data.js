/* 
 * data.js
 */

 const data = {

    // REFERENCES
    spot_types: [
        {
            id: 1,
            name: "Beach break",
        },
        {
            id: 2,
            name: "Reef break",
        },
        {
            id: 3,
            name: "Point break",
        },
    ],

    wave_types: [
        {
            id: 1,
            name: "Левая",
        },
        {
            id: 2,
            name: "Правая",
        },
    ],

    bottom_types: [
        {
            id: 1,
            name: "Песок",
        },
        {
            id: 2,
            name: "Галька",
        },
        {
            id: 3,
            name: "Камни",
        },
        {
            id: 4,
            name: "Другое",
        },
    ],

    difficulty_types: [
        {
            id: 1,
            name: "Начинающий",
        },
        {
            id: 2,
            name: "Продвинутый",
        },
        {
            id: 3,
            name: "Эксперт"
        },
    ],

    crowd_levels: [
        {
            id: 1,
            name: "Низкий",
        },
        {
            id: 2,
            name: "Средний",
        },
        {
            id: 3,
            name: "Высокий",
        },
    ],

    threat_types: [
        {
            id: 1,
            name: "Нет",
        },
        {
            id: 2,
            name: "Камни",
        },
        {
            id: 3,
            name: "Другое",
        },
    ],

    wave_quality_types: [
        {
            id: 1,
            name: "Низкое",
        },
        {
            id: 1,
            name: "Среднее",
        },
        {
            id: 1,
            name: "Высокое",
        },
    ],


    // DATA
    spots: [
        {
            id: 1,
            is_active: true,
            name: "Атлантис",
            code: "ruspbatlantis",
            page_link: "spot-atlantis.html",
            metadata:
                {
                    description: "",
                    properties:
                        {
                            type: "Beach break",
                            wave_direction: "Правая",
                            bottom_type: "Песок",
                            difficulty: "Начинающий",
                            crowd_level: "Высокий",
                            threats: "Нет",
                            wave_quality: "Среднее",
                        },
                    location:
                        {
                            coordinates: "60.143992, 29.926703",
                            lat: 60.143992,
                            long: 29.926703,
                            map_code: "",  // google maps link here
                            city: "Санкт-Петербург",
                            water: "Финский залив",
                        },
                    gallery_pics: [

                    ],
                    transport: "",
                    rules: "",
                    extras: "",
                    labels: [
                        "парковка",
                        "туалет",
                        "гриль-зона",
                        "раздевалки",
                        "LTE",
                    ],
                },
        },
        {
            id: 2,
            is_active: true,
            name: "Бухта Батарейная",
            code: "ruspbbattery",
            page_link: "spot-battery.html",
            metadata: 
                {
                    location: 
                    {
                        coordinates: "59.971340, 29.125711",
                        lat: 59.971340,
                        long: 29.125711,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: "Финский залив",
                    }
            }
        },
        {
            id: 3,
            is_active: true,
            name: "Маяк",
            code: "ruspblighthouse",
            page_link: "spot-lighthouse.html",
            metadata: 
                {
                    location: 
                    {
                        coordinates: "60.118084,31.085118",
                        lat: 60.118084,
                        long: 31.085118,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: "Ладожское озеро",
                    },
                    labels: [
                        "парковка",
                        "туалет",
                        "кафе",
                        "проживание",
                        "раздевалки",
                        "LTE",
                    ],
                }
        },
        {
            id: 4,
            is_active: true,
            name: "Осиновец",
            code: "ruspbosinovets",
            page_link: "spot-osinovets.html",
            metadata: 
                {
                    location: 
                    {
                        coordinates: "60.125960, 31.073964",
                        lat: 60.125960,
                        long: 31.073964,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: "Ладожское озеро",
                    },
                    labels: [
                        "парковка",
                        "кафе",
                        "LTE",
                    ],
                }
        },
        {
            id: 5,
            is_active: true,
            name: "Большие пески",
            code: "ruspbbigsands",
            page_link: "spot-bigsands.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "60.301528, 28.849028",
                        lat: 60.301528,
                        long: 28.849028,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: "Финский залив",
                    },
                }
        },
        {
            id: 6,
            is_active: true,
            name: "Бухта Моторная",
            code: "ruspbmotor",
            page_link: "spot-motor.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "60.979510, 30.285503",
                        lat: 60.979510,
                        long: 30.285503,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: "Ладожское озеро",
                    },
                }
        },
        {
            id: 7,
            is_active: false,
            name: "Бухта желтая",
            code: "ruspbyellowbay",
            page_link: "spot-yellowbay.html",
        },
        {
            id: 8,
            is_active: false,
            name: "Мыс Флотский",
            code: "ruspbflo",
            page_link: "spot-flo.html",
        },
        {
            id: 9,
            is_active: false,
            name: "Стоячий порог в Кингисеппе",
            code: "ruspbriverking",
            page_link: "spot-riverking.html",
        },
        {
            id: 10,
            is_active: true,
            name: "Сосновый Бор",
            code: "ruspbpinery",
            page_link: "spot-pinery.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "59.869876, 29.065328",
                        lat: 59.869876,
                        long: 29.065328,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: "Финский залив",
                    },
                }
        },
        {
            id: 10,
            is_active: true,
            name: "Липово",
            code: "ruspblipovo",
            page_link: "spot-lipovo.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "59.929755, 29.055606",
                        lat: 59.929755,
                        long: 29.055606,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: "Финский залив",
                    },
                }
        },
    ],

};