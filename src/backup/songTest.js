// const song = [
//     {
//         "link": "https://www.youtube.com/watch?v=JHSRTU31T14",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_tnoaa.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_tnoaa.jpg",
//         "song": "There's no one at all",
//         "name": ["Son Tung M-TP"],
//         "type": ["rap", "v-pop", "usuk", "dance / electronic"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/There_is_no_one_at_all.flac",
//         "length": 172,
//         "plays": 241,
//         "likes": 108
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=W4P8gl4dnrg",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_huthv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_huthv.jpg",
//         "song": "Hẹn ước từ hư vô",
//         "name": ["My Tam"],
//         "type": ["pop", "mood", "v-pop", "romance", "christmas"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/huthv.flac",
//         "length": 247,
//         "plays": 101,
//         "likes": 21
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=psZ1g9fMfeo",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ctcht.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ctcht.jpg",
//         "song": "Chúng ta của hiện tại",
//         "name": ["Son Tung M-TP"],
//         "type": ["pop", "v-pop", "r&b", "autumn"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/chungtacuahientai.flac",
//         "length": 301,
//         "plays": 871,
//         "likes": 363
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=FVuqNi0inPE",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_nytllsd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_nytllsd.jpg",
//         "song": "Người yêu tôi lạnh lùng sắt đá",
//         "name": ["Mr. Siro"],
//         "type": ["pop", "mood", "v-pop", "romance", "christmas"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/ntyllsd.mp3",
//         "length": 303,
//         "plays": 201,
//         "likes": 43
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Yw9Ra2UiVLw",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_chimsau.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_chimsau.jpg",
//         "song": "Chìm sâu",
//         "name": ["MCK", "Trung Quan"],
//         "type": ["rap", "r&b", "v-pop", "dance / electronic"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/chimsau.flac",
//         "length": 155,
//         "plays": 108,
//         "likes": 27
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=SGlBQR-ftVI",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_dcmvs.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_dcmvs.jpg",
//         "song": "Dù cho mai về sau",
//         "name": ["buitruonglinh"],
//         "type": ["pop", "chill", "mood", "v-pop", "romance"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/dcmvs.flac",
//         "length": 232,
//         "plays": 198,
//         "likes": 60
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=psZ1g9fMfeo",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_dbmh.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_dbmh.jpg",
//         "song": "Don't break my heart",
//         "name": ["Binz", "Touliver"],
//         "type": ["dance / electronic", "gaming", "rap", "v-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/dbmh.flac",
//         "length": 237,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=rIXhXaQ8tiM",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ndt.jpg",
//         "avatar": "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ndt.jpg",
//         "song": "Ngày đầu tiên",
//         "name": ["Duc Phuc"],
//         "type": ["mood", "pop", "v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ngaydautien.mp3",
//         "length": 208,
//         "plays": 63,
//         "likes": 8
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=UVbv-PJXm14",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_mangtienvechome.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_mangtienvechome.jpg",
//         "song": "Mang tiền về cho mẹ",
//         "name": ["Den"],
//         "type": ["rap", "lunar new year", "v-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/mtvcm.flac",
//         "length": 405,
//         "plays": 100,
//         "likes": 19
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=oNIwqIeNpU4",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_seetinh.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_seetinh.jpg",
//         "song": "See tình",
//         "name": ["Hoang Thuy Linh"],
//         "type": ["dance / electronic", "r&b", "v-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/seetinh.mp3",
//         "length": 185,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=D80QnP0iRBo",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_dnlli.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_dnlli.jpg",
//         "song": "Đau nhất là lặng im",
//         "name": ["Erik"],
//         "type": ["v-pop", "romance"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/daunhatlalangim.mp3",
//         "length": 286,
//         "plays": 12,
//         "likes": 3
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=ptSwuFTEYAo",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_tmcgya.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_tmcgya.jpg",
//         "song": "Thay mọi cô gái yêu anh",
//         "name": ["Amee"],
//         "type": ["v-pop", "chill", "mood", "romance"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thaymoicogaiyeuanh.flac",
//         "length": 215,
//         "plays": 83,
//         "likes": 17
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=4CCGI83vOVo",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_domdom.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_domdom.jpg",
//         "song": "Đom Đóm",
//         "name": ["Jack-J97"],
//         "type": ["v-pop", "mood", "autumn"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/domdom.flac",
//         "length": 324,
//         "plays": 156,
//         "likes": 91
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=vTJdVE_gjI0",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_divenha.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_divenha.jpg",
//         "song": "Đi về nhà",
//         "name": ["Den", "JustaTee"],
//         "type": ["v-pop", "chill", "mood"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/divenha.flac",
//         "length": 200,
//         "plays": 149,
//         "likes": 43
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=ixdSsW5n2rI",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_buocquanhau.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_buocquanhau.jpg",
//         "song": "Bước qua nhau",
//         "name": ["Vu"],
//         "type": ["v-pop", "chill", "mood", "autumn"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/buocquanhau.flac",
//         "length": 257,
//         "plays": 220,
//         "likes": 90
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Z7tiB0xMrZg",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_tinylove.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_tinylove.jpg",
//         "song": "tiny love",
//         "name": ["Thinh Suy"],
//         "type": ["v-pop", "chill", "mood", "romance"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/tinylove.flac",
//         "length": 158,
//         "plays": 77,
//         "likes": 12
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Z7tiB0xMrZg",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_mbyvdd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_mbyvdd.jpg",
//         "song": "Một bước yêu vạn dặm đau",
//         "name": ["Mr. Siro"],
//         "type": ["v-pop", "mood", "autumn"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/mbyvdd.mp3",
//         "length": 298,
//         "plays": 178,
//         "likes": 29
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=_esoNnEflzM",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ttecbd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ttecbd.jpg",
//         "song": "Trái tim em cũng biết đau",
//         "name": ["Bao Anh"],
//         "type": ["v-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/ttecbd.mp3",
//         "length": 302,
//         "plays": 63,
//         "likes": 21
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=OuNo8Tkb3lI",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_dtcev.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_dtcev.jpg",
//         "song": "Đường tôi chở em về",
//         "name": ["Buitruonglinh"],
//         "type": ["v-pop", "mood", "autumn", "romance"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/dtcev.mp3",
//         "length": 266,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=PR_yVho1Txc",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_missingyou.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_missingyou.jpg",
//         "song": "Missing you",
//         "name": ["Phuong Ly", "Tinle"],
//         "type": ["v-pop", "mood", "chill", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/missingyou.mp3",
//         "length": 242,
//         "plays": 43,
//         "likes": 17
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=0CIGPV3_MS4",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_kcc.jpg",
//         "avatar": "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_kcc.jpg",
//         "song": "Kiếp chồng chung",
//         "name": ["Nam em"],
//         "type": ["v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/kiepchongchung.mp3",
//         "length": 229,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=RlBkvjVss-s",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_sacvn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_sacvn.jpg",
//         "song": "Sao anh chưa về nhà",
//         "name": ["Amee", "Ricky Star"],
//         "type": ["v-pop", "chill", "mood", "r&b", "summer"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/saoanhchuave.mp3",
//         "length": 247,
//         "plays": 103,
//         "likes": 41
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=ZwDxaM5VBJM",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_dendakhongduong.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_dendakhongduong.jpg",
//         "song": "Đen đá không đường",
//         "name": ["Amee"],
//         "type": ["v-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dendakhongduong.flac",
//         "length": 180,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=ECxVfrwwTp0",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_gaclaiaulo.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_gaclaiaulo.jpg",
//         "song": "Gác lại âu lo",
//         "name": ["Da LAB"],
//         "type": ["v-pop", "mood", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/gaclaiaulo.flac",
//         "length": 282,
//         "plays": 98,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=0R8IbpKXavM",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ttbdty.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ttbdty.png",
//         "song": "Trên tình bạn dưới tình yêu",
//         "name": ["Min"],
//         "type": ["v-pop", "r&b", "dance / electronic"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/ttbdty.mp3",
//         "length": 199,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=663GAiYnWVk",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_namnguemru.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_namnguemru.jpg",
//         "song": "Nằm ngủ emru",
//         "name": ["Bich Phuong"],
//         "type": ["v-pop", "chill", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/namnguemru.mp3",
//         "length": 258,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=vpRi8S6uXAg",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_chvtx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_chvtx.jpg",
//         "song": "Có hẹn với thanh xuân",
//         "name": ["MONSTAR"],
//         "type": ["v-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cohenvoithanhxuan.flac",
//         "length": 218,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=xypzmu5mMPY",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_mrmsc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_mrmsc.jpeg",
//         "song": "Muộn rồi mà sao còn",
//         "name": ["Son Tung M-TP"],
//         "type": ["v-pop", "r&b", "romance"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/muonroimasaocon.flac",
//         "length": 275,
//         "plays": 170,
//         "likes": 80
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=UqKVL56IJB8",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_clkcn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_clkcn.jpg",
//         "song": "Chỉ là không cùng nhau",
//         "name": ["Tang Phuc", "Truong Thao Nhi"],
//         "type": ["v-pop", "mood", "autumn"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/chilakhongcungnhau.flac",
//         "length": 226,
//         "plays": 90,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=faSVTByG0LQ",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_tehn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_tehn.jpg",
//         "song": "Thích em hơi nhiều",
//         "name": ["Wren Evans"],
//         "type": ["v-pop", "mood", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thichemhoinhieu.flac",
//         "length": 171,
//         "plays": 70,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=qkPgUgkQE4Y",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_devuong.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_devuong.jpg",
//         "song": "Đế vương",
//         "name": ["Dinh Dung"],
//         "type": ["v-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/devuong.flac",
//         "length": 262,
//         "plays": 100,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=kfw7MYah2n0",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_3107.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_3107.jpg",
//         "song": "3107-3",
//         "name": ["W/N", "Duongg", "Titie"],
//         "type": ["v-pop", "mood", "chill"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/3107.flac",
//         "length": 240,
//         "plays": 80,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=BdPk9ipvczM",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_sgdlq.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_sgdlq.jpg",
//         "song": "Sài gòn đau lòng quá",
//         "name": ["Hua Kim Tuyen", "Hoang Duyen"],
//         "type": ["v-pop", "mood", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/saigondaulongqua.flac",
//         "length": 308,
//         "plays": 200,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Q6ZNsHvspEg",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_gieoque.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_gieoque.jpg",
//         "song": "Gieo quẻ",
//         "name": ["Hoang Thuy Linh", "Den Vau"],
//         "type": ["v-pop", "dance / electronic"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/gieoque.flac",
//         "length": 198,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Orv_t0KgEB8",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_rangkhon.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_rangkhon.png",
//         "song": "Răng khôn",
//         "name": ["Phi Phuong Anh", "RIN9"],
//         "type": ["v-pop", "mood"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/rangkhon.flac",
//         "length": 231,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=HZi4eJXWZU0",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_rtl.jpg",
//         "avatar": "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_rtl.jpg",
//         "song": "Rồi tới luôn",
//         "name": ["Nal"],
//         "type": ["v-pop", "lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/roitoiluon.flac",
//         "length": 246,
//         "plays": 70,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=1pquvJRgIMY",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_aino.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_aino.jpg",
//         "song": "Ái nộ",
//         "name": ["Masew", "Khoi Vu"],
//         "type": ["v-pop", "dance / electronic"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/aino.flac",
//         "length": 232,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Ki0LCD-IMXg",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_cqtl.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_cqtl.jpg",
//         "song": "Chim quý trong lồng",
//         "name": ["K-ICM", "Van Mai Huong"],
//         "type": ["v-pop", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/chimquytronglong.flac",
//         "length": 343,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Ws-QlpSltr8",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_trontim.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_trontim.jpg",
//         "song": "Trốn tìm",
//         "name": ["Den Vau", "MTV band"],
//         "type": ["v-pop", "pop", "rap", "mood", "autumn"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/trontim.flac",
//         "length": 248,
//         "plays": 230,
//         "likes": 100
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=d44UTUSTYKU",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_theplayah.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_theplayah.jpg",
//         "song": "The playah",
//         "name": ["Soobin", "Slim V"],
//         "type": ["v-pop", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/theplayah.flac",
//         "length": 449,
//         "plays": 170,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=2YllmPaKhkY",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_hcvn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_hcvn.jpg",
//         "song": "Hạ còn vương nắng",
//         "name": ["DATKAA", "KIDO"],
//         "type": ["v-pop", "summer", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/haconvuongnang.flac",
//         "length": 285,
//         "plays": 120,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=GMyF41IxReo",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_khuemoclan.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_khuemoclan.jpg",
//         "song": "Khuê mộc lang",
//         "name": ["Huong Ly", "Jombie"],
//         "type": ["v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/khuemoclang.flac",
//         "length": 205,
//         "plays": 70,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=R3trO4a49go",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_thucgiac.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_thucgiac.jpg",
//         "song": "Thức giấc",
//         "name": ["Da LAB"],
//         "type": ["v-pop", "pop", "r&b"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/thucgiac.flac",
//         "length": 269,
//         "plays": 120,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=n6Pnzi6r9NU",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_bqmcd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_bqmcd.jpg",
//         "song": "Bước qua mùa cô đơn",
//         "name": ["Vu"],
//         "type": ["v-pop", "mood", "autumn", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/buocquamuacodon.flac",
//         "length": 278,
//         "plays": 90,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Zzn9-ATB9aU",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_nangtho.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_nangtho.jpeg",
//         "song": "Nàng thơ",
//         "name": ["Hoang Dung"],
//         "type": ["v-pop", "mood", "pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/nangtho.flac",
//         "length": 254,
//         "plays": 80,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=J7eYhM6wXPo",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_anthan.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_anthan.jpg",
//         "song": "An thần",
//         "name": ["Low G", "Thang"],
//         "type": ["v-pop", "rap", "r&b"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/anthan.flac",
//         "length": 174,
//         "plays": 30,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=LZN4I3K8SC0",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_cuchillthoi.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_cuchillthoi.jpg",
//         "song": "Cứ chill thôi",
//         "name": ["Chillies", "Suni Ha Linh"],
//         "type": ["v-pop", "chill", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cuchillthoi.flac",
//         "length": 270,
//         "plays": 156,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=N4a9Db9_ijc",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_freakysquad.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_freakysquad.jpg",
//         "song": "Freaky squad",
//         "name": ["SpaceSpeakers"],
//         "type": ["v-pop", "rap", "dance / electronic", "gaming"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/freakysquad.flac",
//         "length": 196,
//         "plays": 40,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=dZ0ryALfs3Y",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_gnkol.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_gnkol.jpg",
//         "song": "Gặp nhưng không ở lại",
//         "name": ["Hien Ho", "Vuong Anh Tu"],
//         "type": ["v-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/gapnhungkhongolai.flac",
//         "length": 276,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=EBpp2VTSI2Q",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ydkqtcvkva.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ydkqtcvkva.jpg",
//         "song": "yêu đương khó quá thì Chạy Về Khóc Với Anh",
//         "name": ["Erik"],
//         "type": ["v-pop", "chill", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ydkqtcvkva.flac",
//         "length": 163,
//         "plays": 100,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=Bhg-Gw953b0",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_hoahaiduong.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_hoahaiduong.jpg",
//         "song": "Hoa hải đường",
//         "name": ["Jack - J97"],
//         "type": ["v-pop", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/hoahaiduong.flac",
//         "length": 229,
//         "plays": 90,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=jgZkrA8E5do",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_bctb.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_bctb.jpg",
//         "song": "Bigcityboi",
//         "name": ["Binz"],
//         "type": ["v-pop", "rap", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bigcityboi.flac",
//         "length": 201,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=6t-MjBazs3o",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ccyld.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ccyld.jpg",
//         "song": "Có chắc yêu là đây",
//         "name": ["Son Tung M-TP"],
//         "type": ["v-pop", "pop", "rap", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cochacyeuladay.mp3",
//         "length": 202,
//         "plays": 60,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=iwGuiSnr2Qc",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ekscts.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ekscts.png",
//         "song": "Em không sai chúng ta sai",
//         "name": ["Erik"],
//         "type": ["v-pop", "mood", "pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/ekscts.mp3",
//         "length": 291,
//         "plays": 100,
//         "likes": 70
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=ayJY9ieBuEU",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ktcnsk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ktcnsk.jpg",
//         "song": "Không thể cùng nhau suốt kiếp",
//         "name": ["Hoa Minzy", "Mr.Siro"],
//         "type": ["v-pop", "mood"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/ktcnsk.mp3",
//         "length": 300,
//         "plays": 130,
//         "likes": 50
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=BtulL3oArQw",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_namnguemru.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_namnguemru.jpg",
//         "song": "Ghen cô vy",
//         "name": ["Khac Hung", "Min", "Erik"],
//         "type": ["v-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/ghencovy.mp3",
//         "length": 189,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=__kGJZ-kPno",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_hcy.jpg",
//         "avatar": "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_hcy.jpg",
//         "song": "Hơn cả yêu",
//         "name": ["Duc Phuc"],
//         "type": ["v-pop", "mood", "pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/honcayeu.mp3",
//         "length": 256,
//         "plays": 90,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=5d6IiLmjQYg",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_canhba.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_canhba.jpg",
//         "song": "Canh ba",
//         "name": ["Nguyen Tran Trung Quan"],
//         "type": ["v-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/canhba.mp3",
//         "length": 284,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=zRdHnseM0PE",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_blackjack.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_blackjack.jpg",
//         "song": "BlackJack",
//         "name": ["Soobin", "Binz"],
//         "type": ["v-pop", "rap", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/blackjack.flac",
//         "length": 196,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=KKc_RMln5UY",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_loinho.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_loinho.jpg",
//         "song": "Lối nhỏ",
//         "name": ["Den Vau", "Phuong Anh Dao"],
//         "type": ["v-pop", "chill", "rap", "r&b"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/loinho.flac",
//         "length": 252,
//         "plays": 242,
//         "likes": 130
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=c7Yv9izJH5Y",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_cdvd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_cdvd.jpg",
//         "song": "Cung đàn vỡ đôi",
//         "name": ["Chi Pu"],
//         "type": ["v-pop", "chill", "mood", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cungdanvodoi.mp3",
//         "length": 316,
//         "plays": 120,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=akgNYX8i9Xs",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_chuyenrang.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_chuyenrang.jpg",
//         "song": "Chuyện rằng",
//         "name": ["Thinh Suy"],
//         "type": ["v-pop", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/chuyenrang.flac",
//         "length": 287,
//         "plays": 100,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=y_6aSG2yfe8",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_hnkm.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_hnkm.jpg",
//         "song": "Hoa nở không màu",
//         "name": ["Hoai Lam"],
//         "type": ["v-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/hoanokhongmau.mp3",
//         "length": 328,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=WAxxfzdcNdA",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_ebhtc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_ebhtc.jpg",
//         "song": "Em bỏ hút thuốc chưa",
//         "name": ["Bich Phuong"],
//         "type": ["v-pop", "chill", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/embohutthuocchua.mp3",
//         "length": 216,
//         "plays": 130,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=EFOBb6pZnuo",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_am.jpg",
//         "avatar": "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_am.jpg",
//         "song": "Ấm",
//         "name": ["Ha Anh Tuan"],
//         "type": ["v-pop", "mood", "autumn"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/am.mp3",
//         "length": 228,
//         "plays": 100,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com/watch?v=gOtfJ151ue4",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/chart_tdd.jpg",
//         "avatar": "https://nightmusic-api.herokuapp.com/api/resources/images/server/song_tdd.jpg",
//         "song": "Tết đông đầy",
//         "name": ["Kay Tran", "Nguyen Khoa"],
//         "type": ["v-pop", "rap", "r&b", "lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tetdongday.flac",
//         "length": 205,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_atctr.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_atctr.jpg",
//         "song": "Âm thanh của tuyết rơi",
//         "name": ["Luc Ho"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/amthanhcuatuyetroi.flac",
//         "length": 311,
//         "plays": 500,
//         "likes": 80
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tla.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tla.jpg",
//         "song": "Ta là ai",
//         "name": ["Thai Y Lam", "Jony J"],
//         "type": ["c-pop", "r&b", "rap", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/toilaai.mp3",
//         "length": 239,
//         "plays": 490,
//         "likes": 170
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_trich_tien.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_trich_tien.jpg",
//         "song": "Trích tiên",
//         "name": ["Y Cach Tai Thinh", "Diep Ly"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/trichtien.mp3",
//         "length": 178,
//         "plays": 390,
//         "likes": 140
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nhat_diep.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nhat_diep.jpg",
//         "song": "Nhất diệp",
//         "name": ["Diep Ly"],
//         "type": ["c-pop", "pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nhatdiep.mp3",
//         "length": 241,
//         "plays": 404,
//         "likes": 200
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tuong_nho.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tuong_nho.jpg",
//         "song": "Tưởng nhớ",
//         "name": ["Uc Kha Duy"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tuongnho.mp3",
//         "length": 307,
//         "plays": 190,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tu_my_nhan.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tmn.jpg",
//         "song": "Tư mỹ nhân",
//         "name": ["Truong Luong Dinh"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tumynhan.mp3",
//         "length": 306,
//         "plays": 90,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_qklh.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_qklh.jpg",
//         "song": "Quy khứ lai hề",
//         "name": ["Diep Huyen Thanh"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/quykhulaihe.mp3",
//         "length": 238,
//         "plays": 120,
//         "likes": 70
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bdk.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_bdk.png",
//         "song": "Bồ đề kệ",
//         "name": ["Luu Tich Quan"],
//         "type": ["c-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bodeke.mp3",
//         "length": 244,
//         "plays": 300,
//         "likes": 80
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ngua.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ngua.jpg",
//         "song": "Ngứa",
//         "name": ["Hoang Linh"],
//         "type": ["c-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/ngua.mp3",
//         "length": 229,
//         "plays": 50,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_daybien.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_daybien.jpg",
//         "song": "Đáy biển",
//         "name": ["Nhat Chi Luu Lien"],
//         "type": ["c-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/daybien.mp3",
//         "length": 256,
//         "plays": 260,
//         "likes": 90
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ktcca.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ktcca.jpg",
//         "song": "Khi tôi cưới cô ấy",
//         "name": ["Mac Khieu Ty Ty"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/khitoicuoicoay.mp3",
//         "length": 231,
//         "plays": 200,
//         "likes": 60
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mdl.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mdl.jpg",
//         "song": "Mặt đối lập",
//         "name": ["Thai Y Lam"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/matdoilap.mp3",
//         "length": 230,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_btdsckba.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_btdsckba.jpg",
//         "song": "Bầu trời đầy sao không bằng anh",
//         "name": ["Ycccc"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bautroidaysaokhongbanganh.mp3",
//         "length": 216,
//         "plays": 170,
//         "likes": 9
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dhn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dhn.jpg",
//         "song": "Đào hoa nặc",
//         "name": ["Dang Tu Ky"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/daohoanac.mp3",
//         "length": 219,
//         "plays": 171,
//         "likes": 60
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nmns.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nmns.jpg",
//         "song": "Năm mươi năm sau",
//         "name": ["Tieu A That"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nammuoinamsau.mp3",
//         "length": 283,
//         "plays": 162,
//         "likes": 70
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_km.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_km.jpg",
//         "song": "Khách mời",
//         "name": ["Lo Phi Van"],
//         "type": ["c-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/khachmoi.mp3",
//         "length": 270,
//         "plays": 169,
//         "likes": 80
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bqng.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_bqng.jpg",
//         "song": "Bất quá nhân gian",
//         "name": ["Hai Lai A Loc"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/batquanhangian.mp3",
//         "length": 250,
//         "plays": 142,
//         "likes": 7
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_kb.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_kb.jpg",
//         "song": "Không bằng",
//         "name": ["Tan Hai Thanh"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/khongbang.mp3",
//         "length": 180,
//         "plays": 80,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_actdrxedk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_actdrxedk.jpg",
//         "song": "Anh có thể đừng rời xa em được không",
//         "name": ["Mac Khieu Ty Ty"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/anhcothedungroixaemduockhong.mp3",
//         "length": 236,
//         "plays": 170,
//         "likes": 70
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_hnhv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_hnhv.jpg",
//         "song": "Hàng ngàn hàng vạn",
//         "name": ["Tham Hai Ngu Tu Tuong"],
//         "type": ["c-pop", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/hangnganhangvan.mp3",
//         "length": 246,
//         "plays": 120,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mdsh.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mdsh.jpg",
//         "song": "Một đường sinh hoa",
//         "name": ["On Dich Tam"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/motduongsinhhoa.mp3",
//         "length": 256,
//         "plays": 160,
//         "likes": 50
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tab.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tab.png",
//         "song": "Trường An biệt",
//         "name": ["Vuong Ngoc Manh"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/truonganbiet.mp3",
//         "length": 246,
//         "plays": 160,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_vg.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_vg.jpg",
//         "song": "Vây giữ",
//         "name": ["Vuong Tinh Van Khong Map"],
//         "type": ["c-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/vaygiu.mp3",
//         "length": 234,
//         "plays": 201,
//         "likes": 98
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_akmdelmm.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_akmdelmm.jpg",
//         "song": "Anh không muốn để em lại một mình",
//         "name": ["Vu Nguyet Thien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/anhkhongmuondeemmotminh.mp3",
//         "length": 265,
//         "plays": 120,
//         "likes": 90
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ll.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ll.jpg",
//         "song": "Lạnh lẽo",
//         "name": ["Truong Bich Than", "Duong Tong Vy"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/lanhleo.flac",
//         "length": 333,
//         "plays": 170,
//         "likes": 67
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_bn.jpg",
//         "song": "Bất nhiễm",
//         "name": ["Mao Bat Dich"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/batnhiem.mp3",
//         "length": 325,
//         "plays": 101,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_atnhle.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_atnhle.jpg",
//         "song": "Ánh trăng nói hộ lòng em",
//         "name": ["Dang Le Quan"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/anhtrangnoiholongem.mp3",
//         "length": 206,
//         "plays": 120,
//         "likes": 50
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bnqvncs.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_bnqvncs.jpeg",
//         "song": "Bạch nguyệt quang và nốt chu sa",
//         "name": ["Dai Tu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bachnguyetquangvanotchusa.mp3",
//         "length": 207,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bkbk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_bkbk.jpg",
//         "song": "Biết không, biết không",
//         "name": ["Uc Kha Duy", "Ho Ha"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bietkhongbietkhong.mp3",
//         "length": 276,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ccta.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ccta.jpg",
//         "song": "Chầm chậm thích anh",
//         "name": ["Mac Van Uy"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/chamchamthichanh.mp3",
//         "length": 221,
//         "plays": 120,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_pdvvs.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_pdvvs.jpg",
//         "song": "Phi điểu và ve sầu",
//         "name": ["Nham Nhien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/chimbaycungve.flac",
//         "length": 296,
//         "plays": 130,
//         "likes": 60
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_cvqya.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_cvqya.jpg",
//         "song": "Chỉ vì quá yêu anh",
//         "name": ["Dinh Phu Ni"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/chiviquayeuanh.mp3",
//         "length": 247,
//         "plays": 90,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_cmdnn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_cmdnn.jpg",
//         "song": "Chớp mắt đã ngàn năm",
//         "name": ["S.H.E"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/chopmatdangannam.mp3",
//         "length": 269,
//         "plays": 40,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dkn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dkn.jpg",
//         "song": "Đảo không người",
//         "name": ["Nham Nhien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/daokhongnguoi.mp3",
//         "length": 285,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dhna.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dhna.jpg",
//         "song": "Đầu hạ năm ấy",
//         "name": ["Nham Nhien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dauhanamay.mp3",
//         "length": 310,
//         "plays": 140,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dm.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dm.jpg",
//         "song": "Đông miên",
//         "name": ["Tu Nam"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dongmien.flac",
//         "length": 269,
//         "plays": 152,
//         "likes": 23
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dt.jpg",
//         "song": "Đồng thoại",
//         "name": ["Quang Luong"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dongthoai.flac",
//         "length": 241,
//         "plays": 160,
//         "likes": 50
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dk.jpg",
//         "song": "Dũng Khí",
//         "name": ["Mien Tu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dungkhi.mp3",
//         "length": 241,
//         "plays": 100,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ecctyc.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ecctyc.png",
//         "song": "Em chỉ có thể yêu chàng",
//         "name": ["Banh Thanh"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/emchicotheyeuchang.mp3",
//         "length": 276,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_gg.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_gg.png",
//         "song": "Gặp gỡ",
//         "name": ["Ton Yen Tu"],
//         "type": ["c-pop", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/gapgo.mp3",
//         "length": 210,
//         "plays": 210,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ggc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ggc.jpg",
//         "song": "Giấy ghi chú tâm niệm",
//         "name": ["Vuong Han Vu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/giayghichutamniem.mp3",
//         "length": 178,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_gbntgln.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_gbntgln.jpg",
//         "song": "Giữa biển người ta gặp lại nhau",
//         "name": ["Lam Duc Quan"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/giuabiennguoitagaplainhau.mp3",
//         "length": 232,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_htmk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_htmk.jpg",
//         "song": "Học tiếng mèo kêu",
//         "name": ["Tieu Phong Phong, Tieu Phan Phan"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/hoctiengmeokeu.flac",
//         "length": 209,
//         "plays": 40,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_hoi.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_hoi.jpg",
//         "song": "Hỏi",
//         "name": ["Đuong Co"],
//         "type": ["c-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/hoi.mp3",
//         "length": 292,
//         "plays": 130,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_kn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_kn.jpg",
//         "song": "Kiêu ngạo",
//         "name": ["Ho Linh"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/kieungao.mp3",
//         "length": 244,
//         "plays": 90,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ltedt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ltedt.jpg",
//         "song": "Là tự em đa tình",
//         "name": ["Ho Duong Lam"],
//         "type": ["c-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/latuemdatinh.mp3",
//         "length": 287,
//         "plays": 170,
//         "likes": 63
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_lhcc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_lhcc.jpg",
//         "song": "Luân hồi chi cảnh",
//         "name": ["Critty"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/luanhoichicanh.mp3",
//         "length": 251,
//         "plays": 43,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mc.jpg",
//         "song": "Mang chủng",
//         "name": ["Am Khuyet Thi Thinh"],
//         "type": ["c-pop", "dance / electronic"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mangchung.mp3",
//         "length": 216,
//         "plays": 82,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mm.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mm.jpg",
//         "song": "May mắn",
//         "name": ["Nham Nhien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mayman.mp3",
//         "length": 322,
//         "plays": 28,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mmbn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mmbn.jpg",
//         "song": "May mắn bé nhỏ",
//         "name": ["Hebe (S.H.E)"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/maymanbenho.mp3",
//         "length": 265,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mph.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mph.jpg",
//         "song": "Mộng phồn hoa",
//         "name": ["Hoang Linh"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mongphonhoa.mp3",
//         "length": 306,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mtkn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mtkn.jpg",
//         "song": "Một triệu khả năng",
//         "name": ["Christine Welch"],
//         "type": ["c-pop", "chill", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mottrieukhanang.mp3",
//         "length": 275,
//         "plays": 100,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mht.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mht.jpg",
//         "song": "Mưa hồng trần",
//         "name": ["Nguy Tan Vu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/muahongtran.mp3",
//         "length": 260,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nbdturl.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nbdturl.jpg",
//         "song": "Người bạn đã từng yêu rất lâu",
//         "name": ["Dien Phuc Chan"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nguoibandatungyeuratlau.mp3",
//         "length": 268,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nkv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nkv.jpg",
//         "song": "Người kế vị",
//         "name": ["Nham Nhien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nguoikevi.mp3",
//         "length": 245,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ntdas.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ntdas.jpg",
//         "song": "Người theo đuổi ánh sáng",
//         "name": ["Tu Vi"],
//         "type": ["c-pop", "mood", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nguoitheoduoianhsang.mp3",
//         "length": 224,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nt.jpg",
//         "song": "Nhìn thấu",
//         "name": ["Nham Nhien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nhinthau.mp3",
//         "length": 261,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nnta.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nnta.jpg",
//         "song": "Những năm tháng ấy",
//         "name": ["Ho Ha"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nhungnamthangay.mp3",
//         "length": 373,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_pcl.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_pcl.jpg",
//         "song": "Phong chi luyến",
//         "name": ["Quan Thi Man"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/phongchiluyen.mp3",
//         "length": 286,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_pst.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_pst.png",
//         "song": "Phù sinh từ",
//         "name": ["Ngan Lam"],
//         "type": ["c-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/phusinhtu.mp3",
//         "length": 298,
//         "plays": 275,
//         "likes": 29
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_qcmx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_qcmx.jpg",
//         "song": "Quả chanh màu xanh",
//         "name": ["Ly Van Huong", "Son Truc Mui Hiep"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/quachanhmauxanh.mp3",
//         "length": 200,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_qb.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_qb.jpg",
//         "song": "Quẻ bói",
//         "name": ["Thoi Tu Cach"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/queboi.mp3",
//         "length": 214,
//         "plays": 157,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_snglda.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_snglda.jpg",
//         "song": "Sau này gặp lại được anh",
//         "name": ["Ho 66"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/saunaygaplaiduocanh.mp3",
//         "length": 249,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tt.jpg",
//         "song": "Tâm tình",
//         "name": ["Trieu Le Dinh", "Tran Hieu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tamtinh.mp3",
//         "length": 311,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tttantcl.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tttantcl.jpg",
//         "song": "Ta tên Trường An, ngươi tên Cố Lý",
//         "name": ["Doan Tich Mien", "Tieu Dien Am Nhac Xa"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tatentruongan.mp3",
//         "length": 209,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_knld.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_knld.jpg",
//         "song": "Kim ngọc lương duyên",
//         "name": ["Ly Ky"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/kimngocluongduyen.mp3",
//         "length": 220,
//         "plays": 169,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_gtqtnn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_gtqtnn.jpg",
//         "song": "Gió thổi qua tám ngàn năm",
//         "name": ["To Tinh Diep"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/giothoiquatamngandam.mp3",
//         "length": 228,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bmta.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_bmta.jpg",
//         "song": "Bốn mùa trao anh",
//         "name": ["Trinh Huong"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bonmuatraoanh.mp3",
//         "length": 248,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ecok.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ecok.jpg",
//         "song": "Em có ổn không",
//         "name": ["Chau Hung Triet"],
//         "type": ["c-pop", "pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/emcoonkhong.mp3",
//         "length": 287,
//         "plays": 192,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ltst.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ltst.jpg",
//         "song": "Lao tới sao trời",
//         "name": ["Ha Kinh Hien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/laotoisaotroi.mp3",
//         "length": 204,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_thanhtru.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_thanhtru.jpg",
//         "song": "Thanh trừ",
//         "name": ["Vuong Han Than", "To Tinh Diep"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thanhtru.mp3",
//         "length": 177,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tamtonthienduong.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tamtonthienduong.jpg",
//         "song": "Tam tốn thiên đường",
//         "name": ["Nghiep Nghe Dan"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tamthonthienduong.mp3",
//         "length": 290,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_cthk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_cthk.jpg",
//         "song": "Có thể hay không",
//         "name": ["Truong Tu Hao"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cothehaykhong.mp3",
//         "length": 240,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_yhh.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_yhh.jpg",
//         "song": "Yến vô hiết",
//         "name": ["Tuong Tuyet Nhi"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/yenvohiet.mp3",
//         "length": 201,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_luyennhantam.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_luyennhantam.jpg",
//         "song": "Luyến nhân tâm",
//         "name": ["Nguy Tam Vu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/luyennhantam.flac",
//         "length": 208,
//         "plays": 129,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tksl.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tksl.jpg",
//         "song": "Thời không sai lệch",
//         "name": ["Ngai Than"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thoikhongsailech.mp3",
//         "length": 203,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dungngoaicuoc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dungngoaicuoc.jpg",
//         "song": "Đứng ngoài cuộc",
//         "name": ["Doan Tich Mien", "Tieu Dien Am Nhac Xa"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dungngoaicuoc.mp3",
//         "length": 213,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_gedl.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_gedl.jpg",
//         "song": "Gặp em đúng lúc",
//         "name": ["Luan Tang"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/gapemdungluc.mp3",
//         "length": 197,
//         "plays": 80,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_anh.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_anh.jpg",
//         "song": "Ảnh",
//         "name": ["Chau Tham"],
//         "type": ["c-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/anh.mp3",
//         "length": 246,
//         "plays": 120,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tglnvvgda.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tglnvvgda.jpg",
//         "song": "Thế giới lớn như vậy vẫn gặp được anh",
//         "name": ["Trinh Huong"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tglnvvgda.mp3",
//         "length": 237,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dtb.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dtb.jpg",
//         "song": "Đại thiên bồng",
//         "name": ["Lo Gia"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/daithienbong.mp3",
//         "length": 244,
//         "plays": 170,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tvn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tvn.jpg",
//         "song": "Ta và nàng",
//         "name": ["Tran Hieu", "Tran Nghien Hy"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tavangang.mp3",
//         "length": 285,
//         "plays": 100,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ttct.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ttct.jpg",
//         "song": "Tay trái chỉ trăng",
//         "name": ["Tat Dinh Dinh"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/taytraichitrang.mp3",
//         "length": 230,
//         "plays": 150,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_thanthoai.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_thanthoai.jpeg",
//         "song": "Thần thoại",
//         "name": ["Thanh Long", "Kim Hee Sun"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thanthoai.mp3",
//         "length": 290,
//         "plays": 190,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ttts.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ttts.jpg",
//         "song": "Thần thoại trăng sao",
//         "name": ["Kim Sa"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thanthoaitrangsao.flac",
//         "length": 251,
//         "plays": 250,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tlb.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tlb.jpg",
//         "song": "Thương ly biệt",
//         "name": ["Nguy Tan Vu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thuonglybiet.mp3",
//         "length": 241,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tdk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tdk.jpg",
//         "song": "Tiêu dao khúc",
//         "name": ["Hoac Kien Hoa"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tieudaokhuc.mp3",
//         "length": 265,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tydn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tydn.jpg",
//         "song": "Tình yêu duy nhất",
//         "name": ["Tiet Khai Ky", "Hinson Chu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tinhyeuduynhat.mp3",
//         "length": 207,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_vxbn.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_vxbn.jpg",
//         "song": "Vong xuyên bỉ ngạn",
//         "name": ["Linh Nhat Cuu Linh Nhi"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/vongxuyenbingan.mp3",
//         "length": 177,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tnlrr.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tnlrr.jpg",
//         "song": "Tát nhật lãng rực rỡ",
//         "name": ["Yeu Bat Yeu Mai Thai"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tatnhatlangrucro.mp3",
//         "length": 223,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_lkqtg.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_lkqtg.jpg",
//         "song": "Lữ khách qua thời gian",
//         "name": ["Danh Quyet"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/lukhachquathoigian.mp3",
//         "length": 178,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_trantrong.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_trantrong.jpeg",
//         "song": "Trân trọng",
//         "name": ["Ly Vu Xuan"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/trantrong.mp3",
//         "length": 300,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ttkd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ttkd.jpg",
//         "song": "Tương tư không đến",
//         "name": ["Mao Trach Thieu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tuongtukhongden.mp3",
//         "length": 185,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_vtk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_vtk.jpg",
//         "song": "Vịnh Trăng Khuyết",
//         "name": ["Zai'en Pan"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/vinhtrangkhuyet.mp3",
//         "length": 195,
//         "plays": 140,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_vyt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_vyt.jpg",
//         "song": "Vô ý thức",
//         "name": ["Tiet Khai Ky", "V.A"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/voythuc.mp3",
//         "length": 221,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_kskccctgda.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_kskccctga.jpg",
//         "song": "Kiếp sau không chắc còn có thể được anh",
//         "name": ["Mac Khieu Ty Ty"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/kskccctgda.mp3",
//         "length": 232,
//         "plays": 80,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tkt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tkt.jpg",
//         "song": "Trạm khí tượng",
//         "name": ["Uu"],
//         "type": ["c-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/tkt.mp3",
//         "length": 228,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ksnlmds.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ksnlmds.jpg",
//         "song": "Kiếp sau nguyện làm một đóa sen",
//         "name": ["Nguy Tan Vu"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ksnlmds.mp3",
//         "length": 302,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ctc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ctc.jpg",
//         "song": "Cưu trưởng cơ",
//         "name": ["Diep Huyen Thanh"],
//         "type": ["c-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/ctc.mp3",
//         "length": 220,
//         "plays": 220,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nnt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nnt.jpg",
//         "song": "Nữ nhi tình",
//         "name": ["Dong Le"],
//         "type": ["c-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/nnt.mp3",
//         "length": 295,
//         "plays": 180,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ygshymn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ygshymn.jpg",
//         "song": "Yêu giang sơn càng yêu mỹ nhân",
//         "name": ["Tieu A Phong"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/yeugiangsoncangyeumynhan.mp3",
//         "length": 236,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_niji.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_niji.jpg",
//         "song": "Niji",
//         "name": ["Suda Masaki"],
//         "type": ["j-pop", "mood"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/niji.mp3",
//         "length": 258,
//         "plays": 120,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_lalala.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_lalala.jpg",
//         "song": "La la la",
//         "name": ["Suki"],
//         "type": ["j-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/lalala.mp3",
//         "length": 190,
//         "plays": 70,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_hazzy_moon.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_hazzy_mon.jpg",
//         "song": "Hazy moon",
//         "name": ["Hatsune Miku"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/hazy_moon.mp3",
//         "length": 255,
//         "plays": 40,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_arigatou.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_arigatou.jpg",
//         "song": "Arigatou",
//         "name": ["Kokia"],
//         "type": ["j-pop", "mood", "autumn"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/arigatou.mp3",
//         "length": 251,
//         "plays": 130,
//         "likes": 50
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ywkd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_ywkd.jpg",
//         "song": "Yume wo kanaete doraemon",
//         "name": ["MAO"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ywk_doraemon.mp3",
//         "length": 247,
//         "plays": 170,
//         "likes": 70
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dnu.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_dnu.png",
//         "song": "Doraemon no uta",
//         "name": ["Satoko Yamano"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/doraemon_no_uta.mp3",
//         "length": 180,
//         "plays": 30,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_smk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_smk.jpg",
//         "song": "Sakurairo mau koro",
//         "name": ["Mika Nakashima"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/sakurairo_mau_koro.mp3",
//         "length": 295,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_planet.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_planet.jpg",
//         "song": "Planet",
//         "name": ["Lambsey"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/planet.mp3",
//         "length": 243,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_uh.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_uh.jpg",
//         "song": "Uchiage hanabi",
//         "name": ["DAOKO", "Yonezu Kenshi"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/uchiage_hanabi.mp3",
//         "length": 289,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tabun.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_tabun.jpg",
//         "song": "Tabun",
//         "name": ["YOASOBI"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tabun.mp3",
//         "length": 258,
//         "plays": 100,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_aoku.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_aoku.jpg",
//         "song": "Ai o komete umi",
//         "name": ["Aoi Teshima"],
//         "type": ["j-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/aoku.mp3",
//         "length": 250,
//         "plays": 120,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_hny.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_hny.jpg",
//         "song": "Himawari no Yakusoku",
//         "name": ["Motohiro hata"],
//         "type": ["j-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/hny.mp3",
//         "length": 312,
//         "plays": 100,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_best_friend.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_best_friend.jpg",
//         "song": "Best friend",
//         "name": ["Kana Nishino"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/best_friend.mp3",
//         "length": 321,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_hotaru.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_hotaru.jpg",
//         "song": "Hotaru",
//         "name": ["Fujita Maiko"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/hotaru.mp3",
//         "length": 294,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_lemon.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_lemon.png",
//         "song": "Lemon",
//         "name": ["Kenshi Yonezu"],
//         "type": ["j-pop", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/lemon.mp3",
//         "length": 255,
//         "plays": 230,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_liabp.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_liabp.jpg",
//         "song": "Love is a beautiful pain",
//         "name": ["endless tears"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/liabp.mp3",
//         "length": 264,
//         "plays": 170,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_sakura.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_sakura.jpg",
//         "song": "Sakura",
//         "name": ["Ikimono gakari"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/sakura.mp3",
//         "length": 353,
//         "plays": 70,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_sandy.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_sandy.jpg",
//         "song": "Sakura anata ni deaete yokatta",
//         "name": ["RSP"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/sandy.mp3",
//         "length": 301,
//         "plays": 80,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tadaima.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_tadaima.jpg",
//         "song": "Tadaima",
//         "name": ["Aoi Teshima"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tadaima.mp3",
//         "length": 332,
//         "plays": 160,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_yth.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_yth.jpg",
//         "song": "Yume to hazakura",
//         "name": ["Wotamin"],
//         "type": ["j-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/yth.mp3",
//         "length": 253,
//         "plays": 100,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_take_me_hand.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_take_me_hand.jpg",
//         "song": "Take me hand",
//         "name": ["Cecile Corbel", "DAISHI DANCE"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/take_me_hand.mp3",
//         "length": 260,
//         "plays": 80,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_fnk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_fnk.jpg",
//         "song": "Futari no kimochi",
//         "name": ["V.A"],
//         "type": ["j-pop", "instrumental"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/fnk.mp3",
//         "length": 159,
//         "plays": 60,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_snn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_snn.jpg",
//         "song": "Sayonara no natsu",
//         "name": ["Aoi Teshima"],
//         "type": ["j-pop"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/snn.mp3",
//         "length": 323,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_7rings.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_7rings.jpg",
//         "song": "7 rings",
//         "name": ["Ariana Grande"],
//         "type": ["usuk", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/7rings.mp3",
//         "length": 178,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_A_little_love.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_A_little_love.jpg",
//         "song": "A little love",
//         "name": ["Yao Si Ting"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/A_little_love.mp3",
//         "length": 207,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_A_thousand_years.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_A_thousand_years.jpg",
//         "song": "A thousand years",
//         "name": ["Christina Perri"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/A_thousand_years.mp3",
//         "length": 286,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_abcdefu.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_abcdefu.png",
//         "song": "abcdefu",
//         "name": ["GAYLE"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/abcdefu.mp3",
//         "length": 168,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_At_my_worst.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_At_my_worst.jpg",
//         "song": "At my worst",
//         "name": ["Pink Sweat"],
//         "type": ["usuk", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/At_my_worst.mp3",
//         "length": 170,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Attention.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Attention.png",
//         "song": "Attention",
//         "name": ["Charlie Puth"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Attention.mp3",
//         "length": 208,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Baby.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Baby.jpg",
//         "song": "Baby",
//         "name": ["Justin Bieber, Ludacris"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/Baby.mp3",
//         "length": 214,
//         "plays": 120,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Bad_guy.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Bad_guy.jpg",
//         "song": "Bad guy",
//         "name": ["Billie Eilish"],
//         "type": ["usuk", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Bad_guy.mp3",
//         "length": 194,
//         "plays": 70,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Bam_Bam.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Bam_Bam.png",
//         "song": "Bam Bam",
//         "name": ["Camila Cabello", "Ed Sheeran"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Bam_Bam.mp3",
//         "length": 206,
//         "plays": 20,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Beautiful_in_white.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Beautiful_in_white.jpg",
//         "song": "Beautiful in white",
//         "name": ["Shane Filan"],
//         "type": ["usuk", "chill", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Beautiful_in_white.mp3",
//         "length": 232,
//         "plays": 70,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Believer.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Believer.jpg",
//         "song": "Believer",
//         "name": ["Imagine Dragons"],
//         "type": ["usuk", "dance / electronic"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Believer.mp3",
//         "length": 203,
//         "plays": 10,
//         "likes": 1
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Blank_space.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Blank_space.png",
//         "song": "Blank space",
//         "name": ["Taylor Swift"],
//         "type": ["usuk", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Blank_space.mp3",
//         "length": 231,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Build_a_bitch.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Build_a_bitch.jpg",
//         "song": "Build a bitch",
//         "name": ["Bella Poarch"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Build_a_bitch.mp3",
//         "length": 122,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Closer.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Closer.jpg",
//         "song": "Closer",
//         "name": ["The Chainsmokers", "Halsey"],
//         "type": ["usuk", "dance / electronic"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Closer.mp3",
//         "length": 245,
//         "plays": 30,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dancingwithghost.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Dancing_with_your_ghost.jpg",
//         "song": "Dancing with your ghost",
//         "name": ["Sasha Alex Slo"],
//         "type": ["usuk", "pop", "chill", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Dancing_with_your_ghost.mp3",
//         "length": 197,
//         "plays": 100,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Despacito.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Despacito.jpeg",
//         "song": "Despacito",
//         "name": ["Luis Fonsi", "Daddy Yankee"],
//         "type": ["usuk", "r&b", "summer"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Despacito.mp3",
//         "length": 228,
//         "plays": 50,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Dont_matter.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Dont_matter.jpg",
//         "song": "Don't matter",
//         "name": ["Akon"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Dont_matter.mp3",
//         "length": 293,
//         "plays": 80,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Drivers_license.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Drivers_license.jpg",
//         "song": "Drivers license",
//         "name": ["Olivia Rodrigo"],
//         "type": ["usuk", "pop", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Drivers_license.mp3",
//         "length": 242,
//         "plays": 150,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Easy_on_me.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avater_Easy_on_me.jpg",
//         "song": "Easy on me",
//         "name": ["Adele"],
//         "type": ["usuk", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Easy_on_me.mp3",
//         "length": 224,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Everything_I_need.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_EverythingINeed.jpg",
//         "song": "Everything I need",
//         "name": ["Skylar Grey"],
//         "type": ["usuk", "mood", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Everything_I_need.mp3",
//         "length": 200,
//         "plays": 90,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Girls_like_you.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Girls_like_you.jpg",
//         "song": "Girls like you",
//         "name": ["Maroon 5", "Cardi B"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Girls_like_you.mp3",
//         "length": 235,
//         "plays": 40,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Happier.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Happier.jpg",
//         "song": "Happier",
//         "name": ["Olivia Rodrigo"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Happier.mp3",
//         "length": 175,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Havana.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Havana.png",
//         "song": "Havana",
//         "name": ["Camila Cabello"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Havana.mp3",
//         "length": 214,
//         "plays": 100,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Heathens.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Heathens.jpg",
//         "song": "Heathens",
//         "name": ["Twenty One Pilots"],
//         "type": ["usuk", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Heathens.mp3",
//         "length": 195,
//         "plays": 150,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Hero.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Hero.jpg",
//         "song": "Hero",
//         "name": ["Cash Cash", "Christina Perri"],
//         "type": ["usuk"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/Hero.mp3",
//         "length": 197,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_I_love_you_3000.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_I_love_you_3000.jpg",
//         "song": "I love you 3000",
//         "name": ["Stephanie Poetri"],
//         "type": ["usuk", "romance", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/I_love_you_3000.mp3",
//         "length": 209,
//         "plays": 110,
//         "likes": 50
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Leave_the_door_open.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Leave_the_door_open.jpg",
//         "song": "Leave the door open",
//         "name": ["Bruno Mars", "Anders"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Leave_the_door_open.mp3",
//         "length": 242,
//         "plays": 120,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Lemon_tree.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Lemon_tree.jpg",
//         "song": "Lemon tree",
//         "name": ["Fools garden"],
//         "type": ["usuk", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Lemon_tree.mp3",
//         "length": 190,
//         "plays": 150,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Let_me_down_slowly.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Let_me_down_slowly.png",
//         "song": "Let me down slowly",
//         "name": ["Alec Benjamin"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Let_me_down_slowly.mp3",
//         "length": 169,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Light_switch.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Light_switch.jpg",
//         "song": "Light switch",
//         "name": ["Charlie Puth"],
//         "type": ["usuk", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Light_switch.mp3",
//         "length": 185,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Like_I_am_gonna_lose_you.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Like_I_am_gonna_lose_you.jpg",
//         "song": "Like I'm gonna lose you",
//         "name": ["Meghan Trainor", "John Legend"],
//         "type": ["usuk", "pop", "r&b", "autumn", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Like_I_am_Gonna_Lose_You.mp3",
//         "length": 225,
//         "plays": 310,
//         "likes": 90
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Like_my_father.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Like_my_father.jpg",
//         "song": "Like my father",
//         "name": ["Jax"],
//         "type": ["usuk", "pop", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Like_my_father.mp3",
//         "length": 183,
//         "plays": 250,
//         "likes": 50
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Love_me_like_you_do.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Love_me_like_you_do.jpg",
//         "song": "Love me like you do",
//         "name": ["Ellie Goulding"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Love_me_like_you_do.mp3",
//         "length": 252,
//         "plays": 120,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Love_yourself.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Love_yourself.jpg",
//         "song": "Love yourself",
//         "name": ["Justin Bieber"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Love_yourself.mp3",
//         "length": 233,
//         "plays": 120,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Me!.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Me!.png",
//         "song": "Me!",
//         "name": ["Taylor Swift"],
//         "type": ["usuk"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/Me!.mp3",
//         "length": 193,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Mistletoe.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Mistletoe.jpg",
//         "song": "Mistletoe",
//         "name": ["Justin Bieber"],
//         "type": ["usuk", "christmas"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Mistletoe.mp3",
//         "length": 184,
//         "plays": 190,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_My_heart_will_go_on.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_My_heart_will_go_on.jpg",
//         "song": "My heart will go on",
//         "name": ["Celine Dion"],
//         "type": ["usuk", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/My_heart_will_go_on.mp3",
//         "length": 281,
//         "plays": 170,
//         "likes": 60
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_No_lie.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_No_lie.jpg",
//         "song": "No lie",
//         "name": ["Sean Paul", "Dua Lipa"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/No_lie.mp3",
//         "length": 221,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Nothings_gonna_change_my_love_for_you.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Nothings_gonna_change_my_love_for_you.jpg",
//         "song": "Nothings gonna change my love for you",
//         "name": ["Westlife"],
//         "type": ["usuk", "mood", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Nothings_gonna_change_my_love_for_you.mp3",
//         "length": 229,
//         "plays": 150,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Older.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Older.jpg",
//         "song": "Older",
//         "name": ["Sasha Sloan"],
//         "type": ["usuk", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Older.mp3",
//         "length": 191,
//         "plays": 120,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Old_Town_Road.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Old_Town_Road.jpg",
//         "song": "Old Town Road",
//         "name": ["Lil Nas X", "Billy RayCyrus"],
//         "type": ["usuk", "rap", "r&b", "summer"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Old_Town_Road.mp3",
//         "length": 157,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Peaches.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Peaches.jpg",
//         "song": "Peaches",
//         "name": ["Justin Bieber", "Daniel Caesar"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Peaches.mp3",
//         "length": 198,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Perfect.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Perfect.jpg",
//         "song": "Perfect",
//         "name": ["Ed Sheeran"],
//         "type": ["usuk", "mood", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Perfect.mp3",
//         "length": 263,
//         "plays": 170,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Reality.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Reality.jpg",
//         "song": "Reality",
//         "name": ["Lost Frequencies", "Janieck Devy"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Reality.mp3",
//         "length": 159,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_See_you_again.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_See_you_again.png",
//         "song": "See you again",
//         "name": ["Wiz Khalifa", "Charlie Puth"],
//         "type": ["usuk", "pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/See_you_again.mp3",
//         "length": 229,
//         "plays": 150,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Send_it.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Send_it.jpg",
//         "song": "Send it",
//         "name": ["Austin Mahone", "Rich Homie Quan"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Send_it.mp3",
//         "length": 181,
//         "plays": 90,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Senorita.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Senorita.jpg",
//         "song": "Senorita",
//         "name": ["Shawn Mendes", "Camila Cabello"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Senorita.mp3",
//         "length": 191,
//         "plays": 120,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Shake_it_off.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Shake_it_off.jpg",
//         "song": "Shake it off",
//         "name": ["Taylor Swift"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Shake_it_off.mp3",
//         "length": 219,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Shape_of_you.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Shape_of_you.jpg",
//         "song": "Shape of you",
//         "name": ["Ed Sheeran"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Shape_of_you.mp3",
//         "length": 233,
//         "plays": 150,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Side_to_side.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Side_to_side.jpg",
//         "song": "Side to side",
//         "name": ["Ariana Grande"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Side_to_side.mp3",
//         "length": 224,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Stay.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Stay.png",
//         "song": "Stay",
//         "name": ["The Kid LAROI", "Justin Bieber"],
//         "type": ["usuk"],
//         "audio": "https://nightmusic-api.herokuapp.com/api/resources/audios/Stay.mp3",
//         "length": 141,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Sugar.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Sugar.jpg",
//         "song": "Sugar",
//         "name": ["Maroon 5"],
//         "type": ["usuk", "romance"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Sugar.mp3",
//         "length": 235,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Thank_u_next.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Thank_u_next.png",
//         "song": "Thank u next",
//         "name": ["Ariana Grande"],
//         "type": ["usuk", "christmas"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Thank_u_next.mp3",
//         "length": 207,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_That_girls.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_That_girl.jpg",
//         "song": "That girl",
//         "name": ["Olly Murs"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/That_girl.mp3",
//         "length": 176,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_The_lazy_song.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_The_lazy_song.jpg",
//         "song": "The lazy song",
//         "name": ["Bruno Mars"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/The_lazy_song.mp3",
//         "length": 195,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Unstoppable.jpeg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Unstoppable.jpg",
//         "song": "Unstoppable",
//         "name": ["Sia"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Unstoppable.mp3",
//         "length": 217,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_untilyou.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Until_you.jpg",
//         "song": "Until you",
//         "name": ["Shayne Ward"],
//         "type": ["usuk", "chill", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Until_you.mp3",
//         "length": 248,
//         "plays": 100,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Uptown_funk.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Uptown_funk.jpg",
//         "song": "Uptown funk",
//         "name": ["Mark Ronson", "Bruno Mars"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Uptown_funk.mp3",
//         "length": 270,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Versace_on_the_floor.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Versace_on_the_floor.jpg",
//         "song": "Versace on the floor",
//         "name": ["Bruno Mars"],
//         "type": ["usuk", "pop", "r&b", "autumn"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Versace_on_the_floor.mp3",
//         "length": 261,
//         "plays": 120,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Way_back_home.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Way_back_home.jpg",
//         "song": "Way back home",
//         "name": ["Shaun", "Conor Maynard"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Way_back_home.mp3",
//         "length": 192,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_We_dont_talk_anymore.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_We_dont_talk_anymore.jpg",
//         "song": "We don't talk anymore",
//         "name": ["Charlie Puth", "Selena Gomez"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/We_dont_talk_anymore.mp3",
//         "length": 217,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_What_makes_you_beautiful.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_What_makes_you_beautiful.jpg",
//         "song": "What makes you beautiful",
//         "name": ["One Direction"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/What_makes_you_beautiful.mp3",
//         "length": 198,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Who_says.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_whosay.jpg",
//         "song": "Who says",
//         "name": ["Selena Gomez", "The Scene"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Who_says.flac",
//         "length": 195,
//         "plays": 90,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Why_not_me.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Why_not_me.jpg",
//         "song": "Why not me",
//         "name": ["Enrique Iglesias"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Why_not_me.mp3",
//         "length": 219,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com/",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_You_are_not_alone.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_You_are_not_alone.jpg",
//         "song": "You are not alone",
//         "name": ["Michael Jackson"],
//         "type": ["usuk", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/You_are_not_alone.flac",
//         "length": 345,
//         "plays": 80,
//         "likes": 30
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_Yummy.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_Yummy.png",
//         "song": "Yummy",
//         "name": ["Justin Bieber"],
//         "type": ["usuk", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/Yummy.mp3",
//         "length": 210,
//         "plays": 160,
//         "likes": 40
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_acemx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_acemx.jpg",
//         "song": "Anh cho em mùa xuân",
//         "name": ["Hoang Thuc Linh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/acemx.mp3",
//         "length": 229,
//         "plays": 40,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_als.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_als.jpg",
//         "song": "Auld Lang Syne",
//         "name": ["Boney M"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/als.mp3",
//         "length": 154,
//         "plays": 40,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bglc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_bglc.jpg",
//         "song": "Bao giờ lấy chồng",
//         "name": ["Bich Phuong"],
//         "type": ["lunar new year", "v-pop", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bglc.mp3",
//         "length": 224,
//         "plays": 90,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ccdn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ccdn.jpg",
//         "song": "Câu chuyện đầu năm",
//         "name": ["Dan Nguyen"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ccdn.mp3",
//         "length": 279,
//         "plays": 50,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_cx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_cx.jpg",
//         "song": "Chiều xuân",
//         "name": ["Hong Ngoc"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cx.mp3",
//         "length": 244,
//         "plays": 80,
//         "likes": 60
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_cmnm.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_cmnm.jpg",
//         "song": "Chúc mừng năm mới",
//         "name": ["Ho Quang Hieu"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cmnm.mp3",
//         "length": 208,
//         "plays": 20,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ccbq.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ccbq.jpg",
//         "song": "Chuyện cũ bỏ qua",
//         "name": ["Bich Phuong"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ccbq.mp3",
//         "length": 206,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_cbx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_cbx.jpg",
//         "song": "Con bướm xuân",
//         "name": ["Ho Quang Hieu"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cbx.mp3",
//         "length": 224,
//         "plays": 80,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_csvst.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_csvst.jpg",
//         "song": "Con sẽ về sớm thôi",
//         "name": ["Nana Liu"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/csvst.mp3",
//         "length": 280,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ddtv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ddtv.jpg",
//         "song": "Đi để trở về",
//         "name": ["Soobin"],
//         "type": ["lunar new year", "v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ddtv.mp3",
//         "length": 208,
//         "plays": 80,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dkmx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dkmx.jpg",
//         "song": "Điệp khúc mùa xuân",
//         "name": ["Dam Vinh Hung"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dkmx.mp3",
//         "length": 206,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ddsx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ddsx.jpg",
//         "song": "Dịu dàng sắc xuân",
//         "name": ["Ngoc Linh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ddsx.mp3",
//         "length": 221,
//         "plays": 90,
//         "likes": 10
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dxc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dxc.jpg",
//         "song": "Đoàn xuân ca",
//         "name": ["Nhu Quynh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dxc.mp3",
//         "length": 252,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_dx.jpg",
//         "song": "Đón xuân",
//         "name": ["Nhu Quynh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dx.mp3",
//         "length": 251,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_hpny.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_hpny.jpg",
//         "song": "Happy new year",
//         "name": ["ABBA"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/hnw.mp3",
//         "length": 263,
//         "plays": 160,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_hoacomuaxuan.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_hoacomuaxuan.jpg",
//         "song": "Hoa cỏ mùa xuân",
//         "name": ["Thuy Tien"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/hcmx.mp3",
//         "length": 214,
//         "plays": 10,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_htmx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_htmx.jpg",
//         "song": "Hơi thở mùa xuân",
//         "name": ["Anh Tho"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/htmx.mp3",
//         "length": 323,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_kgt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_kgt.jpg",
//         "song": "Khúc giao thừa",
//         "name": ["My Linh", "Minh Quan"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/kgt.mp3",
//         "length": 264,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_lgph.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_lgph.jpg",
//         "song": "Làm gì phải hốt",
//         "name": ["JustaTee", "Hoang Thuy Linh", "Den Vau"],
//         "type": ["lunar new year", "rap", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/lgph.mp3",
//         "length": 189,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_lnmxv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_lnmxv.jpg",
//         "song": "Lắng nghe mùa xuân về",
//         "name": ["Hong Nhung", "Bang Kieu"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/lnmxv.mp3",
//         "length": 327,
//         "plays": 70,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mcmtv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mcmtv.jpg",
//         "song": "Mẹ chỉ mong tết về",
//         "name": ["Ha Anh Tuan"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mcmtv.mp3",
//         "length": 244,
//         "plays": 70,
//         "likes": 20
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mcx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mcx.jpg",
//         "song": "Mộng chiều xuân",
//         "name": ["Huong Lan"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mcx.mp3",
//         "length": 255,
//         "plays": 90,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mnmba.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mnmba.jpg",
//         "song": "Một năm mới bình an",
//         "name": ["Son Tung M-TP"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mnmba.mp3",
//         "length": 247,
//         "plays": 60,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mhtl.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mhtl.jpg",
//         "song": "Mùa hoa trở lại",
//         "name": ["Khanh Linh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mhtl.mp3",
//         "length": 321,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mxdt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mxdt.jpg",
//         "song": "Mùa xuân đầu tiên",
//         "name": ["Thanh Thuy"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mxdt.mp3",
//         "length": 357,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mxo.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mxo.jpg",
//         "song": "Mùa xuân ơi",
//         "name": ["May Trang"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mxo.mp3",
//         "length": 186,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mxyt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_mxyt.jpg",
//         "song": "Mùa xuân yêu thương",
//         "name": ["Ho Ngoc Ha"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mxyt.mp3",
//         "length": 204,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nqdlg.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nqdlg.jpg",
//         "song": "Năm qua đã làm gì",
//         "name": ["Noo Phuoc Thinh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nqdlg.mp3",
//         "length": 235,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nccx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nccx.jpg",
//         "song": "Nắng có còn xuân",
//         "name": ["Le Quyen"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nccx.mp3",
//         "length": 266,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ntqe.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ntqe.jpg",
//         "song": "Ngày tết quê em",
//         "name": ["May Trang"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ntqe.mp3",
//         "length": 240,
//         "plays": 120,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nxlpsv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nxlpsv.jpg",
//         "song": "Ngày xuân long phụng sum vầy",
//         "name": ["Ung Hoang Phuc", "H.A.T", "Anh Kiet"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nxlpsv.mp3",
//         "length": 248,
//         "plays": 100,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_nhmx.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_nhmx.png",
//         "song": "Như hoa mùa xuân",
//         "name": ["Ho Ngoc Ha", "Thuy Tien"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/nhmx.mp3",
//         "length": 232,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_pgtll.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_pgtll.jpg",
//         "song": "Phút giao thừa lặng lẽ",
//         "name": ["Thuy Chi", "Tang Nhat Tue"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/pgtll.mp3",
//         "length": 336,
//         "plays": 50,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tdr.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tdr.jpg",
//         "song": "Tết đến rồi",
//         "name": ["Tam ca con gai"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tdr.mp3",
//         "length": 232,
//         "plays": 30,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tlt.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tlt.jpg",
//         "song": "Tết là tết",
//         "name": ["Thuy Khanh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tlt.mp3",
//         "length": 168,
//         "plays": 90,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tncv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tncv.jpg",
//         "song": "Tết này con về",
//         "name": ["Issac Thai", "Binz"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tncsv.mp3",
//         "length": 295,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tnd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tnd.jpg",
//         "song": "Tết nguyên đán",
//         "name": ["V.A"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tnd.mp3",
//         "length": 266,
//         "plays": 40,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tnm.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tnm.jpg",
//         "song": "Tết nhà mình",
//         "name": ["Hoa Minzy", "Lang LD"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tnm.mp3",
//         "length": 235,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ts.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ts.jpg",
//         "song": "Tết sang",
//         "name": ["Nam Em"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ts.mp3",
//         "length": 238,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tetxa.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tetxa.jpg",
//         "song": "Tết xa",
//         "name": ["Bao Uyen"],
//         "type": ["lunar new year", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tx.mp3",
//         "length": 274,
//         "plays": 90,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_tx.jpg",
//         "song": "Tết xuân",
//         "name": ["Luu Huong Giang", "Ho Hoai Anh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tetxuan.mp3",
//         "length": 318,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ttd.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ttd.jpg",
//         "song": "Thần tài đến",
//         "name": ["Luong Bich Huu"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ttd.mp3",
//         "length": 238,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_ttmx.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_ttmx.jpg",
//         "song": "Thì thầm mùa xuân",
//         "name": ["My Linh"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/ttmx.mp3",
//         "length": 281,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_vqn.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_vqn.jpg",
//         "song": "Vị quê nhà",
//         "name": ["Noo Phuoc Thinh", "Lou Hoang"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/vqn.mp3",
//         "length": 257,
//         "plays": 40,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_xdv.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_xdv.jpg",
//         "song": "Xuân đã về",
//         "name": ["Hop ca"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/xdv.mp3",
//         "length": 303,
//         "plays": 100,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_xhm.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_xhm.jpg",
//         "song": "Xuân họp mặt",
//         "name": ["Hop ca"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/xhm.flac",
//         "length": 287,
//         "plays": 80,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_xkm.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avata_xkm.png",
//         "song": "Xuân không màu",
//         "name": ["Miu Le"],
//         "type": ["lunar new year"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/xkm.mp3",
//         "length": 340,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_mandu.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_mandu.jpg",
//         "song": "Mạn du",
//         "name": ["Kim Sa"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/mandu.mp3",
//         "length": 278,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_aichungtinhduocmai.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_aichungtinhduocmai.jpg",
//         "song": "Ai chung tình được mãi",
//         "name": ["Thuong Vo", "ACV"],
//         "type": ["v-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/aichungtinhduocmai.mp3",
//         "length": 332,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_amthambenem.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_amthambenem.jpg",
//         "song": "Âm thầm bên em",
//         "name": ["Son Tung M-TP"],
//         "type": ["v-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/amthambenem.mp3",
//         "length": 291,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_angelbaby.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_angelbaby.jpg",
//         "song": "Angle baby",
//         "name": ["Troye Sivan"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/angelbaby.mp3",
//         "length": 220,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_astronautintheocean.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_astronautintheocean.jpg",
//         "song": "Astronaut in the ocean",
//         "name": ["Masked Wolf"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/astronautintheocean.mp3",
//         "length": 132,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bacphan.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_bacphan.jpg",
//         "song": "Bạc phận",
//         "name": ["Jack - J97", "K-ICM"],
//         "type": ["v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bacphan.mp3",
//         "length": 249,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bainaychillphet.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_bainaychillphet.jpg",
//         "song": "Bài này chill phết",
//         "name": ["Den Vau", "Min"],
//         "type": ["v-pop", "rap", "pop", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bainaychillphet.mp3",
//         "length": 276,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_bentrentanglau.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_bentrentanglau.jpg",
//         "song": "Bên trên tầng lầu",
//         "name": ["Tang Duy Tan"],
//         "type": ["v-pop", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/bentrentanglau.mp3",
//         "length": 184,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_binhyennoidau.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_binhyennoidau.jpg",
//         "song": "Bình yên nơi đầu",
//         "name": ["Son Tung M-TP"],
//         "type": ["v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/binhyennoidau.mp3",
//         "length": 252,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_blindinglights.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_blindinglights.jpg",
//         "song": "Blinding lights",
//         "name": ["The Weeknd"],
//         "type": ["usuk", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/blindinglights.mp3",
//         "length": 200,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_buongdoitaynhaura.png",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_buongdoitaynhaura.png",
//         "song": "Buông đôi tay nhau ra",
//         "name": ["Son Tung M-TP"],
//         "type": ["v-pop", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/buongdoitaynhaura.mp3",
//         "length": 225,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_catena.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_catena.jpg",
//         "song": "Có ai thương em như anh",
//         "name": ["Toc Tien"],
//         "type": ["v-pop", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/catena.mp3",
//         "length": 231,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_cochangtraivietlencay.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_cochangtraivietlencay.jpg",
//         "song": "Có chàng trai viết lên cây",
//         "name": ["Phan Manh Quynh"],
//         "type": ["v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/cochangtraivietlencay.mp3",
//         "length": 309,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_conuongxinhdepphaidilaychong.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_conuongxinhdepphaidilaychong.jpg",
//         "song": "Cô nương xinh đẹp phải đi lấy chồng rồi",
//         "name": ["Chu Hong"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/conuongxinhdepphaidilaychong.mp3",
//         "length": 276,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_doubletake.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_doubletake.jpg",
//         "song": "Double take",
//         "name": ["Dhruv"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/doubletake.mp3",
//         "length": 171,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_dungnhuthoiquen.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_dungnhuthoiquen.jpg",
//         "song": "Đừng như thói quen",
//         "name": ["JayKii", "Sara Luu"],
//         "type": ["v-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/dungnhuthoiquen.mp3",
//         "length": 266,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_kemduyen.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_kemduyen.jpg",
//         "song": "Kém duyên",
//         "name": ["Rum", "NIT", "Masew"],
//         "type": ["v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/kemduyen.mp3",
//         "length": 224,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_leftandright.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_leftandright.jpg",
//         "song": "Left and right",
//         "name": ["Charlie Puth", "Jung Kook"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/leftandright.mp3",
//         "length": 154,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_lily.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_lily.jpg",
//         "song": "Lily",
//         "name": ["Alan Walker", "K-391", "Emelie Hollow"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/lily.mp3",
//         "length": 195,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_merrychristmas.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_merrychristmas.jpg",
//         "song": "Merry christmas",
//         "name": ["Ed Sheeran", "Elton John"],
//         "type": ["usuk", "christmas"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/merrychristmas.mp3",
//         "length": 208,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_motuyetlanh.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_motuyetlanh.jpg",
//         "song": "Mộ tuyết lạnh",
//         "name": ["Ngo Thien"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/motuyetlanh.mp3",
//         "length": 264,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_orange.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_orange.jpg",
//         "song": "Orange",
//         "name": ["7"],
//         "type": ["j-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/orange.mp3",
//         "length": 350,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_saveyourtears.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_saveyourtears.jpg",
//         "song": "Save your tears",
//         "name": ["The Weeknd"],
//         "type": ["usuk"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/saveyourtears.mp3",
//         "length": 215,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_sitinhmo.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_sitinhmo.jpg",
//         "song": "Si tình mộ",
//         "name": ["Dang Luan"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/sitinhmo.mp3",
//         "length": 307,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_solo.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_solo.jpg",
//         "song": "Solo",
//         "name": ["Jennie"],
//         "type": ["k-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/solo.mp3",
//         "length": 169,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_songgio.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_songgio.jpg",
//         "song": "Sóng gió",
//         "name": ["Jack - J97", "K-ICM"],
//         "type": ["v-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/songgio.mp3",
//         "length": 254,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_suthanhhoa.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_suthanhhoa.jpg",
//         "song": "Sứ thanh hoa",
//         "name": ["Chau Kiet Luan"],
//         "type": ["c-pop", "chill"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/suthanhhoa.mp3",
//         "length": 243,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_suytnuathi.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_suytnuathi.jpg",
//         "song": "Suýt nữa thì",
//         "name": ["Andiez"],
//         "type": ["v-pop", "mood"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/suytnuathi.mp3",
//         "length": 283,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_tambietnhe.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_tambietnhe.jpg",
//         "song": "Tạm biệt nhé",
//         "name": ["Lynk Lee", "Phuc Bang"],
//         "type": ["summer"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/tambietnhe.mp3",
//         "length": 287,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_thangdien.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_thangdien.jpg",
//         "song": "Thằng điên",
//         "name": ["JustaTe", "Phuong Ly"],
//         "type": ["v-pop", "pop", "r&b"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thangdien.mp3",
//         "length": 235,
//         "plays": 270,
//         "likes": 60
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_thanhxuan.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_thanhxuan.jpg",
//         "song": "Thanh Xuân",
//         "name": ["Da LAB"],
//         "type": ["v-pop", "pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/thanhxuan.mp3",
//         "length": 220,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_vimeanhbatchiatay.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_vimeanhbatchiatay.jpg",
//         "song": "Vì mẹ anh bắt chia tay",
//         "name": ["Miu Le", "Karik"],
//         "type": ["v-pop", "r&b", "rap"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/vimeanhbatchiatay.mp3",
//         "length": 262,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_vivuongcodoc.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_vivuongcodoc.jpg",
//         "song": "Vị vương cô độc",
//         "name": ["Hai Lai A Moc"],
//         "type": ["c-pop"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/vivuongcodoc.mp3",
//         "length": 203,
//         "plays": 0,
//         "likes": 0
//     },
//     {
//         "link": "https://www.youtube.com",
//         "img": "https://nightmusic-api.herokuapp.com/api/resources/images/server/img_haytraochoanh.jpg",
//         "avatar":
//             "https://nightmusic-api.herokuapp.com/api/resources/images/server/avatar_haytraochoanh.jpg",
//         "song": "Hãy trao cho anh",
//         "name": ["Son Tung M-TP", "Snoop Dogg"],
//         "type": ["v-pop", "r&b", "rap", "pop", "summer"],
//         "audio":
//             "https://nightmusic-api.herokuapp.com/api/resources/audios/haytraochoanh.mp3",
//         "length": 245,
//         "plays": 290,
//         "likes": 48
//     }
// ]

// export default song
