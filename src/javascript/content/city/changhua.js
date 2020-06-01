window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebe5511e9701e00224e6593",
                        "name": "菊野家霜淇淋專賣店",
                        "businesstime": "12:00-20:30",
                        "address": "彰化縣員林市三民街73號",
                        "phone": "048358911",
                        "price": "400",
                        "website": "https://www.facebook.com/juyejia/",
                        "picture": "/src/image/content/changhua/菊野家霜淇淋專賣店.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T08:38:41.222Z",
                        "updatedAt": "2020-05-15T15:43:07.487Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebeba4fe9701e00224e6594",
                        "name": "右舍咖啡",
                        "businesstime": "8:00-18:00",
                        "address": "彰化縣員林鎮萬年路三段67號",
                        "phone": "048364864",
                        "price": "115",
                        "website": "https://www.facebook.com/taiwanvicinocafe/",
                        "picture": "/src/image/content/changhua/右舍咖啡.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T15:50:39.537Z",
                        "updatedAt": "2020-05-15T15:50:39.537Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebaa5e9701e00224e6595",
                        "name": "AGA Burger",
                        "businesstime": "17:00-20:00",
                        "address": "彰化縣彰化市成功路239號",
                        "phone": "047282648",
                        "price": "170",
                        "website": "https://www.facebook.com/agaburgertw/",
                        "picture": "/src/image/content/changhua/AGA Burger.jpg",
                        "city": "changhua",
                        "kind": "american",
                        "createdAt": "2020-05-15T15:52:05.875Z",
                        "updatedAt": "2020-05-15T15:52:05.875Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebaece9701e00224e6596",
                        "name": "豪珈琲",
                        "businesstime": "12:00-00:00",
                        "address": "彰化縣社頭鄉社斗路一段355號",
                        "phone": "0919058415",
                        "price": "200",
                        "website": "https://www.facebook.com/haocoffeestudio/",
                        "picture": "/src/image/content/changhua/豪珈琲.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T15:53:16.348Z",
                        "updatedAt": "2020-05-15T15:53:16.348Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebb35e9701e00224e6597",
                        "name": "單車旅人Biking 16",
                        "businesstime": "9:00-18:00",
                        "address": "彰化縣彰化市城中街16號",
                        "phone": "047221689",
                        "price": "250",
                        "website": "https://www.facebook.com/biking16Taiwan/",
                        "picture": "/src/image/content/changhua/單車旅人Biking 16.jpg",
                        "city": "changhua",
                        "kind": "brunch",
                        "createdAt": "2020-05-15T15:54:29.380Z",
                        "updatedAt": "2020-05-15T15:54:29.380Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebbe0e9701e00224e6598",
                        "name": "法蕾熊手工經典舒芙蕾",
                        "businesstime": "11:00-21:00",
                        "address": "彰化縣員林鎮忠孝街162號",
                        "phone": "048316565",
                        "price": "250",
                        "website": "https://www.facebook.com/falesouffle/",
                        "picture": "/src/image/content/changhua/法蕾熊手工經典舒芙蕾.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T15:57:20.014Z",
                        "updatedAt": "2020-05-15T15:57:20.014Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebc2de9701e00224e6599",
                        "name": "Folks",
                        "businesstime": "9:30-16:30",
                        "address": "彰化縣彰化市彰水路129號",
                        "phone": "047523938",
                        "price": "300",
                        "website": "https://www.facebook.com/Folks129/",
                        "picture": "/src/image/content/changhua/Folks.jpg",
                        "city": "changhua",
                        "kind": "brunch",
                        "createdAt": "2020-05-15T15:58:37.283Z",
                        "updatedAt": "2020-05-15T15:58:37.283Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebc73e9701e00224e659a",
                        "name": "咖啡烟",
                        "businesstime": "13:30-23:00",
                        "address": "彰化縣彰化市永樂街199號",
                        "phone": "047224994",
                        "price": "160",
                        "website": "https://www.facebook.com/yan.cafe1222/",
                        "picture": "/src/image/content/changhua/咖啡烟.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T15:59:47.397Z",
                        "updatedAt": "2020-05-15T15:59:47.397Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebcdce9701e00224e659b",
                        "name": "不時不食清鍋物",
                        "businesstime": "11:00-15:00 17:00-23:00",
                        "address": "彰化縣彰化市金馬路三段441號",
                        "phone": "047516699",
                        "price": "400",
                        "website": "https://www.facebook.com/%E4%B8%8D%E6%99%82%E4%B8%8D%E9%A3%9F%E6%B8%85%E9%8D%8B%E7%89%A9-103330213457103/",
                        "picture": "/src/image/content/changhua/不時不食清鍋物.jpg",
                        "city": "changhua",
                        "kind": "dinner",
                        "createdAt": "2020-05-15T16:01:32.759Z",
                        "updatedAt": "2020-05-15T16:01:32.759Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebd23e9701e00224e659c",
                        "name": "Stable Fly 穩定飛行",
                        "businesstime": "11:00-22:00",
                        "address": "彰化縣彰化市永樂街7號",
                        "phone": "047220663",
                        "price": "200",
                        "website": "https://www.facebook.com/stablefly/",
                        "picture": "/src/image/content/changhua/Stable Fly 穩定飛行.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T16:02:43.851Z",
                        "updatedAt": "2020-05-15T16:02:43.851Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebd79e9701e00224e659d",
                        "name": "稻香緣黃金蛋糕",
                        "businesstime": "10:00-19:00",
                        "address": "彰化縣鹿港鎮復興路487號",
                        "phone": "047766801",
                        "price": "150",
                        "website": "https://www.facebook.com/%E7%A8%BB%E9%A6%99%E7%B7%A3%E9%BB%83%E9%87%91%E8%9B%8B%E7%B3%95-%E5%BD%B0%E5%8C%96%E9%B9%BF%E6%B8%AF%E5%90%8D%E7%94%A2%E4%BC%B4%E6%89%8B%E7%A6%AE-205317986175022/",
                        "picture": "/src/image/content/changhua/稻香緣黃金蛋糕.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T16:04:09.109Z",
                        "updatedAt": "2020-05-15T16:04:09.109Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebe43e9701e00224e659e",
                        "name": "茉莉莉",
                        "businesstime": "8:00-17:00",
                        "address": "彰化縣彰化市和平路159號",
                        "phone": "047234356",
                        "price": "300",
                        "website": "https://www.facebook.com/More.Little.Life/",
                        "picture": "/src/image/content/changhua/茉莉莉.jpg",
                        "city": "changhua",
                        "kind": "brunch",
                        "createdAt": "2020-05-15T16:07:31.678Z",
                        "updatedAt": "2020-05-15T16:07:31.678Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebe8ee9701e00224e659f",
                        "name": "Ace Café",
                        "businesstime": "9:30-18:30",
                        "address": "彰化縣彰化市中正路一段152號",
                        "phone": "047287539",
                        "price": "150",
                        "website": "https://www.facebook.com/aceacecafe/",
                        "picture": "/src/image/content/changhua/Ace Café.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T16:08:46.951Z",
                        "updatedAt": "2020-05-15T16:08:46.951Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebebf38e9701e00224e65a0",
                        "name": "Yolo Café",
                        "businesstime": "10:00-17:30",
                        "address": "彰化縣彰化市中正路一段430號",
                        "phone": "047222436",
                        "price": "395",
                        "website": "https://www.facebook.com/yolomoment.tw/",
                        "picture": "/src/image/content/changhua/Yolo Café.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T16:11:36.953Z",
                        "updatedAt": "2020-05-15T16:13:05.300Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebec02ae9701e00224e65a1",
                        "name": "DeerHer甜點廚坊",
                        "businesstime": "13:00-19:00",
                        "address": "彰化縣和美鎮線東路二段712號",
                        "phone": "047330289",
                        "price": "272",
                        "website": "https://www.facebook.com/deerherbakery/",
                        "picture": "/src/image/content/changhua/DeerHer甜點廚坊.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T16:15:38.909Z",
                        "updatedAt": "2020-05-15T16:15:38.909Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebec0c5e9701e00224e65a2",
                        "name": "摩露啡Moluficafe",
                        "businesstime": "9:00-18:00",
                        "address": "彰化縣員林市成功東路317巷22號",
                        "phone": "048380520",
                        "price": "150",
                        "website": "https://www.facebook.com/moluficafe/",
                        "picture": "/src/image/content/changhua/摩露啡Moluficafe.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T16:18:13.223Z",
                        "updatedAt": "2020-05-15T16:18:13.223Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebec103e9701e00224e65a3",
                        "name": "日佐甜室",
                        "businesstime": "12:00-18:30",
                        "address": "彰化縣員林市中山路二段131巷28號",
                        "phone": "048372312",
                        "price": "220",
                        "website": "https://www.facebook.com/subisubi.co/",
                        "picture": "/src/image/content/changhua/日佐甜室.jpg",
                        "city": "changhua",
                        "kind": "dessert",
                        "createdAt": "2020-05-15T16:19:15.911Z",
                        "updatedAt": "2020-05-15T16:19:15.911Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebec148e9701e00224e65a4",
                        "name": "五目坊茉莉館 茉莉公主的花園城堡",
                        "businesstime": "11:00-15:30 17:00-20:30",
                        "address": "彰化縣花壇鄉花壇街428號2樓",
                        "phone": "047877959",
                        "price": "300",
                        "website": "https://www.facebook.com/MNPMRK/",
                        "picture": "/src/image/content/changhua/五目坊茉莉館 茉莉公主的花園城堡.jpg",
                        "city": "changhua",
                        "kind": "japanese",
                        "createdAt": "2020-05-15T16:20:24.208Z",
                        "updatedAt": "2020-05-15T16:20:24.208Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebec198e9701e00224e65a5",
                        "name": "茶自點彰化延平店",
                        "businesstime": "11:30-22:00",
                        "address": "彰化縣彰化市延平路575號",
                        "phone": "047110568",
                        "price": "250",
                        "website": "https://www.facebook.com/%E8%8C%B6%E8%87%AA%E9%BB%9E%E5%BD%B0%E5%8C%96%E5%BB%B6%E5%B9%B3%E5%BA%97-1518846835100647/",
                        "picture": "/src/image/content/changhua/茶自點彰化延平店.jpg",
                        "city": "changhua",
                        "kind": "dinner",
                        "createdAt": "2020-05-15T16:21:44.287Z",
                        "updatedAt": "2020-05-15T16:21:44.287Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebec1f9e9701e00224e65a6",
                        "name": "隱鍋 員林大道旗艦店",
                        "businesstime": "00:00-00:30 11:30-00:00",
                        "address": "彰化縣員林市員林大道一段52號",
                        "phone": "048383052",
                        "price": "350",
                        "website": "https://www.facebook.com/Yinhotpot02/",
                        "picture": "/src/image/content/changhua/隱鍋 員林大道旗艦店.jpg",
                        "city": "changhua",
                        "kind": "dinner",
                        "createdAt": "2020-05-15T16:23:21.557Z",
                        "updatedAt": "2020-05-15T16:23:21.557Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/city/changhua' // origin api url

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