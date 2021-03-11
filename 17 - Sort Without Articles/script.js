const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articles = ["The ", "An ", "A "];

bands.sort((a,b) => {
    var [aArticle, aName] = a.split("The ");
    var [bArticle, bName] = b.split("The ");
    if (!aName) {
        var [aArticle, aName] = a.split("An ");
    }
    if (!aName) {
        var [aArticle, aName] = a.split("A ");
    }
    if (!aName) {
        aName = a;
    }
    if (!bName) {
        var [bArticle, bName] = b.split("An ");
    }
    if (!bName) {
        var [bArticle, bName] = b.split("A ");
    }
    if (!bName) {
        bName = b;
    }
    if (aName > bName) {
        return 1;
    }
    if (aName < bName) {
        return -1
    }
    return 0;
});
console.table(bands);
bands.forEach(band => {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`${band}`);
    node.appendChild(textnode);
    document.getElementById("bands").appendChild(node);
});