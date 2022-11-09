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
                            water: {
                                water_type_id: 0,
                                name: "Финский залив",
                            },
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
                    wind_direction: ["SW ↗", "W →"],
                    orgs_ids: [0, 1, 2, 3, 4, 5],
                },
        },
        {
            id: 1,
            is_active: true,
            is_popular: true,
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
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["SW ↗", "W →", "NW ↘"],
                    orgs_ids: [0, 1, 2, 3, 4, 5],
            }
        },
        {
            id: 2,
            is_active: true,
            is_popular: true,
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
                    wind_direction: ["none"],
                }
        },
        {
            id: 3,
            is_active: true,
            is_popular: false,
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
                    wind_direction: ["none"],
                }
        },
        {
            id: 4,
            is_active: true,
            is_popular: false,
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
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    labels: [
                        "LTE",
                    ],
                    wind_direction: ["S ↑"],
                }
        },
        {
            id: 5,
            is_active: true,
            is_popular: false,
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
                        water: {
                            water_type_id: 1,
                            name: "Ладожское озеро",
                        },
                    },
                    wind_direction: ["none"],
                }
        },
        {
            id: 6,
            is_active: true,
            is_popular: false,
            name: "Мыс Флотский - Запад",
            code: "ruspbflowest",
            page_link: "spot-flo-west.html",
            metadata:
                {
                    location:
                        {
                            coordinates: "60.162919, 29.140861",
                            lat: 60.162919,
                            long: 29.140861,
                            map_code: "",  // google maps link here
                            city: "Санкт-Петербург",
                            water: {
                                water_type_id: 0,
                                name: "Финский залив",
                            },
                        },
                        wind_direction: ["W →"],
                }
        },
        {
            id: 7,
            is_active: true,
            is_popular: false,
            name: "Стоячий порог в Кингисеппе",
            code: "ruspbriverking",
            page_link: "spot-riverking.html",
            metadata:
                {
                    location:
                        {
                            coordinates: "59.359056, 28.599027",
                            lat: 59.359056,
                            long: 28.599027,
                            map_code: "",  // google maps link here
                            city: "Санкт-Петербург",
                            water: {
                                water_type_id: 2,
                                name: "Другое",
                                description: "река Луга",
                            },
                        },
                        wind_direction: ["none"],
                }
        },
        {
            id: 8,
            is_active: true,
            is_popular: false,
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
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["W →"],
                }
        },
        {
            id: 9,
            is_active: true,
            is_popular: false,
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
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["NW ↘"],
                }
        },
        {
            id: 10,
            is_active: false,
            is_popular: false,
            name: "Сосновый Бор - Мол",
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
                    location: 
                    {
                        coordinates: "59.830861, 28.504967",
                        lat: 59.830861,
                        long: 28.504967,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["W →", "NW ↘", "N ↓"],
                }
        },
        {
            id: 12,
            is_active: true,
            is_popular: false,
            name: "Мустово",
            code: "ruspbmustovo",
            page_link: "spot-mustovo.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "59.797001, 28.916300",
                        lat: 59.797001,
                        long: 28.916300,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["none"],
                }
        },
        {
            id: 13,
            is_active: true,
            is_popular: false,
            name: "Дубки",
            code: "ruspbdubki",
            page_link: "spot-dubki.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "59.743198, 28.469812",
                        lat: 59.743198,
                        long: 28.469812,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["W →", "NW ↘", "N ↓"],
                }
        },
        {
            id: 14,
            is_active: true,
            is_popular: false,
            name: "Бухта желтая",
            code: "ruspbyellowbay",
            page_link: "spot-yellowbay.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "60.270684,28.930763",
                        lat: 60.270684,
                        long: 28.930763,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["SW ↗"],
                }
        },
        {
            id: 15,
            is_active: true,
            is_popular: false,
            name: "Мыс Флотский - Парковка",
            code: "ruspbfloparking",
            page_link: "spot-flo-parking.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "60.162147, 29.154129",
                        lat: 60.162147,
                        long: 29.154129,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["none"],
                }
        },
        {
            id: 16,
            is_active: true,
            is_popular: false,
            name: "Мыс Флотский - Чапин",
            code: "ruspbflochapa",
            page_link: "spot-flo-chapa.html",
            metadata:
                {
                    location: 
                    {
                        coordinates: "60.160101, 29.149445",
                        lat: 60.160101,
                        long: 29.149445,
                        map_code: "",  // google maps link here
                        city: "Санкт-Петербург",
                        water: {
                            water_type_id: 0,
                            name: "Финский залив",
                        },
                    },
                    wind_direction: ["W →", "SW ↗"],
                }
        },
        {
            id: 17,
            is_active: false,
            is_popular: false,
            name: "Санкт-Петербург",
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
};