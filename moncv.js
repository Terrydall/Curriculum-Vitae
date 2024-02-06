const xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', 'index.xml', true);
xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        const xmlData = xmlHttp.responseText;
        console.log(xmlData);
    }
};
xmlHttp.send();


const balise= document.querySelector('p');
const section= document.querySelectorAll('h3');
console.log(balise)
console.log(section)
for(let p = 0;p<section.length;p++){
    console.log(section[p]);
}
 new DOMParser();