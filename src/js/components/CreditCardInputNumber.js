"use strict";

export const CreditCardInputNumber = ($element) => {
    $element.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
        
        e.target.value = formattedValue;
    });

    $element.addEventListener('keypress', (e) => !/[0-9]/.test(e.key) ? e.preventDefault() : "");
};