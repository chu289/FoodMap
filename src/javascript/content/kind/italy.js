window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebde40dd328590019ae4efb",
                        "name": "AShare Cafe",
                        "businesstime": "9:00-19:00",
                        "address": "臺中市西區民生北路20號",
                        "phone": "0423017380",
                        "price": "100",
                        "website": "https://www.facebook.com/AShare.JJ/",
                        "picture": "/src/image/content/taichung/AShare Cafe.jpg",
                        "city": "taichung",
                        "kind": "italy",
                        "createdAt": "2020-05-15T00:36:29.648Z",
                        "updatedAt": "2020-05-15T08:25:49.440Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebf8102e9701e00224e65af",
                        "name": "城東合作社咖啡 East Town Co. Cafe",
                        "businesstime": "00:00-01:00 09:00-15:00 20:00-00",
                        "address": "臺南市東區東門路一段211巷13號",
                        "phone": "062086033",
                        "price": "200",
                        "website": "https://www.facebook.com/esattownco/",
                        "picture": "/src/image/content/tainan/城東合作社咖啡 East Town Co. Cafe.jpg",
                        "city": "tainan",
                        "kind": "italy",
                        "createdAt": "2020-05-16T05:58:26.329Z",
                        "updatedAt": "2020-05-16T05:58:26.329Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebf830ce9701e00224e65b6",
                        "name": "彌燉道9號",
                        "businesstime": "10:30-21:30",
                        "address": "臺南市東區崇善路14號",
                        "phone": "062675561",
                        "price": "300",
                        "website": "https://www.facebook.com/MiDune9/",
                        "picture": "/src/image/content/tainan/彌燉道9號.jpg",
                        "city": "tainan",
                        "kind": "italy",
                        "createdAt": "2020-05-16T06:07:08.796Z",
                        "updatedAt": "2020-05-16T06:07:08.796Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebfb966e9701e00224e65c8",
                        "name": "Double Soul coffee & bistro",
                        "businesstime": "11:30-14:30 17:30-00:00",
                        "address": "高雄市左營區文育路1號",
                        "phone": "073502927",
                        "price": "500",
                        "website": "https://www.facebook.com/Double-Soul-coffeebistro-959335244079473/",
                        "picture": "/src/image/content/kaohsiung/Double Soul coffee & bistro.jpg",
                        "city": "kaohsiung",
                        "kind": "italy",
                        "createdAt": "2020-05-16T09:59:02.558Z",
                        "updatedAt": "2020-05-16T09:59:02.558Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebfbae4e9701e00224e65cc",
                        "name": "那一天 義法餐館",
                        "businesstime": "11:30-14:30 17:30-20:30",
                        "address": "高雄市鼓山區昌盛路371號",
                        "phone": "075528170",
                        "price": "350",
                        "website": "https://www.facebook.com/HeJiGon/",
                        "picture": "/src/image/content/kaohsiung/那一天 義法餐館.jpg",
                        "city": "kaohsiung",
                        "kind": "italy",
                        "createdAt": "2020-05-16T10:05:24.445Z",
                        "updatedAt": "2020-05-16T10:05:24.445Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff7f0e9701e00224e65d8",
                        "name": "樹樔cafe",
                        "businesstime": "11:00-19:00",
                        "address": "宜蘭縣冬山鄉八甲路176巷36號",
                        "phone": "039595813",
                        "price": "300",
                        "website": "https://www.facebook.com/%E6%A8%B9%E6%A8%94cafe-853364211416199/",
                        "picture": "/src/image/content/yilan/樹樔cafe.jpg",
                        "city": "yilan",
                        "kind": "italy",
                        "createdAt": "2020-05-16T14:25:52.474Z",
                        "updatedAt": "2020-05-16T14:25:52.474Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff8ebe9701e00224e65db",
                        "name": "SALE & PEPE 胡椒 鹽 牛排",
                        "businesstime": "11:30-14:30 17:30-20:30",
                        "address": "宜蘭縣宜蘭市和睦路1之41號",
                        "phone": "039353958",
                        "price": "400",
                        "website": "https://www.facebook.com/SaleePepeYiLan/",
                        "picture": "/src/image/content/yilan/SALE & PEPE 胡椒 鹽 牛排.jpg",
                        "city": "yilan",
                        "kind": "italy",
                        "createdAt": "2020-05-16T14:30:03.089Z",
                        "updatedAt": "2020-05-16T14:30:03.089Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff946e9701e00224e65dc",
                        "name": "貝加莫廚房",
                        "businesstime": "11:00-21:00",
                        "address": "宜蘭縣頭城鎮青雲路三段382號",
                        "phone": "039777919",
                        "price": "500",
                        "website": "https://www.facebook.com/%E9%A0%AD%E5%9F%8E-%E8%B2%9D%E5%8A%A0%E8%8E%AB%E5%BB%9A%E6%88%BFpizza-760107480832327/",
                        "picture": "/src/image/content/yilan/貝加莫廚房.jpg",
                        "city": "yilan",
                        "kind": "italy",
                        "createdAt": "2020-05-16T14:31:34.463Z",
                        "updatedAt": "2020-05-16T14:31:34.463Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d666e9701e00224e65f0",
                        "name": "獵人廚房Hunter's kitchen",
                        "businesstime": "12:00-20:30",
                        "address": "花蓮縣花蓮市東興二街13巷3號",
                        "phone": "0916282350",
                        "price": "300",
                        "website": "https://www.facebook.com/hunterswildfoods/",
                        "picture": "/src/image/content/hualien/獵人廚房Hunter's kitchen.jpg",
                        "city": "hualien",
                        "kind": "italy",
                        "createdAt": "2020-05-17T06:15:02.495Z",
                        "updatedAt": "2020-05-17T06:15:02.495Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0f802e9701e00224e6621",
                        "name": "愛披薩",
                        "businesstime": "11:30-21:00",
                        "address": "臺北市士林區前港街30號",
                        "phone": "0228827338",
                        "price": "220",
                        "website": "https://www.facebook.com/ipizza0228861998/",
                        "picture": "/src/image/content/taipei/愛披薩.jpg",
                        "city": "taipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T08:38:26.103Z",
                        "updatedAt": "2020-05-17T09:28:01.348Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec104a5e9701e00224e6630",
                        "name": "青沐初食",
                        "businesstime": "10:00-21:00",
                        "address": "臺北市中山區松江路97巷6號",
                        "phone": "0225175503",
                        "price": "350",
                        "website": "https://www.facebook.com/%E9%9D%92%E6%B2%90%E5%88%9D%E9%A3%9F-116158869067985/",
                        "picture": "/src/image/content/taipei/青沐初食.jpg",
                        "city": "taipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:32:21.015Z",
                        "updatedAt": "2020-05-17T09:32:21.015Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10500e9701e00224e6631",
                        "name": "樂野食",
                        "businesstime": "9:30-21:00",
                        "address": "臺北市大安區忠孝東路三段217巷2弄16號",
                        "phone": "0227523180",
                        "price": "500",
                        "website": "https://www.facebook.com/le.yeshi.cafe/",
                        "picture": "/src/image/content/taipei/樂野食.jpg",
                        "city": "taipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:33:52.865Z",
                        "updatedAt": "2020-05-17T09:33:52.865Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10566e9701e00224e6632",
                        "name": "Double Soul coffee & bistro",
                        "businesstime": "11:30-14:30 17:30-00:00",
                        "address": "高雄市左營區文育路1號",
                        "phone": "073502927",
                        "price": "500",
                        "website": "https://www.facebook.com/Double-Soul-coffeebistro-959335244079473/",
                        "picture": "/src/image/content/kaohsiung/Double Soul coffee & bistro.jpg",
                        "city": "kaohsiung",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:35:34.560Z",
                        "updatedAt": "2020-05-17T09:35:34.560Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec105dbe9701e00224e6633",
                        "name": "靜巷Café",
                        "businesstime": "11:00-21:00",
                        "address": "高雄市苓雅區中興街117號",
                        "phone": "073383611",
                        "price": "250",
                        "website": "https://www.facebook.com/QAcafe.tw/",
                        "picture": "/src/image/content/kaohsiung/靜巷Café.jpg",
                        "city": "kaohsiung",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:37:31.284Z",
                        "updatedAt": "2020-05-17T09:37:31.284Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10625e9701e00224e6634",
                        "name": "Cura Pizza",
                        "businesstime": "17:30-21:00",
                        "address": "臺北市萬華區東園街68之9號",
                        "phone": "0223395877",
                        "price": "500",
                        "website": "https://www.facebook.com/cura.pizza.cura.pizza/",
                        "picture": "/src/image/content/taipei/Cura Pizza.jpg",
                        "city": "taipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:38:45.662Z",
                        "updatedAt": "2020-05-17T09:38:45.662Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10682e9701e00224e6635",
                        "name": "伊凡的花園",
                        "businesstime": "11:30-21:00",
                        "address": "高雄市鼓山區瑞豐街87號",
                        "phone": "0982708572",
                        "price": "300",
                        "website": "https://www.facebook.com/egmeal/",
                        "picture": "/src/image/content/kaohsiung/伊凡的花園.jpg",
                        "city": "kaohsiung",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:40:18.520Z",
                        "updatedAt": "2020-05-17T09:40:18.520Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec106f0e9701e00224e6636",
                        "name": "R星咖啡",
                        "businesstime": "10:00-22:00",
                        "address": "臺中市西區忠明南路101號",
                        "phone": "0423268385",
                        "price": "300",
                        "website": "https://www.facebook.com/robotstation2/",
                        "picture": "/src/image/content/taichung/R星咖啡.jpg",
                        "city": "taichung",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:42:08.881Z",
                        "updatedAt": "2020-05-17T09:42:08.881Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec1075ce9701e00224e6637",
                        "name": "彼克蕾友善咖啡館",
                        "businesstime": "10:30-21:30",
                        "address": "臺北市大安區新生南路三段76巷5號",
                        "phone": "0233653155",
                        "price": "400",
                        "website": "https://www.facebook.com/pigletcafe88/",
                        "picture": "/src/image/content/taipei/彼克蕾友善咖啡館.jpg",
                        "city": "taipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:43:56.196Z",
                        "updatedAt": "2020-05-17T09:43:56.196Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec107a9e9701e00224e6638",
                        "name": "R2義麵小棧",
                        "businesstime": "11:00-21:30",
                        "address": "新北市蘆洲區中正路166號",
                        "phone": "0282866633",
                        "price": "150",
                        "website": "https://www.facebook.com/R2pastaLuchou/",
                        "picture": "/src/image/content/newtaipei/R2義麵小棧.jpg",
                        "city": "newtaipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:45:13.236Z",
                        "updatedAt": "2020-05-17T09:45:13.236Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10827e9701e00224e6639",
                        "name": "覺旅咖啡陽光店",
                        "businesstime": "8:00-22:00",
                        "address": "臺北市內湖區陽光街321巷42號",
                        "phone": "0287526606",
                        "price": "200",
                        "website": "https://www.facebook.com/journeykaffe/",
                        "picture": "/src/image/content/taipei/覺旅咖啡陽光店.jpg",
                        "city": "taipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:47:19.273Z",
                        "updatedAt": "2020-05-17T09:47:19.273Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10891e9701e00224e663a",
                        "name": "曜日義式餐酒館",
                        "businesstime": "11:30-00:00",
                        "address": "台北市大安區東豐街53號1樓",
                        "phone": "0227085910",
                        "price": "400",
                        "website": "https://www.facebook.com/yoh.taipei/",
                        "picture": "/src/image/content/taipei/曜日義式餐酒館.jpg",
                        "city": "taipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:49:05.739Z",
                        "updatedAt": "2020-05-17T09:49:05.739Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/italy' // origin api url

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
                        this.loading = false
                    })
            }
        }
    })
}