"use strict";

/**
 * Add Event On Elements
 */
const addEventOnElements = ($elements, eventType, callback) => $elements.forEach($elem => $elem.addEventListener(eventType, (e) => callback(e, $elem)));

export {
    addEventOnElements
}