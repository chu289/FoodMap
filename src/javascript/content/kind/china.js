window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ec0e9a8e9701e00224e660b",
                        "name": "Kitchen Island 中島",
                        "businesstime": "11:30-15:00 17:00-20:00",
                        "address": "臺北市大安區忠孝東路三段276巷12號",
                        "phone": "0989234839",
                        "price": "180",
                        "website": "https://www.facebook.com/k2930/",
                        "picture": "/src/image/content/taipei/Kitchen Island 中島.jpg",
                        "city": "taipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:37:12.705Z",
                        "updatedAt": "2020-05-17T07:37:12.705Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ea00e9701e00224e660c",
                        "name": "馨苑小料理",
                        "businesstime": "11:30-20:30",
                        "address": "臺中市西區民生北路106號",
                        "phone": "0423029989",
                        "price": "350",
                        "website": "https://www.facebook.com/shinyuan106/",
                        "picture": "/src/image/content/taichung/馨苑小料理.jpg",
                        "city": "taichung",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:38:40.576Z",
                        "updatedAt": "2020-05-17T07:38:40.576Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ea5ae9701e00224e660d",
                        "name": "澳們打邊爐",
                        "businesstime": "11:00-00:00 00:00-01:00",
                        "address": "臺中市西區五權西四街106號",
                        "phone": "0423787373",
                        "price": "448",
                        "website": "https://www.facebook.com/macaohotpot/",
                        "picture": "/src/image/content/taichung/澳們打邊爐.jpg",
                        "city": "taichung",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:40:10.602Z",
                        "updatedAt": "2020-05-17T07:40:10.602Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0eac0e9701e00224e660e",
                        "name": "一吃上癮甕缸雞",
                        "businesstime": "12:00-14:30 17:00-00:00 00:00-01:00",
                        "address": "臺北市松山區市民大道四段211號",
                        "phone": "0225776158",
                        "price": "350",
                        "website": "https://www.facebook.com/%E4%B8%80%E5%90%83%E4%B8%8A%E7%99%AE%E7%94%95%E7%BC%B8%E9%9B%9E-217142228656686/",
                        "picture": "/src/image/content/taipei/一吃上癮甕缸雞.jpg",
                        "city": "taipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:41:52.448Z",
                        "updatedAt": "2020-05-17T07:41:52.448Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0eb0de9701e00224e660f",
                        "name": "丰禾日麗 台北南京東店",
                        "businesstime": "11:30-14:30 17:30-21:30",
                        "address": "臺北市中山區南京東路二段146號2F",
                        "phone": "0225076808",
                        "price": "450",
                        "website": "https://www.facebook.com/%E4%B8%B0%E7%A6%BE%E6%97%A5%E9%BA%97%E5%8F%B0%E5%BC%8F%E5%B0%8F%E9%A4%A8-241184303231894/",
                        "picture": "/src/image/content/taipei/丰禾日麗 台北南京東店.jpg",
                        "city": "taipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:43:09.781Z",
                        "updatedAt": "2020-05-17T07:43:09.781Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0eb5ee9701e00224e6610",
                        "name": "朝日鵝 鵝肉概念料理",
                        "businesstime": "15:00-19:00",
                        "address": "臺中市北區北平路二段165號",
                        "phone": "0925219627",
                        "price": "200",
                        "website": "https://www.facebook.com/goodfoodtoday88/",
                        "picture": "/src/image/content/taichung/朝日鵝 鵝肉概念料理.jpg",
                        "city": "taichung",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:44:30.212Z",
                        "updatedAt": "2020-05-17T07:44:30.212Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0eb9fe9701e00224e6611",
                        "name": "仁武烤鴨",
                        "businesstime": "10:00-20:00",
                        "address": "高雄市仁武區鳳仁路95之21號",
                        "phone": "073719315",
                        "price": "150",
                        "website": "https://www.facebook.com/pages/%E4%BB%81%E6%AD%A6%E7%83%A4%E9%B4%A8/140996405961145",
                        "picture": "/src/image/content/kaohsiung/仁武烤鴨.jpg",
                        "city": "kaohsiung",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:45:35.904Z",
                        "updatedAt": "2020-05-17T07:45:35.904Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ebe9e9701e00224e6612",
                        "name": "冬瓜與胖子",
                        "businesstime": "12:00-14:00 18:00-22:00",
                        "address": "高雄市前鎮區英德街784巷12號",
                        "phone": "077279023",
                        "price": "350",
                        "website": "https://www.facebook.com/whitegourdandfatperson/",
                        "picture": "/src/image/content/kaohsiung/冬瓜與胖子.jpg",
                        "city": "kaohsiung",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:46:49.247Z",
                        "updatedAt": "2020-05-17T07:46:49.247Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ec3ee9701e00224e6613",
                        "name": "南村｜私廚‧小酒棧",
                        "businesstime": "11:30-14:00 17:30-22:00",
                        "address": "臺北市大安區忠孝東路四段216巷33弄10號",
                        "phone": "0227117272",
                        "price": "500",
                        "website": "https://www.facebook.com/44svbistro/",
                        "picture": "/src/image/content/taipei/南村｜私廚‧小酒棧.jpg",
                        "city": "taipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:48:14.095Z",
                        "updatedAt": "2020-05-17T07:48:14.095Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ecece9701e00224e6614",
                        "name": "吃頓飯餐館 江浙料理",
                        "businesstime": "11:30-13:30 17:30-20:30",
                        "address": "臺中市太平區太順路339號",
                        "phone": "0423919998",
                        "price": "200",
                        "website": "https://www.facebook.com/justdoeat339/",
                        "picture": "/src/image/content/taichung/吃頓飯餐館 江浙料理.jpg",
                        "city": "taichung",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:51:08.936Z",
                        "updatedAt": "2020-05-17T07:51:08.936Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ed71e9701e00224e6615",
                        "name": "富鼎砂鍋粥",
                        "businesstime": "11:00-14:00 17:00-22:00",
                        "address": "新北市新莊區新泰路195號",
                        "phone": "0229900308",
                        "price": "500",
                        "website": "https://www.facebook.com/FUDING2014/",
                        "picture": "/src/image/content/newtaipei/富鼎砂鍋粥.jpg",
                        "city": "newtaipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:53:21.041Z",
                        "updatedAt": "2020-05-17T07:53:21.041Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0edbde9701e00224e6616",
                        "name": "尚品園手作創意料理",
                        "businesstime": "7:00-10:00 11:00-14:00 17:30-21:00",
                        "address": "臺北市中山區南京東路三段16號2樓",
                        "phone": "0225070798",
                        "price": "500",
                        "website": "https://www.facebook.com/Uhoteltaipei/",
                        "picture": "/src/image/content/taipei/尚品園手作創意料理.jpg",
                        "city": "taipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:54:37.020Z",
                        "updatedAt": "2020-05-17T07:54:37.020Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ee09e9701e00224e6617",
                        "name": "北平楊寶寶蒸餃",
                        "businesstime": "11:00-00:00 00:00-1:00",
                        "address": "高雄市楠梓區朝明路106號",
                        "phone": "073513322",
                        "price": "100",
                        "website": "https://www.facebook.com/yangbaobaotw/",
                        "picture": "/src/image/content/kaohsiung/北平楊寶寶蒸餃.jpg",
                        "city": "kaohsiung",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:55:53.622Z",
                        "updatedAt": "2020-05-17T07:55:53.622Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ee65e9701e00224e6618",
                        "name": "廚房有雞 北安旗艦店",
                        "businesstime": "11:00-14:00 17:00-22:30",
                        "address": "臺南市北區北安路一段161號",
                        "phone": "062832929",
                        "price": "500",
                        "website": "https://www.facebook.com/chicken.kitchen062832929/",
                        "picture": "/src/image/content/tainan/廚房有雞 北安旗艦店.jpg",
                        "city": "tainan",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:57:25.564Z",
                        "updatedAt": "2020-05-17T07:57:25.564Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0eea5e9701e00224e6619",
                        "name": "本部活蝦之家",
                        "businesstime": "15:00-00:00",
                        "address": "新竹縣竹北市新溪街396號",
                        "phone": "035511222",
                        "price": "500",
                        "website": "https://www.facebook.com/%E6%9C%AC%E9%83%A8%E6%B4%BB%E8%9D%A6%E4%B9%8B%E5%AE%B6-199071376777966/",
                        "picture": "/src/image/content/othercities/本部活蝦之家.jpg",
                        "city": "othercities",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:58:29.140Z",
                        "updatedAt": "2020-05-17T07:58:29.140Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0eef1e9701e00224e661a",
                        "name": "六堆伙房台中老虎城店",
                        "businesstime": "11:00-21:15",
                        "address": "臺中市西屯區河南路三段120號3樓",
                        "phone": "0422519636",
                        "price": "200",
                        "website": "https://www.facebook.com/6dtiger/",
                        "picture": "/src/image/content/taichung/六堆伙房台中老虎城店.jpg",
                        "city": "taichung",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:59:45.032Z",
                        "updatedAt": "2020-05-17T07:59:45.032Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ef82e9701e00224e661b",
                        "name": "稻舍 Rice & Shine",
                        "businesstime": "12:00-15:00 17:30-21:00",
                        "address": "臺北市大同區迪化街一段329號",
                        "phone": "0225506607",
                        "price": "350",
                        "website": "https://www.facebook.com/ricenshine329/",
                        "picture": "/src/image/content/taipei/稻舍 Rice & Shine.jpg",
                        "city": "taipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T08:02:10.944Z",
                        "updatedAt": "2020-05-17T08:02:10.944Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0efd5e9701e00224e661c",
                        "name": "永心鳳茶二店",
                        "businesstime": "11:30-21:30",
                        "address": "高雄市三民區同盟三路590號",
                        "phone": "073116878",
                        "price": "350",
                        "website": "https://www.facebook.com/yonshintea/",
                        "picture": "/src/image/content/kaohsiung/永心鳳茶二店.jpg",
                        "city": "kaohsiung",
                        "kind": "china",
                        "createdAt": "2020-05-17T08:03:33.171Z",
                        "updatedAt": "2020-05-17T08:03:33.171Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0f048e9701e00224e661d",
                        "name": "九華樓",
                        "businesstime": "11:30-14:30 17:30-21:30",
                        "address": "臺北市中山區林森北路369號",
                        "phone": "0277216619",
                        "price": "500",
                        "website": "https://www.facebook.com/chiouhwarestaurant/",
                        "picture": "/src/image/content/taipei/九華樓.jpg",
                        "city": "taipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T08:05:28.774Z",
                        "updatedAt": "2020-05-17T08:05:28.774Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0f09be9701e00224e661e",
                        "name": "蔣府宴",
                        "businesstime": "11:30-14:30 17:00-21:00",
                        "address": "桃園市龍潭區高原路891號",
                        "phone": "034716635",
                        "price": "500",
                        "website": "https://www.facebook.com/chiangfuyan/",
                        "picture": "/src/image/content/othercities/蔣府宴.jpg",
                        "city": "othercities",
                        "kind": "china",
                        "createdAt": "2020-05-17T08:06:51.272Z",
                        "updatedAt": "2020-05-17T08:06:51.272Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0f0dee9701e00224e661f",
                        "name": "添食埊粒",
                        "businesstime": "11:00-14:00 17:00-21:00",
                        "address": "高雄市三民區重慶街157號",
                        "phone": "073221071",
                        "price": "400",
                        "website": "https://www.facebook.com/TianShiDiLi168/",
                        "picture": "/src/image/content/kaohsiung/添食埊粒.jpg",
                        "city": "kaohsiung",
                        "kind": "china",
                        "createdAt": "2020-05-17T08:07:58.009Z",
                        "updatedAt": "2020-05-17T08:07:58.009Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/kind/china' // origin api url

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