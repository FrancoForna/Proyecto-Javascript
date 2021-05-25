//Seccion del header con titulo
let header = $("#headerP");
header.append(`<div id="divCont"><div id="divContH"><h1  id="tit"> Bienvenidos a Pool web </h1></div></div>`);

//Defino var para ser mas ordenado
let start = $("#formOne")
let divHeader = $("#divCont");
let divHeaderHijo = $("#divContH");
let titOne = $("#tit");

//Aplico CSS a variables
divHeader.css({"display": "flex", "width": "100%", "justify-content": "center"});
divHeaderHijo.css({"display": "flex", "width": "65%"});
titOne.css({"display": "none", "color": "red", "font-size": "80px"});
titOne.fadeIn(5000);

//Agrego al div que ira rotando
$("body").append(`<div id="prin"><div id="divP"></div><div id="divP1"></div></div>`);
let divPrin = $("#prin")
divPrin.css({"witdh": "100%", "display":"flex", "flex-flow":"row" ,"justify-content":"space-evenly"})

//Agrego al primer hijo(imagen)
let divPartner = $("#divP")
divPartner.append(`<img id="partner" src="Imgs/partner-removebg-preview.png">`);
divPartner.css({"width":"45%","flex-flow":"column wrap" })
let partner = $("#partner");
partner.css({"display":"none", "width":"100%","max-height": "auto", "border-radius":"10px" , })
partner.fadeIn(5000);

//Agrego al segundo
let divTexto = $("#divP1")
divTexto.css({"flex-flow":"column wrap", "align-content":"center" ,"width":"45%"})
divTexto.append(`<p id="TP"> Si si, ya se lo que piensan.. ¿Saben a quien tuve que rogar para tener mi página verdad? No puedo decirlo, pero empieza con W y termina con olverine. Ahora presionen ese logo de ahi abajo y sigamos, no perdamos tiempo. </p>`) 
let textoPrincipal = $("#TP")
textoPrincipal.css({"font-size":"30px", "color": "red", "display": "none" })
textoPrincipal.slideDown(2500)

//Genero botton para interactuar
$("body").append(`<div id="espacioBtn"><div id="espacioBtnI"><img id="lS" src="Imgs/partner0-removebg-preview.png"></div></div>`)
let espacioBotones1 = $("#espacioBtn")
let espacioBotones2 = $("#espacioBtnI")
let botonesF = $(".botones")
let bottonA = $("#lS")

espacioBotones1.css({"witdh":"100%", "display": "flex", "justify-content": "space-around"})
espacioBotones2.css({"width": "55%", "display": "flex", "justify-content":"center"})
botonesF.css({"height":"1px", "background-color": "red", "border": "black solid 1px"})
bottonA.click((e) => {
    e.preventDefault();
    textoPrincipal.slideUp(500)
    divTexto.prepend(`<p id="TP2"> Ya se porque estas aqui, quieres pertenecer a X-FORCE. Muy bien, primero tenemos que conocerte. asi que presionen de nuevo el logo con mi hermosa cara y sigamos.</p>`)
    let textoSecundario = $("#TP2");
    textoSecundario.css({"font-size":"30px", "color": "red", "display": "none"})
    textoSecundario.slideToggle(500).delay(2000)
    bottonA.hide() //Aca iria
    espacioBotones2.append(`<img id="lS2" src="Imgs/partner0-removebg-preview.png">`);
    let botonB = $("#lS2");
    let botonesF = $(".botones")
    botonesF.css({"color": "white", "height":"50px", "background-color": "black", "border": "black solid 1px", "display": "none"})
    botonB.slideDown(1000);
    botonB.click((e) => {
        e.preventDefault();
        divHeader.slideUp(1000)
        divPrin.slideUp(1000)
        divPartner.slideUp(1000)
        botonB.click((e) => {
            e.preventDefault();
            start.slideDown(1000)
            botonB.slideToggle(1000)
        })
        // divHeader.slideDown(1000).append(`<h2 id="tit2"> Empecemos </h2>`).slideDown(1000)
        // let segundoTitulo = $("#tit2");
        // segundoTitulo.css({"display": "none", "color": "red", "font-size": "80px"});
        // segundoTitulo.slideDown(3500);
        // divPartner.append(`<img id="partner2" src="Imgs/partner2-removebg-preview.png">`);
        // let partner2 = $("#partner2")
        // partner2.css({"display":"none", "padding":"20px","width":"auto", "max-height": "auto", "border-radius":"200px" })
        // partner2.fadeIn(1500);
    })

})

let botonForm = $("#submit");
let form = $("#formPrinc");
let lForm = $("#lForm");
let botonFc = $("#formC");

botonForm.click((evento) => {
evento.preventDefault();
let hijos = $(evento.target).parent().children(".datosForm");
lForm.prepend(`<p class="tRelevante">Hola y bienvenido a X Force, ${hijos[0].value}, asi que estas aqui porque, ${hijos[2].value} </p>` , `<p class="tRelevante"> Muy bien, vamos a hacerte unas preguntas para ver si estas capacitado.</p>`);
console.log(hijos[1].value);
console.log(hijos[2].value);
console.log(hijos[3].value);
 form.slideUp(1000);
 botonFc.fadeIn(3000);
for (const usuario1 of hijos) { 
    console.log(usuario1.value);
    }
let usuarios = [];
for (const iterator of hijos) {
    usuarios.push(iterator.value)
}
console.log(usuarios)

let JsonUsuarios = JSON.stringify(usuarios)
localStorage.setItem("usuarios", JsonUsuarios)
const ArrayJsonObj = JSON.parse(localStorage.getItem("usuarios"))
console.log(ArrayJsonObj)

})

let question = $("#question")

botonFc.click((e) => {
    e.preventDefault();
    start.slideUp(100);
    question.slideDown(100)
})

let botonP1 = $("#botonP1");
let divSecun1 = $(".divSecun1")
let divSecun2 = $(".divSecun2")
botonP1.click((e) => {
    e.preventDefault();
    let q1 = $(e.target).parent().children("input");
    console.log(q1)

    
    // if (q1[0].checked) {
    //     $(e.target).parent().append(`<p> Correcto </p>`)
    // }

    let x=false

    for (const i of q1) {
        console.log(i)
        if (i.checked && i.value=="2") {
            x = true
        
            
        } else {
        }

    }

    if (x===true){
       $(e.target).parent().append(`<p> Correcto </p>`)
       $(e.target).$(".divSecun1").slideUp(1000);
       $(e.target).$(".divSecun2").slideDown(1000);

    }else {$(e.target).parent().append(`<p class="incorrec"> Incorrecto </p>`)}

 

    // let peliculas = [];
    // for (const iterator of q1) {
    //     peliculas.push(iterator.value)
    // }
    // // console.log(peliculas);
    // // console.log(peliculas[0])
    // // console.log($("input"))
    
    // if (peliculas === peliculas[0].value) {
    //     divSecun2.append(`<p> Correcto </p>`)
    // }
    // else {
    //     divSecun2.append(`<p> Incorrecto </p>`)
    // }
    
   
})



//Desafio Ajax 
// Obtener ajax de url

$("#mAjax").append(`<button class="botoness" id="botonAjax">Obtener informacion de JSON via internet</button>`);

let dAjax = "http://hp-api.herokuapp.com/api/characters";

$("#botonAjax").click((e) => {
    e.preventDefault();
    $.get(dAjax, (action, state) => {
        if (state === "success") {

            let actionH = action;
            //recorro el array y dps recorro dentro del objeto
            for (const ejec of actionH) {
                $("#mAjax").append(
                    `<div>
                        <p class="tRelevante">${ejec.name}</p>
                        </div>`
                );
            }
        }
    });
});

// Obtener ajax local 

$("#mAjax").append(`<button class="botoness" id="botonAjax2">Obtengo informacion de mi JSON</button>`);

$("#botonAjax2").click((e) => {
    e.preventDefault();
    $.getJSON("data/datos.json", (action, estado) => {
        $("#mAjax").append(`<h2 class="tituloForm"> Los integrantes de fuerza X son: </h2>`)
        for (const recor of action) {
            $("#mAjax").append(`<div>
                    <p class="tRelevante"> Nombre: ${recor.nombre}</p>
                    <p class="tRelevante"> Super poder: ${recor.superpoder}</p>
                    <img class="imgTeam" src="${recor.img}">
                    </div>`);
        }
        console.log("El estado es" + estado);
    });
});
