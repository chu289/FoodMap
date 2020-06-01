window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebada3cd328590019ae4ed2",
                        "name": "Totto Ramen 鳥人拉麵",
                        "businesstime": "11:30-22:00",
                        "address": "台北市大安區復興南路一段107巷5弄9號",
                        "phone": "0227789866",
                        "price": "250",
                        "website": "https://www.facebook.com/tottoramen.tw/",
                        "picture": "/src/image/content/taipei/Totto Ramen 鳥人拉麵.jpg",
                        "city": "taipei",
                        "kind": "japanese",
                        "createdAt": "2020-05-12T17:17:48.203Z",
                        "updatedAt": "2020-05-12T17:17:48.203Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4777d328590019ae4ee5",
                        "name": "老串角居酒屋-板橋江翠店",
                        "businesstime": "00:00-01:30 17:30-00:00",
                        "address": "新北市板橋區文化路二段182巷7弄15號",
                        "phone": "0222566139",
                        "price": "500",
                        "website": "https://www.facebook.com/kushikadoizakaya/",
                        "picture": "/src/image/content/newtaipei/老串角居酒屋-板橋江翠店.jpg",
                        "city": "newtaipei",
                        "kind": "japanese",
                        "createdAt": "2020-05-14T13:28:23.761Z",
                        "updatedAt": "2020-05-14T13:28:23.761Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd481cd328590019ae4ee7",
                        "name": "嵐山熟成牛かつ專売 台中大里旗艦店",
                        "businesstime": "11:30-14:30 17:30-21:00",
                        "address": "台中市大里區永隆路567號",
                        "phone": "0424060222",
                        "price": "300",
                        "website": "https://www.facebook.com/arashiyamagyukatsutaichungdali/",
                        "picture": "/src/image/content/taichung/嵐山熟成牛かつ專売 台中大里旗艦店.jpg",
                        "city": "taichung",
                        "kind": "japanese",
                        "createdAt": "2020-05-14T13:31:08.191Z",
                        "updatedAt": "2020-05-15T08:19:33.568Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4e58d328590019ae4ef4",
                        "name": "揚日式料理",
                        "businesstime": "11:40-14:00 17:30-20:00",
                        "address": "新北市中和區中正路839巷7號",
                        "phone": "0987563532",
                        "price": "300",
                        "website": "https://www.facebook.com/torisan2013/",
                        "picture": "/src/image/content/newtaipei/揚日式料理.jpg",
                        "city": "newtaipei",
                        "kind": "japanese",
                        "createdAt": "2020-05-14T13:57:44.026Z",
                        "updatedAt": "2020-05-14T13:57:44.026Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebde370d328590019ae4efa",
                        "name": "回 未了 日式丼飯",
                        "businesstime": "11:30-20:30",
                        "address": "臺中市北區學士路292巷7號",
                        "phone": "0987832811",
                        "price": "330",
                        "website": "https://www.facebook.com/%E5%9B%9E-%E6%9C%AA%E4%BA%86-%E6%97%A5%E5%BC%8F%E4%B8%BC%E9%A3%AF-2240924469303318/",
                        "picture": "/src/image/content/taichung/回 未了 日式丼飯.jpg",
                        "city": "taichung",
                        "kind": "japanese",
                        "createdAt": "2020-05-15T00:33:52.830Z",
                        "updatedAt": "2020-05-15T08:25:25.168Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebde822d328590019ae4f05",
                        "name": "別嗆大叔",
                        "businesstime": "17:30-22:30",
                        "address": "台中市西區模範市場一巷10號",
                        "phone": "0423011625",
                        "price": "200",
                        "website": "https://www.facebook.com/djrose0319/",
                        "picture": "/src/image/content/taichung/別嗆大叔.jpg",
                        "city": "taichung",
                        "kind": "japanese",
                        "createdAt": "2020-05-15T00:53:54.742Z",
                        "updatedAt": "2020-05-15T08:30:54.115Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebde870d328590019ae4f06",
                        "name": "嵐山熟成牛かつ專売 台中大里旗艦店",
                        "businesstime": "11:30-14:30 17:30-21:00",
                        "address": "台中市大里區永隆路567號",
                        "phone": "0424060222",
                        "price": "300",
                        "website": "https://www.facebook.com/arashiyamagyukatsutaichungdali/",
                        "picture": "/src/image/content/taichung/嵐山熟成牛かつ專売 台中大里旗艦店.jpg",
                        "city": "taichung",
                        "kind": "japanese",
                        "createdAt": "2020-05-15T00:55:12.720Z",
                        "updatedAt": "2020-05-15T08:31:13.823Z",
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
                        "_id": "5ebf7e28e9701e00224e65ab",
                        "name": "碳佐麻里 (府前店)",
                        "businesstime": "11:00-00:00",
                        "address": "臺南市安平區府前路二段630號",
                        "phone": "062983377",
                        "price": "350",
                        "website": "https://www.facebook.com/%E7%A2%B3%E4%BD%90%E9%BA%BB%E9%87%8C-%E5%8F%B0%E5%8D%97%E5%BA%9C%E5%89%8D%E5%BA%97-552335551452342/",
                        "picture": "/src/image/content/tainan/碳佐麻里 (府前店).jpg",
                        "city": "tainan",
                        "kind": "japanese",
                        "createdAt": "2020-05-16T05:46:16.310Z",
                        "updatedAt": "2020-05-16T05:53:13.001Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebf828ae9701e00224e65b4",
                        "name": "丼Fun台南店",
                        "businesstime": "1:30-14:30 17:00-21:00",
                        "address": "臺南市中西區五妃街212號",
                        "phone": "062130680",
                        "price": "320",
                        "website": "https://www.facebook.com/%E4%B8%BCFun%E5%8F%B0%E5%8D%97%E5%BA%97-585692111763058/",
                        "picture": "/src/image/content/tainan/丼Fun台南店.jpg",
                        "city": "tainan",
                        "kind": "japanese",
                        "createdAt": "2020-05-16T06:04:58.348Z",
                        "updatedAt": "2020-05-16T06:04:58.348Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebfb6b5e9701e00224e65c1",
                        "name": "森川丼丼",
                        "businesstime": "11:00-14:30 17:00-21:30",
                        "address": "高雄市楠梓區楠都東街167號",
                        "phone": "0982691826",
                        "price": "200",
                        "website": "https://www.facebook.com/morigawadonndonn/",
                        "picture": "/src/image/content/kaohsiung/森川丼丼.jpg",
                        "city": "kaohsiung",
                        "kind": "japanese",
                        "createdAt": "2020-05-16T09:47:33.250Z",
                        "updatedAt": "2020-05-16T09:47:33.250Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebfb7bae9701e00224e65c4",
                        "name": "屯京拉麵",
                        "businesstime": "10:30-22:30",
                        "address": "高雄市前金區成功一路266號B3",
                        "phone": "072159898",
                        "price": "260",
                        "website": "https://www.facebook.com/hilaiharbour/",
                        "picture": "/src/image/content/kaohsiung/屯京拉麵.jpg",
                        "city": "kaohsiung",
                        "kind": "japanese",
                        "createdAt": "2020-05-16T09:51:54.101Z",
                        "updatedAt": "2020-05-16T09:51:54.101Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebfb813e9701e00224e65c5",
                        "name": "城裡的小月光 南屏店",
                        "businesstime": "00:00-01:30 11:30-14:00 17:00-00:00",
                        "address": "高雄市左營區南屏路205號",
                        "phone": "0980740404",
                        "price": "180",
                        "website": "https://www.facebook.com/moon3469191/",
                        "picture": "/src/image/content/kaohsiung/城裡的小月光 南屏店.jpg",
                        "city": "kaohsiung",
                        "kind": "japanese",
                        "createdAt": "2020-05-16T09:53:23.637Z",
                        "updatedAt": "2020-05-16T09:53:23.637Z",
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
                        "_id": "5ec0cfa0e9701e00224e65e3",
                        "name": "老時光燒肉酒肴",
                        "businesstime": "17:00-00:00 00:00-01:00",
                        "address": "花蓮縣花蓮市民國路88-1號",
                        "phone": "038315848",
                        "price": "500",
                        "website": "https://www.facebook.com/oldtime315848/",
                        "picture": "/src/image/content/hualien/老時光燒肉酒肴.jpg",
                        "city": "hualien",
                        "kind": "japanese",
                        "createdAt": "2020-05-17T05:46:08.225Z",
                        "updatedAt": "2020-05-17T05:46:08.225Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d5d0e9701e00224e65ee",
                        "name": "竹汌日式居酒屋",
                        "businesstime": "17:00-00:00 00:00-01:00",
                        "address": "花蓮縣花蓮市節約街20號",
                        "phone": "038320920",
                        "price": "250",
                        "website": "https://www.facebook.com/ZHUCHUAN88/",
                        "picture": "/src/image/content/hualien/竹汌日式居酒屋.jpg",
                        "city": "hualien",
                        "kind": "japanese",
                        "createdAt": "2020-05-17T06:12:32.226Z",
                        "updatedAt": "2020-05-17T06:12:32.226Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d827e9701e00224e65f6",
                        "name": "西北的家 日式食堂",
                        "businesstime": "11:00-14:00 17:00-20:00",
                        "address": "花蓮縣吉安鄉慶豐十街195號",
                        "phone": "038521852",
                        "price": "200",
                        "website": "https://www.facebook.com/%E5%AE%AE%E5%89%8D%E8%A5%BF%E6%9D%91%E4%B9%8B%E5%AE%B6-233548620056136/",
                        "picture": "/src/image/content/hualien/西北的家 日式食堂.jpg",
                        "city": "hualien",
                        "kind": "japanese",
                        "createdAt": "2020-05-17T06:22:31.721Z",
                        "updatedAt": "2020-05-17T06:22:31.721Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0deaee9701e00224e65f7",
                        "name": "GYUU NIKU ステーキ專門店",
                        "businesstime": "11:30-15:00 17:00-22:00",
                        "address": "台北市忠孝東路五段412之6號",
                        "phone": "0287800002",
                        "price": "400",
                        "website": "https://www.facebook.com/GYUUTW/",
                        "picture": "/src/image/content/taipei/GYUU NIKU ステーキ專門店.jpg",
                        "city": "taipei",
                        "kind": "japanese",
                        "createdAt": "2020-05-17T06:50:22.568Z",
                        "updatedAt": "2020-05-17T06:50:22.568Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0df01e9701e00224e65f8",
                        "name": "麵日和",
                        "businesstime": "11:30-14:00 17:30-21:00",
                        "address": "台北市中山區南京東路一段13巷6弄8號",
                        "phone": "0225819825",
                        "price": "250",
                        "website": "https://www.facebook.com/menbiyoritaipei/",
                        "picture": "/src/image/content/taipei/麵日和.jpg",
                        "city": "taipei",
                        "kind": "japanese",
                        "createdAt": "2020-05-17T06:51:45.385Z",
                        "updatedAt": "2020-05-17T06:51:45.385Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e00de9701e00224e65f9",
                        "name": "私嚐貳 串燒X炸物X居酒屋",
                        "businesstime": "18:00-00:00 00:00-2:00",
                        "address": "新竹市中正路96巷8號",
                        "phone": "035252719",
                        "price": "500",
                        "website": "https://www.facebook.com/izakaya1041008/",
                        "picture": "/src/image/content/otherCities/私嚐貳 串燒X炸物X居酒屋.jpg",
                        "city": "othercities",
                        "kind": "japanese",
                        "createdAt": "2020-05-17T06:56:13.006Z",
                        "updatedAt": "2020-05-17T07:04:44.888Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/japanese' // origin api url

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