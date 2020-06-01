window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebadadcd328590019ae4ed9",
                        "name": "咪咪紫菜捲 KOREA GIMBAP",
                        "businesstime": "13:00-21:00",
                        "address": "臺北市萬華區漢中街35之6號",
                        "phone": "0223831838",
                        "price": "130",
                        "website": "https://www.facebook.com/pages/%E5%92%AA%E5%92%AA%E7%B4%AB%E8%8F%9C%E6%8D%B2/295333427540513",
                        "picture": "/src/image/content/taipei/咪咪紫菜捲 KOREA GIMBAP.jpg",
                        "city": "taipei",
                        "kind": "korean",
                        "createdAt": "2020-05-12T17:20:28.274Z",
                        "updatedAt": "2020-05-12T17:20:28.274Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4c94d328590019ae4eef",
                        "name": "林太太手工石烤披薩炸雞",
                        "businesstime": "17:00-21:00",
                        "address": "新北市蘆洲區中正路283號1F",
                        "phone": "0222826685",
                        "price": "320",
                        "website": "https://www.facebook.com/linpizza1/",
                        "picture": "/src/image/content/newtaipei/林太太手工石烤披薩炸雞.jpg",
                        "city": "newtaipei",
                        "kind": "korean",
                        "createdAt": "2020-05-14T13:50:12.222Z",
                        "updatedAt": "2020-05-14T13:50:12.222Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebde56cd328590019ae4efe",
                        "name": "FASHION PIG 韓式熟成五花肉",
                        "businesstime": "11:00-15:00 17:00-21:00",
                        "address": "臺中市西區中美街456號",
                        "phone": "0423261881",
                        "price": "400",
                        "website": "https://www.facebook.com/fashionpig.taiwan/",
                        "picture": "/src/image/content/taichung/FASHION PIG 韓式熟成五花肉.jpg",
                        "city": "taichung",
                        "kind": "korean",
                        "createdAt": "2020-05-15T00:42:20.532Z",
                        "updatedAt": "2020-05-15T08:27:18.933Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e0bce9701e00224e65fa",
                        "name": "韓雞Bar-中壢海華加盟店",
                        "businesstime": "11:30-22:00",
                        "address": "桃園市中壢區九和五街38號",
                        "phone": "034222390",
                        "price": "200",
                        "website": "https://www.facebook.com/%E4%B8%AD%E4%BF%A1%E6%88%BF%E5%B1%8B-%E4%B8%AD%E5%A3%A2%E6%B5%B7%E8%8F%AF%E5%8A%A0%E7%9B%9F%E5%BA%97-1895830100658504/",
                        "picture": "/src/image/content/otherCities/韓雞Bar-中壢海華加盟店.jpg",
                        "city": "otherCities",
                        "kind": "korean",
                        "createdAt": "2020-05-17T06:59:08.493Z",
                        "updatedAt": "2020-05-17T06:59:08.493Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e13ce9701e00224e65fb",
                        "name": "豬對有韓式烤肉吃到飽 台中精武店",
                        "businesstime": "11:00-15:00 17:00-22:00",
                        "address": "臺中市東區精武東路105號號",
                        "phone": "0422155199",
                        "price": "400",
                        "website": "https://www.facebook.com/pigfriend4/",
                        "picture": "/src/image/content/taichung/豬對有韓式烤肉吃到飽 台中精武店.jpg",
                        "city": "taichung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:01:16.109Z",
                        "updatedAt": "2020-05-17T07:01:16.109Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e271e9701e00224e65fc",
                        "name": "韓金館",
                        "businesstime": "17:30-00:00 00:00-2:00",
                        "address": "臺北市中山區林森北路119巷68號",
                        "phone": "0225361997",
                        "price": "500",
                        "website": "https://www.facebook.com/hankeumkwan/",
                        "picture": "/src/image/content/taipei/韓金館.jpg",
                        "city": "taipei",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:06:25.853Z",
                        "updatedAt": "2020-05-17T07:06:25.853Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e2ffe9701e00224e65fd",
                        "name": "Bungy Jump笨豬跳韓式燒肉 竹北店",
                        "businesstime": "11:30-21:00",
                        "address": "新竹縣竹北市莊敬南路108號",
                        "phone": "036681842",
                        "price": "350",
                        "website": "https://www.facebook.com/BungyJumpBBQ.ZB/",
                        "picture": "/src/image/content/othercities/Bungy Jump笨豬跳韓式燒肉 竹北店.jpg",
                        "city": "othercities",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:08:47.316Z",
                        "updatedAt": "2020-05-17T07:08:47.316Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e343e9701e00224e65fe",
                        "name": "Mulberry韓國餐酒食堂",
                        "businesstime": "11:30-14:30 17:00-21:30",
                        "address": "新竹市東區信義街78號",
                        "phone": "035281378",
                        "price": "350",
                        "website": "https://www.facebook.com/MulberryMulberryMulberry/",
                        "picture": "/src/image/content/othercities/Mulberry韓國餐酒食堂.jpg",
                        "city": "othercities",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:09:55.452Z",
                        "updatedAt": "2020-05-17T07:09:55.452Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e38be9701e00224e65ff",
                        "name": "GangNam 首爾韓鍋",
                        "businesstime": "11:30-21:30",
                        "address": "臺中市西屯區福星路591號",
                        "phone": "0424510538",
                        "price": "400",
                        "website": "https://www.facebook.com/gangnamkoreanfood/",
                        "picture": "/src/image/content/taichung/GangNam 首爾韓鍋.jpg",
                        "city": "taichung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:11:07.389Z",
                        "updatedAt": "2020-05-17T07:11:07.389Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e3f3e9701e00224e6600",
                        "name": "滿月보름달-韓式正統炸醬麵",
                        "businesstime": "11:00-15:00 17:00-21:00",
                        "address": "高雄市鼓山區文信路240號",
                        "phone": "0968653251",
                        "price": "310",
                        "website": "https://www.facebook.com/boreumdal.tw/",
                        "picture": "/src/image/content/kaohsiung/滿月보름달-韓式正統炸醬麵.jpg",
                        "city": "kaohsiung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:12:51.941Z",
                        "updatedAt": "2020-05-17T07:12:51.941Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e440e9701e00224e6601",
                        "name": "玉豆腐",
                        "businesstime": "11:00-22:00",
                        "address": "高雄市楠梓區藍田路288號",
                        "phone": "073646012",
                        "price": "300",
                        "website": "https://www.facebook.com/pages/%E7%8E%89%E8%B1%86%E8%85%90-%E9%9F%93%E5%9C%8B%E8%B1%86%E8%85%90%E7%85%B2%E5%B0%88%E9%96%80%E5%BA%97/1447862178846008",
                        "picture": "/src/image/content/kaohsiung/玉豆腐.jpg",
                        "city": "kaohsiung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:14:08.684Z",
                        "updatedAt": "2020-05-17T07:14:08.684Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e477e9701e00224e6602",
                        "name": "The Original One",
                        "businesstime": "9:00-19:00",
                        "address": "高雄市前鎮區瑞隆路138號",
                        "phone": "077219030",
                        "price": "200",
                        "website": "https://www.facebook.com/TOO138/",
                        "picture": "/src/image/content/kaohsiung/The Original One.jpg",
                        "city": "kaohsiung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:15:03.946Z",
                        "updatedAt": "2020-05-17T07:15:03.946Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e4d2e9701e00224e6603",
                        "name": "Ma C So Yo 築夢韓食",
                        "businesstime": "11:30-14:30 17:30-22:00",
                        "address": "臺北市中山區中山北路一段121巷15號",
                        "phone": "0225375068",
                        "price": "450",
                        "website": "https://www.facebook.com/pages/Ma-c-So-Yo%E7%AF%89%E5%A4%A2%E9%9F%93%E9%A3%9F/265059764039106",
                        "picture": "/src/image/content/taipei/Ma C So Yo 築夢韓食.jpg",
                        "city": "taipei",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:16:34.945Z",
                        "updatedAt": "2020-05-17T07:21:09.649Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e646e9701e00224e6604",
                        "name": "오빠네韓式料理",
                        "businesstime": "11:30-15:00 17:30-21:00",
                        "address": "高雄市苓雅區苓雅二路75號",
                        "phone": "073387781",
                        "price": "250",
                        "website": "https://www.facebook.com/oppanerestaurant/",
                        "picture": "/src/image/content/kaohsiung/오빠네韓式料理.jpg",
                        "city": "kaohsiung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:22:46.223Z",
                        "updatedAt": "2020-05-17T07:22:46.223Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e684e9701e00224e6605",
                        "name": "咚雞咚雞디디치킨 韓式炸雞",
                        "businesstime": "11:30-23:00",
                        "address": "高雄市三民區熱河一街403號",
                        "phone": "0968961922",
                        "price": "183",
                        "website": "https://www.facebook.com/%E5%92%9A%E9%9B%9E%E5%92%9A%E9%9B%9E%EB%94%94%EB%94%94%EC%B9%98%ED%82%A8-%E9%9F%93%E5%BC%8F%E7%82%B8%E9%9B%9E-105683344269041/",
                        "picture": "/src/image/content/kaohsiung/咚雞咚雞디디치킨 韓式炸雞.jpg",
                        "city": "kaohsiung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:23:48.348Z",
                        "updatedAt": "2020-05-17T07:23:48.348Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e6f3e9701e00224e6606",
                        "name": "VEGE TEJI YA 菜豚屋",
                        "businesstime": "11:00-15:30 17:00-23:30",
                        "address": "臺北市松山區八德路二段410巷16弄8號",
                        "phone": "0227788055",
                        "price": "300",
                        "website": "https://www.facebook.com/VEGETEJIYA/",
                        "picture": "/src/image/content/taipei/VEGE TEJI YA 菜豚屋.jpg",
                        "city": "taipei",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:25:39.900Z",
                        "updatedAt": "2020-05-17T07:25:39.900Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e753e9701e00224e6607",
                        "name": "大韓民國韓式料理",
                        "businesstime": "11:30-14:00 17:00-20:30",
                        "address": "高雄市前鎮區林森三路193巷7號",
                        "phone": "073387671",
                        "price": "145",
                        "website": "https://www.facebook.com/pages/%E5%A4%A7%E9%9F%93%E6%B0%91%E5%9C%8B/525529424249001",
                        "picture": "/src/image/content/kaohsiung/大韓民國韓式料理.jpg",
                        "city": "kaohsiung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:27:15.159Z",
                        "updatedAt": "2020-05-17T07:27:15.159Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e7c9e9701e00224e6608",
                        "name": "大盛居 日韓食堂",
                        "businesstime": "11:00-14:00 17:30-20:30",
                        "address": "嘉義市西區友和路92號",
                        "phone": "052333880",
                        "price": "250",
                        "website": "https://www.facebook.com/happiness.allday/",
                        "picture": "/src/image/content/othercities/大盛居 日韓食堂.jpg",
                        "city": "othercities",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:29:13.755Z",
                        "updatedAt": "2020-05-17T07:29:13.755Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e820e9701e00224e6609",
                        "name": "首爾豬",
                        "businesstime": "11:30-14:30 17:30-22:30",
                        "address": "高雄市左營區明誠二路408之1號",
                        "phone": "075507735",
                        "price": "469",
                        "website": "https://www.facebook.com/pages/%E9%A6%96%E7%88%BE%E8%B1%AC%E9%9F%93%E5%BC%8F%E7%83%A4%E8%82%89/559025361259114",
                        "picture": "/src/image/content/kaohsiung/首爾豬.jpg",
                        "city": "kaohsiung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:30:40.370Z",
                        "updatedAt": "2020-05-17T07:30:40.370Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0e86de9701e00224e660a",
                        "name": "花小豬 正宗韓式烤肉 華夏店",
                        "businesstime": "11:30-14:30 17:00-21:30",
                        "address": "高雄市左營區華夏路767之1號",
                        "phone": "073500368",
                        "price": "500",
                        "website": "https://www.facebook.com/blossompiggyHUASHIA/",
                        "picture": "/src/image/content/kaohsiung/花小豬 正宗韓式烤肉 華夏店.jpg",
                        "city": "kaohsiung",
                        "kind": "korean",
                        "createdAt": "2020-05-17T07:31:57.479Z",
                        "updatedAt": "2020-05-17T07:31:57.479Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/korean' // origin api url

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