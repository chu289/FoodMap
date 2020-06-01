window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ec2b209e9701e00224e6679",
                        "name": "柒串燒屋",
                        "businesstime": "00:00-2:00 17:30-00:00",
                        "address": "臺北市中山區長安東路一段46號",
                        "phone": "0225672770",
                        "price": "350",
                        "website": "https://www.facebook.com/SEVEN.Keba.House/",
                        "picture": "/src/image/content/taipei/柒串燒屋.jpg",
                        "city": "taipei",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:04:25.218Z",
                        "updatedAt": "2020-05-18T16:16:54.958Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b2c2e9701e00224e667b",
                        "name": "東港強 和牛 燒肉 蘆洲旗艦店",
                        "businesstime": "11:30-14:30 17:00-21:30",
                        "address": "新北市蘆洲區集賢路227之1號",
                        "phone": "0282820178",
                        "price": "499",
                        "website": "https://www.facebook.com/dong.gang.qiang/",
                        "picture": "/src/image/content/newtaipei/東港強 和牛 燒肉 蘆洲旗艦店.jpg",
                        "city": "newtaipei",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:07:30.515Z",
                        "updatedAt": "2020-05-18T16:19:12.791Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b30de9701e00224e667c",
                        "name": "壹心燒肉",
                        "businesstime": "17:00-23:00",
                        "address": "嘉義市新榮路289西區",
                        "phone": "052250058",
                        "price": "500",
                        "website": "https://www.facebook.com/yisinyakinikuchaiyi/",
                        "picture": "/src/image/content/othercities/壹心燒肉.jpg",
                        "city": "othercities",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:08:45.458Z",
                        "updatedAt": "2020-05-18T16:19:53.300Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b39ce9701e00224e667d",
                        "name": "小南人燒烤",
                        "businesstime": "18:00-00:00",
                        "address": "臺南市中西區西門路一段755號",
                        "phone": "0930168119",
                        "price": "180",
                        "website": "https://www.facebook.com/tainanbbq/",
                        "picture": "/src/image/content/tainan/小南人燒烤.jpg",
                        "city": "tainan",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:11:08.515Z",
                        "updatedAt": "2020-05-18T16:20:26.166Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b625e9701e00224e667e",
                        "name": "原饌 日式無煙燒肉",
                        "businesstime": "17:30-22:00",
                        "address": "嘉義市東區忠孝路171號",
                        "phone": "052763993",
                        "price": "300",
                        "website": "https://www.facebook.com/%E5%8E%9F%E9%A5%8C%E6%97%A5%E5%BC%8F%E7%87%92%E8%82%89-2358532667726361/",
                        "picture": "/src/image/content/othercities/原饌 日式無煙燒肉.jpg",
                        "city": "othercities",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:21:57.040Z",
                        "updatedAt": "2020-05-18T16:21:57.040Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b67ee9701e00224e667f",
                        "name": "激旨燒き鳥",
                        "businesstime": "17:00-00:00",
                        "address": "臺中市西屯區文華路150巷18號",
                        "phone": "0424518666",
                        "price": "300",
                        "website": "https://www.facebook.com/GekiumaYakitori/",
                        "picture": "/src/image/content/taichung/激旨燒き鳥.jpg",
                        "city": "taichung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:23:26.483Z",
                        "updatedAt": "2020-05-18T16:23:26.483Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b6e1e9701e00224e6680",
                        "name": "海神弄局海鮮燒烤",
                        "businesstime": "00:00-2:00 6:00-00:00",
                        "address": "臺南市中西區開山路97號",
                        "phone": "062236098",
                        "price": "200",
                        "website": "https://www.facebook.com/BEER.SEAFOOD.GAME/",
                        "picture": "/src/image/content/tainan/海神弄局海鮮燒烤.jpg",
                        "city": "tainan",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:25:05.563Z",
                        "updatedAt": "2020-05-18T16:25:05.563Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b762e9701e00224e6681",
                        "name": "月桂炭火燒肉",
                        "businesstime": "12:00-22:30",
                        "address": "基隆市仁愛區愛二路57號",
                        "phone": "0224260021",
                        "price": "299",
                        "website": "https://www.facebook.com/%E6%9C%88%E6%A1%82%E7%82%AD%E7%81%AB%E7%87%92%E8%82%89-271087580096754/",
                        "picture": "/src/image/content/othercities/月桂炭火燒肉.jpg",
                        "city": "othercities",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:27:14.342Z",
                        "updatedAt": "2020-05-18T16:27:14.342Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b7bce9701e00224e6682",
                        "name": "爵 旋轉串燒 炭烤",
                        "businesstime": "17:30-00:00",
                        "address": "臺中市西區公正路261號",
                        "phone": "0423055989",
                        "price": "450",
                        "website": "https://www.facebook.com/cheersmate2015/",
                        "picture": "/src/image/content/taichung/爵 旋轉串燒 炭烤.jpg",
                        "city": "taichung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:28:44.320Z",
                        "updatedAt": "2020-05-18T16:28:44.320Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b81fe9701e00224e6683",
                        "name": "巴士底家",
                        "businesstime": "00:00-2:00 17:30-00:00",
                        "address": "臺中市西屯區福星路693之1號",
                        "phone": "0424516660",
                        "price": "300",
                        "website": "https://www.facebook.com/BusIsHere/",
                        "picture": "/src/image/content/taichung/巴士底家.jpg",
                        "city": "taichung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:30:23.666Z",
                        "updatedAt": "2020-05-18T16:30:23.666Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b863e9701e00224e6684",
                        "name": "茶六燒肉堂 (朝富店)",
                        "businesstime": "00:00-2:00 11:00-00:00",
                        "address": "臺中市西屯區朝富路258號",
                        "phone": "0422587126",
                        "price": "500",
                        "website": "https://www.facebook.com/%E8%8C%B6%E5%85%AD%E7%87%92%E8%82%89%E5%A0%82-1385408771592209/",
                        "picture": "/src/image/content/taichung/茶六燒肉堂 (朝富店).jpg",
                        "city": "taichung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:31:31.702Z",
                        "updatedAt": "2020-05-18T16:31:31.702Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b8b5e9701e00224e6685",
                        "name": "津筵燒肉酒館",
                        "businesstime": "17:30-00:00",
                        "address": "高雄市新興區中山一路87號",
                        "phone": "0967122020",
                        "price": "450",
                        "website": "https://www.facebook.com/Jinyan.yakiniku/",
                        "picture": "/src/image/content/kaohsiung/津筵燒肉酒館.jpg",
                        "city": "kaohsiung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:32:53.854Z",
                        "updatedAt": "2020-05-18T16:32:53.854Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b8fae9701e00224e6686",
                        "name": "菜豚屋-高雄左營店",
                        "businesstime": "17:00-23:30",
                        "address": "高雄市左營區明華一路166號",
                        "phone": "075566696",
                        "price": "500",
                        "website": "https://www.facebook.com/VEGETEJIYA05/",
                        "picture": "/src/image/content/kaohsiung/菜豚屋-高雄左營店.jpg",
                        "city": "kaohsiung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:34:02.569Z",
                        "updatedAt": "2020-05-18T16:34:02.569Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b946e9701e00224e6687",
                        "name": "肉肉燒肉店",
                        "businesstime": "11:30-14:30 17:30-00:00",
                        "address": "臺中市南屯區五權西路二段223號",
                        "phone": "0424721166",
                        "price": "400",
                        "website": "https://www.facebook.com/nikuniku0120.com.tw/",
                        "picture": "/src/image/content/taichung/肉肉燒肉店.jpg",
                        "city": "taichung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:35:18.689Z",
                        "updatedAt": "2020-05-18T16:35:18.689Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b9cde9701e00224e6688",
                        "name": "金碳号",
                        "businesstime": "00:00-1:00 18:00-00:00",
                        "address": "高雄市新興區五福二路39之1號",
                        "phone": "0916167520",
                        "price": "300",
                        "website": "https://www.facebook.com/BBQ39/",
                        "picture": "/src/image/content/kaohsiung/金碳号.jpg",
                        "city": "kaohsiung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:37:33.550Z",
                        "updatedAt": "2020-05-18T16:37:33.550Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2ba68e9701e00224e6689",
                        "name": "呷賀屋日式燒烤",
                        "businesstime": "00:00-1:00 18:00-00:00",
                        "address": "高雄市鳳山區王生明路36號",
                        "phone": "077455325",
                        "price": "250",
                        "website": "https://www.facebook.com/a7455325/",
                        "picture": "/src/image/content/kaohsiung/呷賀屋日式燒烤.jpg",
                        "city": "kaohsiung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:40:08.715Z",
                        "updatedAt": "2020-05-18T16:40:08.715Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2babae9701e00224e668a",
                        "name": "富治串燒",
                        "businesstime": "18:00-00:00",
                        "address": "高雄市新興區玉竹一街17巷17號",
                        "phone": "0977773012",
                        "price": "500",
                        "website": "https://www.facebook.com/FUJIKUSHIYAKI/",
                        "picture": "/src/image/content/kaohsiung/富治串燒.jpg",
                        "city": "kaohsiung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:41:30.040Z",
                        "updatedAt": "2020-05-18T16:41:30.040Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2bb17e9701e00224e668b",
                        "name": "東門燒肉霸",
                        "businesstime": "17:00-23:00",
                        "address": "新竹市大同路86號1131室",
                        "phone": "035232741",
                        "price": "500",
                        "website": "https://www.facebook.com/%E6%9D%B1%E9%96%80%E7%87%92%E8%82%89%E9%9C%B8-100534651301949/",
                        "picture": "/src/image/content/othercities/東門燒肉霸.jpg",
                        "city": "othercities",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:43:03.718Z",
                        "updatedAt": "2020-05-18T16:43:03.718Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2bb62e9701e00224e668c",
                        "name": "二升五合燒肉Bar",
                        "businesstime": "17:00-22:00",
                        "address": "新北市中和區連城路41號",
                        "phone": "0222462243",
                        "price": "500",
                        "website": "https://www.facebook.com/tokyo41/",
                        "picture": "/src/image/content/newtaipei/二升五合燒肉Bar.jpg",
                        "city": "newtaipei",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:44:18.022Z",
                        "updatedAt": "2020-05-18T16:44:18.022Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2bbb5e9701e00224e668d",
                        "name": "享鮮海鮮燒烤",
                        "businesstime": "00:00-1:00 17:00-00:00",
                        "address": "高雄市前鎮區光華二路298號",
                        "phone": "0986088957",
                        "price": "200",
                        "website": "https://www.facebook.com/XiangXianShaoKao/",
                        "picture": "/src/image/content/kaohsiung/享鮮海鮮燒烤.jpg",
                        "city": "kaohsiung",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:45:41.423Z",
                        "updatedAt": "2020-05-18T16:45:41.423Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/bbq' // origin api url

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