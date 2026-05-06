"use strict";

export const Copied = ($element) => navigator.clipboard.writeText($element.dataset.copied);