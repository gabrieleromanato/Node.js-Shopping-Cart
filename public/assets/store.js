'use strict';

const Store = {
    quantity: () => {
        let qtyWrap = document.querySelectorAll('.qty-wrap');
        if(qtyWrap.length > 0) {
            for(let i = 0; i < qtyWrap.length; i++) {
                let qty = qtyWrap[i];
                let minus = qty.querySelector('.qty-minus');
                let plus =  qty.querySelector('.qty-plus');
                let input = qty.querySelector('.qty');
                let value = parseInt(input.value, 10);

                plus.addEventListener('click', () => {
                    value = value + 1;
                    input.value = value;
                });

                minus.addEventListener('click', () => {
                    value = (value > 1) ? (value - 1) : 1;
                    input.value = value;
                });

            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Store.quantity();
});