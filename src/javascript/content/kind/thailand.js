window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebfb3e4e9701e00224e65bb",
                        "name": "泰泰餐桌 Thai Table",
                        "businesstime": "11:30-14:00 17:30-21:00",
                        "address": "高雄市三民區明哲路31號",
                        "phone": "073438678",
                        "price": "300",
                        "website": "https://www.facebook.com/thaitablekaohsiung/",
                        "picture": "/src/image/content/kaohsiung/泰泰餐桌 Thai Table.jpg",
                        "city": "kaohsiung",
                        "kind": "thailand",
                        "createdAt": "2020-05-16T09:35:32.257Z",
                        "updatedAt": "2020-05-16T09:35:32.257Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d6eee9701e00224e65f2",
                        "name": "吉爾泰",
                        "businesstime": "11:00-20:00",
                        "address": "花蓮縣花蓮市新興路22號",
                        "phone": "0966823625",
                        "price": "110",
                        "website": "https://www.facebook.com/JillThaiFood/",
                        "picture": "/src/image/content/hualien/吉爾泰.jpg",
                        "city": "hualien",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T06:17:18.503Z",
                        "updatedAt": "2020-05-17T06:17:18.503Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10a9fe9701e00224e663c",
                        "name": "泰獅 泰式料理",
                        "businesstime": "11:30-14:30 17:30-21:00",
                        "address": "臺北市中正區武昌街一段16巷11號",
                        "phone": "0223117778",
                        "price": "400",
                        "website": "https://www.facebook.com/pages/%E6%B3%B0%E7%8D%85%E6%B3%B0%E5%BC%8F%E6%96%99%E7%90%86/795253330589241",
                        "picture": "/src/image/content/taipei/泰獅 泰式料理.jpg",
                        "city": "taipei",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T09:57:51.070Z",
                        "updatedAt": "2020-05-17T09:57:51.070Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10b10e9701e00224e663d",
                        "name": "OKU 噢酷食所",
                        "businesstime": "11:30-14:00 16:30-20:30",
                        "address": "臺南市中西區五妃街296號",
                        "phone": "0916499690",
                        "price": "130",
                        "website": "https://www.facebook.com/oku.nf/",
                        "picture": "/src/image/content/tainan/OKU 噢酷食所.jpg",
                        "city": "tainan",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T09:59:44.937Z",
                        "updatedAt": "2020-05-17T09:59:44.937Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10b6fe9701e00224e663e",
                        "name": "阿含thai",
                        "businesstime": "10:00-20:00",
                        "address": "桃園市中壢區龍平路251號",
                        "phone": "0931077228",
                        "price": "250",
                        "website": "https://www.facebook.com/%E9%98%BF%E5%90%ABthai-1317268891690755/",
                        "picture": "/src/image/content/othercities/阿含thai.jpg",
                        "city": "othercities",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:01:19.485Z",
                        "updatedAt": "2020-05-17T10:01:19.485Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10bfee9701e00224e663f",
                        "name": "吉米THAI",
                        "businesstime": "11:00-14:30 17:00-22:00",
                        "address": "台南市東區裕農路708號",
                        "phone": "062676708",
                        "price": "200",
                        "website": "https://www.facebook.com/jimmythai708/",
                        "picture": "/src/image/content/tainan/吉米THAI.jpg",
                        "city": "tainan",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:03:42.823Z",
                        "updatedAt": "2020-05-17T10:03:42.823Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10cbde9701e00224e6640",
                        "name": "山色 Shānsè",
                        "businesstime": "11:30-16:00",
                        "address": "臺中市南屯區幹城街107號",
                        "phone": "0422527272",
                        "price": "300",
                        "website": "https://www.facebook.com/shanlinxiang/",
                        "picture": "/src/image/content/taichung/山色 Shānsè.jpg",
                        "city": "taichung",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:06:53.074Z",
                        "updatedAt": "2020-05-17T10:06:53.074Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10d1de9701e00224e6641",
                        "name": "制私 泰式小販",
                        "businesstime": "12:00-20:30",
                        "address": "高雄市鳳山區文清街124號",
                        "phone": "0986317303",
                        "price": "95",
                        "website": "https://www.facebook.com/%E5%88%B6%E7%A7%81-Selfish-Homemade-106357477579786/",
                        "picture": "/src/image/content/kaohsiung/制私 泰式小販.jpg",
                        "city": "kaohsiung",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:08:29.602Z",
                        "updatedAt": "2020-05-17T10:08:29.602Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10d72e9701e00224e6642",
                        "name": "Mr. 帕",
                        "businesstime": "10:00-14:30 17:30-21:00",
                        "address": "高雄市鼓山區華榮路7號",
                        "phone": "075530105",
                        "price": "200",
                        "website": "https://www.facebook.com/MrPa2014/",
                        "picture": "/src/image/content/kaohsiung/Mr. 帕.jpg",
                        "city": "kaohsiung",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:09:54.986Z",
                        "updatedAt": "2020-05-17T10:09:54.986Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10dc6e9701e00224e6643",
                        "name": "塔塔加泰式料理創始店",
                        "businesstime": "11:30-14:30 17:30-21:30",
                        "address": "臺中市西區西屯路一段147之1號",
                        "phone": "0422081000",
                        "price": "350",
                        "website": "https://www.facebook.com/%E5%A1%94%E5%A1%94%E5%8A%A0%E6%B3%B0%E5%BC%8F%E6%96%99%E7%90%86%E5%89%B5%E5%A7%8B%E5%BA%97-1486864131599523/",
                        "picture": "/src/image/content/taichung/塔塔加泰式料理創始店.jpg",
                        "city": "taichung",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:11:18.386Z",
                        "updatedAt": "2020-05-17T10:11:18.386Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10e3de9701e00224e6644",
                        "name": "1958老洋房",
                        "businesstime": "11:00-14:30 17:30-21:00",
                        "address": "臺南市東區長榮路二段32巷88號",
                        "phone": "0980886120",
                        "price": "230",
                        "website": "https://www.facebook.com/1958%E5%8F%A4%E5%85%B8%E6%B4%8B%E6%88%BF-367741287161152/",
                        "picture": "/src/image/content/tainan/1958老洋房.jpg",
                        "city": "tainan",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:13:17.291Z",
                        "updatedAt": "2020-05-17T10:13:17.291Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10e8ae9701e00224e6645",
                        "name": "大城享泰食泰食時尚餐廳",
                        "businesstime": "11:00-15:00 17:00-21:30",
                        "address": "臺中市北屯區軍福九路306號",
                        "phone": "0424368868",
                        "price": "400",
                        "website": "https://www.facebook.com/sometimes01/",
                        "picture": "/src/image/content/taichung/大城享泰食泰食時尚餐廳.jpg",
                        "city": "taichung",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:14:34.962Z",
                        "updatedAt": "2020-05-17T10:14:34.962Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10ed5e9701e00224e6646",
                        "name": "木家泰式料理",
                        "businesstime": "11:00-14:00 17:00-21:00",
                        "address": "高雄市前鎮區和平二路191號",
                        "phone": "0927396959",
                        "price": "180",
                        "website": "https://www.facebook.com/MuChinChin959/",
                        "picture": "/src/image/content/kaohsiung/木家泰式料理.jpg",
                        "city": "kaohsiung",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:15:49.100Z",
                        "updatedAt": "2020-05-17T10:15:49.100Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10f47e9701e00224e6647",
                        "name": "銀魚泰國料理伊通店",
                        "businesstime": "11:00-14:00",
                        "address": "臺北市中山區建國北路一段138巷24號",
                        "phone": "0225080091",
                        "price": "180",
                        "website": "https://m.facebook.com/profile.php?id=1858721617679352&ref=stream",
                        "picture": "/src/image/content/taipei/銀魚泰國料理伊通店.jpg",
                        "city": "taipei",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:17:43.581Z",
                        "updatedAt": "2020-05-17T10:17:43.581Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11084e9701e00224e6649",
                        "name": "心泰原創泰國料理",
                        "businesstime": "11:00-14:30 17:30-20:30",
                        "address": "臺北市大安區敦化南路二段81巷47號",
                        "phone": "0227085945",
                        "price": "480",
                        "website": "https://www.facebook.com/thaiheartoriginal/",
                        "picture": "/src/image/content/taipei/心泰原創泰國料理.jpg",
                        "city": "taipei",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:23:00.537Z",
                        "updatedAt": "2020-05-17T10:23:00.537Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec110d8e9701e00224e664a",
                        "name": "莎麗家庭餐廳",
                        "businesstime": "12:00-14:30 19:00-21:30",
                        "address": "臺南市仁德區文華路三段189巷92弄75號",
                        "phone": "062705461",
                        "price": "200",
                        "website": "https://www.facebook.com/Samilyhomekitchen/",
                        "picture": "/src/image/content/tainan/莎麗家庭餐廳.jpg",
                        "city": "tainan",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:24:24.888Z",
                        "updatedAt": "2020-05-17T10:24:24.888Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11137e9701e00224e664b",
                        "name": "暹羅廚房",
                        "businesstime": "11:00-14:30 17:00-22:00",
                        "address": "新北市三重區大同北路15號",
                        "phone": "0229820363",
                        "price": "170",
                        "website": "https://www.facebook.com/siamluo/",
                        "picture": "/src/image/content/newtaipei/暹羅廚房.jpg",
                        "city": "newtaipei",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:25:59.339Z",
                        "updatedAt": "2020-05-17T10:25:59.339Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11186e9701e00224e664c",
                        "name": "Coco Brother 椰兄 中山店",
                        "businesstime": "11:00-21:30",
                        "address": "臺北市大同區南京西路18巷6弄8之2號",
                        "phone": "0225508675",
                        "price": "300",
                        "website": "https://www.facebook.com/Cocobrother.icecream/",
                        "picture": "/src/image/content/taipei/Coco Brother 椰兄 中山店.jpg",
                        "city": "taipei",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:27:18.999Z",
                        "updatedAt": "2020-05-17T10:27:18.999Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11225e9701e00224e664d",
                        "name": "泰樂泰國料理",
                        "businesstime": "11:00-14:00 17:00-20:00",
                        "address": "新北市板橋區公園街52巷4號",
                        "phone": "0917339689",
                        "price": "230",
                        "website": "https://www.facebook.com/taylethaifood/",
                        "picture": "/src/image/content/newtaipei/泰樂泰國料理.jpg",
                        "city": "newtaipei",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:29:57.366Z",
                        "updatedAt": "2020-05-17T10:29:57.366Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11272e9701e00224e664e",
                        "name": "PAPAYA泰 泰式料理餐廳",
                        "businesstime": "11:00-22:00",
                        "address": "高雄市前鎮區中華五路1111號",
                        "phone": "075362652",
                        "price": "440",
                        "website": "https://www.facebook.com/Papaya%E6%B3%B0%E6%B3%B0%E5%BC%8F%E6%96%99%E7%90%86%E9%AB%98%E9%9B%84%E7%BE%8E%E9%A3%9F-132717464021146/",
                        "picture": "/src/image/content/kaohsiung/PAPAYA泰 泰式料理餐廳.jpg",
                        "city": "kaohsiung",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:31:14.280Z",
                        "updatedAt": "2020-05-17T10:31:14.280Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/thailand' // origin api url

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