window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
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
                    },
                    {
                        "_id": "5ec29fbde9701e00224e6666",
                        "name": "肉老大 頂級肉品涮涮鍋",
                        "businesstime": "00:00-1:30 11:30-16:00 16:30-00:00",
                        "address": "臺北市大安區敦化南路二段331巷16號",
                        "phone": "0287325339",
                        "price": "500",
                        "website": "https://www.facebook.com/robosshotpot/",
                        "picture": "/src/image/content/taipei/肉老大 頂級肉品涮涮鍋.jpg",
                        "city": "taipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T14:46:21.413Z",
                        "updatedAt": "2020-05-18T14:46:21.413Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a028e9701e00224e6667",
                        "name": "食藝石頭火鍋",
                        "businesstime": "17:00-23:00",
                        "address": "臺中市西區梅川西路二段33號",
                        "phone": "0906397010",
                        "price": "250",
                        "website": "https://www.facebook.com/no10stonepot/",
                        "picture": "/src/image/content/taichung/食藝石頭火鍋.jpg",
                        "city": "taichung",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T14:48:08.668Z",
                        "updatedAt": "2020-05-18T14:48:08.668Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a3b9e9701e00224e6668",
                        "name": "愛食鍋麻辣鴛鴦 新田店",
                        "businesstime": "12:00-15:00 17:30-23:00",
                        "address": "高雄市前金區新田路252號",
                        "phone": "072210288",
                        "price": "500",
                        "website": "https://www.facebook.com/%E6%84%9B%E9%A3%9F%E9%8D%8B%E9%BA%BB%E8%BE%A3%E9%B4%9B%E9%B4%A6-%E6%96%B0%E7%94%B0%E5%BA%97-2131497893838804/",
                        "picture": "/src/image/content/kaohsiung/愛食鍋麻辣鴛鴦 新田店.jpg",
                        "city": "kaohsiung",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:03:21.266Z",
                        "updatedAt": "2020-05-18T15:03:21.266Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a4c8e9701e00224e6669",
                        "name": "肉老大 頂級肉品涮涮鍋 錦西店",
                        "businesstime": "00:00-1:30 11:30-00:00",
                        "address": "臺北市中山區錦西街11號",
                        "phone": "0225361777",
                        "price": "350",
                        "website": "https://www.facebook.com/robosshotpot2/",
                        "picture": "/src/image/content/taipei/肉老大 頂級肉品涮涮鍋 錦西店.jpg",
                        "city": "taipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:07:52.779Z",
                        "updatedAt": "2020-05-18T15:07:52.779Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a569e9701e00224e666a",
                        "name": "恆八味屋日式火鍋專賣中壢店",
                        "businesstime": "11:30-15:00 17:30-22:00",
                        "address": "桃園市中壢區復興路45號",
                        "phone": "034223658",
                        "price": "500",
                        "website": "https://www.facebook.com/8.shabu/",
                        "picture": "/src/image/content/othercities/恆八味屋日式火鍋專賣中壢店.jpg",
                        "city": "othercities",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:10:33.132Z",
                        "updatedAt": "2020-05-18T15:10:33.132Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a5b3e9701e00224e666b",
                        "name": "牧石鍋物 桃園統領店 Mushi Shabu-Shabu",
                        "businesstime": "11:00-14:30 17:00-21:30",
                        "address": "桃園市桃園區中正路61號7樓",
                        "phone": "033346777",
                        "price": "500",
                        "website": "https://www.facebook.com/mushiTonlin/",
                        "picture": "/src/image/content/othercities/牧石鍋物 桃園統領店 Mushi Shabu-Shabu.jpg",
                        "city": "othercities",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:11:47.946Z",
                        "updatedAt": "2020-05-18T15:11:47.946Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a6e1e9701e00224e666c",
                        "name": "源本家燒肉火鍋",
                        "businesstime": "17:00-22:30",
                        "address": "臺北市中山區民生西路66巷11號",
                        "phone": "0225238259",
                        "price": "399",
                        "website": "https://www.facebook.com/pages/%E6%BA%90%E6%9C%AC%E5%AE%B6%E7%87%92%E7%83%A4%E7%81%AB%E9%8D%8B/1642291212535444",
                        "picture": "/src/image/content/taipei/源本家燒肉火鍋.jpg",
                        "city": "taipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:16:49.982Z",
                        "updatedAt": "2020-05-18T15:16:49.982Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a8a8e9701e00224e666d",
                        "name": "上上籤極品麻辣鴛鴦鍋 林園店",
                        "businesstime": "17:30-23:00",
                        "address": "高雄市林園區田厝路83號",
                        "phone": "076431887",
                        "price": "500",
                        "website": "https://www.facebook.com/%E4%B8%8A%E4%B8%8A%E7%B1%A4%E6%A5%B5%E5%93%81%E9%BA%BB%E8%BE%A3%E9%B4%9B%E9%B4%A6%E9%8D%8B-526847897804048/",
                        "picture": "/src/image/content/kaohsiung/上上籤極品麻辣鴛鴦鍋 林園店.jpg",
                        "city": "kaohsiung",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:24:24.083Z",
                        "updatedAt": "2020-05-18T15:24:24.083Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a9d3e9701e00224e666e",
                        "name": "滾吧 Qunba 鍋物 北大店",
                        "businesstime": "11:30-22:00",
                        "address": "新北市樹林區學勤路318號",
                        "phone": "0226809003",
                        "price": "350",
                        "website": "https://www.facebook.com/%E6%BB%BE%E5%90%A7-Qunba-%E9%8D%8B%E7%89%A9-180277219352068/",
                        "picture": "/src/image/content/newtaipei/滾吧 Qunba 鍋物 北大店.jpg",
                        "city": "newtaipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:29:23.663Z",
                        "updatedAt": "2020-05-18T15:29:23.663Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2aa52e9701e00224e666f",
                        "name": "江府錦 麻辣鴛鴦 獨享鍋",
                        "businesstime": "11:30-15:30 17:30-22:00",
                        "address": "高雄市鼓山區青海路108號",
                        "phone": "075869665",
                        "price": "400",
                        "website": "https://www.facebook.com/jfjhotpot/",
                        "picture": "/src/image/content/kaohsiung/江府錦 麻辣鴛鴦 獨享鍋.jpg",
                        "city": "kaohsiung",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:31:30.978Z",
                        "updatedAt": "2020-05-18T15:31:30.978Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2aa99e9701e00224e6670",
                        "name": "有間火鍋",
                        "businesstime": "11:30-15:00 17:00-22:00",
                        "address": "臺北市松山區南京東路四段52巷2號",
                        "phone": "0225786969",
                        "price": "500",
                        "website": "https://www.facebook.com/YJHotPot/",
                        "picture": "/src/image/content/taipei/有間火鍋.jpg",
                        "city": "taipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:32:41.652Z",
                        "updatedAt": "2020-05-18T15:32:41.652Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2aaefe9701e00224e6671",
                        "name": "小尚品精制鍋物",
                        "businesstime": "11:00-22:00",
                        "address": "臺北市文山區木柵路一段325之3號",
                        "phone": "0286618599",
                        "price": "250",
                        "website": "https://www.facebook.com/xiaoshangping/",
                        "picture": "/src/image/content/taipei/小尚品精制鍋物.jpg",
                        "city": "taipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:34:07.287Z",
                        "updatedAt": "2020-05-18T15:34:07.287Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2ab3de9701e00224e6672",
                        "name": "酒爐澳門卜卜蜆安平店",
                        "businesstime": "00:00-2:00 17:00-00:00",
                        "address": "臺南市南區中華西路一段265號",
                        "phone": "0966339795",
                        "price": "300",
                        "website": "https://www.facebook.com/95pupuap/",
                        "picture": "/src/image/content/tainan/酒爐澳門卜卜蜆安平店.jpg",
                        "city": "tainan",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:35:25.511Z",
                        "updatedAt": "2020-05-18T15:35:25.511Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2ab93e9701e00224e6673",
                        "name": "伯樂町",
                        "businesstime": "17:00-23:00",
                        "address": "高雄市新興區中山一路270號",
                        "phone": "072350253",
                        "price": "330",
                        "website": "https://www.facebook.com/Boletown/",
                        "picture": "/src/image/content/kaohsiung/伯樂町.jpg",
                        "city": "kaohsiung",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:36:51.609Z",
                        "updatedAt": "2020-05-18T15:36:51.609Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2abe1e9701e00224e6674",
                        "name": "冊竹園鍋坊",
                        "businesstime": "11:00-14:00 17:00-21:00",
                        "address": "台中市北屯區青島路四段54號",
                        "phone": "0422385038",
                        "price": "260",
                        "website": "facebook.com/Yuenbook0422385038/",
                        "picture": "/src/image/content/taichung/冊竹園鍋坊.jpg",
                        "city": "taichung",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:38:09.189Z",
                        "updatedAt": "2020-05-18T15:38:09.189Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2ac59e9701e00224e6675",
                        "name": "食尚吃到飽涮涮鍋 中和旗艦店",
                        "businesstime": "11:30-15:00 17:00-21:30",
                        "address": "新北市中和區員山路391號",
                        "phone": "0222221119",
                        "price": "329",
                        "website": "https://www.facebook.com/hotpot22221119/",
                        "picture": "/src/image/content/newtaipei/食尚吃到飽涮涮鍋 中和旗艦店.jpg",
                        "city": "newtaipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:40:09.690Z",
                        "updatedAt": "2020-05-18T15:44:58.759Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2ad2be9701e00224e6676",
                        "name": "尚品屋精緻涮涮鍋",
                        "businesstime": "11:00-14:00 17:00-22:00",
                        "address": "基隆市中山區中正路34之1號",
                        "phone": "0224286622",
                        "price": "220",
                        "website": "https://www.facebook.com/%E5%B0%9A%E5%93%81%E5%B1%8B%E7%B2%BE%E7%B7%BB%E6%B6%AE%E6%B6%AE%E9%8D%8B-231464523536572/",
                        "picture": "/src/image/content/othercities/尚品屋精緻涮涮鍋.jpg",
                        "city": "othercities",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:43:39.665Z",
                        "updatedAt": "2020-05-18T15:43:39.665Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2ae90e9701e00224e6677",
                        "name": "新園牛肉爐",
                        "businesstime": "00:00-1:00 11:30-15:00 17:00-00:00",
                        "address": "屏東縣屏東市興市巷13號",
                        "phone": "087323547",
                        "price": "500",
                        "website": "https://www.facebook.com/%E5%B1%8F%E6%9D%B1%E5%A4%9C%E5%B8%82%E6%96%B0%E5%9C%92%E6%B1%95%E9%A0%AD%E7%81%AB%E9%8D%8B-191740400859389/",
                        "picture": "/src/image/content/othercities/新園牛肉爐.jpg",
                        "city": "othercities",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:49:36.508Z",
                        "updatedAt": "2020-05-18T15:49:36.508Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2aefee9701e00224e6678",
                        "name": "毛房蔥柚鍋",
                        "businesstime": "11:30-14:00 17:30-21:00",
                        "address": "臺南市東區府東街148號",
                        "phone": "062098199",
                        "price": "500",
                        "website": "https://www.facebook.com/Maofun2098199/",
                        "picture": "/src/image/content/tainan/毛房蔥柚鍋.jpg",
                        "city": "tainan",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:51:26.828Z",
                        "updatedAt": "2020-05-18T15:51:26.828Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/hotpot' // origin api url

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