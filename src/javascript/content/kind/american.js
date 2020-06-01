window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebde1a3d328590019ae4ef8",
                        "name": "Burger Joint 7分so 美式廚房 - 崇德店",
                        "businesstime": "8:30-22:00",
                        "address": "臺中市北區崇德路一段518號",
                        "phone": "0422373939",
                        "price": "300",
                        "website": "https://www.facebook.com/BurgerJointChongDe/",
                        "picture": "/src/image/content/taichung/Burger Joint 7分so 美式廚房 - 崇德店.jpg",
                        "city": "taichung",
                        "kind": "american",
                        "createdAt": "2020-05-15T00:26:11.983Z",
                        "updatedAt": "2020-05-15T08:24:30.159Z",
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
                        "_id": "5ebf8199e9701e00224e65b1",
                        "name": "小古巴手作古巴漢堡專賣店",
                        "businesstime": "10:30-15:00 17:00-21:00",
                        "address": "臺南市中西區城隍街48號",
                        "phone": "0903330663",
                        "price": "160",
                        "website": "https://www.facebook.com/littlecubaintaiwan/",
                        "picture": "/src/image/content/tainan/小古巴手作古巴漢堡專賣店.jpg",
                        "city": "tainan",
                        "kind": "american",
                        "createdAt": "2020-05-16T06:00:57.362Z",
                        "updatedAt": "2020-05-16T06:00:57.362Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebfb766e9701e00224e65c3",
                        "name": "Arkansas Diner",
                        "businesstime": "9:00-21:00",
                        "address": "高雄市左營區富民路13巷16號",
                        "phone": "075509177",
                        "price": "300",
                        "website": "https://www.facebook.com/Goodsouthernfood/",
                        "picture": "/src/image/content/kaohsiung/Arkansas Diner.jpg",
                        "city": "kaohsiung",
                        "kind": "american",
                        "createdAt": "2020-05-16T09:50:30.864Z",
                        "updatedAt": "2020-05-16T09:50:30.864Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0f70de9701e00224e6620",
                        "name": "多士號 台北信義店",
                        "businesstime": "7:00-14:00",
                        "address": "臺北市信義區忠孝東路四段553巷6弄9號",
                        "phone": "0933809553",
                        "price": "90",
                        "website": "https://www.facebook.com/%E4%BF%A1%E7%BE%A9%E5%8D%80%E5%95%86%E5%9C%88-202401773122363/",
                        "picture": "/src/image/content/taipei/多士號 台北信義店.jpg",
                        "city": "taipei",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:34:21.964Z",
                        "updatedAt": "2020-05-17T08:34:21.964Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0f89ae9701e00224e6622",
                        "name": "爸爸KevinBBQ Baba Kevin",
                        "businesstime": "11:30-14:00 18:00-20:30",
                        "address": "臺北市中山區民生東路二段115巷6號",
                        "phone": "0255941188",
                        "price": "400",
                        "website": "https://www.facebook.com/BabaKevinBarbecue/",
                        "picture": "/src/image/content/taipei/爸爸KevinBBQ Baba Kevin.jpg",
                        "city": "taipei",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:40:58.684Z",
                        "updatedAt": "2020-05-17T08:40:58.684Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0f985e9701e00224e6623",
                        "name": "貳樓餐廳 Second Floor Cafe 公益店",
                        "businesstime": "8:00-21:30",
                        "address": "臺中市南屯區公益路二段172號",
                        "phone": "0423272527",
                        "price": "390",
                        "website": "https://www.facebook.com/Second-Floor-Cafe-%E8%B2%B3%E6%A8%93%E9%A4%90%E9%A3%B2-339626616162370/",
                        "picture": "/src/image/content/taichung/貳樓餐廳 Second Floor Cafe 公益店.jpg",
                        "city": "taichung",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:44:53.146Z",
                        "updatedAt": "2020-05-17T08:44:53.146Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fa25e9701e00224e6624",
                        "name": "Eat enjoy意享美式廚房 林口三井店",
                        "businesstime": "10:00-22:00",
                        "address": "新北市林口區文化三路一段390之1",
                        "phone": "0226005881",
                        "price": "500",
                        "website": "https://www.facebook.com/eatenjoy2/",
                        "picture": "/src/image/content/newtaipei/Eat enjoy意享美式廚房 林口三井店.jpg",
                        "city": "newtaipei",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:47:33.037Z",
                        "updatedAt": "2020-05-17T08:47:33.037Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fa7ae9701e00224e6625",
                        "name": "馬爹力舊美式餐酒館",
                        "businesstime": "18:15-00:00 00:00-3:15",
                        "address": "高雄市苓雅區青年二路212號1樓",
                        "phone": "072166654",
                        "price": "450",
                        "website": "https://www.facebook.com/BatterySaloon/",
                        "picture": "/src/image/content/kaohsiung/馬爹力舊美式餐酒館.jpg",
                        "city": "kaohsiung",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:48:58.292Z",
                        "updatedAt": "2020-05-17T08:48:58.292Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fad6e9701e00224e6626",
                        "name": "All-in飽庫",
                        "businesstime": "9:30-00:00",
                        "address": "臺中市北區三民路三段131巷12號",
                        "phone": "0422251117",
                        "price": "300",
                        "website": "https://www.facebook.com/ALLINBURGER/",
                        "picture": "/src/image/content/taichung/All-in飽庫.jpg",
                        "city": "taichung",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:50:30.451Z",
                        "updatedAt": "2020-05-17T08:50:30.451Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fb36e9701e00224e6627",
                        "name": "鹿耳晚晚早餐",
                        "businesstime": "8:30-15:30 18:00-23:30",
                        "address": "臺南市東區林森路一段153巷19號",
                        "phone": "062370910",
                        "price": "250",
                        "website": "https://www.facebook.com/lurelatelatebreakfast/",
                        "picture": "/src/image/content/tainan/鹿耳晚晚早餐.jpg",
                        "city": "tainan",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:52:06.537Z",
                        "updatedAt": "2020-05-17T08:52:06.537Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fb8be9701e00224e6628",
                        "name": "BURGER OUT",
                        "businesstime": "12:00-20:30",
                        "address": "臺北市信義區忠孝東路四段559巷12號",
                        "phone": "0227671234",
                        "price": "200",
                        "website": "https://www.facebook.com/Burgerouttw/",
                        "picture": "/src/image/content/taipei/BURGER OUT.jpg",
                        "city": "taipei",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:53:31.070Z",
                        "updatedAt": "2020-05-17T08:53:31.070Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fbf0e9701e00224e6629",
                        "name": "木漢堡原木炭烤漢堡聚落",
                        "businesstime": "11:30-21:00",
                        "address": "台南市安中路ㄧ段970-3號",
                        "phone": "0909678239",
                        "price": "250",
                        "website": "https://www.facebook.com/woodburgershop/",
                        "picture": "/src/image/content/tainan/木漢堡原木炭烤漢堡聚落.jpg",
                        "city": "tainan",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:55:12.529Z",
                        "updatedAt": "2020-05-17T08:55:12.529Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fc37e9701e00224e662a",
                        "name": "Abc美式燒烤車",
                        "businesstime": "12:00-20:00",
                        "address": "台南市中西區國華街三段20巷三號",
                        "phone": "0905588793",
                        "price": "145",
                        "website": "https://www.facebook.com/abc0905588793/",
                        "picture": "/src/image/content/tainan/Abc美式燒烤車.jpg",
                        "city": "tainan",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:56:23.973Z",
                        "updatedAt": "2020-05-17T08:56:23.973Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fca2e9701e00224e662b",
                        "name": "Crisken脆司肯美式炸雞",
                        "businesstime": "12:00-22:00",
                        "address": "高雄市三民區鼎中路419號",
                        "phone": "073493551",
                        "price": "89",
                        "website": "https://www.facebook.com/Crisken%E8%84%86%E5%8F%B8%E8%82%AF%E7%BE%8E%E5%BC%8F%E7%82%B8%E9%9B%9E-379998592452908/",
                        "picture": "/src/image/content/kaohsiung/Crisken脆司肯美式炸雞.jpg",
                        "city": "kaohsiung",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:58:10.259Z",
                        "updatedAt": "2020-05-17T08:58:10.259Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fcece9701e00224e662c",
                        "name": "牛逼館子",
                        "businesstime": "11:00-20:30",
                        "address": "臺中市西區五權一街64號",
                        "phone": "0423722313",
                        "price": "250",
                        "website": "https://www.facebook.com/noobpipe/",
                        "picture": "/src/image/content/taichung/牛逼館子.jpg",
                        "city": "taichung",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:59:24.786Z",
                        "updatedAt": "2020-05-17T08:59:24.786Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fd3ce9701e00224e662d",
                        "name": "MaMa's 鐵鍋早午餐",
                        "businesstime": "8:00-16:00",
                        "address": "臺北市松山區南京東路四段133巷8弄3號",
                        "phone": "0227138865",
                        "price": "150",
                        "website": "https://www.facebook.com/mamas168/",
                        "picture": "/src/image/content/taipei/MaMa's 鐵鍋早午餐.jpg",
                        "city": "taipei",
                        "kind": "american",
                        "createdAt": "2020-05-17T09:00:44.734Z",
                        "updatedAt": "2020-05-17T09:00:44.734Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fd87e9701e00224e662e",
                        "name": "WakuWaku Burger",
                        "businesstime": "10:00-21:30",
                        "address": "臺北市信義區吳興街117號1樓",
                        "phone": "0227586651",
                        "price": "300",
                        "website": "https://www.facebook.com/wakuwakuburger/",
                        "picture": "/src/image/content/taipei/WakuWaku Burger.jpg",
                        "city": "taipei",
                        "kind": "american",
                        "createdAt": "2020-05-17T09:01:59.351Z",
                        "updatedAt": "2020-05-17T09:01:59.351Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fdc5e9701e00224e662f",
                        "name": "TankQ Cafe & Bar",
                        "businesstime": "11:00-22:00",
                        "address": "臺北市中山區松江路90巷3之2號",
                        "phone": "0225219930",
                        "price": "400",
                        "website": "https://www.facebook.com/TANKQ.COFFEE/",
                        "picture": "/src/image/content/taipei/TankQ Cafe & Bar.jpg",
                        "city": "taipei",
                        "kind": "american",
                        "createdAt": "2020-05-17T09:03:01.596Z",
                        "updatedAt": "2020-05-17T09:03:01.596Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec10948e9701e00224e663b",
                        "name": "Hungry Jacob愛吃借口火烤漢堡",
                        "businesstime": "11:00-21:00",
                        "address": "臺中市西區昇平街9號",
                        "phone": "0423052700",
                        "price": "100",
                        "website": "https://www.facebook.com/hungry.jacob/",
                        "picture": "/src/image/content/taichung/Hungry Jacob愛吃借口火烤漢堡.jpg",
                        "city": "taichung",
                        "kind": "american",
                        "createdAt": "2020-05-17T09:52:08.538Z",
                        "updatedAt": "2020-05-17T09:52:08.538Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/american' // origin api url

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