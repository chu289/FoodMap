window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ec2bdf5e9701e00224e668e",
                        "name": "溫叨 Cafe & Dining",
                        "businesstime": "11:00-22:00",
                        "address": "台北市信義區菸廠路88號2樓",
                        "phone": "0266388007",
                        "price": "300",
                        "website": "https://www.facebook.com/pages/%E6%BA%AB%E5%8F%A8-Cafe-Dining/2306476522902598",
                        "picture": "/src/image/content/taipei/溫叨 Cafe & Dining.jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T16:55:17.949Z",
                        "updatedAt": "2020-05-18T16:55:17.949Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2be52e9701e00224e668f",
                        "name": "飛饗西式創意料理",
                        "businesstime": "11:30-14:30 17:30-21:30",
                        "address": "臺南市東區長榮路二段272號",
                        "phone": "062088188",
                        "price": "500",
                        "website": "https://www.facebook.com/dreaming272/",
                        "picture": "/src/image/content/tainan/飛饗西式創意料理.jpg",
                        "city": "tainan",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T16:56:50.818Z",
                        "updatedAt": "2020-05-18T16:56:50.818Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2bea9e9701e00224e6690",
                        "name": "am Daily",
                        "businesstime": "11:30-21:30",
                        "address": "臺北市大安區忠孝東路三段217巷3弄22號1樓",
                        "phone": "0227755909",
                        "price": "200",
                        "website": "https://www.facebook.com/amDailyTaipei/",
                        "picture": "/src/image/content/taipei/am Daily.jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T16:58:17.855Z",
                        "updatedAt": "2020-05-18T16:58:17.855Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2bef6e9701e00224e6691",
                        "name": "Guru House",
                        "businesstime": "10:00-00:00",
                        "address": "臺北市萬華區成都路27巷10號",
                        "phone": "0223612522",
                        "price": "180",
                        "website": "https://www.facebook.com/guruhouse.ximen/",
                        "picture": "/src/image/content/taipei/Guru House.jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T16:59:34.583Z",
                        "updatedAt": "2020-05-18T16:59:34.583Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2bfa3e9701e00224e6692",
                        "name": "漫步雲端森林餐廳",
                        "businesstime": "11:00-18:00",
                        "address": "苗栗縣三義鄉雙潭村崩山下22號",
                        "phone": "037879085",
                        "price": "500",
                        "website": "https://www.facebook.com/WalkCloudsRestaurant/",
                        "picture": "/src/image/content/othercities/漫步雲端森林餐廳.jpg",
                        "city": "othercities",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:02:27.473Z",
                        "updatedAt": "2020-05-18T17:02:27.473Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c011e9701e00224e6693",
                        "name": "福森院子 早午餐 咖啡 Brunch Coffee",
                        "businesstime": "9:00-17:00",
                        "address": "桃園市桃園區中寧街12巷16號",
                        "phone": "033583113",
                        "price": "320",
                        "website": "https://www.facebook.com/Fussenbrunch2/",
                        "picture": "/src/image/content/othercities/福森院子 早午餐 咖啡 Brunch Coffee.jpg",
                        "city": "othercities",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:04:17.076Z",
                        "updatedAt": "2020-05-18T17:04:17.076Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c073e9701e00224e6694",
                        "name": "岩漿火鍋-明星店",
                        "businesstime": "11:00-00:00",
                        "address": "新竹縣竹東鎮明星一路110號",
                        "phone": "035821318",
                        "price": "500",
                        "website": "https://www.facebook.com/pages/%E5%B2%A9%E6%BC%BF%E7%81%AB%E9%8D%8B%E9%A4%90%E5%BB%B3%E6%98%8E%E6%98%9F%E5%BA%97/973671262685988",
                        "picture": "/src/image/content/othercities/岩漿火鍋-明星店.jpg",
                        "city": "othercities",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:05:55.230Z",
                        "updatedAt": "2020-05-18T17:05:55.230Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c0b4e9701e00224e6695",
                        "name": "上官木桶鍋 中壢加盟店",
                        "businesstime": "11:00-00:00",
                        "address": "桃園市中壢區日新路23號",
                        "phone": "034163990",
                        "price": "500",
                        "website": "https://www.facebook.com/Shangguan20180915/",
                        "picture": "/src/image/content/othercities/上官木桶鍋 中壢加盟店.jpg",
                        "city": "othercities",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:07:00.193Z",
                        "updatedAt": "2020-05-18T17:07:00.193Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c103e9701e00224e6696",
                        "name": "井兵衛壽喜燒",
                        "businesstime": "11:30-14:30 17:30-21:30",
                        "address": "高雄市鼓山區美術北三路93號",
                        "phone": "075868155",
                        "price": "500",
                        "website": "https://www.facebook.com/%E4%BA%95%E5%85%B5%E8%A1%9B%E5%A3%BD%E5%96%9C%E7%87%92-594560134088209/",
                        "picture": "/src/image/content/kaohsiung/井兵衛壽喜燒.jpg",
                        "city": "kaohsiung",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:08:19.989Z",
                        "updatedAt": "2020-05-18T17:08:19.989Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c14fe9701e00224e6697",
                        "name": "台韓民國 韓式燒肉店",
                        "businesstime": "12:00-23:00",
                        "address": "臺北市大安區忠孝東路四段170巷6弄7號",
                        "phone": "0227115007",
                        "price": "500",
                        "website": "https://www.facebook.com/TaiwanKorea2016/",
                        "picture": "/src/image/content/taipei/台韓民國 韓式燒肉店.jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:09:35.902Z",
                        "updatedAt": "2020-05-18T17:09:35.902Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c1aae9701e00224e6698",
                        "name": "Pamukkale 棉花堡 土耳其餐廳",
                        "businesstime": "11:00-22:00",
                        "address": "高雄市三民區民族一路427號2樓",
                        "phone": "073952611",
                        "price": "300",
                        "website": "https://www.facebook.com/PamukkaleKaohsiung/",
                        "picture": "/src/image/content/kaohsiung/Pamukkale 棉花堡 土耳其餐廳.jpg",
                        "city": "kaohsiung",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:11:06.713Z",
                        "updatedAt": "2020-05-18T17:11:06.713Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c1f2e9701e00224e6699",
                        "name": "繼光香香雞-繼光總店J&G Fried Chicken Next",
                        "businesstime": "11:00-22:00",
                        "address": "臺中市中區繼光街91號",
                        "phone": "0422267919",
                        "price": "150",
                        "website": "https://www.facebook.com/%E7%B9%BC%E5%85%89%E9%A6%99%E9%A6%99%E9%9B%9E-JG-Fried-Chicken-334647290582918/",
                        "picture": "/src/image/content/taichung/繼光香香雞-繼光總店J&G Fried Chicken Next.jpg",
                        "city": "taichung",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:12:18.536Z",
                        "updatedAt": "2020-05-18T17:12:18.536Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c256e9701e00224e669a",
                        "name": "叻沙屋 正宗馬來料理",
                        "businesstime": "11:00-15:00 17:00-21:00",
                        "address": "臺南市中西區府前路一段170號",
                        "phone": "062222245",
                        "price": "159",
                        "website": "https://www.facebook.com/LaksaHouse2018/",
                        "picture": "/src/image/content/tainan/叻沙屋 正宗馬來料理.jpg",
                        "city": "tainan",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:13:58.507Z",
                        "updatedAt": "2020-05-18T17:26:34.747Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c29ee9701e00224e669b",
                        "name": "熟成21牛肉麵",
                        "businesstime": "11:00-21:00",
                        "address": "臺北市內湖區民善街128號",
                        "phone": "0227942939",
                        "price": "285",
                        "website": "https://www.facebook.com/loveaged21/",
                        "picture": "/src/image/content/taipei/熟成21牛肉麵.jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:15:10.223Z",
                        "updatedAt": "2020-05-18T17:27:01.287Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c2e8e9701e00224e669c",
                        "name": "055龍蝦海鮮",
                        "businesstime": "11:00-14:30 16:00-19:30",
                        "address": "花蓮縣壽豐鄉132號",
                        "phone": "038671055",
                        "price": "500",
                        "website": "https://www.facebook.com/pages/055%E9%BE%8D%E8%9D%A6%E9%A4%90%E5%BB%B3/215804781778146",
                        "picture": "/src/image/content/hualien/055龍蝦海鮮.jpg",
                        "city": "hualien",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:16:24.853Z",
                        "updatedAt": "2020-05-18T17:27:30.251Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c32ee9701e00224e669d",
                        "name": "steak bistro 和洋",
                        "businesstime": "11:30-22:30",
                        "address": "臺北市信義區松仁路58號遠東百貨信義店號3樓",
                        "phone": "0287863331",
                        "price": "500",
                        "website": "https://www.facebook.com/steakbistrowayo/",
                        "picture": "/src/image/content/taipei/steak bistro 和洋.jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:17:34.353Z",
                        "updatedAt": "2020-05-18T17:27:55.285Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c3a5e9701e00224e669e",
                        "name": "呂河日本料理",
                        "businesstime": "11:30-14:00 17:00-22:00",
                        "address": "臺北市大安區敦化南路二段81巷45弄14號",
                        "phone": "0227047082",
                        "price": "300",
                        "website": "https://www.facebook.com/%E5%91%82%E6%B2%B3%E6%97%A5%E6%9C%AC%E6%96%99%E7%90%86-1534239683383948/",
                        "picture": "/src/image/content/taipei/呂河日本料理.jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:19:33.374Z",
                        "updatedAt": "2020-05-18T17:28:17.621Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c405e9701e00224e669f",
                        "name": "吾獨食驗室 woodoofoodlab(東區總店)",
                        "businesstime": "12:00-22:30",
                        "address": "臺北市大安區忠孝東路四段170巷17弄12號1F",
                        "phone": "0227712500",
                        "price": "300",
                        "website": "https://www.facebook.com/brunchlab/",
                        "picture": "/src/image/content/taipei/吾獨食驗室 woodoofoodlab(東區總店).jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:21:09.592Z",
                        "updatedAt": "2020-05-18T17:28:42.841Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c46be9701e00224e66a0",
                        "name": "福顏日本料理",
                        "businesstime": "11:30-14:00 17:30-21:30",
                        "address": "臺北市松山區慶城街26號",
                        "phone": "0227120078",
                        "price": "180",
                        "website": "https://www.facebook.com/%E7%A6%8F%E9%A1%8F%E6%97%A5%E6%9C%AC%E6%96%99%E7%90%86-194313633926031/",
                        "picture": "/src/image/content/taipei/福顏日本料理.jpg",
                        "city": "taipei",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:22:51.182Z",
                        "updatedAt": "2020-05-18T17:29:15.569Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2c4c3e9701e00224e66a1",
                        "name": "蠻荒咖啡 Desolate Coffee",
                        "businesstime": "10:00-18:00",
                        "address": "南投縣魚池鄉文化巷41號",
                        "phone": "0492897903",
                        "price": "210",
                        "website": "https://www.facebook.com/desolatecoffee/",
                        "picture": "/src/image/content/othercities/蠻荒咖啡 Desolate Coffee.jpg",
                        "city": "othercities",
                        "kind": "restaurant",
                        "createdAt": "2020-05-18T17:24:19.909Z",
                        "updatedAt": "2020-05-18T17:29:42.746Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/restaurant' // origin api url

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