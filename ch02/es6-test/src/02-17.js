let p1 = {
    name : "아이패드",
    price : 200000,
    quantity : 2,
    order : function() {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log("주문금액 : " + this.amount);
    },
    discount(rate) { // 새로운 객체 리터럴
        if (rate > 0 && rate < 0.8) {
            this.amount = (1 - rate) * this.price * this.quantity;
        }
        console.log((100 * rate) + "% 할인된 금액으로 구매합니다.");
    }
}