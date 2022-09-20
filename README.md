# Repertorio de Katas

# Introducción

Los ejercicios presentados a continuación están pensados para dar solidez a las bases necesarias para solucionar problemas lógicos y algorítmicos usando código. **La dificultad de los ejercicios es incremental,** empezando por un nivel básico hasta llegar a problemas avanzados. **Es recomendable seguir el orden marcado.**

Para superar con eficacia cada uno de los ejercicios, **es crucial dedicar la mayor parte del tiempo a entender qué se nos está pidiendo en cada ejercicio**.

<aside>
🚀 **Para ello, antes de programar, es recomendable:**

- **Reconocer las condiciones de entrada, las condiciones de salida y las incógnitas** (información que nos falta):
    - **Preguntas para identificar las condiciones de entrada:**
        - ¿Con qué datos cuento al inicio del problema?
        - ¿Qué aspecto/formato tienen los datos del inicio?

    - **Preguntas para identificar las condiciones de salida:**
        - ¿Cómo es una solución no válida del problema?
        - ¿Qué aspecto/formato tiene una solución válida del problema?

    - **Preguntas para identificar las incógnitas del problema:**
        - ¿Los datos iniciales son suficientes para llegar a una solución válida del problema?
        - ¿El formato de los datos iniciales es igual al formato de los datos de salida? En caso contrario, ¿cómo puedo llegar a este?
        - ¿La forma de los datos de entrada puedo modificarla para que me sea más sencillo llegar a la solución final?

- **Entender el flujo del problema. Algunas herramientas útiles son:**
    - Escribir el pseudocódigo del problema simulando su algoritmo.
    - Dibujar o esquematizar aspectos que nos resultan complicados de entender.
    - …
- **Entender el problema como algo genérico y que no depende del lenguaje que se usará para su implementación.**

 ****

</aside>

<aside>
💡 “Si tuviera una hora para resolver un problema, y mi vida dependiera de la solución, gastaría los primeros 55 minutos en determinar la pregunta apropiada, porque una vez conociera la pregunta correcta, podría resolver el problema en menos de cinco minutos”

*Albert Einstein*

</aside>

# Configuración

<aside>
⚙ **Instrucciones**

Instalación de las dependencias del proyecto

`npm install`

Inicio del proyecto

`npm run start`

Lanzamiento de los tests de todas las katas

`npm run test-all`

Lanzamiento de los tests específicos para una determinada kata

`npm run test-e{número del ejercicio}`

Por ejemplo `npm run test-e10` para lanzar los tests de la kata 10.

[Repositorio](https://github.com/OrlandoPadron/katas-compilation)

</aside>

# Katas

## E01. Voltea el texto (Reverse text)

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Escribe una función que reciba un texto (string) y devuelva el mismo texto con las palabras en posiciones invertidas.

```jsx
const textoInvertido = reverseText("Esta función invierte el texto")

console.log(textoInvertido)

// RESULTADO
// "texto el invierte función Esta" 
```

## E02. Cuenta las vocales (Vowel count)

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Escribe una función que devuelva el número de vocales que tiene una cadena de caracteres (string) determinada. (Cuidado con vocales con acentos)

```jsx
const numeroVocales = getVowelCount("En esta frase hay 9 vocales")

console.log(numeroVocales)

// RESULTADO
// 9 
```

## E03. FizzBuzz

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Escribe una función que devuelva un array de strings con **los números del 1 al 100 en cada posición**, sustituyendo los **múltiplos de 3 por la palabra “Fizz”**, los **múltiplos de 5 por “Buzz”** y los **múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “FizzBuzz”**.

**Resultado:**

```jsx
const fizzBuzz = fizzBuzz()

console.log(fizzBuzz)

// RESULTADO
// ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz', ...]
```

## E04. Contando ovejas (Counting sheep)

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color `rojo` **y que además** su nombre contenga tanto las letras `n` Y `a`, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

```jsx
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
```

Al ejecutar el método debería devolver lo siguiente:

```jsx
const ovejasFiltradas = filterSheeps(ovejas)

console.log(ovejasFiltradas)

// RESULTADO
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

Recuerda. **Debe contener las dos letras 'a' y 'n' en el nombre**. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

[Fuente](https://adventjs.dev/challenges/01)

## E05. Lista de regalos (Gifts list)

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio!

¡Ten cuidado! Las cartas han sido escritas por niños y pueden tener **espacios de más** o **disponer de mayúsculas/minúsculas,** aspectos que deberíamos de tener en cuenta para contabilizar bien los regalos (`playstation` es lo mismo que `PlayStation`)**.**

Encima nos hemos dado cuenta que algunas palabras vienen con un **`_`** delante de la palabra, por ejemplo `_playstation`, que significa que **está tachado y no se tiene que contar.**

Transforma el texto a un objeto que contenga el nombre de cada regalo (en minúsculas) y las veces que aparece. Por ejemplo, si tenemos el texto:

```jsx
const carta = 'bici coche balón _playstation bici coche peluche'
```

Al ejecutar el método debería devolver lo siguiente:

```jsx
const regalos = getGiftList(carta)

console.log(regalos)
/*
RESULTADO
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

Propongamos otro ejemplo:

```jsx
const carta = 'iphone  _xbox      switch switch _switch balón bicicleta Balón'
```

Al ejecutar el método debería devolver lo siguiente:

```jsx
const regalos = getGiftList(carta)

console.log(regalos)
/*
RESULTADO
{
  iphone: 1,
  switch: 2,
  balón: 2,
  bicicleta: 1
}
*/
```

[Fuente](https://adventjs.dev/challenges/02)

## E06. Los números perdidos (Missing numbers)

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Dado un array de enteros y sin repetición, crea una función que calcule y retorne un array con todos los números que faltan entre el mayor y el menor número, ordenados de menor a mayor.

Ejemplos:

```jsx
const numerosFaltantes= getMissingNumbers([1,2,3,10])

console.log(numerosFaltantes)
// RESULTADO 
// [4, 5, 6, 7, 8, 9]
```

```jsx
const numerosFaltantes= getMissingNumbers([-1,-2,3,10])

console.log(numerosFaltantes)
// RESULTADO 
// [0, 1, 2, 4, 5, 6, 7, 8, 9]
```

[Fuente](https://retosdeprogramacion.com/semanales2022)

## E07. Batalla Pokémon (Pokémon battle)

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Crea una función que calcule el daño de un ataque durante una batalla Pokémon. La fórmula será la siguiente:

`daño = 50 * (ataque / defensa) * efectividad`

La efectividad puede tomar los siguientes valores: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo).

Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico. La efectividad de cada tipo queda determinada según la siguiente tabla:

| Atacante | Defensor | Efectividad atacante |
| --- | --- | --- |
| Agua | Agua | x0.5 |
| Agua | Fuego | x2 |
| Agua | Planta | x0.5 |
| Agua | Eléctrico | x1 |
| Fuego | Agua | x0.5 |
| Fuego | Fuego | x0.5 |
| Fuego | Planta | x2 |
| Fuego  | Eléctrico | x1 |
| Planta | Agua | x2 |
| Planta | Fuego | x0.5 |
| Planta | Planta | x0.5 |
| Planta | Eléctrico | x1 |
| Eléctrico | Agua | x2 |
| Eléctrico | Fuego | x1 |
| Eléctrico | Planta | x0.5 |
| Eléctrico | Eléctrico | x0.5 |

La función recibe los siguientes parámetros:

- Tipo del Pokémon atacante.
- Tipo del Pokémon defensor.
- Ataque: Entre 1 y 100.
- Defensa: Entre 1 y 100.

**La función devuelve el daño del ataque (número)**. En caso de devolver un número decimal, este deberá de contar con un **máximo de 2 decimales (.00) y estar redondeado a las centésimas**.

En caso de introducir **parámetros de entrada no válidos, la función devolverá -1.**

[Fuente](https://retosdeprogramacion.com/semanales2022)

## E08. El ratón y el queso (Cheese hunt)

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Ayer una familia cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer…

Un ratoncillo llamado *midurat* 🐭, que vio ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: *up, down, left, right* y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

- Un espacio vacío es que no hay nada.
- Una `m` es el ratón.
- Un `*` es la comida.

Veamos unos ejemplos:

```jsx
const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
```

¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!

**Cuidado con los movimientos que puedan hacer que el ratón se salga de la habitación.**

[Fuente](https://adventjs.dev/challenges/25)

## E09. La tarjeta de fidelidad (Loyalty card)

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

- Entrada de un sólo uso: Cuesta 12$ por cada película.
- Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas **pagas sólo el 75% del precio del ticket**. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.

Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:

- **Entrada normal:** 12$ * 3 = 36$
- **Tarjeta fidelidad:** 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

```jsx
shouldBuyFidelity(1)// false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100)// true -> Mejor comprar tarjeta fidelidad
```

La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad. 😜

[Fuente](https://adventjs.dev/challenges/11)

## E10. La máquina de cambio (Change machine)

<aside>
ℹ️ **Descripción Kata**

</aside>

---

Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

```jsx
coins[0] // 1 céntimo
coins[1] // 2 céntimos
coins[2] // 5 céntimos
coins[3] // 10 céntimos
coins[4] // 20 céntimos
coins[5] // 50 céntimos
```

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la **combinación de monedas mínimas** que debemos usar para conseguirlo.

```jsx
getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

```

La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que **debes usar siempre el menor número de monedas posible**.

[Fuente](https://adventjs.dev/challenges/10)

---

<aside>
🏗️ **Soluciones Katas**

Las soluciones a todas las katas están recogidas en la rama `solutions` del repositorio original.

</aside>
