//ALGORITMO DE SIMULACIÓN DE VENTAS DE COMIDA RÁPIDA:
alert ("**************BIENVENIDO A DELIPASO****************"    +"\n"+"\n"+
        "Come todo lo que te puedas imaginar a un solo clic!!!" +"\n"+"\n"+
        "*********************************************************."     );
//DEFINIENDO VARIABLES:
let todototal=0;   let msjfinal="Su pedido es:";   let detalle="";   let contador=0;  let tiempo=0;
//ESTABLECIENDO FUNCIÓN CONSTRUCTORA:
function Menu(Nombre, Stock, Costo, Descripción, Total) {
    this.Nombre=Nombre; this.Stock=Stock; this.Costo= Costo; this.Descripción=Descripción; this.total=Total;
    //MÉTODO QUE REALIZA EL PEDIDO DEL MENÚ SELECCIONADO:
    this.pedido = () => {
        this.cantidad=parseInt(prompt(  "El pedido: "+this.Nombre+" cuesta S/."+this.Costo+" la unidad.\n"+
                                        "¿Qué cantidad desea pedir? \nPor favor ingrese un número"      ));
        return this.cantidad;
    }
    //MÉTODO QUE ACTUALIZA LAS PROPIEDADES DE CADA OBJETO:
    this.actualizar = () => {
        console.log(    "Se ha pedido " + this.cantidad + " " + this.Nombre    );
        this.Stock  =   this.Stock -   this.cantidad             ; //ACTUALIZANDO STOCK DEL OBJETO SELECCIONADO.           
        this.total  =   this.total +   this.cantidad             ; //ACTUALIZANDO CANTIDAD DE PEDIDOS DEL OBJETO.
        todototal   =   todototal  +   (this.Costo*this.cantidad); //ACTUALIZANDO MONTO TOTAL DE COMPRA.
        alert(  "Ha pedido "+ this.cantidad +" "+   this.Nombre +   "\n"        +
                "Queda "    + this.Stock    +" "+   this.Nombre +   " en Stock");
    }
    //MÉTODO QUE INDICA LA DISPONIBILIDAD DE CADA MENÚ:
    this.disponible = () => {
        console.log(    "*"+this.Nombre+":\n"+"--> "+ this.Stock+" unidades disponibles."               );
    }
    //MÉTODO QUE INDICA QUE LA CANTIDAD INGRESADA NO ESTA DISPONIBLE Y PERMITE UN NUEVO REINGRESO:
    this.comparar= () => {
        this.cantidad=parseInt(prompt(  "Disculpe, solo hay disponible "+this.Stock+" "+this.Nombre+".\n"+
                                        "Por favor, elija otra cantidad."));
        return this.cantidad;
    }
    //MÉTODO PARA INDICAR QUE SE HA CANCELADO LA OPERACIÓN Y SE DEVOLVERA AL MENÚ.
    this.cancelar = () => {
        alert(  "Se ha cancelado o no se ha indicado ninguna cantidad válida.\nSe le devolverá al menú" );
    }
    //MÉTODO PARA CALCULAR LA DEMORA DE CADA PEDIDO EN BASE A LA CANTIDAD PEDIDA.
    this.demora = () => {
        this.tiempo=this.cantidad*2;
        return this.tiempo;
    }
    //MÉTODO PARA INDICAR QUE SE HA TERMINADO EL STOCK Y SE ELIJA OTRA OPCIÓN.
    this.agotado= () => {
        alert(  "Disculpe, no queda más "+this.Nombre+", por favor elija otra opción del menú."         );
    }
    //MÉTODO PARA IMPRIMIR EL DETALLE DE UN MENÚ Y REINICIAR VARIABLES.
    this.imprimeyreinicia= () => {
        alert(detalle)  ;   //IMPRIME DETALLE DEL OBJETO
        contador    =  0;   //INICIALIZA VARIABLE CONTADOR
        detalle     = "";   //INICIALIZA VARIABLE DETALLE
    }
}
//CONSTRUYENDO EL MENÚ EN BASE A LA FUNCIÓN CONSTRUCTORA:
let M1= new Menu(   "Hamburguesa de Carne", 10, 8, "Hamburguesa 100% hecha de res a la parrilla, jugosos tomates, "      +
                    "frescas lechugas, mayonesa, ketchup, pepinillos y cebolla blanca. ",0         );

let M2= new Menu(   "Twister Tradicional de Pollo", 5, 16, "Delicioso Snack tostado con tiras de pollo envuelto junto a "+
                    "lechugas frescas,tomate y pepinillo en rodajas, con su mayonesa y ketchup. ",0);

let M3= new Menu(   "Salchipapa", 10, 6, " Rodajas fritas de salchicha y papas fritas cortadas a la perfección "         +
                    "bañadas en deliciosa mayonesa y ketchup al gusto. ",0                         );

let M4= new Menu(   "Pollo Broaster", 5, 10, "Pechuga de pollo tierno enharinado, rebozado y frito, "                    +
                    "acompañado de  una porción de papas fritas, ensalada y cremas al gusto. ",0   );

//SOLICITANDO DATOS PARA INICIAR EL PEDIDO:
let ingreso = prompt(   "Buen día, selecciona la opción del menú que desea pedir:                                \n"+
                        "1-"+M1.Nombre + "\n" +"2-"+M2.Nombre + "\n" + "3-"+M3.Nombre + "\n" + "4-"+M4.Nombre + "\n"+
                        "0-Ninguna, Salir                                                                        \n"+
                        "***************************************************************                         \n"+
                        "Si desea ver la carta detallada ingrese el 5"               );

//FUNCIÓN QUE CONSTRUYE PARTE DEL MENSAJE FINAL QUE SE IMPRIMIRÁ AL COMPLETAR EL PEDIDO.
function final(menu) {
    if (menu.total==0) {  
        msjfinal=msjfinal;
        return msjfinal;
    } else {
        msjfinal=msjfinal+"\n"+"*"+ menu.Nombre+"= "+menu.total+" unidad(es).";
        return msjfinal;
    }
}

//INICIANDO BUCLE MEDIANTE CONDICIONAL WHILE:     
while (ingreso!= "0" && ingreso!=null)  {

    //INDICANDO EL STOCK MEDIANTE CONSOLA PERIODICAMENTE EN CADA CICLO:
    console.log(    "************Stock DELIPASO**********\n"+"Menú disponible:"     );
                    M1.disponible(), M2.disponible(), M3.disponible(), M4.disponible()
                    
//APLICANDO ESTRUCTURA SWITCH:
switch (ingreso) {
    //INGRESANDO AL CASO 1 SI LA OPCIÓN ELEGIDA ES 1:
    case "1":
        //MIENTRAS EXISTA STOCK DEL OBJETO SE INGRESA A LA CONDICIÓN IF.
        if (M1.Stock!=0) {
            M1.cantidad=M1.pedido();    //SE LLAMA AL MÉTODO PEDIDO PARA OBTENER LA CANTIDAD DEL PEDIDO.
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (M1.cantidad > M1.Stock)    {
                M1.cantidad=M1.comparar();  //SE LLAMA AL MÉTODO COMPARAR PARA OBTENER UNA NUEVA CANTIDAD DE PEDIDO.
            }
            //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
            if(M1.cantidad == "" || M1.cantidad == "0" || isNaN (M1.cantidad))  {
                    M1.cancelar()  ;    //SI LA CANTIDAD NO ES CORRECTA, SE LLAMA AL MÉTODO CANCELAR Y DEVUELVE AL MENÚ.
                break;
            }   else    {
                    M1.actualizar();    //I LA CANTIDAD ES CORRECTA, SE LLAMA AL MÉTODO ACTUALIZAR Y DEVUELVE AL MENÚ.
                    if (("tiempo" in M1)==false) { //EVALUANDO SI LA PROPIEDAD TIEMPO EXISTE CON LA ESTRUCTURA IN.
                        M1.tiempo = 0          ;   //CREANDO LA PROPIEDAD TIEMPO DENTRO DEL OBJETO.
                    }
                    M1.demora()    ;    //SE LLAMA AL MÉTODO DEMORA PARA OBTENER LA DEMORA DEL PEDIDO.
                    tiempo = tiempo + M1.tiempo;   //CALCULANDO TIEMPO TOTAL DE DEMORA DEL PEDIDO.
                break;
            } 
        }
        M1.agotado();                  //SI NO EXISTE STOCK DEL MENÚ 1 SE LLAMA AL MÉTODO AGOTADO Y DEVUELVE AL MENÚ.
    break;
    //INGRESANDO AL CASO 2 SI LA OPCIÓN ELEGIDA ES 2:
    case "2":
        //MIENTRAS EXISTA STOCK DEL OBJETO SE INGRESA A LA CONDICIÓN IF.
        if (M2.Stock!=0) {
            M2.cantidad=M2.pedido();    //SE LLAMA AL MÉTODO PEDIDO PARA OBTENER LA CANTIDAD DEL PEDIDO.
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (M2.cantidad > M2.Stock)    {
                M2.cantidad=M2.comparar();  //SE LLAMA AL MÉTODO COMPARAR PARA OBTENER UNA NUEVA CANTIDAD DE PEDIDO.
            }
            //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
            if (M2.cantidad == null)       {
                break;
            }   else if(M2.cantidad == "" || M2.cantidad == "0" || isNaN (M2.cantidad))  {
                M2.cancelar()  ;    //SI LA CANTIDAD NO ES CORRECTA, SE LLAMA AL MÉTODO CANCELAR Y DEVUELVE AL MENÚ.
                break;
            }   else    {
                    M2.actualizar();    //SI LA CANTIDAD ES CORRECTA, SE LLAMA AL MÉTODO ACTUALIZAR Y DEVUELVE AL MENÚ.
                    if (("tiempo" in M2)==false) { //EVALUANDO SI LA PROPIEDAD TIEMPO EXISTE CON LA ESTRUCTURA IN.
                        M2.tiempo = 0          ;   //CREANDO LA PROPIEDAD TIEMPO DENTRO DEL OBJETO.
                    }
                    M2.demora()    ;    //SE LLAMA AL MÉTODO DEMORA PARA OBTENER LA DEMORA DEL PEDIDO.
                    tiempo = tiempo + M2.tiempo;   //CALCULANDO TIEMPO TOTAL DE DEMORA DEL PEDIDO.
                break;
            } 
        }
        M2.agotado();                  //SI NO EXISTE STOCK DEL MENÚ 1 SE LLAMA AL MÉTODO AGOTADO Y DEVUELVE AL MENÚ.
    break;
    //INGRESANDO AL CASO 3 SI LA OPCIÓN ELEGIDA ES 3:
    case "3":
        //MIENTRAS EXISTA STOCK DEL OBJETO SE INGRESA A LA CONDICIÓN IF.
        if (M3.Stock!=0) {
            M3.cantidad=M3.pedido();    //SE LLAMA AL MÉTODO PEDIDO PARA OBTENER LA CANTIDAD DEL PEDIDO.
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (M3.cantidad > M3.Stock)    {
                M3.cantidad=M3.comparar();  //SE LLAMA AL MÉTODO COMPARAR PARA OBTENER UNA NUEVA CANTIDAD DE PEDIDO.
            }
            //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
            if (M3.cantidad == null)       {
                break;
            }   else if(M3.cantidad == "" || M3.cantidad == "0" || isNaN (M3.cantidad))  {
                M3.cancelar()  ;    //SI LA CANTIDAD NO ES CORRECTA, SE LLAMA AL MÉTODO CANCELAR Y DEVUELVE AL MENÚ.
                break;
            }   else    {
                    M3.actualizar();    //SI LA CANTIDAD ES CORRECTA, SE LLAMA AL MÉTODO ACTUALIZAR Y DEVUELVE AL MENÚ.
                    if (("tiempo" in M3)==false) { //EVALUANDO SI LA PROPIEDAD TIEMPO EXISTE CON LA ESTRUCTURA IN.
                        M3.tiempo = 0          ;   //CREANDO LA PROPIEDAD TIEMPO DENTRO DEL OBJETO.
                    }
                    M3.demora()    ;    //SE LLAMA AL MÉTODO DEMORA PARA OBTENER LA DEMORA DEL PEDIDO.
                    tiempo = tiempo + M3.tiempo;   //CALCULANDO TIEMPO TOTAL DE DEMORA DEL PEDIDO.
                break;
            } 
        }
        M3.agotado();                  //SI NO EXISTE STOCK DEL MENÚ 1 SE LLAMA AL MÉTODO AGOTADO Y DEVUELVE AL MENÚ.
    break;
    //INGRESANDO AL CASO 4 SI LA OPCIÓN ELEGIDA ES 4:
    case "4":
        //MIENTRAS EXISTA STOCK DEL OBJETO SE INGRESA A LA CONDICIÓN IF.
        if (M4.Stock!=0) {
            M4.cantidad=M4.pedido();    //SE LLAMA AL MÉTODO PEDIDO PARA OBTENER LA CANTIDAD DEL PEDIDO.
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (M4.cantidad > M4.Stock)    {
                M4.cantidad=M4.comparar();  //SE LLAMA AL MÉTODO COMPARAR PARA OBTENER UNA NUEVA CANTIDAD DE PEDIDO.
            }
            //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
            if (M4.cantidad == null)       {
                break;
            }   else if(M4.cantidad == "" || M4.cantidad == "0" || isNaN (M4.cantidad))  {
                M4.cancelar()  ;    //SI LA CANTIDAD NO ES CORRECTA, SE LLAMA AL MÉTODO CANCELAR Y DEVUELVE AL MENÚ.
                break;
            }   else    {
                    M4.actualizar();    //SI LA CANTIDAD ES CORRECTA, SE LLAMA AL MÉTODO ACTUALIZAR Y DEVUELVE AL MENÚ.
                    if (("tiempo" in M4)==false) { //EVALUANDO SI LA PROPIEDAD TIEMPO EXISTE CON LA ESTRUCTURA IN.
                        M4.tiempo = 0          ;   //CREANDO LA PROPIEDAD TIEMPO DENTRO DEL OBJETO.
                    }
                    M4.demora()    ;    //SE LLAMA AL MÉTODO DEMORA PARA OBTENER LA DEMORA DEL PEDIDO.
                    tiempo = tiempo + M4.tiempo;   //CALCULANDO TIEMPO TOTAL DE DEMORA DEL PEDIDO.
                break;
            } 
        }
        M4.agotado();                  //SI NO EXISTE STOCK DEL MENÚ 1 SE LLAMA AL MÉTODO AGOTADO Y DEVUELVE AL MENÚ.
    break;
    //INGRESANDO AL CASO 5 SI LA OPCIÓN ELEGIDA ES 5:
    case "5":
        //SOLICITANDO DATOS PARA OBTENER INFORMACIÓN DETALLADA:
        let ingreso2 = prompt(  "Buen día, selecciona la opción del menú del cual desea tener información detallada:              \n"+
                                "1--->"+ M1.Nombre + "\n" + "2--->"+ M2.Nombre + "\n" +"3--->"+ M3.Nombre + "\n"   +
                                "4--->"+ M4.Nombre + "\n" + "0-Ninguna, Volver al menú anterior"                  );
        switch (ingreso2) {
            //INGRESANDO AL CASO 0 SI LA OPCIÓN ELEGIDA ES 0:
            case "0":
            break;
            //INGRESANDO AL CASO 0 SI LA OPCIÓN ELEGIDA ES 0:
            case "1":
                //OBTENIENDO PROPIEDADES DEL MENÚ 1 PARA MOSTRAR EN DETALLE CON LA ESTRUCTURA FOR IN:
                for (const infoM1 in M1) {
                    if (contador==4) {  //ESTABLECIENDO EL LÍMITE DE PROPIEDADES QUE SE DESEA MOSTRAR.
                        break;
                    } else {
                        detalle = detalle + "*" + infoM1 + ": " + M1[infoM1] + "\n";  //CONSTRUYENDO DETALLES DEL MENÚ.
                        contador++;
                    }
                }
                M1.imprimeyreinicia();  //LLAMANDO AL MÉTODO IMPRIMEYREINICIA PARA IMPRIMIR DETALLES Y REINICIAR VARIABLES.
            break;
            case "2":
                //OBTENIENDO PROPIEDADES DEL MENÚ 2 PARA MOSTRAR EN DETALLE CON LA ESTRUCTURA FOR IN:
                for (const infoM2 in M2) {
                    if (contador==4) {  //ESTABLECIENDO EL LÍMITE DE PROPIEDADES QUE SE DESEA MOSTRAR.
                        break;
                    } else {
                        detalle = detalle + "*" + infoM2 + ": " + M2[infoM2] + "\n";    //CONSTRUYENDO DETALLES DEL MENÚ.
                        contador++;
                    }
                }
                M2.imprimeyreinicia();  //LLAMANDO AL MÉTODO IMPRIMEYREINICIA PARA IMPRIMIR DETALLES Y REINICIAR VARIABLES.
            break;
            case "3":
                //OBTENIENDO PROPIEDADES DEL MENÚ 3 PARA MOSTRAR EN DETALLE CON LA ESTRUCTURA FOR IN:
                for (const infoM3 in M3) {
                    if (contador==4) {  //ESTABLECIENDO EL LÍMITE DE PROPIEDADES QUE SE DESEA MOSTRAR.
                        break;
                    } else {
                        detalle = detalle + "*" + infoM3 + ": " + M3[infoM3] + "\n";    //CONSTRUYENDO DETALLES DEL MENÚ.
                        contador++;
                    }
                }
                M3.imprimeyreinicia();  //LLAMANDO AL MÉTODO IMPRIMEYREINICIA PARA IMPRIMIR DETALLES Y REINICIAR VARIABLES.
            break;
            case "4":
                //OBTENIENDO PROPIEDADES DEL MENÚ 4 PARA MOSTRAR EN DETALLE CON LA ESTRUCTURA FOR IN:
                for (const infoM4 in M4) {
                    if (contador==4) {  //ESTABLECIENDO EL LÍMITE DE PROPIEDADES QUE SE DESEA MOSTRAR.
                        break;
                    } else {
                        detalle = detalle + "*" + infoM4 + ": " + M4[infoM4] + "\n";   //CONSTRUYENDO DETALLES DEL MENÚ.
                        contador++;
                    }
                }
                M4.imprimeyreinicia();  //LLAMANDO AL MÉTODO IMPRIMEYREINICIA PARA IMPRIMIR DETALLES Y REINICIAR VARIABLES.
            break;
        }
        break;
    //INGRESANDO AL CASO POR DEFECTO SI SE INGRESA UNA OPCIÓN NO VÁLIDA:    
    default:
        alert(  "Opción no válida"  );
    break;
    }   
    //SOLICITANDO DATOS PARA CONTINUAR CON EL BUCLE O SALIR DEL MISMO:
    ingreso = prompt(   "Buen día, selecciona la opción del menú que desea pedir:   \n"+
                        "1-"+M1.Nombre + "\n" +"2-"+M2.Nombre + "\n" +"3-"+M3.Nombre + "\n" +"4-"+M4.Nombre +"\n"+
                        "0-Ninguna, Terminar pedido.                                                          \n"+
                        "***************************************************************                      \n"+
                        "Si desea ver la carta detallada ingrese el 5"                                          );
    if (ingreso == "0") {
        break;
    }   else if (ingreso == null) {
                todototal=0;
            alert(  "Se ha cancelado el pedido"); //INDICANDO CANCELACIÓN DEL PEDIDO.
        break;
    }
}
//INDICANDO EL DESENLACE DEL PEDIDO MEDIANTE UNA CONDICIONAL IF ELSE:
if (todototal== "0") {
    alert ("Muchas Gracias por su visita, que tenga un buen día");                 //ALERTA EMITIDA AL CANCELAR EL PEDIDO.
}   else    {
    msjfinal=final(M1); msjfinal=final(M2); msjfinal=final(M3); msjfinal=final(M4);//LLAMANDO FUNCIÓN FINAL PARA CONSTRUIR MENSAJE.
    alert ( msjfinal+"\n"+"El monto total de su pedido es de: S/."+ todototal   +   " Soles.        \n"+
            "Su pedido estará listo en un tiempo aproximado de "  + tiempo      +   " minutos       \n"+
            "Muchas Gracias por su compra, que tenga un buen día!!!"             );//ALERTA EMITIDA AL COMPLETAR CON ÉXITO EL PEDIDO.
}
