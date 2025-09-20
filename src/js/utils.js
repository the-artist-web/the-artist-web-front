'use strict';

/**
 * Add event on elements
 */
const addEventOnElements = ($elements, eventType, callback) => {
    $elements.forEach(elem => elem.addEventListener(eventType, callback));
};

export {
    addEventOnElements
}