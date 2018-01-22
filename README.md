# Test
---

Este proyecto tiene como finalidad enseñar a realizar todo tipo de pruebas en Angular para comprobar si nuestros proyectos funcionan correctamente.

Una vez aprendido como realizar todo tipo de pruebas podremos utilizarlo, si lo deseamos, usando TDD cada vez que iniciemos un proyecto.



### Las pruebas están ubicadas en 4 categorías:
---

Básicas: realmente son las pruebas más simples que nos ayudarán a iniciar
- Strings
- Números
- Booleanos
- Arreglos
- Clases
- Cobertura de nuestras pruebas

Intermedias: Son pruebas con una pequeña dificultad
- Pruebas sobre Event Emitter
- Formularios
- Validaciones
- Saltar pruebas
- Espías
- Simular retornos de servicios
- Simular llamado de funciones

Intermedias 2: Son pruebas con un poco más de complejidad
- Aprender la configuración básica de una prueba de integración
- Comprobación básica de un componente
- TestingModule
- Archivos SPEC generados automáticamente por el AngularCLI
- Pruebas en el HTML
- Revisar inputs y elementos HTML
- Separación entre pruebas unitarias y pruebas de integración

Avanzadas: Son pruebas que ya usan diversos servicios y construcción personalizada para usar servicios falsos controlados por nosotros
- Revisar la existencia de una ruta
- Confirmar una directiva de Angular (router-outlet y routerLink)
- Errores por selectores desconocidos
- Reemplazar servicios de Angular por servicios falsos controlados
- Comprobar parámetros de elementos que retornen observables
- Subject
- Gets

### Installation
---
Descargar el proyecto e instalar las dependencias.

```sh
$ npm install
$ ng test
```

Para saber el porcentaje que hemos cubierto con nuestras pruebas podemos escribir en la consola la siguiente instrucción:

```sh
$ ng tesst --code-coverage
```

Se nos creará dentro del proyecto una carpeta llamada ```coverage``` la cual contendrá un fichero ```index.html```, en donde se nos mostrará gráficamente el porcentaje de las pruebas realizadas, etc.. y algo muy importante, si nos hemos dejado por cokmprobar alguna prueba.  

### Autor
---
* [Javier Delgado Magdalena](http://www.linkedin.com/pub/javier-delgado-magdalena/33/9a1/226)
