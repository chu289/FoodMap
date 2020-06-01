window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebada17d328590019ae4ed1",
                        "name": "稻咖哩",
                        "businesstime": "06:00-14:00",
                        "address": "臺北市中正區中華路二段303巷1號",
                        "phone": "0223379399",
                        "price": "100",
                        "website": "https://www.facebook.com/onlytoast98/",
                        "picture": "/src/image/content/taipei/OnlyToast偷吃吐司專賣店.jpg",
                        "city": "taipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-12T17:17:11.915Z",
                        "updatedAt": "2020-05-12T17:17:11.915Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebadaf6d328590019ae4eda",
                        "name": "吃吐吧",
                        "businesstime": "07:00-15:00",
                        "address": "臺北市中正區羅斯福路四段78巷1弄1號",
                        "phone": "0906747357",
                        "price": "100",
                        "website": "https://www.facebook.com/EatToastBar/",
                        "picture": "/src/image/content/taipei/吃吐吧.jpg",
                        "city": "taipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-12T17:20:54.460Z",
                        "updatedAt": "2020-05-12T17:20:54.460Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebadb25d328590019ae4edc",
                        "name": "松果院子 Restaurant Pinecone",
                        "businesstime": "11:00-21:00",
                        "address": "臺北市松山區富錦街449號",
                        "phone": "0227650386",
                        "price": "480",
                        "website": "https://www.facebook.com/pinecone.tw/",
                        "picture": "/src/image/content/taipei/松果院子 Restaurant Pinecone.jpg",
                        "city": "taipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-12T17:21:41.760Z",
                        "updatedAt": "2020-05-12T17:21:41.760Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd44e4d328590019ae4ee3",
                        "name": "小兔子鄉村輕食雜貨鋪",
                        "businesstime": "12:00-18:00",
                        "address": "新北市板橋區中山路2段255巷2號",
                        "phone": "0289533849",
                        "price": "500",
                        "website": "https://www.facebook.com/PetitTuz/",
                        "picture": "/src/image/content/newtaipei/小兔子鄉村輕食雜貨鋪.jpg",
                        "city": "newtaipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-14T13:17:24.545Z",
                        "updatedAt": "2020-05-14T13:17:24.545Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4887d328590019ae4ee8",
                        "name": "樂漢堡美式餐廳LOVSS BURGER",
                        "businesstime": "11:00-21:00",
                        "address": "新北市板橋區公園街34巷20號",
                        "phone": "0229553025",
                        "price": "200",
                        "website": "https://www.facebook.com/lovss3/",
                        "picture": "/src/image/content/newtaipei/樂漢堡美式餐廳LOVSS BURGER.jpg",
                        "city": "newtaipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-14T13:32:55.401Z",
                        "updatedAt": "2020-05-14T13:32:55.401Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4bacd328590019ae4eed",
                        "name": "貓欸Camulet-貓咪餐廳",
                        "businesstime": "11:00-21:00",
                        "address": "新北市板橋區文化路一段270巷3弄6號",
                        "phone": "0282581127",
                        "price": "300",
                        "website": "https://www.facebook.com/Camulet/",
                        "picture": "/src/image/content/newtaipei/貓欸Camulet-貓咪餐廳.jpg",
                        "city": "newtaipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-14T13:46:20.143Z",
                        "updatedAt": "2020-05-14T13:46:20.143Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4c39d328590019ae4eee",
                        "name": "謝謝 DOUMO",
                        "businesstime": "10:00-18:00",
                        "address": "新北市永和區水源街25號",
                        "phone": "0229265505",
                        "price": "250",
                        "website": "https://www.facebook.com/DOUMO.TW/",
                        "picture": "/src/image/content/newtaipei/謝謝 DOUMO.jpg",
                        "city": "newtaipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-14T13:48:41.334Z",
                        "updatedAt": "2020-05-14T13:48:41.334Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebde5d1d328590019ae4eff",
                        "name": "飪室 Renshi",
                        "businesstime": "11:30-15:30 17:00-21:00",
                        "address": "臺中市西區公正路168號",
                        "phone": "0423010857",
                        "price": "270",
                        "website": "https://www.facebook.com/Renshicurry/",
                        "picture": "/src/image/content/taichung/飪室 Renshi.jpg",
                        "city": "taichung",
                        "kind": "brunch",
                        "createdAt": "2020-05-15T00:44:01.241Z",
                        "updatedAt": "2020-05-15T08:27:44.973Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebde67ad328590019ae4f01",
                        "name": "卡啡那 Caffaina Coffee",
                        "businesstime": "9:00-00:00",
                        "address": "台中市西屯區惠中路二段45號",
                        "phone": "0422598025",
                        "price": "200",
                        "website": "https://www.facebook.com/%E5%8D%A1%E5%95%A1%E9%82%A3-Caffaina-Coffee-Gallery-%E6%83%A0%E4%BE%86%E5%BA%97-1727035260871434/",
                        "picture": "/src/image/content/taichung/卡啡那 Caffaina Coffee.jpg",
                        "city": "taichung",
                        "kind": "brunch",
                        "createdAt": "2020-05-15T00:46:50.182Z",
                        "updatedAt": "2020-05-15T08:29:24.335Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebde763d328590019ae4f03",
                        "name": "Golden Brown 布朗主廚 貝果專賣",
                        "businesstime": "9:00-18:00",
                        "address": "臺中市中區成功路206號",
                        "phone": "0422259300",
                        "price": "125",
                        "website": "https://www.facebook.com/goldenbrown206/",
                        "picture": "/src/image/content/taichung/Golden Brown 布朗主廚 貝果專賣.jpg",
                        "city": "taichung",
                        "kind": "brunch",
                        "createdAt": "2020-05-15T00:50:43.013Z",
                        "updatedAt": "2020-05-15T08:30:07.904Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebdea32d328590019ae4f0b",
                        "name": "MT49 芒果樹49號咖啡店",
                        "businesstime": "8:00-22:00",
                        "address": "臺中市北屯區後莊七街49號",
                        "phone": "0424264389",
                        "price": "350",
                        "website": "https://www.facebook.com/MT49cafe/",
                        "picture": "/src/image/content/taichung/MT49 芒果樹49號咖啡店.jpg",
                        "city": "taichung",
                        "kind": "brunch",
                        "createdAt": "2020-05-15T01:02:42.137Z",
                        "updatedAt": "2020-05-15T08:33:08.850Z",
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
                        "_id": "5ebf7c31e9701e00224e65a7",
                        "name": "性格せいかく",
                        "businesstime": "9:00-16:00",
                        "address": "臺南市北區成功路68巷4之5號",
                        "phone": "062233330",
                        "price": "150",
                        "website": "https://www.facebook.com/Singletoast/",
                        "picture": "/src/image/content/tainan/性格せいかく.jpg",
                        "city": "tainan",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T05:37:53.860Z",
                        "updatedAt": "2020-05-16T05:40:28.018Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebf7e95e9701e00224e65ac",
                        "name": "小北家灶咖ZAOKA",
                        "businesstime": "9:00-16:30",
                        "address": "臺南市中西區郡緯街68號",
                        "phone": "0912828019",
                        "price": "200",
                        "website": "https://www.facebook.com/xbhzaoka/",
                        "picture": "/src/image/content/tainan/小北家灶咖ZAOKA.jpg",
                        "city": "tainan",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T05:48:05.374Z",
                        "updatedAt": "2020-05-16T05:53:42.846Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebf822de9701e00224e65b3",
                        "name": "裏葉",
                        "businesstime": "9:30-17:00",
                        "address": "臺南市北區西門路三段45巷42弄10號",
                        "phone": "062217282",
                        "price": "500",
                        "website": "https://www.facebook.com/urahairo/",
                        "picture": "/src/image/content/tainan/裏葉.jpg",
                        "city": "tainan",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T06:03:25.501Z",
                        "updatedAt": "2020-05-16T06:03:25.501Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebf843de9701e00224e65ba",
                        "name": "Rilakkuma Cha-Ya 拉拉熊茶屋(台南店)",
                        "businesstime": "11:00-21:00",
                        "address": "臺南市中西區北門路一段123巷16號",
                        "phone": "062238819",
                        "price": "390",
                        "website": "https://www.facebook.com/rctw2018/",
                        "picture": "/src/image/content/tainan/Rilakkuma Cha-Ya 拉拉熊茶屋(台南店).jpg",
                        "city": "tainan",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T06:12:13.744Z",
                        "updatedAt": "2020-05-16T06:12:13.744Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebfb877e9701e00224e65c6",
                        "name": "Humble beginnings café - Kaohsiung 亨寶咖啡",
                        "businesstime": "00:00-02:00 9:00-00:00",
                        "address": "高雄市鼓山區華榮路1號",
                        "phone": "075229949",
                        "price": "400",
                        "website": "https://www.facebook.com/humblebeginningscafe/",
                        "picture": "/src/image/content/kaohsiung/Humble beginnings café - Kaohsiung 亨寶咖啡.jpg",
                        "city": "kaohsiung",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T09:55:03.147Z",
                        "updatedAt": "2020-05-16T09:57:21.944Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebfbba2e9701e00224e65ce",
                        "name": "小陽台早午餐",
                        "businesstime": "7:30-16:00",
                        "address": "高雄市苓雅區五福一路157號",
                        "phone": "0928477196",
                        "price": "100",
                        "website": "https://www.facebook.com/balcony.tw/",
                        "picture": "/src/image/content/kaohsiung/小陽台早午餐.jpg",
                        "city": "kaohsiung",
                        "kind": "brunch",
                        "createdAt": "2020-05-16T10:08:34.904Z",
                        "updatedAt": "2020-05-16T10:08:34.904Z",
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
                        "_id": "5ec0d25ce9701e00224e65e7",
                        "name": "伊坐咖啡 E-zuo caf'e",
                        "businesstime": "9:30-16:00",
                        "address": "花蓮縣花蓮市三民街35之1號",
                        "phone": "0978836517",
                        "price": "120",
                        "website": "https://www.facebook.com/Ezuo.coffee/",
                        "picture": "/src/image/content/hualien/伊坐咖啡 E-zuo caf'e.jpg",
                        "city": "hualien",
                        "kind": "brunch",
                        "createdAt": "2020-05-17T05:57:48.326Z",
                        "updatedAt": "2020-05-17T05:57:48.326Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d6a1e9701e00224e65f1",
                        "name": "奇幻地咖啡",
                        "businesstime": "9:00-18:00",
                        "address": "花蓮縣花蓮市和平路597號2樓",
                        "phone": "038321883",
                        "price": "300",
                        "website": "https://www.facebook.com/WONDERLANDandcafe/",
                        "picture": "/src/image/content/hualien/奇幻地咖啡.jpg",
                        "city": "hualien",
                        "kind": "brunch",
                        "createdAt": "2020-05-17T06:16:01.278Z",
                        "updatedAt": "2020-05-17T06:16:01.278Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d741e9701e00224e65f3",
                        "name": "森山舎 moring mountain",
                        "businesstime": "9:00-18:00",
                        "address": "花蓮縣花蓮市林政街10號",
                        "phone": "038351987",
                        "price": "300",
                        "website": "https://www.facebook.com/himorningmountain/",
                        "picture": "/src/image/content/hualien/森山舎 moring mountain.jpg",
                        "city": "hualien",
                        "kind": "brunch",
                        "createdAt": "2020-05-17T06:18:41.981Z",
                        "updatedAt": "2020-05-17T06:18:41.981Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/brunch' // origin api url

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