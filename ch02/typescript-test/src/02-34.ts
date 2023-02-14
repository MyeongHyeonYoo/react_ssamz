// 숫자 열거형
enum Media {
    Newspaper,      // 0   
    BroadCasting,   // 1
    SNS,            // 2
    Magazine,       // 3
    Youtube         // 4
}

let media1 : Media = Media.Youtube;
console.log(media1);    // 4 출력
// 문자 열거형
enum Media2 {
    Newspaper = "신문",
    Broadcasting = "방송",
    SNS = "SNS",
    Magazine = "잡지",
    Youtube = "유튜브"
}

let media2 : Media2 = Media2.Youtube;
console.log(media2);    // "유튜브" 출력

enum Media3 {
    Newspaper,      // 0   
    BroadCasting = 10,   // 10
    SNS,            // 11
    Magazine,       // 12
    Youtube         // 13
}

let media3 : Media3 = Media3.SNS;
console.log(media3);
