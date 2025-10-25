export const Copyright = ($element) => {
    const date = new Date();
    const dateYear = date.getFullYear();

    $element.innerHTML = "";
    $element.innerHTML = `Copyright Ⓒ ${dateYear} <strong>${$element.dataset.copyrights}</strong>, Inc.`;
}