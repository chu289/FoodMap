window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5eb24697d0f022001a421d02",
                        "name": "開小伙 宵夜 炸雞 鐵板麵",
                        "businesstime": "00:00-01:00",
                        "address": "臺北市大同區天水路2之4號",
                        "phone": "0975711186",
                        "price": "300",
                        "website": "https://www.facebook.com/%E9%96%8B%E5%B0%8F%E4%BC%99-%E5%AE%B5%E5%A4%9C-%E7%82%B8%E9%9B%9E-%E9%90%B5%E6%9D%BF%E9%BA%B5-103801231202349/",
                        "picture": "/src/image/content/taipei/開小伙.jpg",
                        "city": "taipei",
                        "kind": "street food",
                        "createdAt": "2020-05-06T05:09:44.003Z",
                        "updatedAt": "2020-05-06T07:15:49.456Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26211285ec60019a6d74e",
                        "name": "華王排骨",
                        "businesstime": "10:30-14:30, 16:30-20:30",
                        "address": "臺北市中正區重慶南路三段83號",
                        "phone": "0223672511",
                        "price": "90",
                        "website": "https://www.facebook.com/%E8%8F%AF%E7%8E%8B%E6%8E%92%E9%AA%A8%E9%A3%AF-168427729872325/",
                        "picture": "/src/image/content/taipei/華王排骨.jpg",
                        "city": "taipei",
                        "kind": "street food",
                        "createdAt": "2020-05-06T07:06:57.596Z",
                        "updatedAt": "2020-05-06T07:16:31.106Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb262e8285ec60019a6d74f",
                        "name": "稻咖哩",
                        "businesstime": "06:00-14:00",
                        "address": "臺北市中正區中華路二段303巷1號",
                        "phone": "0223379399",
                        "price": "100",
                        "website": "https://www.facebook.com/onlytoast98/",
                        "picture": "/src/image/content/taipei/OnlyToast偷吃吐司專賣店.jpg",
                        "city": "taipei",
                        "kind": "Brunch",
                        "createdAt": "2020-05-06T07:10:32.728Z",
                        "updatedAt": "2020-05-06T07:14:25.302Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb2650d285ec60019a6d750",
                        "name": "Totto Ramen 鳥人拉麵",
                        "businesstime": "11:30-22:00",
                        "address": "台北市大安區復興南路一段107巷5弄9號",
                        "phone": "0227789866",
                        "price": "250",
                        "website": "https://www.facebook.com/tottoramen.tw/",
                        "picture": "/src/image/content/taipei/Totto Ramen 鳥人拉麵.jpg",
                        "city": "taipei",
                        "kind": "japanese",
                        "createdAt": "2020-05-06T07:19:41.616Z",
                        "updatedAt": "2020-05-06T07:19:41.616Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26566285ec60019a6d751",
                        "name": "uMeal 優膳糧",
                        "businesstime": "11:30-20:30",
                        "address": "台北市信義區吳興街51號",
                        "phone": "0287808026",
                        "price": "99",
                        "website": "https://www.facebook.com/YouMeals/",
                        "picture": "/src/image/content/taipei/uMeal 優膳糧.jpg",
                        "city": "taipei",
                        "kind": "dinner",
                        "createdAt": "2020-05-06T07:21:10.095Z",
                        "updatedAt": "2020-05-06T07:21:59.979Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26611285ec60019a6d752",
                        "name": "杉味豆花",
                        "businesstime": "00:00-01:30, 15:00-00:00",
                        "address": "臺北市大同區民生西路172號",
                        "phone": "0225593555",
                        "price": "50",
                        "website": "https://www.facebook.com/%E6%9D%89%E5%91%B3%E8%B1%86%E8%8A%B1-124928910910212/",
                        "picture": "/src/image/content/taipei/杉味豆花.jpg",
                        "city": "taipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-06T07:24:01.286Z",
                        "updatedAt": "2020-05-06T07:24:01.286Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26675285ec60019a6d753",
                        "name": "Purebread Bakery",
                        "businesstime": "10:00-21:00",
                        "address": "台北市大安區四維路154巷15號",
                        "phone": "0222191335",
                        "price": "180",
                        "website": "https://www.facebook.com/PurebreadBakeryCo/",
                        "picture": "/src/image/content/taipei/Purebread Bakery.jpg",
                        "city": "taipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-06T07:25:41.170Z",
                        "updatedAt": "2020-05-06T07:25:41.170Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb2670d285ec60019a6d754",
                        "name": "白水豆花 台北永康店",
                        "businesstime": "15:00-20:30",
                        "address": "臺北市大安區永康街31巷9號1樓",
                        "phone": "0223926707",
                        "price": "65",
                        "website": "https://www.facebook.com/baishuidouhua.yk/",
                        "picture": "/src/image/content/taipei/白水豆花 台北永康店.jpg",
                        "city": "taipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-06T07:28:13.562Z",
                        "updatedAt": "2020-05-06T07:28:13.562Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26786285ec60019a6d755",
                        "name": "台一牛奶大王",
                        "businesstime": "10:00-00:00",
                        "address": "臺北市大安區新生南路三段82號",
                        "phone": "0223634341",
                        "price": "80",
                        "website": "https://www.facebook.com/pages/%E8%87%BA%E4%B8%80%E7%89%9B%E5%A5%B6%E5%A4%A7%E7%8E%8B/162187620495329",
                        "picture": "/src/image/content/taipei/台一牛奶大王.jpg",
                        "city": "taipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-06T07:30:14.105Z",
                        "updatedAt": "2020-05-06T07:30:14.105Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb2681c285ec60019a6d756",
                        "name": "一級味館 排骨",
                        "businesstime": "12:00-21:00",
                        "address": "台北市萬華區成都路27巷11號B1",
                        "phone": "0223719739",
                        "price": "120",
                        "website": "https://www.facebook.com/ichibanintaipei/",
                        "picture": "/src/image/content/taipei/一級味館 排骨.jpg",
                        "city": "taipei",
                        "kind": "dinner",
                        "createdAt": "2020-05-06T07:32:44.625Z",
                        "updatedAt": "2020-05-06T07:35:29.473Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26882285ec60019a6d757",
                        "name": "咪咪紫菜捲 KOREA GIMBAP",
                        "businesstime": "13:00-21:00",
                        "address": "臺北市萬華區漢中街35之6號",
                        "phone": "0223831838",
                        "price": "130",
                        "website": "https://www.facebook.com/pages/%E5%92%AA%E5%92%AA%E7%B4%AB%E8%8F%9C%E6%8D%B2/295333427540513",
                        "picture": "/src/image/content/taipei/咪咪紫菜捲 KOREA GIMBAP.jpg",
                        "city": "taipei",
                        "kind": "korean",
                        "createdAt": "2020-05-06T07:34:26.062Z",
                        "updatedAt": "2020-05-06T07:34:26.062Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb2690d285ec60019a6d758",
                        "name": "吃吐吧",
                        "businesstime": "07:00-15:00",
                        "address": "臺北市中正區羅斯福路四段78巷1弄1號",
                        "phone": "0906747357",
                        "price": "100",
                        "website": "https://www.facebook.com/EatToastBar/",
                        "picture": "/src/image/content/taipei/吃吐吧.jpg",
                        "city": "taipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-06T07:36:45.274Z",
                        "updatedAt": "2020-05-06T07:36:45.274Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26962285ec60019a6d759",
                        "name": "華星冰室 台北",
                        "businesstime": "11:00-21:00",
                        "address": "臺北市大安區忠孝東路四段170巷17弄5號1樓",
                        "phone": "0227113828",
                        "price": "500",
                        "website": "https://www.facebook.com/ChrislyCafeTaipei/",
                        "picture": "/src/image/content/taipei/華星冰室 台北.jpg",
                        "city": "taipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-06T07:38:10.250Z",
                        "updatedAt": "2020-05-06T07:39:07.664Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb269dc285ec60019a6d75a",
                        "name": "松果院子 Restaurant Pinecone",
                        "businesstime": "11:00-21:00",
                        "address": "臺北市松山區富錦街449號",
                        "phone": "0227650386",
                        "price": "480",
                        "website": "https://www.facebook.com/pinecone.tw/",
                        "picture": "/src/image/content/taipei/松果院子 Restaurant Pinecone.jpg",
                        "city": "taipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-06T07:40:12.115Z",
                        "updatedAt": "2020-05-06T07:40:12.115Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26a3b285ec60019a6d75b",
                        "name": "呷火鍋",
                        "businesstime": "11:00-22:00",
                        "address": "臺北市北投區石牌路二段97巷8號",
                        "phone": "0228286068",
                        "price": "300",
                        "website": "https://www.facebook.com/shareeatinghotpot/",
                        "picture": "/src/image/content/taipei/呷火鍋.jpg",
                        "city": "taipei",
                        "kind": "dinner",
                        "createdAt": "2020-05-06T07:41:47.949Z",
                        "updatedAt": "2020-05-06T07:41:47.949Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26ac5285ec60019a6d75c",
                        "name": "台灣人ㄟ甜甜圈",
                        "businesstime": "11:00-19:30",
                        "address": "臺北市大同區華陰街183號",
                        "phone": "0958900138",
                        "price": "25",
                        "website": "https://www.facebook.com/%E5%8F%B0%E7%81%A3%E4%BA%BA%E3%84%9F%E7%94%9C%E7%94%9C%E5%9C%88-Taiwanese-donuts-325793904619/",
                        "picture": "/src/image/content/taipei/台灣人ㄟ甜甜圈.jpg",
                        "city": "taipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-06T07:44:05.750Z",
                        "updatedAt": "2020-05-06T07:44:05.750Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26b1e285ec60019a6d75d",
                        "name": "楊記花生玉米冰",
                        "businesstime": "11:00-22:00",
                        "address": "臺北市萬華區漢口街二段38號",
                        "phone": "0223752223",
                        "price": "75",
                        "website": "https://www.facebook.com/pages/%E6%A5%8A%E8%A8%98%E8%8A%B1%E7%94%9F%E7%8E%89%E7%B1%B3%E5%86%B0/188875841142258",
                        "picture": "/src/image/content/taipei/楊記花生玉米冰.jpg",
                        "city": "taipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-06T07:45:34.272Z",
                        "updatedAt": "2020-05-06T07:45:34.272Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26be8285ec60019a6d75e",
                        "name": "紅盤子港式茶餐廳",
                        "businesstime": "11:30-14:30, 17:30-20:30",
                        "address": "台北市羅斯福路三段244巷9弄中正區臺北市臺灣 100樓",
                        "phone": "0233652588",
                        "price": "300",
                        "website": "https://www.facebook.com/redplatestw/",
                        "picture": "/src/image/content/taipei/紅盤子港式茶餐廳.jpg",
                        "city": "taipei",
                        "kind": "HongKong",
                        "createdAt": "2020-05-06T07:48:56.100Z",
                        "updatedAt": "2020-05-06T07:48:56.100Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26c3b285ec60019a6d75f",
                        "name": "穿越九千公里交給你",
                        "businesstime": "13:30-23:00",
                        "address": "台北市松山區民權東路三段160巷19弄16號",
                        "phone": "0972299822",
                        "price": "300",
                        "website": "https://www.facebook.com/travelled9000km/",
                        "picture": "/src/image/content/taipei/穿越九千公里交給你.jpg",
                        "city": "taipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-06T07:50:19.685Z",
                        "updatedAt": "2020-05-06T07:50:19.685Z",
                        "__v": 0
                    },
                    {
                        "_id": "5eb26c8a285ec60019a6d760",
                        "name": "茗香園冰室 大安店",
                        "businesstime": "12:00-21:30",
                        "address": "臺北市大安區大安路一段12號",
                        "phone": "0227733303",
                        "price": "250",
                        "website": "https://www.facebook.com/MingShiangYuanDaAn/",
                        "picture": "/src/image/content/taipei/茗香園冰室 大安店.jpg",
                        "city": "taipei",
                        "kind": "HongKong",
                        "createdAt": "2020-05-06T07:51:38.863Z",
                        "updatedAt": "2020-05-06T07:51:38.863Z",
                        "__v": 0
                    }
                ]
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                const cors = 'https://cors-anywhere.herokuapp.com/' // use cors-anywhere to fetch api data
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/city/taipei' // origin api url

                /** fetch api url by cors-anywhere */
                axios.get(`${cors}${url}`)
                    .then((res) =>{
                        this.tableData = res.data
                        console.log(res.data)
                        if(this.tableData.length == 0){
                            this.tableData = this.data
                        }
                        this.loading=false
                    })
                    .catch((err) =>{
                        console.error(err)
                        this.tableData = this.data
                        this.loading=false
                    })
            }
        }
    })
}