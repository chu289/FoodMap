window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebf8365e9701e00224e65b7",
                        "name": "有邑家 Home from Home Cafe",
                        "businesstime": "11:00-20:00",
                        "address": "臺南市北區海安路三段147號",
                        "phone": "063580947",
                        "price": "200",
                        "website": "https://www.facebook.com/HomefromHome3147/",
                        "picture": "/src/image/content/tainan/有邑家 Home from Home Cafe.jpg",
                        "city": "tainan",
                        "kind": "hongkong",
                        "createdAt": "2020-05-16T06:08:37.905Z",
                        "updatedAt": "2020-05-16T06:08:37.905Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec113f3e9701e00224e664f",
                        "name": "榮寓冰室",
                        "businesstime": "12:30-18:30",
                        "address": "臺南市東區榮譽街84巷55號",
                        "phone": "062908281",
                        "price": "200",
                        "website": "https://www.facebook.com/homebaristaworkshop/",
                        "picture": "/src/image/content/tainan/榮寓冰室.jpg",
                        "city": "tainan",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:37:39.001Z",
                        "updatedAt": "2020-05-17T10:37:39.001Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11444e9701e00224e6650",
                        "name": "湯玉（港式料理）",
                        "businesstime": "11:00-14:30 17:00-21:00",
                        "address": "高雄市左營區立信路88號",
                        "phone": "0919175001",
                        "price": "135",
                        "website": "https://www.facebook.com/%E6%B9%AF%E7%8E%89-%E6%B8%AF%E5%BC%8F%E6%96%99%E7%90%86-116346429770435/",
                        "picture": "/src/image/content/kaohsiung/湯玉（港式料理）.jpg",
                        "city": "kaohsiung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:39:00.355Z",
                        "updatedAt": "2020-05-17T10:39:00.355Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11490e9701e00224e6651",
                        "name": "港緣 港式麻辣雞煲火鍋",
                        "businesstime": "17:30-22:00",
                        "address": "高雄市新興區七賢二路88號",
                        "phone": "072856681",
                        "price": "400",
                        "website": "https://www.facebook.com/hkchickhotpot/",
                        "picture": "/src/image/content/kaohsiung/港緣 港式麻辣雞煲火鍋.jpg",
                        "city": "kaohsiung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:40:16.777Z",
                        "updatedAt": "2020-05-17T10:40:16.777Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec114e4e9701e00224e6652",
                        "name": "寓點",
                        "businesstime": "7:00-14:00",
                        "address": "臺南市東區東興路91號",
                        "phone": "062089495",
                        "price": "250",
                        "website": "https://www.facebook.com/jyudim/",
                        "picture": "/src/image/content/tainan/寓點.jpg",
                        "city": "tainan",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:41:40.100Z",
                        "updatedAt": "2020-05-17T10:41:40.100Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11526e9701e00224e6653",
                        "name": "捌伍貳冰室",
                        "businesstime": "11:30-16:00",
                        "address": "臺南市安平區府前四街94號",
                        "phone": "0922900491",
                        "price": "200",
                        "website": "https://www.facebook.com/baatngyi/",
                        "picture": "/src/image/content/tainan/捌伍貳冰室.jpg",
                        "city": "tainan",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:42:46.022Z",
                        "updatedAt": "2020-05-17T10:42:46.022Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11596e9701e00224e6654",
                        "name": "饕煲港式食堂",
                        "businesstime": "11:00-14:00 17:00-21:00",
                        "address": "高雄市三民區建興路186號",
                        "phone": "073808303",
                        "price": "300",
                        "website": "https://www.facebook.com/TAoBAoHongKongstyle/",
                        "picture": "/src/image/content/kaohsiung/饕煲港式食堂.jpg",
                        "city": "kaohsiung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:44:38.466Z",
                        "updatedAt": "2020-05-17T10:44:38.466Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec115d2e9701e00224e6655",
                        "name": "聞雞起爐 港式麻辣雞煲火鍋",
                        "businesstime": "11:30-14:30 17:30-22:00",
                        "address": "高雄市左營區自由二路329號",
                        "phone": "075506325",
                        "price": "500",
                        "website": "https://www.facebook.com/spicychickenpot/",
                        "picture": "/src/image/content/kaohsiung/聞雞起爐 港式麻辣雞煲火鍋.jpg",
                        "city": "kaohsiung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:45:38.976Z",
                        "updatedAt": "2020-05-17T10:45:38.976Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11655e9701e00224e6656",
                        "name": "品嘉茶餐廳",
                        "businesstime": "11:00-14:00 17:00-21:00",
                        "address": "臺中市北屯區熱河路二段220號",
                        "phone": "0422466568",
                        "price": "200",
                        "website": "https://www.facebook.com/%E5%93%81%E5%98%89%E8%8C%B6%E9%A4%90%E5%BB%B3-290644857982020/",
                        "picture": "/src/image/content/taichung/品嘉茶餐廳.jpg",
                        "city": "taichung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:47:49.542Z",
                        "updatedAt": "2020-05-17T10:47:49.542Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec116d5e9701e00224e6657",
                        "name": "港味高師傅港式點心",
                        "businesstime": "11:00-14:00 17:00-21:00",
                        "address": "高雄市新興區中山一路104號",
                        "phone": "072418885",
                        "price": "300",
                        "website": "https://www.facebook.com/%E6%B8%AF%E5%91%B3%E9%AB%98%E5%B8%AB%E7%88%B6%E6%B8%AF%E5%BC%8F%E9%BB%9E%E5%BF%83%E5%B0%88%E8%B3%A3%E5%BA%97-525229724270542/",
                        "picture": "/src/image/content/kaohsiung/港味高師傅港式點心.jpg",
                        "city": "kaohsiung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:49:57.242Z",
                        "updatedAt": "2020-05-17T10:49:57.242Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11776e9701e00224e6658",
                        "name": "港豐撈麵飯堂",
                        "businesstime": "11:30-15:00 17:00-21:00 21:30-00:00",
                        "address": "新北市板橋區新海路128號",
                        "phone": "0222598003",
                        "price": "350",
                        "website": "https://www.facebook.com/GangFengLaoMianFanTang/",
                        "picture": "/src/image/content/newtaipei/港豐撈麵飯堂.jpg",
                        "city": "newtaipei",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:52:38.952Z",
                        "updatedAt": "2020-05-17T10:52:38.952Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec117d0e9701e00224e6659",
                        "name": "十二月 粥品·茶飲·私房菜(大安店)",
                        "businesstime": "11:30-00:00 00:00-1:00",
                        "address": "臺北市大安區大安路一段19巷10號",
                        "phone": "0227761393",
                        "price": "500",
                        "website": "https://www.facebook.com/12moon.taipei.tw/",
                        "picture": "/src/image/content/taipei/十二月 粥品·茶飲·私房菜(大安店).jpg",
                        "city": "taipei",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:54:08.390Z",
                        "updatedAt": "2020-05-17T10:54:08.390Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec1188de9701e00224e665a",
                        "name": "東悅坊",
                        "businesstime": "11:00-14:30 17:00-21:30",
                        "address": "臺南市永康區永大路二段707號",
                        "phone": "063015888",
                        "price": "500",
                        "website": "https://www.facebook.com/tungyat.dondom/",
                        "picture": "/src/image/content/tainan/東悅坊.jpg",
                        "city": "tainan",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:57:17.019Z",
                        "updatedAt": "2020-05-17T10:57:17.019Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11926e9701e00224e665b",
                        "name": "剛剛出爐",
                        "businesstime": "7:00-19:00",
                        "address": "臺中市北屯區和福路302號",
                        "phone": "0424373809",
                        "price": "125",
                        "website": "facebook.com/justbake.tw/",
                        "picture": "/src/image/content/taichung/剛剛出爐.jpg",
                        "city": "taichung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:59:50.923Z",
                        "updatedAt": "2020-05-17T10:59:50.923Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11a12e9701e00224e665c",
                        "name": "Teaday喝茶天-茶家食堂",
                        "businesstime": "10:00-20:00",
                        "address": "新北市鶯歌區重慶街62之1號B1",
                        "phone": "0226782782",
                        "price": "400",
                        "website": "https://www.facebook.com/teaday621/",
                        "picture": "/src/image/content/newtaipei/Teaday喝茶天-茶家食堂.jpg",
                        "city": "newtaipei",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T11:03:46.262Z",
                        "updatedAt": "2020-05-17T11:03:46.262Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11a4de9701e00224e665d",
                        "name": "楓茶記",
                        "businesstime": "10:00-22:00",
                        "address": "高雄市左營區至聖路291號",
                        "phone": "075575189",
                        "price": "89",
                        "website": "https://www.facebook.com/foncha.tea/",
                        "picture": "/src/image/content/kaohsiung/楓茶記.jpg",
                        "city": "kaohsiung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T11:04:45.623Z",
                        "updatedAt": "2020-05-17T11:04:45.623Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11a9ae9701e00224e665e",
                        "name": "尖東茶記",
                        "businesstime": "11:30-14:30 17:00-21:00",
                        "address": "高雄市左營區裕誠路262號",
                        "phone": "075566163",
                        "price": "350",
                        "website": "https://www.facebook.com/%E5%B0%96%E6%9D%B1%E8%8C%B6%E8%A8%98-953721684721080/",
                        "picture": "/src/image/content/kaohsiung/尖東茶記.jpg",
                        "city": "kaohsiung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T11:06:02.241Z",
                        "updatedAt": "2020-05-17T11:06:02.241Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11ad1e9701e00224e665f",
                        "name": "翠王香港茶餐廳",
                        "businesstime": "11:30-14:30 17:30-21:00",
                        "address": "高雄市左營區明誠二路366號",
                        "phone": "075508120",
                        "price": "200",
                        "website": "https://www.facebook.com/TauiWong/",
                        "picture": "/src/image/content/kaohsiung/翠王香港茶餐廳.jpg",
                        "city": "kaohsiung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T11:06:57.628Z",
                        "updatedAt": "2020-05-17T11:06:57.628Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11b23e9701e00224e6660",
                        "name": "品心 港式飲茶",
                        "businesstime": "11:00-22:00",
                        "address": "台中市南屯區公益路二段138號",
                        "phone": "0423286661",
                        "price": "500",
                        "website": "https://www.facebook.com/pages/%E5%93%81%E5%BF%83%E6%B8%AF%E5%BC%8F%E9%A3%B2%E8%8C%B6-%E5%85%AC%E7%9B%8A%E5%BA%97/1140171736029017",
                        "picture": "/src/image/content/taichung/品心 港式飲茶.jpg",
                        "city": "taichung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T11:08:19.586Z",
                        "updatedAt": "2020-05-17T11:08:19.586Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11bb8e9701e00224e6661",
                        "name": "金苑茶餐廳",
                        "businesstime": "9:00-21:00",
                        "address": "臺中市西區公益路147號",
                        "phone": "0423025345",
                        "price": "200",
                        "website": "https://www.facebook.com/%E9%87%91%E8%8B%91%E8%8C%B6%E9%A4%90%E5%BB%B3-797318060310165/",
                        "picture": "/src/image/content/taichung/金苑茶餐廳.jpg",
                        "city": "taichung",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T11:10:48.754Z",
                        "updatedAt": "2020-05-17T11:10:48.754Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/hongkong' // origin api url

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