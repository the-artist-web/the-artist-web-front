"use strict";

/**
 * Add event on element
 */

const addEventOnElements = ($elements, eventType, callback) => $elements.forEach($elem => $elem.addEventListener(eventType, (e) => callback(e, $elem)));

export {
    addEventOnElements
}