< !DOCTYPE html >
    <html>
        <head>
            <title>ejercicio n°10</title>
        </head>
        <body>

            <script>
                function mostrarFecha(meses, dias) {
                    let num = parseInt(prompt('Ingrese número de mes:'));
                document.write('Corresponde al mes:' + meses[num - 1]);
                document.write('<br>');
                    document.write('Tiene ' + dias[num - 1] + ' días');
        }

                    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                    let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                    mostrarFecha(meses, dias);
            </script>

        </body>

    </html>