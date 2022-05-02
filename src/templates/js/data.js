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

    crown_levels: [
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
                            map_code: "",  // google maps link here
                            city: "Санкт-Петербург",
                            water: "Финский залив",
                        },
                    gallery_pics: [

                    ],
                    transport: "",
                    rules: "",
                    extras: "",
                },
        },
        {
            id: 2,
            is_active: true,
            name: "Бухта Батарейная",
        },
        {
            id: 3,
            is_active: true,
            name: "Маяк",
        },
        {
            id: 4,
            is_active: true,
            name: "Осиновец",
        },
        {
            id: 5,
            is_active: true,
            name: "Большие пески",
        },
        {
            id: 6,
            is_active: true,
            name: "Бухта Моторная",
        },
        {
            id: 7,
            is_active: false,
            name: "Бухта желтая",
        },
        {
            id: 8,
            is_active: false,
            name: "Мыс Флотский",
        },
        {
            id: 9,
            is_active: false,
            name: "Стоячий порог в Кингисеппе",
        },
    ],
};