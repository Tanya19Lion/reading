class BooksService {

    books = {
        childrenBooks: [
            {
                id: 1,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img570_cr_3.jpg',
                title: 'Тореадори з Васюківки',
                author: 'Всеволод Нестайко',
                price: 140     
            },
            {
                id: 2,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/1/_/1_11_196.jpg',
                title: 'Гармидер у школі',
                author: 'Джеремі Стронг',
                price: 80     
            },
            {
                id: 3,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/4/4/44820_6318349.jpg',
                title: 'Матильда',
                author: 'Роальд Дал',
                price: 140  
            },
            {
                id: 4,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/c/h/charli_i_velykyy_sklyanyy_lift.jpg',
                title: 'Чарлі і великий скляний ліфт',
                author: 'Роальд Дал',
                price: 180  
            },
            {
                id: 5,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img872_46.jpg',
                title: 'Малий та Карлсон, що живе на даху',
                author: 'Астрід Ліндгрен',
                price: 93
            },
            {
                id: 6,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img380_1_57.jpg',
                title: 'Пригоди Тома Сойєра',
                author: 'Марк Твен',
                price: 150  
            },
            {
                id: 7,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/3/4/341882_627876.jpg',
                title: 'Енн із Зелених Дахів. Книга 1',
                author: 'Люсі-Мод Монтгомері',
                price: 120
            },
            {
                id: 8,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img922_49.jpg',
                title: 'Поліанна',
                author: 'Елінор Портер',
                price: 130  
            },
            {
                id: 9,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/7/_/7_58_1.jpg',
                title: 'Пеппі Довгапанчоха',
                author: 'Астрід Ліндгрен',
                price: 90  
            },
            {
                id: 10,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/6/_/6_56_1.jpg',
                title: 'Міо, мій Міо',
                author: 'Астрід Ліндгрен',
                price: 140  
            },
            {
                id: 11,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/5/3/53320_6866581.jpg',
                title: 'Джури козака Швайки',
                author: 'Володимир Рутківський',
                price: 130  
            },
            {
                id: 12,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img117_cr_2.jpg',
                title: 'Маленький принц',
                author: 'Антуан де Сент-Екзюпері',
                price: 90  
            },
            {
                id: 13,
                cover: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img_0155_1.jpg',
                title: '36 і 6 котів',
                author: 'Галина Вдовиченко',
                price: 150  
            }
        ],
        classicBooks: [
            {
                id: 14,
                cover: 'https://nashformat.ua/files/products/atlant-rozpravyv-plechi-komplekt-z-troh-knyg-u-futlyari-702806.270x390.jpeg?201109161701',
                title: 'Атлант розправив плечі',
                author: 'Айн Ренд',
                price: 700  
            },
            {
                id: 15,
                cover: 'https://nashformat.ua/files/products/proza-921724.270x390.jpeg?201109053802',
                title: 'Проза',
                author: 'Осип Мандельштам',
                price: 300    
            },
            {
                id: 16,
                cover: 'https://nashformat.ua/files/products/zhyttya-za-zhyttyam-709109.270x390.jpeg?201109161901',
                title: 'Життя за життям',
                author: 'Кейт Аткінсон',
                price: 250  
            },
            {
                id: 17,
                cover: 'https://nashformat.ua/files/products/kajdasheva-sim-ya-seriya-svitovyd-915281.270x390.jpeg?201109163301',
                title: "Кайдашева сім'я",
                author: 'Іван Нечуй-Левицький',
                price: 130  
            },
            {
                id: 18,
                cover: 'https://nashformat.ua/files/products/1984-801237.270x390.jpeg?201109163602',
                title: '1984',
                author: 'Джордж Орвелл',
                price: 160
            },
            {
                id: 19,
                cover: 'https://nashformat.ua/files/products/koroleva-pusteli-702853.270x390.jpeg?201109163602',
                title: 'Королева пустелі',
                author: 'Джорджина Говелл',
                price: 150  
            },
            {
                id: 20,
                cover: 'https://nashformat.ua/files/products/usmishky-doli-opovidannya-709025.270x390.jpeg?201109163602',
                title: 'Усмішки долі. Оповідання',
                author: 'Адам Джонсон',
                price: 150
            }
        ],
        detectiveBooks: [
            {
                id: 21,
                cover: 'https://nashformat.ua/files/products/vbyvstvo-u-shidnomu-ekspresi-706728.270x390.jpeg?201109161801',
                title: 'Вбивство у «Східному експресі»',
                author: 'Аґата Крісті',
                price: 120  
            },
            {
                id: 22,
                cover: 'https://nashformat.ua/files/products/ubyvstvo-v-mesopotamii-921871.270x390.jpeg?201109054601',
                title: 'Убивство в Месопотамії',
                author: 'Аґата Крісті',
                price: 120     
            },
            {
                id: 23,
                cover: 'https://nashformat.ua/files/products/taemnycha-istoriya-tvin-piksa-707557.270x390.jpeg?201109162101',
                title: 'Таємнича історія Твін-Пікса',
                author: 'Марк Фрост',
                price: 370  
            },
            {
                id: 24,
                cover: 'https://nashformat.ua/files/products/tsyfrova-fortetsya-701235.270x390.jpeg?201109163801',
                title: 'Цифрова фортеця',
                author: 'Ден Браун',
                price: 190  
            },
            {
                id: 25,
                cover: 'https://nashformat.ua/files/products/glyboko-pid-vodoyu-705457.270x390.jpeg?201109163701',
                title: 'Глибоко під водою',
                author: 'Пола Гоукінз',
                price: 110
            },
            {
                id: 26,
                cover: 'https://nashformat.ua/files/products/manuskrypt-z-mynulogo-920858.270x390.jpeg?201109164701',
                title: 'Манускрипт з минулого',
                author: 'Петро Лущик',
                price: 130  
            },
            {
                id: 27,
                cover: 'https://nashformat.ua/files/products/milantsi-vbyvayut-po-subotah-920856.270x390.jpeg?201109164701',
                title: 'Міланці вбивають по суботах',
                author: 'Джорджо Щербаненко',
                price: 100
            }    
        ]
    };

    getBooks(data) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                // if (Math.random() > 0.5) {
                    resolve(data)
                // } else {
                //     reject(new Error('На жаль, виникла помилка! Спробуйте ще раз, будь ласка...'))
                // }
            }, 2000);
        });
    }

    getChildrenBooks() {
        return this.getBooks(this.books.childrenBooks);
    }

    getClassicBooks() {
        return this.getBooks(this.books.classicBooks);
    }

    getDetectiveBooks() {
        return this.getBooks(this.books.detectiveBooks);
    }
}

export default BooksService;