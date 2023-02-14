interface IPerosn {
    name: string;
    age: number;
}

interface IPerosn {
    name: string;
    tel: string;
}

// 인터페이스 병합
let p5: IPerosn = { name: "홍길동", tel: "010-111-2222", age: 20 };