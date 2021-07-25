# JavaScript

## Frontend

### Conceptos básicos

1. DOM (Document Object Model)

Cuando escribimos la esturcutra de la página en HTML el navegador transforma todos esos tags en objetos y sí puede entender y representarlos.

2. CSSOM (CSS Object Model)

Transformación de nuestro archivo css en objetos comprensibles para elnavegador.

3. Render Tree

Es el DOM y el CSSOM conjuntamente para pintar la página.

Entonces nuestro código es interpretado por el naegador de la siguiente manera:

1. transforma nuestro código a Bytes, cuando escribimos html tenemos un tag `<meta charset="UTF-8">` donde especificamos la codificación de esos bytes
2. mediante la codificación especificada transforma esos bytes en caracteres
3. con esos caracteres crea unos tokens donde especifica esta es la tag html de abertura esta es la de cierre y así
