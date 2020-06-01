window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
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
                        "_id": "5ec0d050e9701e00224e65e4",
                        "name": "杜倫先生",
                        "businesstime": "9:00-22:00",
                        "address": "花蓮縣花蓮市中華路23號",
                        "phone": "038358080",
                        "price": "60",
                        "website": "https://www.facebook.com/mr.turontw/",
                        "picture": "/src/image/content/hualien/杜倫先生.jpg",
                        "city": "hualien",
                        "kind": "dessert",
                        "createdAt": "2020-05-17T05:49:04.984Z",
                        "updatedAt": "2020-05-17T05:49:04.984Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d1a2e9701e00224e65e5",
                        "name": "花蓮來來牛排",
                        "businesstime": "11:00-20:30",
                        "address": "花蓮縣吉安鄉光華二街46巷16號",
                        "phone": "038523245",
                        "price": "400",
                        "website": "https://www.facebook.com/OS0002/",
                        "picture": "/src/image/content/hualien/花蓮來來牛排.jpg",
                        "city": "hualien",
                        "kind": "dinner",
                        "createdAt": "2020-05-17T05:54:42.565Z",
                        "updatedAt": "2020-05-17T05:54:42.565Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d1f9e9701e00224e65e6",
                        "name": "蔡記豆花",
                        "businesstime": "13:30-22:00",
                        "address": "花蓮縣花蓮市民國路73號",
                        "phone": "038313533",
                        "price": "45",
                        "website": "https://www.facebook.com/%E8%94%A1%E8%A8%98%E8%B1%86%E8%8A%B1-136294616433525/",
                        "picture": "/src/image/content/hualien/蔡記豆花.jpg",
                        "city": "hualien",
                        "kind": "dessert",
                        "createdAt": "2020-05-17T05:56:09.776Z",
                        "updatedAt": "2020-05-17T05:56:09.776Z",
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
                        "_id": "5ec0d2aee9701e00224e65e8",
                        "name": "Ngchus 晤子cafécake",
                        "businesstime": "10:00-18:00",
                        "address": "花蓮縣花蓮市建中街11號",
                        "phone": "0932631909",
                        "price": "200",
                        "website": "https://www.facebook.com/Ngchus.cafe/",
                        "picture": "/src/image/content/hualien/Ngchus 晤子cafécake.jpg",
                        "city": "hualien",
                        "kind": "dessert",
                        "createdAt": "2020-05-17T05:59:10.614Z",
                        "updatedAt": "2020-05-17T05:59:10.614Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d2f7e9701e00224e65e9",
                        "name": "Firsr Floor Caf'e壹樓 貓·咖啡",
                        "businesstime": "11:00-18:30",
                        "address": "花蓮縣花蓮市中美路67之7號",
                        "phone": "038239818",
                        "price": "250",
                        "website": "https://www.facebook.com/FirstFloorCatCafe/",
                        "picture": "/src/image/content/hualien/Firsr Floor Caf'e壹樓 貓·咖啡.jpg",
                        "city": "hualien",
                        "kind": "dessert",
                        "createdAt": "2020-05-17T06:00:23.045Z",
                        "updatedAt": "2020-05-17T06:00:23.045Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d3a2e9701e00224e65ea",
                        "name": "石屋燒肉火鍋",
                        "businesstime": "11:30-15:30 17:00-23:00",
                        "address": "花蓮縣花蓮市中正路644之2號",
                        "phone": "038352311",
                        "price": "500",
                        "website": "https://www.facebook.com/OS0005/",
                        "picture": "/src/image/content/hualien/石屋燒肉火鍋.jpg",
                        "city": "hualien",
                        "kind": "dinner",
                        "createdAt": "2020-05-17T06:03:14.320Z",
                        "updatedAt": "2020-05-17T06:03:14.320Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d3fae9701e00224e65eb",
                        "name": "花蓮•深夜食堂",
                        "businesstime": "17:30-22:30",
                        "address": "花蓮縣花蓮市建國路6巷2號",
                        "phone": "0908156543",
                        "price": "300",
                        "website": "https://www.facebook.com/SushiTaiwan/",
                        "picture": "/src/image/content/hualien/花蓮•深夜食堂.jpg",
                        "city": "hualien",
                        "kind": "dinner",
                        "createdAt": "2020-05-17T06:04:42.865Z",
                        "updatedAt": "2020-05-17T06:04:42.865Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d50fe9701e00224e65ec",
                        "name": "本壽司料理亭",
                        "businesstime": "11:30-14:00 17:30-21:00",
                        "address": "花蓮縣花蓮市林森路299號",
                        "phone": "038321328",
                        "price": "500",
                        "website": "https://www.facebook.com/motosusi/",
                        "picture": "/src/image/content/hualien/本壽司料理亭.jpg",
                        "city": "hualien",
                        "kind": "dinner",
                        "createdAt": "2020-05-17T06:09:19.271Z",
                        "updatedAt": "2020-05-17T06:09:19.271Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d572e9701e00224e65ed",
                        "name": "豆 和菓子",
                        "businesstime": "13:00-21:00",
                        "address": "花蓮縣花蓮市一心街44號",
                        "phone": "038358398",
                        "price": "100",
                        "website": "https://www.facebook.com/mame.wagashi/",
                        "picture": "/src/image/content/hualien/豆 和菓子.jpg",
                        "city": "hualien",
                        "kind": "dessert",
                        "createdAt": "2020-05-17T06:10:58.763Z",
                        "updatedAt": "2020-05-17T06:10:58.763Z",
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
                        "_id": "5ec0d624e9701e00224e65ef",
                        "name": "家咖哩",
                        "businesstime": "11:00-15:00 17:00-21:00",
                        "address": "花蓮縣花蓮市中美路106號",
                        "phone": "038343290",
                        "price": "150",
                        "website": "https://www.facebook.com/jiacurry/",
                        "picture": "/src/image/content/hualien/家咖哩.jpg",
                        "city": "hualien",
                        "kind": "dinner",
                        "createdAt": "2020-05-17T06:13:56.154Z",
                        "updatedAt": "2020-05-17T06:13:56.154Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d666e9701e00224e65f0",
                        "name": "獵人廚房Hunter's kitchen",
                        "businesstime": "12:00-20:30",
                        "address": "花蓮縣花蓮市東興二街13巷3號",
                        "phone": "0916282350",
                        "price": "300",
                        "website": "https://www.facebook.com/hunterswildfoods/",
                        "picture": "/src/image/content/hualien/獵人廚房Hunter's kitchen.jpg",
                        "city": "hualien",
                        "kind": "italy",
                        "createdAt": "2020-05-17T06:15:02.495Z",
                        "updatedAt": "2020-05-17T06:15:02.495Z",
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
                    },
                    {
                        "_id": "5ec0d791e9701e00224e65f4",
                        "name": "小巷茉莉 MÔLi Café",
                        "businesstime": "12:00-20:29",
                        "address": "花蓮縣花蓮市三民街62號",
                        "phone": "038333562",
                        "price": "300",
                        "website": "https://www.facebook.com/molicafe2017/",
                        "picture": "/src/image/content/hualien/小巷茉莉 MÔLi Café.jpg",
                        "city": "hualien",
                        "kind": "dessert",
                        "createdAt": "2020-05-17T06:20:01.782Z",
                        "updatedAt": "2020-05-17T06:20:01.782Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0d7d4e9701e00224e65f5",
                        "name": "浮室 soave plan",
                        "businesstime": "13:30-19:30",
                        "address": "花蓮市成功街280號",
                        "phone": "038333562",
                        "price": "250",
                        "website": "https://www.facebook.com/soaveplan/",
                        "picture": "/src/image/content/hualien/浮室 soave plan.jpg",
                        "city": "hualien",
                        "kind": "dessert",
                        "createdAt": "2020-05-17T06:21:08.436Z",
                        "updatedAt": "2020-05-17T06:21:08.436Z",
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
                const url = 'http://node-mongodb-app-demo-app-project.apps.us-east-1.starter.openshift-online.com/stores/city/hualien' // origin api url

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