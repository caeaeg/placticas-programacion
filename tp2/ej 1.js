
//ejercicio N° 1
< !DOCTYPE html >
    <html>
        <head>
            <title>ejercicio n°10</title>
        </head>
        <body>

            <script>

                var verdadero, char
                var valores = [verdadero,false, 2,"hola", "mundo", 3, char]


                var valoresStr = [ ]
                for (let i=0; i < valores.length; i++){
                    if (typeof valores[i]==="string"){
                        valoresStr.push(valores[i])
                    }
                }
    
                console.log("2.Mostrar  de menor a mayor cantidad de letras: " + valoresStr.sort(function (a,b){return a,length - b,length}))
            </script>

        </body>

    </html>

