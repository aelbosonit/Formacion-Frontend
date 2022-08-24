/*
Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
*/
function removeHTMLTags(html){
    return html.replace(/<[^>]*>?/gm, ''); //regexp para que reemplace valores indicados
}

const result = removeHTMLTags('<div><span>lorem</span><strong>ipsum</strong></div>');
console.log(result);// loremipsum