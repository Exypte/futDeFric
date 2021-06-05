// var parser, xmlDoc;
// var text = "<bookstore><book>" +
// "<title>Everyday Italian</title>" +
// "<author>Giada De Laurentiis</author>" +
// "<year>2005</year>" +
// "</book></bookstore>";

// parser = new DOMParser();
// xmlDoc = parser.parseFromString(text,"text/xml");

// document.getElementById("prenom").innerHTML =
// xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

inject.addEventListener('click', (event) => {
    // var fichierSelectionne = document.getElementById('input').files[0];
    // var content = document.getElementById('content');
    // console.log(fichierSelectionne.path)
    
    // var reader = new FileReader();
    // reader.onload = function(event){
    //     console.log("coucou");
    //     parser = new DOMParser();
    //     xmlDoc = parser.parseFromString(reader.result,"text/xml");
    //     console.log(xmlDoc.documentElement.textContent);
    // };

    // reader.readAsText(fichierSelectionne);

        // parser = new DOMParser();
        // xmlDoc = parser.parseFromString(fichierSelectionne.path,"application/xml");
        // console.log(xmlDoc.documentElement.textContent);
        // const serializer = new XMLSerializer();
        // const xmlStr = serializer.serializeToString(fichierSelectionne.path);

    console.log("coucou");

    var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (oXHR.readyState == 4)               // REQUEST COMPLETED.
            workOnXML(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "./TEST.xml", true);      // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    oXHR.send();
});

function workOnXML(xml){
    console.log(xml);
    console.log(xml.getElementsByTagName('etude'));
    console.log(xml.getElementsByTagName('etude')[0]);
    etude = xml.getElementsByTagName('etude')[0];
    console.log(etude.getElementsByTagName('client_id')[0].childNodes[0].nodeValue);
    document.getElementById('nom').innerHTML=etude.getElementsByTagName('client_id')[0].childNodes[0].nodeValue;
}