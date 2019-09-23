# **Data Lovers**
## **Índice**

* [Definición](#Definición-del-Proyecto-DATA-LATAM)
* [Descripción del Producto](#definicion-del-producto)
* [Diseño Interfaz de Usuario](#diseño-interfaz-de-usuario)
* [Nuestro Usuario](#nuestro-usuario)
* [Historias de Usuario](#historias-de-usuario)
* [Prototipo de Baja Fidelidad](#prototipo-de-baja-fidelidad)
* [Prototipo de Alta Fidelidad](#prototipo-de-alta-fidelidad)
* [Diseño de experiencia de usuario UX](#diseño-de-experiencia-de-usuario-ux)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

# **Data Lovers**


# Definición del Proyecto DATA LATAM 

**DATA LATAM** presenta los datos más actuales y precisos disponibles sobre el desarrollo mundial e incluye estimaciones nacionales e internacionales, basándose en el ámbito de fuerza laboral, desempleo, nivel de educación o instrucción e inscripción escolar e igualdad de género.

El trabajo corresponde a una iteración del proyecto data lovers, comenzando un nuevo proyecto a partir de la data disponible del [Banco Mundial](http://www.bancomundial.org/). Para que esa gran cantidad de información contenida sea atractiva y utilizable por los usuarios, se propone filtrarla de acuerdo a 138 indicadores, mostrando como resultado un gráfico de lineas comparativo entre los países Brasil, Chile, México y Perú; resultando de manera amigable para quienes visiten esta aplicación web.

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
considerando el tipo de datos y los usuarios a los que va dirigida la web, se decidio realizar entrevistas, en lugar de una encuesta (ya que las muestras no serían significativas, de no ser una encuesta quealizada a más de 50 personas). Las entrevistas fueron grabadas en [audio] (https://drive.google.com/drive/folders/19aJj-au9gUXACBQQJtINC4VCKYfGLu5d) y dieron como resultado:



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

Al finalizar con el diseño del prototipo de baja fidelidad, se procede a realizar el diseño en una aplicación más confiable e incorporando los elemento de diseño que ayuden al usuario a lograr el fin de la página: mostrar los datos de manera gráfica más amigable. Originalmente se planteó el uso de tonos rosados en la página, no obstante, luego de probar las tonalidades clásicas para productos orientados a mujeres, descartamos esa opción, ya que nuestros usuarios lo consideran un estereotipo.
Tras las modificaciones el resultado final del diseño en Figma fue:

[FIGMA del proyecto DataLatam](https://www.figma.com/file/QTiRQiA5AOIPwisWJ4CW9e/DataLovers?node-id=0%3A1)

<a href="https://ibb.co/Rj099bw"><img src="https://i.ibb.co/5K8664H/propotipo-AFP1.jpg" alt="Alta fidelidad página 1" border="0" /></a>

<a href="https://ibb.co/hm9Mz0N"><img src="https://i.ibb.co/kSByCZT/prototopo-AFP2.jpg" alt="Alta fidelidad página 2" border="0" /></a>

<a href="https://ibb.co/yNGmQt2"><img src="https://i.ibb.co/RgZGDf8/prototipo-AFP3.jpg" alt="Alta fidelidad página 3" border="0" /></a>

### Responsive para móvil

<a href="https://ibb.co/zxW9qVq"><img src="https://i.ibb.co/LRDjVdV/prototipo-AFmovil.jpg" alt="prototipo Alta fidelidad para móvil" border="0" /></a>



# Contenido de referencia

Para la elaboración del proyecto se utilizaron diferente herramientas y fuentes de información, las herramientas son descritas algunos puntos más abajo. En esta sección aprovecharemos de dejar linkeados las páginas de las cuales extraímos información relevante para el correcto desarrollo y desempeño de la página web Data Latam:



# Diseño de experiencia de usuario UX

## Diseño

El foco principal de la página se basado en las necesidades del usuario, por ello, para el diseño de esta surgen las interrogantes: ¿Qué información necesitan visualizar?, ¿Desea hacer comparaciones entre varios países, o ver la data de un país en específico?, ¿Desea ver valores máximo y promedio?.

Debido a estas razones se crea una página simple y directa donde fácilmente el usuario pueda acceder a la data que busca.

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
