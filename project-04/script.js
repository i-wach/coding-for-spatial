// Properties Reference
// Styles: Runner, Basketball, Skate, low_Minimal, Chucks, slip_On, Sock
// Occasion: Casual, Going Out, Active
// Materials: Synthetic, Canvas, Suede, Leather

const sneakers = [
    {
        brand: "Nike",
        name: "Space Hippie 04",
        price: 130,
        material: 'Synthetic',
        color: 'grey',
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0001.jpg',
        link: 'https://www.nike.com/t/space-hippie-04-mens-shoe-gGWDLk/CZ6398-002?nikemt=true&cp=96413943330_search_%7cPRODUCT_GROUP%7cGOOGLE%7c71700000041489782%7cAll_X_X_X_X-Device_X_Nike-Clearance_X%7c%7cc&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_7aVU7xKEntm8ZG8oHtFXgdkbxl4B6j8JYxGhoSMxdvEIsm2MLOIlcaAn_zEALw_wcB&gclsrc=aw.ds',
        id: '0001',
    },
    {
        brand: "Balenciaga",
        name: "Triple S Clear Sole",
        price: 1090,
        material: "Synthetic",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0002.jpg',
        link: 'https://www.balenciaga.com/en-us/triple-s-clear-sole-black-544351W2FB11000.html', 
        id: '0002',
    },
    {
        brand: "Off-White",
        name: "OUT OF OFFICE",
        price: "515",
        material: "Cotton",
        color: "Beige",
        occasion: 'Casual',
        silohuette: 'Skate',
        image: 'images/0003.jpg',
        link: 'https://www.off---white.com/en-us/shopping/off-white-womens-out-of-office-ooo-sneakers-16254218', 
        id: '0003',
    },
    {
        brand: "Golden Goose",
        name: "Super-Star",
        price: 560,
        material: "Suede",
        color: "Brown",
        occasion: 'Going Out',
        silohuette: 'low-Minimal',
        image: 'images/0004.jpg',
        link: 'https://www.goldengoose.com/us/en/leopard-print-suede-super-star-sneakers-cod-GWF00101.F001472.81116.html', 
        id: '0004',
    },
    {
        brand: "New Balance",
        name: "993",
        price: 184.99,
        material: "Synthetic",
        color: "Grey",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0005.jpg',
        link: 'https://www.newbalance.com/pd/mens-made-in-us-993/MR993V1-M.html', 
        id: '0005',
    },
    {
        brand: "Adidas",
        name: "Stan Smith",
        price: 85,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low-Minimal',
        image: 'images/0006.jpg',
        link: 'https://www.adidas.com/us/stan-smith-shoes/FX5502.html', 
        id: '0006',
    },
    {
        brand: "Nike",
        name: "Blazer Mid '77",
        price: 100,
        material: "Leather",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Basketball',
        image: 'images/0007.jpg',
        link: 'https://www.nike.com/t/blazer-mid-77-essential-womens-shoe-25h71W/CZ1055-114?nikemt=true&cp=71606177307_search_%7CPRODUCT_GROUP%7CGOOGLE%7C71700000041489779%7CAll_X_X_X_X-Device_X_Nike-FullPrice_X%7C%7Cc&gclsrc=aw.ds&&gclid=CjwKCAjwjbCDBhAwEiwAiudByxnOZVR-u59tR4I8rEl8uHmlTXtxWTvaH7uuImenppevmqtN-_NXnBoCN7UQAvD_BwE&gclsrc=aw.ds', 
        id: '0007',
    },
    {
        brand: "Vans",
        name: "Old Skool",
        price: 60,
        material: "Canvas",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Skate',
        image: 'images/0008.jpg',
        link: 'https://www.vans.com/shop/old-skool-black-white?utm_id=go_cmp-191532173_adg-26624222573_ad-95842386413_pla-866008078493_dev-c_ext-_prd-700053803770_mca-8181713_sig-CjwKCAjwjbCDBhAwEiwAiudByzJZruajq9SjI2OWs6qa5fyyVYE1I9wg2zufqghhya013cPJtkSZyhoC1SUQAvD_BwE&utm_source=google&gclid=CjwKCAjwjbCDBhAwEiwAiudByzJZruajq9SjI2OWs6qa5fyyVYE1I9wg2zufqghhya013cPJtkSZyhoC1SUQAvD_BwE', 
        id: '0008',
    },
    {
        brand: "Converse",
        name: "Chuck Taylor All Star",
        price: 55,
        material: "Canvas",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Chucks',
        image: 'images/0009.jpg',
        link: 'https://www.converse.com/shop/p/chuck-taylor-all-star-unisex-low-top-shoe/M7652.html?dwvar_M7652_color=optical%20white&styleNo=M7652&cgid=womens-best-sellers', 
        id: '0009',
    },
    {
        brand: "Air Jordan",
        name: "Jordan 1 Retro High",
        price: 160,
        material: "Leather",
        color: "Red",
        occasion: 'Going Out',
        silohuette: 'Basketball',
        image: 'images/0010.jpg',
        link: 'https://stockx.com/air-jordan-1-retro-high-satin-black-toe-w', 
        id: '0010',
    },
    {
        brand: "Nike",
        name: "Air Max 90",
        price: 120,
        material: "Synthetic",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0011.jpg',
        link: 'https://www.nike.com/t/air-max-90-mens-shoe-6n3vKB/CN8490-100', 
        id: '0011',
    },
    {
        brand: "Reebok",
        name: "Club C 85",
        price: 70,
        material: "Leather",
        color: "White",
        occasion: 'Casual',
        silohuette: 'low-Minimal',
        image: 'images/0012.jpg',
        link: 'https://www.reebok.com/us/club-c-85-model-vintage-womens-shoes/BS8242.html', 
        id: '0012',
    },
    {
        brand: "Asics",
        name: "GEL-MC Plus",
        price: 110,
        material: "Textile",
        color: "Grey",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0013.jpg',
        link: 'https://www.asics.com/us/en-us/gel-mc-plus/p/ANA_1201A193-020.html?size=12&width=Standard', 
        id: '0013',
    },
    {
        brand: "Yeezy",
        name: "Boost 700 Wave Runner",
        price: 240,
        material: "Textile",
        color: "Multi",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0014.jpg',
        link: 'https://www.flightclub.com/yeezy-boost-700-mgsogr-cwhite-cblack-802501?utm_source=google_int&utm_medium=google_shopping_int&utm_campaign=11752349677_111935357657&utm_content=483318311964_&utm_term=191040706868&gclid=CjwKCAjwjuqDBhAGEiwAdX2cj06Pt43XfcI7HT4uIV6tgdRHD91NZ6ShRW2v-c6-YsHW9hWGwktVVhoCKkAQAvD_BwE', 
        id: '0014',
    },
    {
        brand: "Nike",
        name: "Air Force 1",
        price: 90,
        material: "Leather",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Basketball',
        image: 'images/0015.jpg',
        link: 'https://www.nike.com/t/air-force-1-07-mens-shoe-5QFp5Z/CW2288-111?nikemt=true&cp=71606177307_search_%7CPRODUCT_GROUP%7CGOOGLE%7C71700000041489779%7CAll_X_X_X_X-Device_X_Nike-FullPrice_X%7C%7Cc&gclsrc=aw.ds&&gclid=CjwKCAjwjuqDBhAGEiwAdX2cj-N0ONpiaeLC1KQIr3-2Ag3mXVCe18npkQOV40wa2odhM26ra6FNPhoCtggQAvD_BwE&gclsrc=aw.ds', 
        id: '0015',
    },
    {
        brand: "Superga",
        name: "2750 Cotu",
        price: 65,
        material: "Canvas",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Deck',
        image: 'images/0016.jpg',
        link: 'https://www.superga-usa.com/collections/womens-classic/products/2750-cotu-classic-black-white?variant=22652942254138&', 
        id: '0016',
    },
    {
        brand: "Common Projects",
        name: "Achilles",
        price: 410,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0017.jpg',
        link: 'https://www.mrporter.com/en-us/mens/product/common-projects/shoes/low-top-sneakers/original-achilles-leather-sneakers/3024088872901549', 
        id: '0017',
    },
    {
        brand: "Adidas",
        name: "4D Futurecraft",
        price: 220,
        material: "Textile",
        color: "Black",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0018.jpg',
        link: 'https://kith.com/collections/mens-footwear/products/aafz2560', 
        id: '0018',
    },
    {
        brand: "Veja",
        name: "Rio Branco",
        price: 140,
        material: "Textile",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0019.jpg',
        link: 'https://www.veja-store.com/en_us/rio-branco-hexamesh-gravel-nautico-oxford-grey-rb012377.html', 
        id: '0019',
    },
    {
        brand: "Visvim",
        name: "Skagway Lo",
        price: 720,
        material: "Canvas",
        color: "Green",
        occasion: 'Casual',
        silohuette: 'Chucks',
        image: 'images/0020.jpg',
        link: 'https://shop.visvim.com/0519901001002', 
        id: '0020',
    },
    {
        brand: "Hender Scheme",
        name: "Manual Industrial Products 22",
        price: 785,
        material: "Leather",
        color: "Brown",
        occasion: 'Going Out',
        silohuette: 'Basketball',
        image: 'images/0021.jpg',
        link: 'https://kith.com/collections/mens-footwear/products/hsmip-22-natural', 
        id: '0021',
    },
    {
        brand: "Vans",
        name: "Era",
        price: 50,
        material: "Canvas",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Deck',
        image: 'images/0022.jpg',
        link: 'https://www.vans.com/shop/mlx-era-true-white-true-white?utm_id=go_cmp-191532173_adg-26624199053_ad-95842234493_pla-865808573006_dev-c_ext-_prd-EWZBLK_VN%3A000EWZ%3ABLK%3A080%3AM%3A1%3A_mca-8181713_sig-CjwKCAjwjuqDBhAGEiwAdX2cj4sQgfUx1HNrZqViDHY0wnxzcyhbE9k7jFHK4voQ-Uh4mshW5CLsARoC06cQAvD_BwE&utm_source=google&radscid=191532173&gclid=CjwKCAjwjuqDBhAGEiwAdX2cj4sQgfUx1HNrZqViDHY0wnxzcyhbE9k7jFHK4voQ-Uh4mshW5CLsARoC06cQAvD_BwE', 
        id: '0022',
    },
    {
        brand: "Puma",
        name: "Classic XXI",
        price: 70,
        material: "Suede",
        color: "Red",
        occasion: 'Casual',
        silohuette: 'low-Minimal',
        image: 'images/0023.jpg',
        link: 'https://us.puma.com/en/us/pd/suede-classic-xxi-mens-sneakers/374915.html?dwvar_374915_color=06', 
        id: '0023',
    },
    {
        brand: "Play Converse",
        name: "Chuck Taylor All Star '70",
        price: 150,
        material: "Canvas",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Chucks',
        image: 'images/0024.jpg',
        link: 'https://shop-us.doverstreetmarket.com/collections/comme-des-garcons-footwear/products/play-converse-chuck-taylor-all-star-70-high-white', 
        id: '0024',
    },
    {
        brand: "Gucci",
        name: "Ace",
        price: 680,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0025.jpg',
        link: 'https://www.gucci.com/us/en/pr/women/shoes-for-women/sneakers-for-women/womens-ace-sneaker-with-bee-p-43194202JP09064', 
        id: '0025',
    },
    {
        brand: "Asics x Vivienne Westwood",
        name: "Gel-Kayano 27 LTX",
        price: 240,
        material: "Textile",
        color: "Black",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0026.jpg',
        link: 'https://www.asics.com/us/en-us/gel-kayano-27-ltx/p/ANA_1201A115-001.html?width=Standard', 
        id: '0026',
    },
    {
        brand: "A Bathing Ape",
        name: "Bape Sta",
        price: 202,
        material: "Leather",
        color: "Brown",
        occasion: 'Going Out',
        silohuette: 'Basketball',
        image: 'images/0027.jpg',
        link: 'https://bape.com/collections/all/products/1g70-191-042', 
        id: '0027',
    },
    {
        brand: "Air Jordan",
        name: "Jordan 4",
        price: 200,
        material: "Suede",
        color: "Taupe",
        occasion: 'Casual',
        silohuette: 'Basketball',
        image: 'images/0028.jpg',
        link: 'https://www.nike.com/my/launch/t/air-jordan-4-taupe-haze', 
        id: '0028',
    },
    {
        brand: "Adidas",
        name: "NMD_R1",
        price: 140,
        material: "Textile",
        color: "Black",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0029.jpg',
        link: 'https://www.adidas.com/us/nmd_r1-shoes/FY5727.html?forceSelSize=M%2013%20%2F%20W%2014', 
        id: '0029',
    },
    {
        brand: "Reebok x Maison Margiela",
        name: "Club C",
        price: 300,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0030.jpg',
        link: 'https://www.reebok.com/us/maison-margiela-club-c-shoes/H02407.html?cm_sp=SLOT-7.1-_-CP_BRAND_MAISON%20MARGIELA_HOME_%3F-_-PRODUCTLISTGRID-PRODUCT-CARD-_-634599', 
        id: '0030',
    },
    {
        brand: "Vans",
        name: "Classic Slip-On",
        price: 55,
        material: "Canvas",
        color: "Black and White",
        occasion: 'Casual',
        silohuette: 'slip_On',
        image: 'images/0031.jpg',
        link: 'https://www.vans.com/shop/shoes-classics-classic-slip-on/checkerboard-slip-on-black-off-white-check', 
        id: '0031',
    },
    {
        brand: "Balenciaga",
        name: "Speed 3.0",
        price: 925,
        material: "Textile",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'Sock',
        image: 'images/0032.jpg',
        link: 'https://www.balenciaga.com/en-us/speed-3.0-sneaker-white-654532W2DN29000.html', 
        id: '0032',
    },
    {
        brand: "Nike",
        name: "Vapormax Flyknit 3",
        price: 200,
        material: "Textile",
        color: "White",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0033.jpg',
        link: 'https://www.nike.com/t/air-vapormax-flyknit-3-womens-shoe-ZHCbvC/AJ6910-100', 
        id: '0033',
    },
    {
        brand: "Common Projects",
        name: "Slip-On",
        price: 400,
        material: "Textile",
        color: "White",
        occasion: 'Casual',
        silohuette: 'slip_On',
        image: 'images/0034.jpg',
        link: 'https://www.mrporter.com/en-us/mens/product/common-projects/shoes/low-top-sneakers/leather-trimmed-nylon-slip-on-sneakers/560971904236873', 
        id: '0034',
    },
    {
        brand: "Salomon",
        name: "XT-6",
        price: 190,
        material: "Textile",
        color: "Black",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0035.jpg',
        link: 'https://www.salomon.com/en-us/shop/product/xt-6-adv.html#color=37177', 
        id: '0035',
    },
    {
        brand: "Adidas",
        name: "Gazelle",
        price: 80,
        material: "Suede",
        color: "Navy",
        occasion: 'Casual',
        silohuette: 'low_Minimal',
        image: 'images/0036.jpg',
        link: 'https://www.adidas.com/us/gazelle-shoes/BB5478.html?forceSelSize=9.5', 
        id: '0036',
    },
    {
        brand: "Buscemi",
        name: "100mm",
        price: 890,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'Basketball',
        image: 'images/0037.jpg',
        link: 'https://buscemi.com/collections/100mm/products/100mm-bianco', 
        id: '0037',
    },
    {
        brand: "Reebok",
        name: "RS Curve",
        price: 100,
        material: "Textile",
        color: "Multi",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0038.jpg',
        link: 'https://us.puma.com/en/us/pd/rs-curve-ocean-queen-womens-sneakers/380659.html?dwvar_380659_color=01', 
        id: '0038',
    },
    {
        brand: "Eytys",
        name: "Doja",
        price: 250,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0039.jpg',
        link: 'https://eytys.com/product/footwear/sneakers/doja-tumbled-white-sneakers', 
        id: '0039',
    },
    {
        brand: "Adidas",
        name: "Superstar",
        price: 85,
        material: "Leather",
        color: "White",
        occasion: 'Casual',
        silohuette: 'low_Minimal',
        image: 'images/0040.jpg',
        link: 'https://www.adidas.com/us/superstar-shoes/FV3284.html?clickId=xqQQqtzBGxyLWB8wUx0Mo38cUkB0XeWPs2A-S80&cm_mmc=AdieAffiliates_IR-_-Skimbit%20Ltd.-_-Online%20Tracking%20Link-_-ONLINE_TRACKING_LINK-_-&cm_mmc2=adidas-NA-eCom-Affiliates-_-Skimbit%20Ltd.-_-None-None-US-always-on-None-1801&irgwc=1', 
        id: '0040',
    },
    {
        brand: "Y-3",
        name: "Orisan",
        price: 400,
        material: "Textile",
        color: "Multi",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0041.jpg',
        link: 'https://www.adidas.com/us/y-3-orisan/FZ4317.html', 
        id: '0041',
    },
    {
        brand: "Maison Margiela",
        name: "Replica",
        price: 495,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0042.jpg',
        link: 'https://www.maisonmargiela.com/us/maison-margiela/sneakers-replica_cod11893114hm.html', 
        id: '0042',
    },
    {
        brand: "Fear of God",
        name: "Sneakers",
        price: 550,
        material: "Suede",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'Skate',
        image: 'images/0043.jpg',
        link: 'https://www.mrporter.com/en-us/mens/product/fear-of-god/shoes/low-top-sneakers/suede-sneakers/30049528927132705', 
        id: '0043',
    },
    {
        brand: "Hoka",
        name: "Kaha Low",
        price: 200,
        material: "Textile",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0044.jpg',
        link: 'https://www.hokaoneone.com/women-hiking/kaha-low-gore-tex/1123114.html', 
        id: '0044',
    },
    {
        brand: "New Balance",
        name: "327",
        price: 89.99,
        material: "Textile",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0045.jpg',
        link: 'https://www.newbalance.com/pd/327/MS327V1-34394.html', 
        id: '0045',
    },
    {
        brand: "Supreme x Nike",
        name: "SB Dunk Low",
        price: 110,
        material: "Leather",
        color: "Multi",
        occasion: 'Casual',
        silohuette: 'Skate',
        image: 'images/0046.jpg',
        link: 'https://stockx.com/nike-sb-dunk-low-supreme-black?country=US&currencyCode=USD&size=11.5&utm_source=af&utm_medium=imp&utm_campaign=10078&impactSiteId=wU42APRD-xyLUtYwUx0Mo37kUkB0X70Xs2A-S80&clickid=wU42APRD-xyLUtYwUx0Mo37kUkB0X70Xs2A-S80&utm_term=wU42APRD-xyLUtYwUx0Mo37kUkB0X70Xs2A-S80&utm_content=gq.com_530344&irgwc=1', 
        id: '0046',
    },
    {
        brand: "Onitsuka Tiger",
        name: "Serrano",
        price: 75,
        material: "Textile",
        color: "White",
        occasion: 'Casual',
        silohuette: 'low_Minimal',
        image: 'images/0047.jpg',
        link: 'https://www.onitsukatiger.com/us/en-us/serrano/p/D109L-9049.html?size=5?utm_source=google&utm_medium=pla&CAWELAID=120223060000246066&CAGPSPN=pla&CAAGID=96642872597&CATCI=pla-933704351983&gclid=Cj0KCQjw1PSDBhDbARIsAPeTqre910KvOzOSXJG9RaS3DBPWZuA9VI7P4IIr3nOLaC8jBQyYuAMdvuUaAkuuEALw_wcB', 
        id: '0047',
    },
    {
        brand: "Novesta",
        name: "Star Dribble",
        price: 65,
        material: "Canvas",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Chucks',
        image: 'images/0048.jpg',
        link: 'https://www.gonovesta.com/star-dribble-60-black-23-8585014073162-39', 
        id: '0048',
    },
    {
        brand: "Balenciaga",
        name: "Track.2",
        price: 995,
        material: "Textile",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0049.jpg',
        link: 'https://www.balenciaga.com/en-us/track.2-sneaker-white-568614W2GN19000.html', 
        id: '0049',
    },
    {
        brand: "Saucony",
        name: "Jazz",
        price: 60,
        material: "Textile",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0050.jpg',
        link: 'https://www.saucony.com/en/jazz-original/720026099504.html?utm_source=google&utm_medium=cpc&adpos=&scid=scplp11842M-720026099504&sc_intid=11842M-720026099504&gclid=Cj0KCQjw1PSDBhDbARIsAPeTqrdrBtjTAyXa8mW4S2uIkXX9go4HAUJEiE0NwQ9Ov1nhK9ry-Q4PGXUaAtNzEALw_wcB&gclsrc=aw.ds', 
        id: '0050',
    },
    {
        brand: "Vans",
        name: "Authentic LX",
        price: 69,
        material: "Canvas",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Skate',
        image: 'images/0051.jpg',
        link: 'https://www.endclothing.com/us/vans-vault-ua-og-authentic-lx-vn0a4bv94jn1.html', 
        id: '0051',
    },
    {
        brand: "Reebok x BBC",
        name: "Instapump Fury Boost",
        price: 200,
        material: "Textile",
        color: "Multi",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0052.jpg',
        link: 'https://www.reebok.com/us/bbc-instapump-fury-boost-shoes/GZ5363.html', 
        id: '0052',
    },
    {
        brand: "New Balance",
        name: "480 BB",
        price: 110,
        material: "Leather",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Basketball',
        image: 'images/0053.jpg',
        link: 'https://www.mileendkicks.ca/us/new-balance-480-bb-480-lwg-white-nvy-red.html', 
        id: '0053',
    },
    {
        brand: "Clae",
        name: "Bradley",
        price: 150,
        material: "Leather",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0054.jpg',
        link: 'https://www.clae.com/collections/the-essentials-line/products/bradley-triple-black-leather', 
        id: '0054',
    },
    {
        brand: "Filling Pieces",
        name: "Low Top Ripple Napa",
        price: 245,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0055.jpg',
        link: 'https://www.fillingpieces.com/collections/men-signature-footwear/products/low-top-ripple-basic-nappa-all-white', 
        id: '0055',
    },
    {
        brand: "Sketchers",
        name: "GOwalk",
        price: 60,
        material: "Textile",
        color: "Grey",
        occasion: 'Casual',
        silohuette: 'slip_On',
        image: 'images/0056.jpg',
        link: 'https://www.skechers.com/men/shoes/skechers-gowalk-max---modulating/216170_CHAR.html', 
        id: '0056',
    },
    {
        brand: "Converse x Kim Jones",
        name: "Chuck 70",
        price: 160,
        material: "Textile",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'Chucks',
        image: 'images/0057.jpg',
        link: 'https://www.converse.com/shop/p/converse-x-kim-jones-chuck-70-unisex-high-top-shoe/171258MP.html', 
        id: '0057',
    },
    {
        brand: "Nike",
        name: "Air Max 97",
        price: 170,
        material: "Textile",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0058.jpg',
        link: 'https://www.nike.com/t/air-max-97-womens-shoe-XD9m01/921733-100', 
        id: '0058',
    },
    {
        brand: "Yeezy",
        name: "Boost 350 V2",
        price: 220,
        material: "Textile",
        color: "Zebra",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0059.jpg',
        link: 'https://stockx.com/adidas-yeezy-boost-350-v2-white-core-black-red?utm_source=af&utm_medium=imp&utm_campaign=10078&impactSiteId=wU42APRD-xyLUtYwUx0Mo37kUkB0Sm3fs2A-S80&clickid=wU42APRD-xyLUtYwUx0Mo37kUkB0Sm3fs2A-S80&utm_term=wU42APRD-xyLUtYwUx0Mo37kUkB0Sm3fs2A-S80&utm_content=one37pm.com_530344&irgwc=1', 
        id: '0059',
    },
    {
        brand: "All Birds",
        name: "Wool Runner",
        price: 95,
        material: "Textile",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0060.jpg',
        link: 'https://www.allbirds.com/products/mens-wool-runner-fluffs', 
        id: '0060',
    },
    {
        brand: "Christian Louboutin",
        name: "Boat Man",
        price: 995,
        material: "Textile",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'slip_On',
        image: 'images/0061.jpg',
        link: 'https://www.mrporter.com/en-us/mens/product/christian-louboutin/shoes/slip-on-sneakers/boat-man-studded-velvet-slip-on-sneakers/46353151654270421', 
        id: '0061',
    },
    {
        brand: "Air Jordan",
        name: "Jordan III",
        price: 200,
        material: "Leather",
        color: "Black",
        occasion: 'Active',
        silohuette: 'Basketball',
        image: 'images/0062.jpg',
        link: 'https://stockx.com/air-jordan-3-retro-black-cement-2018', 
        id: '0062',
    },
    {
        brand: "Loewe",
        name: "Flow Runner",
        price: 690,
        material: "Suede",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0063.jpg',
        link: 'https://www.loewe.com/usa/en/men/shoes/sneakers/flow-runner-in-suede/M816282X10-2100.html?cgid=m_shoes_sneakers&p=4', 
        id: '0063',
    },
    {
        brand: "Veja",
        name: "Esplar 3-Lock",
        price: 130,
        material: "Leather",
        color: "White",
        occasion: 'Casual',
        silohuette: 'low_Minimal',
        image: 'images/0064.jpg',
        link: 'https://www.veja-store.com/en_eu/3-lock-leather-white-black-el020005.html', 
        id: '0064',
    },
    {
        brand: "ILYSM",
        name: "Tabi Sneaker",
        price: 129,
        material: "Textile",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Sock',
        image: 'images/0065.jpg',
        link: 'https://shop.ilysm.com/collections/tabi-sneakers/products/silk-tabi-shadow-stripe', 
        id: '0065',
    },
    {
        brand: "Yeezy",
        name: "450",
        price: 200,
        material: "Textile",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'Sock',
        image: 'images/0066.jpg',
        link: 'https://stockx.com/adidas-yeezy-450-cloud-white', 
        id: '0066',
    },
    {
        brand: "Loro Piana",
        name: "Traveller Walk",
        price: 1025,
        material: "Leather",
        color: "White",
        occasion: 'Casual',
        silohuette: 'low_Minimal',
        image: 'images/0067.jpg',
        link: 'https://us.loropiana.com/en/p/shoes/man/traveller-walk-sneaker-FAI8116?colorCode=100E', 
        id: '0067',
    },
    {
        brand: "Adidas",
        name: "Ultraboost 21",
        price: 180,
        material: "Textile",
        color: "Multi",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0068.jpg',
        link: 'https://www.adidas.com/us/ultraboost-21-shoes/FY0377.html', 
        id: '0068',
    },
    {
        brand: "Keds",
        name: "Royal Lo",
        price: 59.95,
        material: "Canvas",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Chucks',
        image: 'images/0069.jpg',
        link: 'https://www.keds.com/en/unisex-royal-lo/14318U.html?dwvar_14318U_color=PK54468#cgid=pro-keds&start=1', 
        id: '0069',
    },
    {
        brand: "Spalwart",
        name: "Smash",
        price: 425,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0070.jpg',
        link: 'https://spalwart.com/webshop/product/165/1897/smash-low-nappa-ws/1897/7864/', 
        id: '0070',
    },
    {
        brand: "Nike x Sacai",
        name: "LD Waffle",
        price: 160,
        material: "Textile",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0071.jpg',
        link: 'https://stockx.com/nike-ld-waffle-sacai-dark-grey-black-anthracite', 
        id: '0071',
    },
    {
        brand: "Alexander McQueen",
        name: "Oversized Sneaker",
        price: 540,
        material: "Leather",
        color: "white",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0072.jpg',
        link: 'https://www.alexandermcqueen.com/en-us/sneakers/oversized-sneaker-553770WHGP79061.html', 
        id: '0072',
    },
    {
        brand: "Visvim",
        name: "Corda-Folk",
        price: 1035,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0073.jpg',
        link: 'https://shop.visvim.com/0321102002006', 
        id: '0073',
    },
    {
        brand: "Nike",
        name: "Waffle Trainer 2 SP",
        price: 100,
        material: "Textile",
        color: "Navy",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0074.jpg',
        link: 'nike.com/t/waffle-trainer-2-sp-mens-shoe-MkbSQ4/DB3004-400?nikemt=true&cp=81742485461_search_%7CPRODUCT_GROUP%7CGOOGLE%7C71700000052538341%7CAll_X_X_X_X-Device_X_Nike-FullPrice_X%7C%7Cc&gclsrc=aw.ds&&gclid=Cj0KCQjw1PSDBhDbARIsAPeTqrcKRXGdcjkEoXoHOwNFb1gqDkQrdHruQcC9kxZDNFwRVFw_J6hNSVYaAluQEALw_wcB&gclsrc=aw.ds', 
        id: '0074',
    },
    {
        brand: "Hoka",
        name: "Bondi 7",
        price: 150,
        material: "Textile",
        color: "Black",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0075.jpg',
        link: 'https://www.hokaoneone.com/womens-road/bondi-7/192410927722.html?source=shoppingsite_PLA_1110519-BBLC-06.5&kpid=1110519-BBLC-06.5&utm_source=google&utm_medium=pla&gclid=Cj0KCQjw1PSDBhDbARIsAPeTqrfSFhjShtz9nHBepdVTDcWmYFgs5HD0fM2Jkhs4JMcKAfngJaxSZsEaAveuEALw_wcB&gclsrc=aw.ds', 
        id: '0075',
    },
    {
        brand: "Vans",
        name: "Sk8-Hi",
        price: 70,
        material: "Textile",
        color: "Grey",
        occasion: 'Casual',
        silohuette: 'Skate',
        image: 'images/0076.jpg',
        link: 'https://www.vans.com/shop/shoes-classics-womens-sk8-hi/sk8-hi-tapered-drizzle-true-white', 
        id: '0076',
    },
    {
        brand: "Christian Louboutin",
        name: "Vieira",
        price: 895,
        material: "Suede",
        color: "Beige",
        occasion: 'Going Out',
        silohuette: 'Skate',
        image: 'images/0077.jpg',
        link: 'https://www.net-a-porter.com/en-us/shop/product/christian-louboutin/vieira-spiked-suede-sneakers/1303519', 
        id: '0077',
    },
    {
        brand: "Saint Laurent",
        name: "Court Classic",
        price: 595,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'low_Minimal',
        image: 'images/0078.jpg',
        link: 'https://www.ysl.com/en-us/sneakers/court-classic-sl-06-embroidered-sneakers-in-smooth-and-metallic-leather-61135200NA09085.html', 
        id: '0078',
    },
    {
        brand: "Vibram",
        name: "V-Aqua",
        price: 90,
        material: "Textile",
        color: "Black",
        occasion: 'Active',
        silohuette: 'Sock',
        image: 'images/0079.jpg',
        link: 'https://us.vibram.com/shop/shop-all-products/mens-fivefingers/bestsellers/v-aqua-mens-M73.html?dwvar_M73_color=Black#start=1', 
        id: '0079',
    },
    {
        brand: "Prada",
        name: "Cotton Canvas Sneaker",
        price: 695,
        material: "Canvas",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Chucks',
        image: 'images/0080.jpg',
        link: 'https://www.prada.com/us/en/women/shoes/sneakers/products.cotton_canvas_sneakers.1E231M_2OFZ_F057Z_F_035.html', 
        id: '0080',
    },
    {
        brand: "Asics",
        name: "Gel Kayano 14",
        price: 155,
        material: "Textile",
        color: "Multi",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0081.jpg',
        link: 'https://www.ssense.com/en-us/women/product/asics/off-white-and-blue-gel-kayano-14-sneakers/6076491', 
        id: '0081',
    },
    {
        brand: "Adidas",
        name: "N3XT L3V3L",
        price: 180,
        material: "Textile",
        color: "Multi",
        occasion: 'Active',
        silohuette: 'Sock',
        image: 'images/0082.jpg',
        link: 'https://www.adidas.com/us/n3xt-l3v3l-futurenatural-shoes/FX7117.html', 
        id: '0082',
    },
    {
        brand: "Nike",
        name: "Kyrie 6",
        price: 125,
        material: "Textile",
        color: "Multi",
        occasion: 'Active',
        silohuette: 'Basketball',
        image: 'images/0083.jpg',
        link: 'https://int.stadiumgoods.com/en-us/shopping/kyrie-6-ep-oracle-aqua-cheetah-15209896?ranMID=41568&ranEAID=t*64622QPuc&ranSiteID=t.64622QPuc-w9mcTAYtmJq9HK.xVD2HrQ&utm_medium=affiliate&utm_source=Highsnobiety.com&utm_content=3408659', 
        id: '0083',
    },
    {
        brand: "Bottega Veneta",
        name: "The Quilt Sneakers",
        price: 880,
        material: "Leather",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'slip_On',
        image: 'images/0084.jpg',
        link: 'https://www.ssense.com/en-us/women/product/bottega-veneta/black-the-quilt-sneakers/5916131', 
        id: '0084',
    },
    {
        brand: "R13",
        name: "High Top Sneaker",
        price: 495,
        material: "Canvas",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'Chucks',
        image: 'images/0085.jpg',
        link: 'https://www.r13denim.com/collections/sneakers/products/high-top-sneaker-1', 
        id: '0085',
    },
    {
        brand: "Nike",
        name: "Daybreak",
        price: 90,
        material: "Textile",
        color: "Grey",
        occasion: 'Casual',
        silohuette: 'Runner',
        image: 'images/0086.jpg',
        link: 'https://www.nike.com/t/daybreak-womens-shoe-kM5pxT/CK2351-008?nikemt=true&cp=96413943330_search_%7cPRODUCT_GROUP%7cGOOGLE%7c71700000041489782%7cAll_X_X_X_X-Device_X_Nike-Clearance_X%7c%7cc&gclid=Cj0KCQjw1PSDBhDbARIsAPeTqrcFm_-MBaqomc_9XQIL39JQhxuVZlqTlcohBXCvx-cYTCpVA2dxI0YaArVjEALw_wcB&gclsrc=aw.ds', 
        id: '0086',
    },
    {
        brand: "APL",
        name: "Techloom Wave",
        price: 225,
        material: "Textile",
        color: "Grey",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0087.jpg',
        link: 'https://www.athleticpropulsionlabs.com/collections/womens-bestsellers/products/womens-techloom-wave-heather-grey-black-white', 
        id: '0087',
    },
    {
        brand: "SeaVees",
        name: "Hermosa",
        price: 78,
        material: "Canvas",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Skate',
        image: 'images/0088.jpg',
        link: 'https://www.seavees.com/products/mens-hermosa-sneaker-classic-black', 
        id: '0088',
    },
    {
        brand: "Swear",
        name: "Air Revive Xtra",
        price: 210,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'Sock',
        image: 'images/0089.jpg',
        link: 'https://www.farfetch.com/shopping/women/swear-air-revive-xtra-sneakers-item-16133512.aspx?storeid=9939', 
        id: '0089',
    },
    {
        brand: "Stepney Workers Club",
        name: "Varden S-Strike",
        price: 135,
        material: "Canvas",
        color: "Black",
        occasion: 'Casual',
        silohuette: 'Skate',
        image: 'images/0090.jpg',
        link: 'https://www.stepneyworkersclub.com/varden-s-strike-canvas-black.html', 
        id: '0090',
    },
    {
        brand: "Yeezy",
        name: "500",
        price: 220,
        material: "Textile",
        color: "Grey",
        occasion: 'Casual',
        silohuette: 'Basketball',
        image: 'images/0091.jpg',
        link: 'https://stockx.com/adidas-yeezy-500-high-slate?utm_source=af&utm_medium=imp&utm_campaign=10078&impactSiteId=wU42APRD-xyLUtYwUx0Mo37kUkB0k1Sfs2A-S80&clickid=wU42APRD-xyLUtYwUx0Mo37kUkB0k1Sfs2A-S80&utm_term=wU42APRD-xyLUtYwUx0Mo37kUkB0k1Sfs2A-S80&utm_content=one37pm.com_530344&irgwc=1', 
        id: '0091',
    },
    {
        brand: "Rick Owens",
        name: "Phlegethon",
        price: 1145,
        material: "Leather",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'Chucks',
        image: 'images/0092.jpg',
        link: 'https://www.rickowens.eu/en/US/men/products/ru21s6890lpo-911', 
        id: '0092',
    },
    {
        brand: "Nike",
        name: "Air Huarache",
        price: 110,
        material: "Textile",
        color: "White",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0093.jpg',
        link: 'https://www.nike.com/t/air-huarache-mens-shoe-eoToq9X2/318429-111', 
        id: '0093',
    },
    {
        brand: "Shoes Like Pottery",
        name: "01JP High",
        price: 149,
        material: "Canvas",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Chucks',
        image: 'images/0094.jpg',
        link: 'https://www.endclothing.com/us/shoes-like-pottery-01jp-high-sneaker-12331817.html?173=uk-6&utm_source=google_surfaces&utm_medium=cpc&utm_campaign=google_surface_us&gclid=Cj0KCQjw1PSDBhDbARIsAPeTqrfPhYSOFI_nQ9Rw-TioV228c6lzVX3EkqMfCTjC5Bl4mHy9BCbRIsQaAmgnEALw_wcB', 
        id: '0094',
    },
    {
        brand: "Prada",
        name: "Cloudbust Thunder",
        price: 990,
        material: "Textile",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0095.jpg',
        link: 'https://www.prada.com/us/en/men/shoes/sneakers/products.cloudbust_thunder_technical_fabric_sneakers.2EG293_3KZU_F0009.html', 
        id: '0095',
    },
    {
        brand: "Gucci x Disney",
        name: "Rhyton",
        price: 890,
        material: "Leather",
        color: "White",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0096.jpg',
        link: 'https://www.gucci.com/us/en/pr/men/shoes-for-men/sneakers-for-men/mens-disney-x-gucci-rhyton-sneaker-p-601370DRW009522', 
        id: '0096',
    },
    {
        brand: "Nike",
        name: "ACG Mountain Fly",
        price: 220,
        material: "Textile",
        color: "Khaki",
        occasion: 'Active',
        silohuette: 'Sock',
        image: 'images/0097.jpg',
        link: 'https://www.nike.com/launch/t/acg-mountain-fly-khaki', 
        id: '0097',
    },
    {
        brand: "Raf Simons",
        name: "Cylon 21",
        price: 530,
        material: "Textile",
        color: "Black",
        occasion: 'Going Out',
        silohuette: 'Runner',
        image: 'images/0098.jpg',
        link: 'https://www.highsnobiety.com/shop/product/raf-simons-cylon-grey/', 
        id: '0098',
    },
    {
        brand: "Sunnei",
        name: "White Leather Dreamy",
        price: 467,
        material: "Leather",
        color: "White",
        occasion: 'Casual',
        silohuette: 'Basketball',
        image: 'images/0099.jpg',
        link: 'https://sunnei.it/products/special-dre01-white-leather', 
        id: '0099',
    },
    {
        brand: "Merrell",
        name: "Long Sky",
        price: "130",
        material: "Textile",
        color: "White",
        occasion: 'Active',
        silohuette: 'Runner',
        image: 'images/0100.jpg',
        link: 'https://www.brownsfashion.com/shopping/white-long-sky-mesh-sneakers-15655694?utm_source=google&utm_medium=shopping-organic&utm_campaign=us-en-usd&gclid=Cj0KCQjw1PSDBhDbARIsAPeTqreGTHEXtK5kKo4FMP_7H984rHmCAnQ4HRo7cJ7eiH1WjK7Jroz2Ym0aAjZvEALw_wcB', 
        id: '0100',
    },
    // {
    //     brand: "",
    //     name: "",
    //     price: "",
    //     material: "",
    //     color: "",
    //     occasion: '',
    //     silohuette: '',
    //     image: '',
    //     link: '', 
    // },
]

// Pull DOM elements

let imageViewer = document.getElementById("imageViewer");
let brandDisplay = document.getElementById("brandDisplay");
let nameDisplay = document.getElementById("nameDisplay");
let priceDisplay = document.getElementById("priceDisplay");

// call a random image for viewer

let randomStart = Math.floor(Math.random() * sneakers.length);

console.log(randomStart);

// add random first image to image viewer

imageViewer.src = sneakers[randomStart].image;
brandDisplay.textContent = sneakers[randomStart].brand;
nameDisplay.textContent = sneakers[randomStart].name;
priceDisplay.textContent = "$" + sneakers[randomStart].price;

// remove first image from array

// const sneakersPicked = []

console.log(sneakers.length)

const sneakersPicked = [];

sneakersPicked.push(sneakers[randomStart]);

sneakers.splice(randomStart, 1)

console.log(sneakersPicked)
console.log(sneakers.length)

// pull buttons from DOM

const priceButton = document.querySelector('#price');
const occasionButton = document.querySelector('#occasion');
const materialButton = document.querySelector('#material');
const styleButton = document.querySelector('#style');

// add event listeners

priceButton.addEventListener('click', priceMatch);
occasionButton.addEventListener('click', occasionMatch);
materialButton.addEventListener('click', materialMatch);
styleButton.addEventListener('click', styleMatch);

// functions for selecting comparable images

console.log(sneakersPicked.length)

console.log(sneakersPicked)

console.log(sneakers.length)

console.log(sneakers)

function priceMatch(){
    let cost = sneakersPicked[sneakersPicked.length - 1].price
    console.log(cost)

    let random = Math.floor(Math.random() * sneakers.length);

    console.log(sneakers[random].price)

    // if (sneakers[random].price < cost + 50 && sneakers[random].price > cost - 50) {
    //     let x = false
    // } else {
    //     x = true
    // }
    let hiCost = cost + 50;
    let loCost = cost - 50;

    if (sneakers[random].price <= hiCost && sneakers[random].price >= loCost) {
        sneakersPicked.push(sneakers[random]);
    } else {
        while (sneakers[random].price <= hiCost && sneakers[random].price >= loCost) {
        random = Math.floor(Math.random() * sneakers.length);  
        }
        sneakersPicked.push(sneakers[random]);
    }

    imageViewer.src = sneakers[random].image;
    brandDisplay.textContent = sneakers[random].brand;
    nameDisplay.textContent = sneakers[random].name;
    priceDisplay.textContent = "$" + sneakers[random].price;

    // remove selected object from the sneaker array
    sneakers.splice(random, 1);

     // disable button
    priceButton.disabled = true
    priceButton.style.color = 'white'

    console.log(sneakersPicked)
    console.log(sneakersPicked.length)
    console.log(sneakers.length)

    showButton()

    return sneakers, sneakersPicked
}

// occasion selector function
function occasionMatch() {
    console.log(sneakersPicked.length)

    let occasionPicked = sneakersPicked[sneakersPicked.length - 1].occasion
    console.log(occasionPicked)

    let random = Math.floor(Math.random() * sneakers.length);

    // if else to test if randomly selected object is similar to the object currently displayed
    if (occasionPicked === sneakers[random].occasion) {
        sneakersPicked.push(sneakers[random]);

    } else {
        // run while loop until the object properties match
        while (occasionPicked !== sneakers[random].occasion) {
            random = Math.floor(Math.random() * sneakers.length);
            console.log(sneakers[random.occasion])
        }
        sneakersPicked.push(sneakers[random]);
    }

    // replace info in the viewer
    imageViewer.src = sneakers[random].image;
    brandDisplay.textContent = sneakers[random].brand;
    nameDisplay.textContent = sneakers[random].name;
    priceDisplay.textContent = "$" + sneakers[random].price;

    console.log(sneakers[random].occasion)
    console.log(sneakers[random].material)

    // remove selected object from the sneaker array
    sneakers.splice(random, 1);

    // disable button
    occasionButton.disabled = true
    occasionButton.style.color = 'white'

    console.log(sneakersPicked.length)
    console.log(sneakers.length)

    showButton()

    return sneakers, sneakersPicked
}

// material selector function
function materialMatch() {
    console.log(sneakersPicked.length)

    let materialPicked = sneakersPicked[sneakersPicked.length - 1].material

    console.log(materialPicked)

    let random = Math.floor(Math.random() * sneakers.length);

    if (materialPicked === sneakers[random].material) {
        sneakersPicked.push(sneakers[random]);

    } else {
        while (materialPicked !== sneakers[random].material) {
            random = Math.floor(Math.random() * sneakers.length);
        }
        sneakersPicked.push(sneakers[random]);
    }

    imageViewer.src = sneakers[random].image;
    brandDisplay.textContent = sneakers[random].brand;
    nameDisplay.textContent = sneakers[random].name;
    priceDisplay.textContent = "$" + sneakers[random].price;

    console.log(sneakers[random].material)

    sneakers.splice(random, 1);

    materialButton.disabled = true
    materialButton.style.color = 'white'

    console.log(sneakersPicked.length)
    console.log(sneakers.length)

    showButton()

    return sneakers, sneakersPicked
}

// stlye selector function
function styleMatch() {
    console.log(sneakersPicked.length)

    let stylePicked = sneakersPicked[sneakersPicked.length - 1].silohuette

        console.log(stylePicked)

    let random = Math.floor(Math.random() * sneakers.length);

        console.log(sneakers[random].silohuette)

    if (stylePicked === sneakers[random].silohuette) {
        sneakersPicked.push(sneakers[random]);
        
    } else {
        while (stylePicked !== sneakers[random].silohuette) {
            random = Math.floor(Math.random() * sneakers.length);
        }
        sneakersPicked.push(sneakers[random]);
    }

    imageViewer.src = sneakers[random].image;
    brandDisplay.textContent = sneakers[random].brand;
    nameDisplay.textContent = sneakers[random].name;
    priceDisplay.textContent = "$" + sneakers[random].price;

    console.log(sneakers[random].silohuette)

    sneakers.splice(random, 1);

    styleButton.disabled = true
    styleButton.style.color = 'white'

    console.log(sneakersPicked)
    console.log(sneakers.length)

    showButton()

    return sneakers, sneakersPicked
}

// reveal results button

const seeResultsButton = document.querySelector('#seeResults');

function showButton() {
    if (priceButton.disabled && occasionButton.disabled && materialButton.disabled && styleButton.disabled) {
        seeResultsButton.style.visibility = 'visible';
    } else {
        seeResultsButton.style.visibility = 'hidden'; 
    }
}

// see results function

seeResultsButton.addEventListener('click', revealResults);

function revealResults() {

    let image1 = document.get
    console.log(image1); 
}

