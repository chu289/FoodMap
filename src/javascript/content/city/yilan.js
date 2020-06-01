window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebff51ae9701e00224e65d0",
                        "name": "來來牛排館",
                        "businesstime": "11:00-22:00",
                        "address": "宜蘭縣五結鄉親河路二段157號",
                        "phone": "039502534",
                        "price": "320",
                        "website": "https://www.facebook.com/oslailai/",
                        "picture": "/src/image/content/yilan/來來牛排館.jpg",
                        "city": "yilan",
                        "kind": "dinner",
                        "createdAt": "2020-05-16T14:13:46.871Z",
                        "updatedAt": "2020-05-16T14:13:46.871Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff562e9701e00224e65d1",
                        "name": "熊來了",
                        "businesstime": "11:00-18:00",
                        "address": "宜蘭縣宜蘭市民權路二段178號",
                        "phone": "039362178",
                        "price": "100",
                        "website": "https://www.facebook.com/wemacafe/",
                        "picture": "/src/image/content/yilan/熊來了.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:14:58.447Z",
                        "updatedAt": "2020-05-16T14:14:58.447Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff5c0e9701e00224e65d2",
                        "name": "CUISINE LOHERB日光私廚",
                        "businesstime": "8:00-20:00",
                        "address": "宜蘭縣冬山鄉寶福路372號",
                        "phone": "039595685",
                        "price": "500",
                        "website": "https://www.facebook.com/LOHERB.TW/",
                        "picture": "/src/image/content/yilan/CUISINE LOHERB日光私廚.jpg",
                        "city": "yilan",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T14:16:32.833Z",
                        "updatedAt": "2020-05-16T14:16:32.833Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff674e9701e00224e65d3",
                        "name": "La pensée Café - 凡思咖啡",
                        "businesstime": "10:00-19:00",
                        "address": "宜蘭縣羅東鎮四育路10號",
                        "phone": "039510980",
                        "price": "150",
                        "website": "https://www.facebook.com/LapenseeCafe/",
                        "picture": "/src/image/content/yilan/La pensée Café - 凡思咖啡.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:19:32.267Z",
                        "updatedAt": "2020-05-16T14:19:32.267Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff6c3e9701e00224e65d4",
                        "name": "飛魚食染",
                        "businesstime": "11:30-20:00",
                        "address": "宜蘭縣冬山鄉冬山路186號1樓",
                        "phone": "039595020",
                        "price": "50",
                        "website": "https://www.facebook.com/cuil.tw/",
                        "picture": "/src/image/content/yilan/飛魚食染.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:20:51.675Z",
                        "updatedAt": "2020-05-16T14:20:51.675Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff70ae9701e00224e65d5",
                        "name": "散步Cafe Sanpo",
                        "businesstime": "13:00-19:00",
                        "address": "宜蘭縣宜蘭市和睦路2之20號",
                        "phone": "039329828",
                        "price": "80",
                        "website": "https://www.facebook.com/sanpo2015/",
                        "picture": "/src/image/content/yilan/散步Cafe Sanpo.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:22:02.891Z",
                        "updatedAt": "2020-05-16T14:22:02.891Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff748e9701e00224e65d6",
                        "name": "定邦咖啡",
                        "businesstime": "11:30-19:30",
                        "address": "宜蘭縣礁溪鄉白雲二路173號",
                        "phone": "0966929610",
                        "price": "450",
                        "website": "https://www.facebook.com/%E5%AE%9A%E9%82%A6%E5%92%96%E5%95%A1-1466563960313847/",
                        "picture": "/src/image/content/yilan/定邦咖啡.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:23:04.151Z",
                        "updatedAt": "2020-05-16T14:23:04.151Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff790e9701e00224e65d7",
                        "name": "初一。食午",
                        "businesstime": "7:00-15:00",
                        "address": "宜蘭縣礁溪鄉礁溪路四段22號",
                        "phone": "039881513",
                        "price": "150",
                        "website": "https://www.facebook.com/firstdayfood/",
                        "picture": "/src/image/content/yilan/初一。食午.jpg",
                        "city": "yilan",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T14:24:16.977Z",
                        "updatedAt": "2020-05-16T14:24:16.977Z",
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
                        "_id": "5ebff84be9701e00224e65d9",
                        "name": "小揭商行",
                        "businesstime": "10:00-18:00",
                        "address": "宜蘭縣羅東鎮公正街17號",
                        "phone": "039556938",
                        "price": "100",
                        "website": "https://www.facebook.com/CoffeeStreetCo24/",
                        "picture": "/src/image/content/yilan/小揭商行.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:27:23.827Z",
                        "updatedAt": "2020-05-16T14:27:23.827Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebff88de9701e00224e65da",
                        "name": "黑宅 BLACK HOUSE",
                        "businesstime": "10:00-18:00",
                        "address": "宜蘭縣頭城鎮三和路616巷235弄47號",
                        "phone": "039887966",
                        "price": "450",
                        "website": "https://www.facebook.com/blackhousecafe/",
                        "picture": "/src/image/content/yilan/黑宅 BLACK HOUSE.jpg",
                        "city": "yilan",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T14:28:29.260Z",
                        "updatedAt": "2020-05-16T14:28:29.260Z",
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
                        "_id": "5ebff9a3e9701e00224e65dd",
                        "name": "貓的生活提案 Cats' Day",
                        "businesstime": "10:30-18:30",
                        "address": "宜蘭縣羅東鎮公正街32號",
                        "phone": "039551766",
                        "price": "200",
                        "website": "https://www.facebook.com/catsdayloudong/",
                        "picture": "/src/image/content/yilan/貓的生活提案 Cats' Day.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:33:07.333Z",
                        "updatedAt": "2020-05-16T14:33:07.333Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebffa0de9701e00224e65de",
                        "name": "林北烤好(羅東店)",
                        "businesstime": "00:00-1:30 17:30-00:00",
                        "address": "宜蘭縣羅東鎮光榮路165號",
                        "phone": "039551131",
                        "price": "250",
                        "website": "https://www.facebook.com/lenba03/",
                        "picture": "/src/image/content/yilan/林北烤好(羅東店).jpg",
                        "city": "yilan",
                        "kind": "japanese",
                        "createdAt": "2020-05-16T14:34:53.054Z",
                        "updatedAt": "2020-05-16T14:34:53.054Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebffa58e9701e00224e65df",
                        "name": "Long face 臭臉法式甜點工作室",
                        "businesstime": "11:00-18:00",
                        "address": "宜蘭縣宜蘭市泰山路18號8號",
                        "phone": "039322208",
                        "price": "350",
                        "website": "https://www.facebook.com/longface818/",
                        "picture": "/src/image/content/yilan/Long face 臭臉法式甜點工作室.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:36:08.506Z",
                        "updatedAt": "2020-05-16T14:36:08.506Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebffab8e9701e00224e65e0",
                        "name": "玩的瘋Wonderful親子廚房",
                        "businesstime": "00:00-4:50 9:00-16:50",
                        "address": "宜蘭縣員山鄉金泰路62號",
                        "phone": "039229268",
                        "price": "150",
                        "website": "https://www.facebook.com/wonderfulYilan/",
                        "picture": "/src/image/content/yilan/玩的瘋Wonderful親子廚房.jpg",
                        "city": "yilan",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T14:37:44.984Z",
                        "updatedAt": "2020-05-16T14:37:44.984Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebffb0be9701e00224e65e1",
                        "name": "Ju Ju Land Cafe 篤行二村日式厚燒鬆餅",
                        "businesstime": "11:00-19:00",
                        "address": "宜蘭縣宜蘭市復興路一段81號",
                        "phone": "039353772",
                        "price": "200",
                        "website": "https://www.facebook.com/jujuland2018/",
                        "picture": "/src/image/content/yilan/Ju Ju Land Cafe 篤行二村日式厚燒鬆餅.jpg",
                        "city": "yilan",
                        "kind": "dessert",
                        "createdAt": "2020-05-16T14:39:07.236Z",
                        "updatedAt": "2020-05-16T14:39:07.236Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebffb5be9701e00224e65e2",
                        "name": "鼎楓火鍋",
                        "businesstime": "11:30-13:30 17:30-20:30",
                        "address": "宜蘭縣羅東鎮興東路192號",
                        "phone": "0955475350",
                        "price": "300",
                        "website": "https://www.facebook.com/dingfeng0609/",
                        "picture": "/src/image/content/yilan/鼎楓火鍋.jpg",
                        "city": "yilan",
                        "kind": "dinner",
                        "createdAt": "2020-05-16T14:40:27.317Z",
                        "updatedAt": "2020-05-16T14:40:27.317Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec29f60e9701e00224e6665",
                        "name": "宜蘭湯蒸火鍋店",
                        "businesstime": "11:00-13:30 17:00-21:00",
                        "address": "宜蘭縣五結鄉親河路一段140號",
                        "phone": "039508657",
                        "price": "310",
                        "website": "https://www.facebook.com/os039508657/",
                        "picture": "/src/image/content/yilan/宜蘭湯蒸火鍋店.jpg",
                        "city": "yilan",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T14:44:48.158Z",
                        "updatedAt": "2020-05-18T14:44:48.158Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/city/yilan' // origin api url

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