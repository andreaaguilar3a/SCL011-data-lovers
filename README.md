# **Data Lovers**



# Definición del Proyecto DATA LATAM 

**DATA LATAM** presenta los datos más actuales y precisos disponibles sobre el desarrollo mundial e incluye estimaciones nacionales e internacionales, basándose en el ámbito de fuerza laboral, desempleo, nivel de educación o instrucción e inscripción escolar e igualdad de género.

El  trabajo corresponde a una iteración del proyecto data lovers, comenzando un nuevo proyecto a partir de la data disponible del [Banco Mundial](http://www.bancomundial.org/). Para que esa gran cantidad de información contenida sea atractiva y utilizable por los usuarios, se propone filtrarla de acuerdo a 138 indicadores, mostrando como resultado un gráfico de lineas comparativo entre los países Brasil, Chile, México y Perú; resultando de manera amigable para quienes visiten esta aplicación web.

## DEFINICIÓN DEL PRODUCTO:

**Explorador de datos sobre mujeres** es una web informativa que permite recopilar estadísticas sobre las condiciones: sociales, familiares, económicas, demográficas, de igualdad, entre otras, de las mujeres de México, Perú, Chile y Brasil.  
También pueden compararse datos de ambos sexos, por lo que se incluyen estadísticas sobre los hombres.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas grandes cantidades de datos se conviertan en **información** fácil de leer para los usuarios, necesitamos entender y procesar estos datos.

**DATA LATAM** es una herramienta de análisis que contiene colecciones de indicadores del desarrollo del Banco Mundial, compilados a partir de fuentes internacionales reconocidas oficialmente. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.


# Diseño de la Interfaz de Usuario
Proceso de diseño

Para diseñar este producto tecnológico lo primero que se hizo fue estudiar la data ofrecida, se seleccionó la data del banco mundial,una vez seleccionada la data, se procedió a realizar un prototipo de baja fidelidad (realidad con lapiz y papel), donde se le mostró las pantallas de lo que se consideraban eran sus necesidades, aquí surgen las primeras nociones sobre los usuarios, una posible estructura de la información, que despues de algunas pruebas nos ayudaron a definir como sería la arquitectura de la informacion presente en la interfaz de DATA LATAM.

## El problema:

Al examinar un archivo con datos del Banco Munidal, apareció la interrogante de como mostrar dichos datos de manera amigable a los usuarios. Y lograr que cualquier persona, sin importar cual sea su interés, pudiera encontrar estos archivos organizados, y representados gráficamente.

Para empezar el proceso de investigación lo primero que realizamos fue una encuesta para ver que tan empapado en el tema estaban nuestros posibles usuarios, así como saber su interés en estos temas y como pensaban ellos que debía ser la mejor manera para mostrar los resultados de estos exhaustivos estudios realizados por el Banco Mundial.

Solución de problemas:

Esta página web le muestra al usuario información de valor sobre ciertos indicadores e información que el/ella solicita, de esta forma podrá tomar decisiones para invertir o crear servicios según las necesidades que vea a través de analizar la data mostrada.

### Decisiones de diseño:

Una vez realizadas las entrevistas y analizados los resultados, tomamos decisiones de diseño acorde a las necesidades de los usuarios.


### Definición: ¿Quién es nuestro usuario? 

Nuestro usuario son en su mayoría mujeres, de entre 25 y más de 45 años. Principalmente las relacionadas con intereses en negocios, economía, estudios sobre desigualdad laboral y de genero,por ello algunas de nuestras entrevistadas son empresarias, reclutadoras de personal , inversionistas y estudiantes de economía y negocios.

### Conclusión:
El sitio debe estar dirigido especialmente para ciudadanos comunes, y/ó profesionales en el área de Economía y Desarrollo Social, que deseen encontrar análisis, a través de resultados que no son cuantificables, de manera de detectar y comparar las necesidades en la Sociedad, contribuyendo así, en el diseño y aplicación de estadísticas, en materia de desarrollo social, especialmente aquellas destinadas a erradicar la desigualdad laboral/económica y brindar protección a las personas o grupos vulnerables, promoviendo la movilidad e integración.

A la hora de representar los resultados de un análisis estadístico de un modo adecuado,se suele recomendar que la presentación de datos numéricos se haga habitualmente por medio de tablas, en ocasiones un diagrama o un gráfico pueden ayudarnos a representar de un modo más eficiente nuestros datos, el objetivo final que se espera alcanzar es poder presentar los datos eficientemente e idealmente con herramientas visuales que faciliten el uso de la web y la informacion contenida en ella. 

# Historias de usuario
considerando el tipo de datos y los usuarios a los que va dirigida la web, se decidio realizar entrevistas, en lugar de una encuesta (ya que las muestras no serían significativas, de no ser una encuesta quealizada a más de 50 personas). Las entrevistas fueron grabadas en [audio] (https://mail.google.com/mail/u/0/#inbox/FMfcgxwDrRRXNtmGJCJnsWXpWvDcngbd) y dieron como resultado:

### Entrevista 1:
Wendy Mejia Salgado, 34 años, inversionista hondureña (exporta café a Chile).De la [entrevista] (https://drive.google.com/drive/folders/19aJj-au9gUXACBQQJtINC4VCKYfGLu5d) se obtuvieron algunas observaciones, respecto a la ubicación de algunos botones (por ejemplo, volver), también hay que realizar una introducción del sitio, ya que el prototipo actual no es lo suficientemente claro, sobre los objetivos y en la explicacion de para que es la web (aun en presencia de botones en el menú que explica), debe ser más directo o ubicarse al inicio de la página. Se comprobó que la distribución de los datos por país, es un buen filtro y el select resulta intuitivo, pero aun es muy extenso, por ello, hay que acotar la información solo a mujeres o probar nuevos filtros (educacion, edad, años, etc), para que los parámetros de búsqueda sean eficientes.
### Entrevista 2:

## HU Nº1 (historia de usuario)
Como empresaria y entusiasta en temas de género, quiero poder acceder a información por país, relacionada con indicadores de desarrollo asociados con las mujeres en América Latina, de los ámbitos: educativo, laboral y demográfico. Para poder tomar decisiones informadas sobre mis áreas de interés en la región.


**Criterios de aceptación:**

Dentro de la página se permite al usuario elegir entre un país u otro, para mostrar únicamente la data de su interés.


Los resultados obtenidos son:


## Iteraciones
Luego de varias iteraciones del control de flujo, feedback con nuestras compañeras y encuestas, llegamos a un flujo más sencillo. Donde basadas en las necesidades de nuestros usuarios se le permite filtrar al usuario por país, posteriormente seleccionar un indicador. y al final obtener una data que se muestra de manera gráfica y mediante cuadros de datos.
![Iteración del flujo](https://github.com/veronicasotobastidas/SCL011-data-lovers/blob/gh-pages/src/image/controldeflujo1.jpg?raw=true)


## Prototipo de baja fidelidad

A partir de las iteraciones del flujo se procede a hacer sketch del prototipo para mostrar los resultados. Procurando en todo momento mantener una estética simple, minimalista y amigable para el usuario.

![Baja Fidelidad pantalla 1](https://github.com/veronicasotobastidas/SCL011-data-lovers/blob/gh-pages/src/image/Baja_Fidelidad_1.jpg?raw=true)

![Baja Fidelidad pantalla 2](https://github.com/veronicasotobastidas/SCL011-data-lovers/blob/gh-pages/src/image/Baja_Fidelidad_2.jpg?raw=true)


## Planificación y programación del desarrollo (Trello)

Para poder organizarnos y lograr los objetivos de nuestro proyecto, nos organizamos con la herramienta Trello. Dividimos nuestras tareas por Historias de usario, y completamos los objetivos de nuestro desarrollo. Puedes revisar nuestro Trello en el siguiente Link:

[Trello Proyecto DataLatam](https://trello.com/b/w6VL7xVk/data-lovers-datalatam)

![Trello Social DataLatam](https://github.com/veronicasotobastidas/SCL011-data-lovers/blob/gh-pages/src/image/Trello_Social_DataLatam.PNG?raw=true)


## Prototipo de alta fidelidad

Al finalizar con el diseño del prototipo de baja fidelidad, se procede a realizar el diseño en una aplicación más confiable e incorporando los elemento de diseño que ayuden al usuario a lograr el fin de la página: mostrar los datos de manera gráfica más amigable.
El resultado del diseño en Figma fue:

[FIGMA del proyecto DataLatam](https://www.figma.com/file/QTiRQiA5AOIPwisWJ4CW9e/DataLovers?node-id=0%3A1)

<a href="https://ibb.co/Rj099bw"><img src="https://i.ibb.co/5K8664H/propotipo-AFP1.jpg" alt="Alta fidelidad página 1" border="0" /></a>

<a href="https://ibb.co/hm9Mz0N"><img src="https://i.ibb.co/kSByCZT/prototopo-AFP2.jpg" alt="Alta fidelidad página 2" border="0" /></a>


<a href="https://ibb.co/yNGmQt2"><img src="https://i.ibb.co/RgZGDf8/prototipo-AFP3.jpg" alt="Alta fidelidad página 3" border="0" /></a>

### Responsive para móvil


<a href="https://ibb.co/zxW9qVq"><img src="https://i.ibb.co/LRDjVdV/prototipo-AFmovil.jpg" alt="prototipo Alta fidelidad para móvil" border="0" /></a>




# Contenido de referencia

Para la elaboración del proyecto se utilizaron diferente herramientas y fuentes de información, las herramientas son descritas algunos puntos más abajo. En esta sección aprovecharemos de dejar linkeados las páginas de las cuales extraímos información relevante para el correcto desarrollo y desempeño de la página web Data Latam:


## ¿Dónde buscar imagenes y generar logo?

- [Free logo Desing] (https://es.freelogodesign.org)

- [Shutterstock](https://www.shutterstock.com)

- [Freepik](https://www.freepik.es/)



## Fuentes de información:

### Recorrido de un objeto con for:

- [for...in](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in)

- [for in en Javascript](https://desarrolloweb.com/articulos/recorridos-propiedades-objetos-javascript-forin.html)


### Generar un select a partir del DOM

- [HTML DOM Select Object](https://www.w3schools.com/jsref/dom_obj_select.asp)


# Diseño de experiencia de usuario UX

## Diseño

El foco principal de la página se basado en las necesidades del usuario, por ello, para el diseño de esta surgen las interrogantes: ¿Qué información necesitan visualizar?, ¿Desea hacer comparaciones entre varios países, o ver la data de un país en específico?, ¿Desea ver valores máximo y promedio?.

Debido a estas razones se crea una página simple y directa donde fácilmente el usuario pueda acceder a la data que busca.

## Criterios de diseño:

- Forma: Se mantuvo la homogeneidad en los botones, especificando que dato será utilizado, para que el usuario no tenga confusiones y pueda volver a las diferentes secciones.

- Color de Tipografía: blanco, negro y colores oscuros asociados a la paleta de colores para que sea más legible la información.

- Tipografía: Lato letras simples y sin serifa para que sean legibles. También se utilizó Sans serif, como recurso opcional.

[Google Fonts - Lato](https://fonts.google.com/specimen/Lato)

- Color: La página esta hecha con colores agradables, asociados al concepto institucional (propio del banco mundial) para llamar la atención del usuario y pueda mantenerse en la página el tiempo que estime necesario sin agotar la vista.
  La página esta en base al azul claro, medio y oscuro, con tonos verdes, son colores similares para mantener la harmonía dentro del diseño de la página: 

  <a href="https://ibb.co/8XwSS6S"><img src="https://i.ibb.co/4JL55P5/Paleta-Colores-Data-Lovers.png" alt="Paleta de colores" border="0" /></a>

## **Índice**

* [Preámbulo](#preámbulo)
* [Descripción](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## **1. Preámbulo**

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el datalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## **2. Resumen del proyecto**

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, entiende quién es tu usuario y qué
necesita saber o ver exactamente; luego podrás construir la interfaz que le
ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

* [Banco Mundial](src/data/worldbank/worldbank.json) Indicadores de desarrollo del Banco Mundial de algunos países (Brasil, Chile, 
  México y Perú). Estos datos incluyen indicadores demográficos, económicos y 
  comerciales.
* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](https://pokemongolive.com).
* [Steam noticias](src/data/steam/steam.json):
  Lista noticias relacionadas a los videojuegos presentes en la
  plataforma de [Steam](https://store.steampowered.com/).
* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de jugadores en una liga del
  juego League of Legends (LoL), puedes revisar la documentación de su API en
  este [link](https://developer.riotgames.com/api-methods/).
* [Personas heridas por medio de transporte en EEUU](src/data/injuries/injuries.json).
  Este set nos muestra el número de personas heridas en accidentes de
  transporte, con data anual desde 1960 y categorizada por tipo de transporte
  (aire, barco, automóvil, moto, bicileta, ...).
* [Rick and Morty](src/data/rickandmorty/rickandmorty.json): Este set nos proporciona la lista de los personajes de la serie Rick and Morty. Puedes revisar la documentación de su API en este [link](https://rickandmortyapi.com/)
* [Pacientes en EEUU](src/data/patient/patient.json): Este set nos proporciona una lista de pacientes de EEUU. Puedes revisar la documentación de su API en este [link](https://r2.smarthealthit.org/Patient)

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún calculo agregado**. Como aclaración,
con cálculo agregado nos referimos a distintos cálculos que puedes hacer con
la data que tienes para mostrar información aún más relevante a los usuarios.
Una opción serían cálculos estadísticos como el promedio, el máximo o el mínimo,
por ejemplo, si tenemos una colección que representa a un grupo de personas,
y cada persona está representada como un _objeto_ con una _propiedad_ `altura`,
podríamos elegir calcular la altura promedio en el grupo entre otras cosas.

## **3. Objetivos de aprendizaje**

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Pensar en las **necesidades de los usuarios** para crear historias de usuario.
* Escribir y trabajar con **historias de usuario**, sus definiciones de
  terminado (_definition of done_) en la organización y planificación de tu
  trabajo.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
* Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.

## **4. Consideraciones generales**

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: El proyecto dura 2.5
 semanas, trabaja con sprints 
y planificando tus tareas.
* La división y organización del trabajo debe permitir, sin excepciones, que **cada integrante** del equipo practique el aprendizaje de todo lo involucrado en **cada historia**. No se dividan el trabajo como en una fábrica.
* Antes de comenzar, conversen sobre cómo le fue a cada una en el proyecto anterior para que puedan entender mejor cómo organizarse. No caigan en el error de cada una hacer lo que ya sabe bien cómo hacer. Aprovechen la oportunidad de hacer lo que no saben bien. Acá estás para aprender, no para "entregar" proyectos solamente.
* Una vez que hayan definido y priorizado sus Historias de Usuario, solamente podrán trabajar en una por vez, no pueden avanzar a la siguiente sin haber completado la anterior. La historia se completa cuando se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición de Terminado.

## **5. Criterios de Aceptación Mínimos del Proyecto**

Los criterios para considerar que has completado este proyecto son:

### **5.1 Definición del producto**

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### **5.2 Historias de usuario**

Una vez que entiendas las necesidades de tu usuario, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Asegúrate de incluir una definición
de terminado (_definition o done_) para cada una.

### **5.3 Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado sketches (boceto) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que realices, y las subas a tu repositorio, y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la identidad
gráfica correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear. Además, tu
diseño debe seguir los fundamentos de _visual design_. También, deberás exportar
tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

#### Testeos de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

### **5.4 Implementación de la Interfaz de Usuario (HTML/CSS/JS)**

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### **5.5 Pruebas unitarias**

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

## **6. Parte Opcional (Hacker edition)**

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## **7. Consideraciones técnicas**

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Como ya
sabrás, acá va la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

En este archivo esperamos que implementes las funciones detalladas en la sección
de [_Pruebas Unitarias_](#pruebas-unitarias).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## **8. Evaluación**
Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### **General**

| Característica/Habilidad |
|--------------------------|
| Completitud |

### **Tech**

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### **UX**

| Habilidad |
|-----------|
| User Centricity |
| Visual Design |

### **Habilidades Blandas**

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Responsabilidad |
| Comunicación eficaz |
| Presentaciones |

***

## **Pistas sobre cómo empezar a trabajar en el proyecto**

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1)
   un `remote` hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. A codear se ha dicho! :rocket:

<!--
En este proyecto deberás trabajar colaborativamente. Para ello, una de las
integrantes del equipo deberá forkear el repositorio del cohort y la otra
integrante **deberá hacer un fork del repositorio de su compañera**. Luego de
esto, deberás
[configurar](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
un `remote` hacia el repositorio del cual hiciste el fork.

Para mandar cambios desde un repositorio forkeado al original debes crear un
[pull request](https://goo.gl/4bYnuh)
y el propietario del repositorio original recibirá una notificación para
[revisar el pull request](https://goo.gl/XSFcT5)
y [aceptar los cambios](https://goo.gl/HLJtqN).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu
compañera:

* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de
  trabajo con dos ramas principales:
  - `master`: rama que contiene las funcionalidades terminadas y sin errores.
  - `develop`: rama dónde integrarás las funcionalidades conforme las vayas
    desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva
  funcionalidad en una rama individual (_feature branches_), estas ramas en
  lugar de crearse a partir de `master`, tienen a `develop` como su rama de
  origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`.
  Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de
  [pair programming](https://goo.gl/uAMBX2).

¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un
  repositorio en el que puedes experimentar sin afectar al repositorio original.
  Generalmente se usa para proponer cambios al proyecto de alguien más o para
  usar el proyecto de otra persona como punto de partida para una idea que
  quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR)
  te permite solicitar la inclusión de cambios al repositorio original (tu punto
  de partida) en GitHub. Cuando un PR es abierto, este permite solicitar,
  discutir y revisar los cambios realizados con todos los colaboradores y
  agregar otros commits antes de que los cambios sean incluidos al repositorio
  original.
-->

***

## **10. Contenido de referencia**

### **Diseño de experiencia de usuario (User Experience Design)**

* Investigación con usuario
* [Principios de diseño visual](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/diseno-visual)


### **Desarrollo Front-end**

* [Unidad de testing en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/11-testing/00-opening)
* [Unidad de arreglos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/04-arrays/01-arrays)
* [Unidad de objetos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/05-objects/01-objects)
* [Unidad de funciones en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/03-functions/00-opening)
* [Unidad de DOM en curso de Browser JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/browser/02-dom/00-opening)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)

### **Herramientas**

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)

***

## **Checklist**

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
