(function () {
    "use strict";

    const products = {
        "dondurmalar": [
            {
                name: "Vanilyalı Dondurma Kup",
                price: "120 TL",
                description: "Klasik vanilya dondurması, kırmızı meyve ve çıtır parça ile servis edilir.",
                image: "images/products/dondurmalar/vanilyali-kup.jpg"
            },
            {
                name: "Çikolatalı Dondurma Kup",
                price: "135 TL",
                description: "Yoğun çikolatalı dondurma, kakao sosu ve fındık kırığı ile hazırlanır.",
                image: "images/products/dondurmalar/cikolatali-kup.jpg"
            },
            {
                name: "Meyveli Dondurma Tabağı",
                price: "145 TL",
                description: "Mevsim meyveleriyle ferah, hafif ve renkli dondurma sunumu.",
                image: "images/products/dondurmalar/meyveli-tabak.jpg"
            }
        ],
        "frozen": [
            {
                name: "Çilek Frozen",
                price: "130 TL",
                description: "Çilek püresi, buz ve özel şurup ile serinletici frozen.",
                image: "images/products/frozen/cilek-frozen.jpg"
            },
            {
                name: "Mango Frozen",
                price: "140 TL",
                description: "Tropik mango aromasıyla yoğun kıvamlı buzlu içecek.",
                image: "images/products/frozen/mango-frozen.jpg"
            },
            {
                name: "Orman Meyveli Frozen",
                price: "145 TL",
                description: "Böğürtlen, frambuaz ve yaban mersini notalarıyla hazırlanır.",
                image: "images/products/frozen/orman-meyveli-frozen.jpg"
            }
        ],
        "milkshake": [
            {
                name: "Çikolata Milkshake",
                price: "145 TL",
                description: "Çikolatalı dondurma, süt ve krema ile yoğun milkshake.",
                image: "images/products/milkshake/cikolata-milkshake.jpg"
            },
            {
                name: "Karamel Milkshake",
                price: "145 TL",
                description: "Karamel sos, vanilya dondurması ve soğuk sütle hazırlanır.",
                image: "images/products/milkshake/karamel-milkshake.jpg"
            },
            {
                name: "Oreo Milkshake",
                price: "155 TL",
                description: "Bisküvi parçaları, vanilya dondurması ve krema ile servis edilir.",
                image: "images/products/milkshake/oreo-milkshake.jpg"
            }
        ],
        "smothie": [
            {
                name: "Çilek Muz Smothie",
                price: "150 TL",
                description: "Çilek, muz ve yoğurt bazlı yumuşak içimli smothie.",
                image: "images/products/smothie/cilek-muz-smothie.jpg"
            },
            {
                name: "Yaban Mersini Smothie",
                price: "155 TL",
                description: "Yaban mersini, süt ve bal dengesiyle ferah bir seçenek.",
                image: "images/products/smothie/yaban-mersini-smothie.jpg"
            },
            {
                name: "Tropik Smothie",
                price: "160 TL",
                description: "Ananas, mango ve muz aromalarıyla tropik karışım.",
                image: "images/products/smothie/tropik-smothie.jpg"
            }
        ],
        "wrapler": [
            {
                name: "Tavuk Wrap",
                price: "210 TL",
                description: "Izgara tavuk, taze yeşillik, özel sos ve lavaş ekmeği.",
                image: "images/products/wrapler/tavuk-wrap.jpg"
            },
            {
                name: "Et Wrap",
                price: "260 TL",
                description: "Marine dana eti, köz biber, soğan ve baharatlı sos.",
                image: "images/products/wrapler/et-wrap.jpg"
            },
            {
                name: "Sebzeli Wrap",
                price: "185 TL",
                description: "Izgara sebzeler, peynir ve yeşilliklerle hafif wrap.",
                image: "images/products/wrapler/sebzeli-wrap.jpg"
            }
        ],
        "masa": [
            {
                name: "Masa Açılış Servisi",
                price: "60 TL",
                description: "Masa için özel servis düzeni, ikramlık ve sunum hazırlığı.",
                image: "images/products/masa/masa-acilis-servisi.jpg"
            },
            {
                name: "Kalabalık Masa Servisi",
                price: "120 TL",
                description: "Grup oturumları için ek tabak, bardak ve sunum desteği.",
                image: "images/products/masa/kalabalik-masa-servisi.jpg"
            },
            {
                name: "Özel Masa Hazırlığı",
                price: "180 TL",
                description: "Kutlama ve özel günler için sade masa hazırlığı.",
                image: "images/products/masa/ozel-masa-hazirligi.jpg"
            }
        ],
        "kahvalti": [
            {
                name: "Serpme Kahvaltı",
                price: "390 TL",
                description: "Peynir çeşitleri, zeytin, reçel, yumurta, sıcaklar ve sınırsız çay.",
                image: "images/products/kahvalti/serpme-kahvalti.jpg"
            },
            {
                name: "Kahvaltı Tabağı",
                price: "240 TL",
                description: "Günün peynirleri, zeytin, domates, salatalık, yumurta ve bal-kaymak.",
                image: "images/products/kahvalti/kahvalti-tabagi.jpg"
            },
            {
                name: "Menemen",
                price: "160 TL",
                description: "Domates, biber ve yumurta ile tavada sıcak servis.",
                image: "images/products/kahvalti/menemen.jpg"
            }
        ],
        "steak": [
            {
                name: "Izgara Bonfile",
                price: "520 TL",
                description: "Özel marine bonfile, patates ve mevsim garnitürüyle servis edilir.",
                image: "images/products/steak/izgara-bonfile.jpg"
            },
            {
                name: "Pepper Steak",
                price: "550 TL",
                description: "Karabiber soslu dana steak, kremalı patates eşliğinde.",
                image: "images/products/steak/pepper-steak.jpg"
            },
            {
                name: "Lokum Steak",
                price: "575 TL",
                description: "Yumuşak dana lokum, tereyağı ve kekik aromasıyla hazırlanır.",
                image: "images/products/steak/lokum-steak.jpg"
            }
        ],
        "soguk-icecekler": [
            {
                name: "Limonata",
                price: "95 TL",
                description: "Taze limon aromasıyla günlük hazırlanan ferah içecek.",
                image: "images/products/soguk-icecekler/limonata.jpg"
            },
            {
                name: "Ice Tea",
                price: "80 TL",
                description: "Şeftali veya limon seçeneğiyle soğuk çay.",
                image: "images/products/soguk-icecekler/ice-tea.jpg"
            },
            {
                name: "Gazlı İçecek",
                price: "75 TL",
                description: "Kola, fanta, sprite ve soda seçenekleri.",
                image: "images/products/soguk-icecekler/gazli-icecek.jpg"
            }
        ],
        "sicak-icecekler": [
            {
                name: "Çay",
                price: "35 TL",
                description: "Taze demlenmiş klasik Türk çayı.",
                image: "images/products/sicak-icecekler/cay.jpg"
            },
            {
                name: "Sahlep",
                price: "115 TL",
                description: "Tarçınla servis edilen yoğun kıvamlı sıcak sahlep.",
                image: "images/products/sicak-icecekler/sahlep.jpg"
            },
            {
                name: "Sıcak Çikolata",
                price: "120 TL",
                description: "Yoğun çikolata tadı ve kremsi dokuyla hazırlanır.",
                image: "images/products/sicak-icecekler/sicak-cikolata.jpg"
            }
        ],
        "pastalar": [
            {
                name: "San Sebastian",
                price: "180 TL",
                description: "Kremamsı dokulu cheesecake, çikolata sos ile servis edilir.",
                image: "images/products/pastalar/san-sebastian.jpg"
            },
            {
                name: "Tiramisu",
                price: "165 TL",
                description: "Kahve aromalı klasik İtalyan tatlısı.",
                image: "images/products/pastalar/tiramisu.jpg"
            },
            {
                name: "Çikolatalı Pasta",
                price: "170 TL",
                description: "Kat kat krema ve yoğun çikolata lezzeti.",
                image: "images/products/pastalar/cikolatali-pasta.jpg"
            }
        ],
        "nargile": [
            {
                name: "Klasik Nargile",
                price: "300 TL",
                description: "Klasik aroma seçenekleriyle standart nargile servisi.",
                image: "images/products/nargile/klasik-nargile.jpg"
            },
            {
                name: "Özel Karışım Nargile",
                price: "360 TL",
                description: "Mekan önerisi özel aroma karışımıyla hazırlanır.",
                image: "images/products/nargile/ozel-karisim-nargile.jpg"
            },
            {
                name: "Premium Nargile",
                price: "420 TL",
                description: "Premium tütün seçenekleri ve özel ekipmanla servis edilir.",
                image: "images/products/nargile/premium-nargile.jpg"
            }
        ],
        "ara-sicaklar": [
            {
                name: "Patates Kızartması",
                price: "130 TL",
                description: "Çıtır patates, dip soslarla servis edilir.",
                image: "images/products/ara-sicaklar/patates-kizartmasi.jpg"
            },
            {
                name: "Mozzarella Stick",
                price: "165 TL",
                description: "Çıtır kaplamalı mozzarella, özel sos eşliğinde.",
                image: "images/products/ara-sicaklar/mozzarella-stick.jpg"
            },
            {
                name: "Sigara Böreği",
                price: "145 TL",
                description: "Peynir dolgulu çıtır börek porsiyonu.",
                image: "images/products/ara-sicaklar/sigara-boregi.jpg"
            }
        ],
        "burger": [
            {
                name: "One Day Burger",
                price: "280 TL",
                description: "Dana burger köftesi, cheddar, karamelize soğan ve özel sos.",
                image: "images/products/burger/one-day-burger.jpg"
            },
            {
                name: "Cheese Burger",
                price: "260 TL",
                description: "Cheddar peyniri, turşu, marul ve burger sosuyla.",
                image: "images/products/burger/cheese-burger.jpg"
            },
            {
                name: "Chicken Burger",
                price: "230 TL",
                description: "Çıtır tavuk, yeşillik ve özel sos ile hazırlanır.",
                image: "images/products/burger/chicken-burger.jpg"
            }
        ],
        "makarnalar": [
            {
                name: "Penne Arrabbiata",
                price: "210 TL",
                description: "Acılı domates sos, sarımsak ve parmesan ile.",
                image: "images/products/makarnalar/penne-arrabbiata.jpg"
            },
            {
                name: "Fettuccine Alfredo",
                price: "245 TL",
                description: "Kremalı sos, mantar ve tavuk parçalarıyla hazırlanır.",
                image: "images/products/makarnalar/fettuccine-alfredo.jpg"
            },
            {
                name: "Spaghetti Bolognese",
                price: "240 TL",
                description: "Kıymalı domates sos ve parmesanla servis edilir.",
                image: "images/products/makarnalar/spaghetti-bolognese.jpg"
            }
        ],
        "salata": [
            {
                name: "Sezar Salata",
                price: "210 TL",
                description: "Izgara tavuk, marul, kruton, parmesan ve sezar sos.",
                image: "images/products/salata/sezar-salata.jpg"
            },
            {
                name: "Akdeniz Salata",
                price: "190 TL",
                description: "Taze yeşillik, beyaz peynir, zeytin ve Akdeniz sos.",
                image: "images/products/salata/akdeniz-salata.jpg"
            },
            {
                name: "Ton Balıklı Salata",
                price: "225 TL",
                description: "Ton balığı, mısır, yeşillik ve limonlu sos.",
                image: "images/products/salata/ton-balikli-salata.jpg"
            }
        ],
        "soguk-kahveler": [
            {
                name: "Ice Latte",
                price: "125 TL",
                description: "Espresso, soğuk süt ve buz ile dengeli kahve.",
                image: "images/products/soguk-kahveler/ice-latte.jpg"
            },
            {
                name: "Ice Americano",
                price: "110 TL",
                description: "Espresso, soğuk su ve buzla sade kahve lezzeti.",
                image: "images/products/soguk-kahveler/ice-americano.jpg"
            },
            {
                name: "Caramel Frappe",
                price: "150 TL",
                description: "Karamel, kahve ve buzun kremalı karışımı.",
                image: "images/products/soguk-kahveler/caramel-frappe.jpg"
            }
        ],
        "sicak-kahveler": [
            {
                name: "Latte",
                price: "115 TL",
                description: "Espresso ve kadifemsi süt köpüğüyle klasik latte.",
                image: "images/products/sicak-kahveler/latte.jpg"
            },
            {
                name: "Cappuccino",
                price: "115 TL",
                description: "Espresso, buharla ısıtılmış süt ve yoğun köpük.",
                image: "images/products/sicak-kahveler/cappuccino.jpg"
            },
            {
                name: "Türk Kahvesi",
                price: "90 TL",
                description: "Geleneksel usulde pişirilmiş bol köpüklü Türk kahvesi.",
                image: "images/products/sicak-kahveler/turk-kahvesi.jpg"
            }
        ],
        "bitki-caylari": [
            {
                name: "Ihlamur",
                price: "95 TL",
                description: "Yumuşak içimli, rahatlatıcı sıcak bitki çayı.",
                image: "images/products/bitki-caylari/ihlamur.jpg"
            },
            {
                name: "Ada Çayı",
                price: "95 TL",
                description: "Aromatik ve ferah ada çayı demlemesi.",
                image: "images/products/bitki-caylari/ada-cayi.jpg"
            },
            {
                name: "Yeşil Çay",
                price: "95 TL",
                description: "Hafif içimli, sade ve dengeli yeşil çay.",
                image: "images/products/bitki-caylari/yesil-cay.jpg"
            }
        ],
        "kokteyller": [
            {
                name: "Mojito",
                price: "170 TL",
                description: "Nane, lime ve ferahlatıcı soda dengesiyle hazırlanır.",
                image: "images/products/kokteyller/mojito.jpg"
            },
            {
                name: "Berry Mix",
                price: "180 TL",
                description: "Kırmızı meyveler ve buzla canlı aromalı kokteyl.",
                image: "images/products/kokteyller/berry-mix.jpg"
            },
            {
                name: "Blue Lagoon",
                price: "185 TL",
                description: "Mavi narenciye aroması ve soğuk servis sunumu.",
                image: "images/products/kokteyller/blue-lagoon.jpg"
            }
        ],
        "klasikler": [
            {
                name: "Tost",
                price: "145 TL",
                description: "Kaşar ve sucuk seçeneğiyle sıcak tost.",
                image: "images/products/klasikler/tost.jpg"
            },
            {
                name: "Quesadilla",
                price: "220 TL",
                description: "Tavuk, peynir, biber ve özel sosla hazırlanır.",
                image: "images/products/klasikler/quesadilla.jpg"
            },
            {
                name: "Kulüp Sandviç",
                price: "230 TL",
                description: "Tavuk, yumurta, marul, domates ve patates eşliğinde.",
                image: "images/products/klasikler/kulup-sandvic.jpg"
            }
        ],
        "tavuklar": [
            {
                name: "Izgara Tavuk",
                price: "290 TL",
                description: "Marine tavuk göğsü, pilav ve mevsim sebzeleriyle.",
                image: "images/products/tavuklar/izgara-tavuk.jpg"
            },
            {
                name: "Köri Soslu Tavuk",
                price: "310 TL",
                description: "Kremalı köri soslu tavuk, makarna veya pilav seçeneğiyle.",
                image: "images/products/tavuklar/kori-soslu-tavuk.jpg"
            },
            {
                name: "Barbekü Tavuk",
                price: "315 TL",
                description: "Barbekü sosla lezzetlendirilmiş tavuk parçaları.",
                image: "images/products/tavuklar/barbeku-tavuk.jpg"
            }
        ]
    };

    window.OneDayProducts = products;
})();
