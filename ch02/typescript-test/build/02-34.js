// 숫자 열거형
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["BroadCasting"] = 1] = "BroadCasting";
    Media[Media["SNS"] = 2] = "SNS";
    Media[Media["Magazine"] = 3] = "Magazine";
    Media[Media["Youtube"] = 4] = "Youtube"; // 4
})(Media || (Media = {}));
var media1 = Media.Youtube;
console.log(media1); // 4 출력
// 문자 열거형
var Media2;
(function (Media2) {
    Media2["Newspaper"] = "\uC2E0\uBB38";
    Media2["Broadcasting"] = "\uBC29\uC1A1";
    Media2["SNS"] = "SNS";
    Media2["Magazine"] = "\uC7A1\uC9C0";
    Media2["Youtube"] = "\uC720\uD29C\uBE0C";
})(Media2 || (Media2 = {}));
var media2 = Media2.Youtube;
console.log(media2); // "유튜브" 출력
var Media3;
(function (Media3) {
    Media3[Media3["Newspaper"] = 0] = "Newspaper";
    Media3[Media3["BroadCasting"] = 10] = "BroadCasting";
    Media3[Media3["SNS"] = 11] = "SNS";
    Media3[Media3["Magazine"] = 12] = "Magazine";
    Media3[Media3["Youtube"] = 13] = "Youtube"; // 13
})(Media3 || (Media3 = {}));
var media3 = Media3.SNS;
console.log(media3);
//# sourceMappingURL=02-34.js.map