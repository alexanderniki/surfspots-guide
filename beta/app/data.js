/* 
 * data.js
 */

 const data = {

    config: {
        home_url: "https://surfl.guide",
    },

    // REFERENCES
    spot_types: [
        {
            id: 0,
            name: "Beach break",
        },
        {
            id: 1,
            name: "Reef break",
        },
        {
            id: 2,
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

    water_types: [
        {
            id: 0,
            country: "Россия",
            city: "Санкт-Петербург",
            water: "Финский залив",
        },
        {
            id: 1,
            country: "Россия",
            city: "Санкт-Петербург",
            water: "Ладожское озеро",
        },
        {
            id: 2,
            country: "Россия",
            city: "Санкт-Петербург",
            water: "Другое",
        }
    ],

    notifications: [
        {
            id: 0,
            is_active: true,
            overline: "",
            title: "Помогите сделать SURFL лучше!",
            text: "Поддержите проект и поучаствуйте в его развитии. Нажмите здесь, чтобы узнать больше.",
            link: "contribute.html",
        },
    ],
    // DATA
    spots: [
        {
            id: 0,
            is_active: true,
            is_popular: true,
            name: "Атлантис",
            summary: "Основной «домашний» спот для многих питерский серферов",
            code: "ruspbatlantis",
            page_link: "spot-atlantis.html",
            metadata:
                {
                    description: [
                        "Спот расположен в районе пляжа «Ласковый» в поселке «Солнечное».",
                        "Находится на благоустроенном пляже. Имееются туалеты (бесплатные и платные), гриль-зоны, кабинки для переодевания, кафе и рестораны.",
                        "Есть канал, который неплохо работает при больших волнах.",
                    ],
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
                            map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.1096381446197!2d29.925735665665847!3d60.143991996474405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDA4JzM4LjQiTiAyOcKwNTUnMzYuMSJF!5e0!3m2!1sen!2sru!4v1624996391245!5m2!1sen!2sru",  // google maps link here
                            city: "Санкт-Петербург",
                            water: {
                                water_type_id: 0,
                                name: "Финский залив",
                            },
                        },
                    gallery_pics: [
                        "media/spot-atlantis-photo-1.jpg",
                        "media/spot-atlantis-photo-2.jpg",
                        "media/spot-atlantis-photo-3.jpg",
                        "media/spot-atlantis-photo-4.jpg",
                    ],
                    transport: [
                        "Автомобиль",
                        "Электричка с Финляндского вокзала",
                        "Автобус/маршрутка",
                    ],
                    rules: [
                        "Старайтесь приезжать пораньше, когда спот более-менее пуст. Особенно утром, в обед.",
                        "Если людей у Берёзок много, то идите дальше по пляжу в сторону волейбольных Сеток и далее. Там точно такие же волны и можно тренироваться в спокойствии. Если не знаете, что такое Берёзки, тем более следуйте этим рекомендациям.",
                        "Если сильный прибой и нужно пользоваться каналом, то заходите в канал напротив второй от инвалидки круглой мусорной урны. Заплывайте прямо в море как можно дальше, выше всех и там течение быстро снесет вас к шикарным и спокойным Сеткам.",
                        "Самое главное правило - когда стартуешь, обязательно смотри вправо и влево. Если в вашу сторону уже едет другой серфер, значит эта волна занята, стартовать не нужно",
                        "Второе главное правило - не сидеть внизу (близко к берегу) «под» теми серферами которые стартуют выше и могут врезаться в вас. Уплывайте из этой зоны или следуйте правилу - уходить к Сеткам",
                        "Если не знаете где канал, не можете самостоятельно его найти, значит вы не опытный серфер. Идите к Сеткам",
                        "Те кто не катается на лайнапе, а тренируется пока на пене и небольших волнах - идите к Сеткам",
                    ],
                    extras: [
                        "Если ехать на автомобиле, то важно помнить про парковку.",
                        "В жаркие дни, особенно в выходные, парковка практически полностью забита уже к 11-12 часам. Время от времени, места все-таки могут появляться.",
                        "Поэтому, спокойно останавливаемся на паркинге там, где можно приткнуться (обычно, такие места есть) и ждем когда кто-то уедет.",
                        "Примерно с 13:00 люди понемногу начинают разъезжаться (кому-то жарко, у кого-то дети, а кто-то просто уже накупался и назагорался). Примерно с 16:00 становится чуть свободнее и можно находить места без ожидания.",
                    ],
                    labels: [
                        "парковка",
                        "туалет",
                        "гриль-зона",
                        "раздевалки",
                        "LTE",
                    ],
                    wind_direction: ["SW ↗", "W →"],
                    orgs_ids: [0, 1, 2, 3, 4, 5],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Правая и Левая",
                        },
                        {
                            name: "Дно",
                            value: "Песок",
                        },
                        {
                            name: "Сложность",
                            value: "Начинающий",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Высокий",
                        },
                        {
                            name: "Угрозы",
                            value: "Нет",
                        },
                        {
                            name: "Качество волн",
                            value: "Среднее",
                        },
                    ],
                    webcam_links: [
                        {
                            name: "Кайт-станция TakeOff Surf в Дюнах",
                            link: "https://youtu.be/-Aq3KwFvYmg",
                        },
                    ],
                    forecast_links: [
                        {
                            name: "Windguru",
                            link: "https://www.windguru.cz/235686",
                        },
                    ],
                        
                },
        },
        {
            id: 1,
            is_active: true,
            is_popular: true,
            name: "Бухта Батарейная",
            summary: "",
            code: "ruspbbattery",
            page_link: "spot-battery.html",
            metadata: 
                {
                    description: [
                        "Спокойный спот, преимущественно с небольшими, но ровными волнами.",
                        "Спот располагается в одноименной бухте, которая делится пополам старым полуразрушенным причалом.",
                        "Лучшие условия для катания, как правило, в левой части спота - слева от причала если смотреть на него с берега. Однако, при больших волнах, проще и безопаснее кататься справа от причала.",
                        "На споте есть канал. Он располагается слева от пирса. При сильном прогнозе и больших волнах, канал может «закрываться», то есть переставать работать.",
                    ],
                    location: 
                    {
                        coordinates: "59.971340, 29.125711",
                        lat: 59.971340,
                        long: 29.125711,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.6372839492249!2d29.123522316629284!3d59.97133998188812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDU4JzE2LjgiTiAyOcKwMDcnMzIuNiJF!5e0!3m2!1sru!2sru!4v1624996162063!5m2!1sru!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    labels: [],
                    gallery_pics: [
                        "media/spot-battery-photo-1.jpg",
                        "media/spot-battery-photo-2.jpg",
                        "media/spot-battery-photo-3.jpg",
                        "media/spot-battery-photo-4.jpg",
                    ],
                    transport: [
                        "Автомобиль",
                        "электричка до Соснового бора и далее местное такси",
                    ],
                    rules: [
                        "В сильный прогноз, когда на споте много людей, лучше придерживаться правила: правая часть бухты для не профи. То есть, если вы начинающий/продолжающий серфер, то лучше кататься в правой части бухты (справа от пирса).",
                        "В очень сильный прогноз, новичкам может быть опасно даже в правой части бухты и лучше воздержаться от катания.",
                    ],
                    extras: [
                        "Споту подходит северо-западный ветер.",
                        "При западном, а особенно юго-западном ветре качество волн выше, но размер меньше.",
                    ],
                    wind_direction: ["SW ↗", "W →", "NW ↘"],
                    orgs_ids: [0, 1, 2, 3, 4, 5],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Правая и Левая",
                        },
                        {
                            name: "Дно",
                            value: "Песок",
                        },
                        {
                            name: "Сложность",
                            value: "Начинающий",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Средний",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни в канале у пирса",
                        },
                        {
                            name: "Качество волн",
                            value: "Высокое",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
            }
        },
        {
            id: 2,
            is_active: true,
            is_popular: true,
            name: "Маяк",
            summary: "",
            code: "ruspblighthouse",
            page_link: "spot-lighthouse.html",
            metadata: 
                {
                    description: [
                        "Благоустроенный спот на берегу Ладожского озера. Есть пляж, видовые рестораны и парковка.",
                        "Место для катания в северной части пляжа в районе кафе/отеля.",
                        "Берег песчаный. Волны у берега относительно небольшие, если выгрести дальше, можно ловить крупнее.",
                    ],
                    location: 
                    {
                        coordinates: "60.118084,31.085118",
                        lat: 60.118084,
                        long: 31.085118,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.7837461042984!2d31.082929316104316!3d60.11808398194176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDA3JzA1LjEiTiAzMcKwMDUnMDYuNCJF!5e0!3m2!1sru!2sru!4v1624995130674!5m2!1sru!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 1,
                            name: "Ладожское озеро",
                        },
                    },
                    labels: [
                        "парковка",
                        "туалет",
                        "кафе",
                        "проживание",
                        "раздевалки",
                        "LTE",
                    ],
                    gallery_pics: [
                        "media/spot-lighthouse-photo-1.jpg",
                        "media/spot-lighthouse-photo-2.jpg",
                        "media/spot-lighthouse-photo-3.jpg",
                        "media/spot-lighthouse-photo-4.jpg",
                    ],
                    transport: [
                        "Автомобиль",
                        "Примерно в 200-300 метрах есть остановка электричек «Ладожское озеро».",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "N/A",
                    ],
                    wind_direction: ["none"],
                    orgs_ids: [0, 1, 2, 3, 4, 5],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Песок",
                        },
                        {
                            name: "Сложность",
                            value: "Начинающий",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Средний",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни в воде",
                        },
                        {
                            name: "Качество волн",
                            value: "Среднее",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 3,
            is_active: true,
            is_popular: false,
            name: "Осиновец",
            summary: "",
            code: "ruspbosinovets",
            page_link: "spot-osinovets.html",
            metadata: 
                {
                    description: [
                        "Спот не для новичков - надо уметь хорошо грести, ловить волны на лайнапе. Может быть сильное течение, выносящее вас на каменистый берег.",
                        "Огромный плюс спота - от машины до воды около 20 метров. Спот близко, все видно. Удобный заезд близко к берегу (но нужно опасаться песка).",
                        "Можно ставить палатки.",
                    ],
                    location: 
                    {
                        coordinates: "60.125960, 31.073964",
                        lat: 60.125960,
                        long: 31.073964,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.3081924623168!2d31.07177531610464!3d60.12595998194463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDA3JzMzLjUiTiAzMcKwMDQnMjYuMyJF!5e0!3m2!1sru!2sru!4v1624994582388!5m2!1sru!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 1,
                            name: "Ладожское озеро",
                        },
                    },
                    labels: [
                        "парковка",
                        "кафе",
                        "LTE",
                    ],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "Если смотреть с берега, то правее березы в воде очень много камней. По сообщениям участников серф-сообщества, камни там разбросаны по всему дну вплоть до лайнапа.",
                    ],
                    wind_direction: ["none"],
                    orgs_ids: [0, 1, 2, 3, 4, 5],
                    specification: [
                        {
                            name: "Тип",
                            value: "Point break",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Камни",
                        },
                        {
                            name: "Сложность",
                            value: "Продвинутый",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Не известно",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни у берега",
                        },
                        {
                            name: "Качество волн",
                            value: "Среднее",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 4,
            is_active: true,
            is_popular: false,
            name: "Большие пески",
            summary: "",
            code: "ruspbbigsands",
            page_link: "spot-bigsands.html",
            metadata:
                {
                    description: [
                        "Спот в бухте. Работает при южном ветре",
                    ],
                    location: 
                    {
                        coordinates: "60.301528, 28.849028",
                        lat: 60.301528,
                        long: 28.849028,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.6976476772566!2d28.84683931663736!3d60.301527982009524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDE4JzA1LjUiTiAyOMKwNTAnNTYuNSJF!5e0!3m2!1sru!2sru!4v1624995561919!5m2!1sru!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    labels: [
                        "LTE",
                    ],
                    gallery_pics: [
                        "media/spot-bigsands-photo-1.jpg",
                        "media/spot-bigsands-photo-2.jpg",
                        "media/spot-bigsands-photo-3.jpg",
                        "media/spot-bigsands-photo-4.jpg",
                    ],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "Основное правило - не заезжать на песок. На песке очень легко застрять.",
                        "Относительно простой способ проехать к споту: едем прямо вниз, паркуемся и по берегу идем влево. За высокой дюной в лесу может стоять автобус с прокатом досок. Сам спот - напротив этой дюны.",
                        // "<img src=\"media/spot-bigsands-way.jpg\" alt=\"Маршрут до пляжа на споте\">",
                    ],
                    wind_direction: ["S ↑"],
                    orgs_ids: [0, 1, 2, 3, 4, 5],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Левая",
                        },
                        {
                            name: "Дно",
                            value: "Песок",
                        },
                        {
                            name: "Сложность",
                            value: "Начинающиц",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Низкий",
                        },
                        {
                            name: "Угрозы",
                            value: "Нет",
                        },
                        {
                            name: "Качество волн",
                            value: "Среднее",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 5,
            is_active: true,
            is_popular: false,
            name: "Бухта Моторная",
            summary: "",
            code: "ruspbmotor",
            page_link: "spot-motor.html",
            metadata:
                {
                    description: [
                        "Каменистый пляж, сосновый лес.",
                    ],
                    location: 
                    {
                        coordinates: "60.979510, 30.285503",
                        lat: 60.979510,
                        long: 30.285503,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.550116353076!2d30.28331431603075!3d60.979509982266315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd46b66f05028161f!2zNjDCsDU4JzQ2LjIiTiAzMMKwMTcnMDcuOCJF!5e0!3m2!1sen!2sru!4v1661612080048!5m2!1sen!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 1,
                            name: "Ладожское озеро",
                        },
                    },
                    labels: [],
                    gallery_pics: [
                        "media/spot-motor-photo-1.jpg",
                        "media/spot-motor-photo-2.jpg",
                        "media/spot-motor-photo-3.jpg",
                        "media/spot-motor-photo-4.jpg",
                    ],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "Будте внимательны - в воде очень много камней. По сообщениям участников серф-сообщества, камни там разбросаны по всему дну вплоть до лайнапа. Примерный ориентир - большой камень на пляже. Слева от него камней очень много и на берегу и воде. Справа значительно меньше.",
                        "Не заезжайте на рыхлый песок, даже если он кажется вам твердым - можно застрять.",
                        "В целом, если не искать приключений, то дороги на споте неплохие.",
                    ],
                    wind_direction: ["none"],
                    orgs_ids: [0, 1],
                    specification: [
                        {
                            name: "Тип",
                            value: "Не известно",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Песок и камни",
                        },
                        {
                            name: "Сложность",
                            value: "Не известно",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Не известно",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни",
                        },
                        {
                            name: "Качество волн",
                            value: "Не известно",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 6,
            is_active: true,
            is_popular: false,
            name: "Мыс Флотский - Запад",
            summary: "",
            code: "ruspbflowest",
            page_link: "spot-flo-west.html",
            metadata:
                {
                    description: [
                        "Вход в воду лучше осуществлять за каменной грядкой. Ее хорошо видно на пляже. Там почти нет камней.",
                        "Кататься лучше левее на 30-50 метров если смотреть с берега.",
                        "Спот работает при западном ветре.",
                    ],
                    location:
                        {
                            coordinates: "60.162919, 29.140861",
                            lat: 60.162919,
                            long: 29.140861,
                            map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.0759418293144!2d29.138672315818912!3d60.1629216509482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49bfcd8e560c1933!2zNjDCsDA5JzQ2LjUiTiAyOcKwMDgnMjcuMSJF!5e0!3m2!1sen!2sru!4v1663182554527!5m2!1sen!2sru",  // google maps link here
                            city: "Санкт-Петербург",
                            water: {
                                water_type_id: 0,
                                name: "Финский залив",
                            },
                        },
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                        ],
                    extras: [
                        "N/A",
                    ],
                    wind_direction: ["W →"],
                    orgs_ids: [0, 1, 2],
                    specification: [
                        {
                            name: "Тип",
                            value: "Не известно",
                        },
                        {
                            name: "Направление волны",
                            value: "Левая и Правая",
                        },
                        {
                            name: "Дно",
                            value: "Песок и камни",
                        },
                        {
                            name: "Сложность",
                            value: "Продвинутый",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Низкий",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни",
                        },
                        {
                            name: "Качество волн",
                            value: "Высокое",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 7,
            is_active: true,
            is_popular: false,
            name: "Стоячий порог в Кингисеппе",
            summary: "",
            code: "ruspbriverking",
            page_link: "spot-riverking.html",
            metadata:
                {
                    description: [
                        "Когда в Ленинградской области тают снег и реки наполняются водой, начинает работать волна-порог на реке Луга в Кингисеппе.",
                        "Полноводье на р. Луга длится всего несколько дней и спот работает очень мало времени в году.",
                        "По отзывам волна чем-то напоминает океаническую и на ней можно потренироваться перед основным серф-сезоном в Санкт-Петербурге.",
                    ],
                    location:
                        {
                            coordinates: "59.359056, 28.599027",
                            lat: 59.359056,
                            long: 28.599027,
                            map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.4363572181642!2d28.596838316073498!3d59.359055981669236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4972dae6a13a518!2zNTnCsDIxJzMyLjYiTiAyOMKwMzUnNTYuNSJF!5e0!3m2!1sen!2sru!4v1661612865761!5m2!1sen!2sru",  // google maps link here
                            city: "Санкт-Петербург",
                            water: {
                                water_type_id: 2,
                                name: "Другое",
                                description: "река Луга",
                            },
                        },
                    wind_direction: ["none"],
                    orgs_ids: [0, 1,],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "N/A",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Не известно",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Не известно",
                        },
                        {
                            name: "Сложность",
                            value: "Не известно",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Низкий",
                        },
                        {
                            name: "Угрозы",
                            value: "Не известно",
                        },
                        {
                            name: "Качество волн",
                            value: "Не известно",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                        
                }
        },
        {
            id: 8,
            is_active: true,
            is_popular: false,
            name: "Сосновый Бор",
            summary: "",
            code: "ruspbpinery",
            page_link: "spot-pinery.html",
            metadata:
                {
                    description: [
                        "",
                    ],
                    location: 
                    {
                        coordinates: "59.869876, 29.065328",
                        lat: 59.869876,
                        long: 29.065328,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6450.580367366719!2d29.057843091250664!3d59.86934284242086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3bba1b68f0e63bfc!2zNTnCsDUyJzExLjYiTiAyOcKwMDMnNTUuMiJF!5e0!3m2!1sen!2sru!4v1661781118446!5m2!1sen!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["W →"],
                    orgs_ids: [2, 3, 4],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                        "Электричка (Балтийский вокзал)",
                        "Автобус",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "Спот работает при западном ветре.",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Не известно",
                        },
                        {
                            name: "Сложность",
                            value: "Не известно",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Не известно",
                        },
                        {
                            name: "Угрозы",
                            value: "Не известно",
                        },
                        {
                            name: "Качество волн",
                            value: "Не известно",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 9,
            is_active: true,
            is_popular: false,
            name: "Липово",
            summary: "",
            code: "ruspblipovo",
            page_link: "spot-lipovo.html",
            metadata:
                {
                    description: [
                        "Пляж Липово недалеко от Соснового Бора.",
                    ],
                    location: 
                    {
                        coordinates: "59.929755, 29.055606",
                        lat: 59.929755,
                        long: 29.055606,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.228350340524!2d29.05238931598417!3d59.92835298187248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb66ed61eb35eb160!2zNTnCsDU1JzQyLjEiTiAyOcKwMDMnMTYuNSJF!5e0!3m2!1sen!2sru!4v1661782728850!5m2!1sen!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["NW ↘"],
                    orgs_ids: [0, 1],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "Спот работает при северо-западном ветре.",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Не известно",
                        },
                        {
                            name: "Сложность",
                            value: "Не известно",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Не известно",
                        },
                        {
                            name: "Угрозы",
                            value: "Не известно",
                        },
                        {
                            name: "Качество волн",
                            value: "Не известно",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 10,
            is_active: false,
            is_popular: false,
            name: "Сосновый Бор - Мол",
            summary: "",
            code: "ruspbpinerymol",
            page_link: "spot-pinery-mol.html",
            metadata: {
                wind_direction: ["none"],
            },
        },
        {
            id: 11,
            is_active: true,
            name: "Логи",
            code: "ruspblogi",
            page_link: "spot-logi.html",
            metadata:
                {
                    description: [
                        "Пляж в поселке Логи.",
                    ],
                    location: 
                    {
                        coordinates: "59.830861, 28.504967",
                        lat: 59.830861,
                        long: 28.504967,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.1003843142298!2d28.50277841580503!3d59.83086397775057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52c3432b09caf62a!2zNTnCsDQ5JzUxLjEiTiAyOMKwMzAnMTcuOSJF!5e0!3m2!1sen!2sru!4v1662917312495!5m2!1sen!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["W →", "NW ↘", "N ↓"],
                    orgs_ids: [0, 1, 2],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "Ветер: примерно Западный и Северо-Западный и Северный.",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Не известно",
                        },
                        {
                            name: "Сложность",
                            value: "Не известно",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Не известно",
                        },
                        {
                            name: "Угрозы",
                            value: "Не известно",
                        },
                        {
                            name: "Качество волн",
                            value: "Не известно",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 12,
            is_active: true,
            is_popular: false,
            name: "Мустово",
            summary: "",
            code: "ruspbmustovo",
            page_link: "spot-mustovo.html",
            metadata:
                {
                    description: [
                        "Пляж в поселке Мустово.",
                    ],
                    location: 
                    {
                        coordinates: "59.797001, 28.916300",
                        lat: 59.797001,
                        long: 28.916300,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22471.866718256704!2d28.900055983194676!3d59.78557534906807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec28df3a7dd3629f!2zNTnCsDQ3JzQ5LjIiTiAyOMKwNTQnNTguNyJF!5e0!3m2!1sen!2sru!4v1662918330495!5m2!1sen!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["none"],
                    orgs_ids: [0, 1, 2],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "N/A",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Не известно",
                        },
                        {
                            name: "Сложность",
                            value: "Не известно",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Не известно",
                        },
                        {
                            name: "Угрозы",
                            value: "Не известно",
                        },
                        {
                            name: "Качество волн",
                            value: "Не известно",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 13,
            is_active: true,
            is_popular: false,
            name: "Дубки",
            summary: "Спот на пляже в поселке Дубки",
            code: "ruspbdubki",
            page_link: "spot-dubki.html",
            metadata:
                {
                    description: [
                        "Пляж в поселке Дубки.",
                        "Предположительно, работает дальняя бухта за поселком Дубки.",
                    ],
                    location: 
                    {
                        coordinates: "59.743198, 28.469812",
                        lat: 59.743198,
                        long: 28.469812,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2010.3756259652614!2d28.46762351580129!3d59.74320078481165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b97edaa6f8f631!2zNTnCsDQ0JzM1LjUiTiAyOMKwMjgnMTEuMyJF!5e0!3m2!1sen!2sru!4v1662919404494!5m2!1sen!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["W →", "NW ↘", "N ↓"],
                    orgs_ids: [0, 1, 2],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "Ветер: примерно Западный и Северо-Западный и Северный.",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Не известно",
                        },
                        {
                            name: "Сложность",
                            value: "Не известно",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Не известно",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни в воде",
                        },
                        {
                            name: "Качество волн",
                            value: "Не известно",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 14,
            is_active: true,
            is_popular: false,
            name: "Бухта желтая",
            summary: "Спот на пляже в бухте",
            code: "ruspbyellowbay",
            page_link: "spot-yellowbay.html",
            metadata:
                {
                    description: [
                        "Спот в бухте.",
                        "Закрытое от ветра место с довольно качественными волнами.",
                        "Работает при юго-западном ветре.",
                    ],
                    location: 
                    {
                        coordinates: "60.270684,28.930763",
                        lat: 60.270684,
                        long: 28.930763,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.562906996806!2d28.92857431582355!3d60.27068664223109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6eb797ba038f608!2zNjDCsDE2JzE0LjUiTiAyOMKwNTUnNTAuOCJF!5e0!3m2!1sru!2sru!4v1663068317741!5m2!1sru!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["SW ↗"],
                    orgs_ids: [0, 1,],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "N/A",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Beach break",
                        },
                        {
                            name: "Направление волны",
                            value: "Не известно",
                        },
                        {
                            name: "Дно",
                            value: "Не известно",
                        },
                        {
                            name: "Сложность",
                            value: "Не известно",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Не известно",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни в воде",
                        },
                        {
                            name: "Качество волн",
                            value: "Не известно",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 15,
            is_active: true,
            is_popular: false,
            name: "Мыс Флотский - Парковка",
            summary: "",
            code: "ruspbfloparking",
            page_link: "spot-flo-parking.html",
            metadata:
                {
                    description: [
                        "Один из группы спотов на мысе Флотский.",
                        "Располагается у берега недалеко от парковки.",
                    ],
                    location: 
                    {
                        coordinates: "60.162147, 29.154129",
                        lat: 60.162147,
                        long: 29.154129,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.122590752106!2d29.152168147268984!3d60.16214937673583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75359cb1bf242de1!2zNjDCsDA5JzQzLjciTiAyOcKwMDknMTQuOSJF!5e0!3m2!1sen!2sru!4v1663175601139!5m2!1sen!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["none"],
                    orgs_ids: [0, 1, 2],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "N/A",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Не известно",
                        },
                        {
                            name: "Направление волны",
                            value: "Левая и Правая",
                        },
                        {
                            name: "Дно",
                            value: "Песок и камни",
                        },
                        {
                            name: "Сложность",
                            value: "Продвинутый",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Низкий",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни",
                        },
                        {
                            name: "Качество волн",
                            value: "Высокое",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 16,
            is_active: true,
            is_popular: false,
            name: "Мыс Флотский - Чапин",
            summary: "",
            code: "ruspbflochapa",
            page_link: "spot-flo-chapa.html",
            metadata:
                {
                    description: [
                        "Один из группы спотов на мысе Флотский.",
                        "Подходить к споту лучше вдоль берега. Заходить в воду лучше практически с конца мыса. Самая удобная волна здесь - левая (к берегу), так как иначе вас будет сильно сносить в бухту.",
                        "Спот работает при западном и юго-западном ветре. Хорошие волны приходят при западном ветре. При таком ветре бухта закрыта от ветра мысом и лесом. При юго-западном ветре, он врывается в бухту и начинает ломать волны.",
                        "Выплывать надо примерно на траверс(одну линию) с вышкой маяка и там ловить волны. Чёткого поинтбрейка нет, где ломается волна зависит от её высоты и силы.",
                    ],
                    location: 
                    {
                        coordinates: "60.160101, 29.149445",
                        lat: 60.160101,
                        long: 29.149445,
                        map_code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.246160264156!2d29.147256315818808!3d60.16010365117605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ed5b82692ca083a!2zNjDCsDA5JzM2LjQiTiAyOcKwMDgnNTguMCJF!5e0!3m2!1sen!2sru!4v1663166335299!5m2!1sen!2sru",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["W →", "SW ↗"],
                    orgs_ids: [0, 1, 2],
                    labels: [],
                    gallery_pics: [],
                    transport: [
                        "Автомобиль",
                    ],
                    rules: [
                        "N/A",
                    ],
                    extras: [
                        "N/A",
                    ],
                    specification: [
                        {
                            name: "Тип",
                            value: "Reef break",
                        },
                        {
                            name: "Направление волны",
                            value: "Левая и Правая",
                        },
                        {
                            name: "Дно",
                            value: "Песок и камни",
                        },
                        {
                            name: "Сложность",
                            value: "Продвинутый",
                        },
                        {
                            name: "Уровень загруженности",
                            value: "Низкий",
                        },
                        {
                            name: "Угрозы",
                            value: "Камни в воде",
                        },
                        {
                            name: "Качество волн",
                            value: "Высокое",
                        },
                    ],
                    webcam_links: [],
                    forecast_links: [],
                }
        },
        {
            id: 17,
            is_active: false,
            is_popular: false,
            name: "Санкт-Петербург",
            summary: "",
            code: "ruspb",
            metadata:
                {
                    location: 
                    {
                        coordinates: "59.9342802, 30.3350986",
                        lat: 59.9342802,
                        long: 30.3350986,
                        map_code: "",  // google maps link here
                    },
                    wind_direction: ["none"],
                }
        }
    ],

    /* SHOPS */

    stores: [
        {
            id: 0,
            is_active: true,
            is_popular: false,
            name: "GOODRIDER",
            code: "spbstoregoodrider",
            metadata: {
                type: "магазин",
                summary: "Серф-снаряжение и гидроодежда",
                homepage: "https://goodrider.ru/",
            }
        },
        {
            id: 1,
            is_active: true,
            is_popular: false,
            name: "WSGS Surf Shop",
            code: "ruspbstorewsgs",
            metadata: {
                type: "магазин",
                summary: "Серф-снаряжение, аксесуары, гидроодежда",
                homepage: "https://wsgs.ru/surfshop/",
            },
        },
        {
            id: 2,
            is_active: true,
            is_popular: false,
            name: "ANKERCOMPANY",
            code: "ruspbstoreankercompany",
            metadata: {
                type: "магазин",
                summary: "Доски, аксесуары, гидроодежда",
                homepage: "https://ankercompany.store/",
            },
        },
        {
            id: 3,
            is_active: true,
            is_popular: false,
            name: "Траектория",
            code: "ruspbstoretraektoria",
            metadata: {
                type: "магазин",
                summary: "Доски, аксесуары, гидроодежда",
                homepage: "https://www.traektoria.ru/",
            },
        },
        {
            id: 4,
            is_active: true,
            is_popular: false,
            name: "SUP Shop",
            code: "ruspbstoresupshop",
            metadata: {
                type: "магазин",
                summary: "Гидроодежда, аксессуары и доски (SUP)",
                homepage: "https://sup-shop.ru/",
                location: {
                    address: "Санкт-Петербург, ул. Кораблестроителей 30",
                },
                contacts: [
                    {
                        type: "phone",
                        value: "+78124256488",
                    },
                    {
                        type: "phone",
                        value: "88005551469",
                    },
                    {
                        type: "email",
                        value: "ask@sup-shop.ru",
                    },
                ]
            },
        },
    ],

    orgs: [
        {
            id: 0,
            is_active: true,
            is_popular: false,
            name: "Onego Surfing",
            code: "",
            metadata: {
                type: "Прокат",
                summary: "Доски (софт, хард), гидрокостюмы, лиши",
                homepage: "",
                link: "",
            },
        },
        {
            id: 1,
            is_active: true,
            is_popular: false,
            name: "Onego Surfing",
            code: "",
            metadata: {
                type: "Школа",
                summary: "Уроки серфинга на флэте и на волнах",
                homepage: "",
                link: "",
            },
        },
        {
            id: 2,
            is_active: true,
            is_popular: false,
            name: "WSGS",
            code: "",
            metadata: {
                type: "Школа",
                summary: "Школа серфинга Максима Фомина",
                homepage: "",
                link: "",
            },
        },
        {
            id: 3,
            is_active: true,
            is_popular: false,
            name: "Life Surf Dream",
            code: "",
            metadata: {
                type: "Школа",
                summary: "Обучение классическому серфингу",
                homepage: "",
                link: "",
            },
        },
        {
            id: 4,
            is_active: true,
            is_popular: false,
            name: "Life Surf Dream",
            code: "",
            metadata: {
                type: "Прокат",
                summary: "Доски, гидрокостюмы",
                homepage: "",
                link: "",
            },
        },
        {
            id: 5,
            is_active: true,
            is_popular: false,
            name: "Михаил Смолин",
            code: "",
            metadata: {
                type: "Инструктор",
                summary: "Обучение классическому серфингу",
                homepage: "",
                link: "",
            },
        },
    ],

    communications: [
        {
            id: 0,
            is_active: true,
            is_popular: false,
            name: "SPB Surfclub News",
            metadata: {
                type: "Канал",
                channel_type: "Telegram",
                link: "https://t.me/spbsurfclub",
                link_text: "@spbsurfclub",
                summary: "Частота публикаций - от нуля до 5-6 в день прогноза. Основные темы: прогнозы, каталки в С-Пб, фото и видео, главные серфновости по миру. Канал дублируется в Whatsapp.",
            },
        },
        {
            id: 1,
            is_active: true,
            is_popular: false,
            name: "Сёрфинг",
            metadata: {
                type: "Канал",
                channel_type: "Telegram",
                link: "https://t.me/surfing_ru",
                link_text: "@surfing_ru",
                summary: "Что происходит с сёрфингом в России и в мире. Автор: участник расширенного состава сборной России Игорь Вечканов.",
            },
        },
        {
            id: 2,
            is_active: true,
            is_popular: false,
            name: "Чат русского сёрфинга",
            metadata: {
                type: "Чат",
                channel_type: "Telegram",
                link: "https://t.me/surfing_chat",
                link_text: "@surfing_chat",
                summary: "Прикреплен к каналу «Сёрфинг».",
            },
        },
        {
            id: 3,
            is_active: true,
            is_popular: false,
            name: "Поиск попутчиков на спот",
            metadata: {
                type: "Чат",
                channel_type: "Telegram",
                link: "https://t.me/naspot",
                link_text: "@naspot",
                summary: "Можно найти компанию в поездку, новые знакомства и т.д. Не забывайте, что владельцу транспорта важно, если вы добавите ему денег на бензин.",
            },
        },
        {
            id: 4,
            is_active: true,
            is_popular: false,
            name: "Серффото и видео",
            metadata: {
                type: "Чат",
                channel_type: "Telegram",
                link: "https://t.me/surffv",
                link_text: "Ссылка",
                summary: "Фото и видео с каталок, спотов, уроков и пр.",
            },
        },
        {
            id: 5,
            is_active: true,
            is_popular: false,
            name: "Серфшкола OnegoSurf",
            metadata: {
                type: "Чат",
                channel_type: "VK",
                link: "https://vk.me/join//zLUyVD5q9IAxCfu0ULZHrWTj1RnGKLAdwg=",
                link_text: "Ссылка",
                summary: "Чат с прогнозами, новостями, анонсами для тех, кому удобнее пользоваться ВКонтакте.",
            },
        },
        {
            id: 6,
            is_active: true,
            is_popular: false,
            name: "Чат для канала spbsurfclub",
            metadata: {
                type: "Чат",
                channel_type: "Telegram",
                link: "https://t.me/surfsp",
                link_text: "@surfsp",
                summary: "Чат, привязанный к каналу @spbsurfclub.",
            },
        },
        {
            id: 7,
            is_active: true,
            is_popular: false,
            name: "Российская Федерация Серфинга",
            metadata: {
                type: "Канал",
                channel_type: "Telegram",
                link: "https://t.me/RFSurf",
                link_text: "@RFSurf",
                summary: "Telegram-канал Российской Федерации Серфинга.",
            },
        },
    ],
    
    workshops: [
        {
            id: 0,
            is_active: true,
            is_popular: false,
            name: "Михаил Смолин",
            code: "",
            metadata: {
                type: "Шейпер",
                summary: "Изготовление и ремонт досок",
                homepage: "",
                link: "",
            },
        },
        {
            id: 1,
            is_active: true,
            is_popular: false,
            name: "SEVER SURFBOARDS",
            code: "",
            metadata: {
                type: "Мастерская (фабрика)",
                summary: "Производство досок",
                homepage: "", // https://www.instagram.com/seversurfboards/
                link: "",
            },
        },
        {
            id: 2,
            is_active: true,
            is_popular: false,
            name: "Shepka Boards",
            code: "",
            metadata: {
                type: "Шейпер",
                summary: "Производство досок",
                homepage: "", // https://www.instagram.com/shepka_boards/
                link: "",
            },
        },
        {
            id: 3,
            is_active: true,
            is_popular: false,
            name: "spbsurfrepair",
            code: "",
            metadata: {
                type: "Мастерская",
                summary: "Ремонт досок",
                homepage: "", // https://www.instagram.com/spbsurfrepair/
                link: "",
            },
        },
    ],
};