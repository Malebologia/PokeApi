# 🔎 Pokédex Web – Consumo de API con JavaScript

Aplicación web que permite **buscar y visualizar información de Pokémon** consumiendo la API pública **PokeAPI**.

El proyecto simula una **Pokédex interactiva**, donde el usuario puede buscar un Pokémon por nombre o ID y visualizar información relevante como su imagen, tipo, altura y peso.

Este proyecto fue desarrollado como parte de mi proceso de aprendizaje en **JavaScript, consumo de APIs REST y organización de código en aplicaciones frontend**.

---

# 📖 Historia del Proyecto

Este proyecto fue desarrollado con el objetivo de practicar **consumo de APIs externas y manipulación dinámica del DOM** utilizando JavaScript.

La idea fue recrear una **Pokédex clásica** inspirada en el universo Pokémon, permitiendo que los usuarios busquen información de cualquier Pokémon disponible en la API.

Durante el desarrollo se buscó mantener una arquitectura clara separando responsabilidades entre:

* lógica de negocio
* comunicación con la API
* interfaz de usuario

Esto permitió crear un proyecto más modular y fácil de mantener.

---

# 👨‍💻 Mi Rol en el Proyecto

En este proyecto fui responsable de:

* Diseño de la interfaz tipo **Pokédex**
* Integración con **PokeAPI**
* Implementación de **programación orientada a objetos**
* Organización modular del código JavaScript
* Desarrollo de interacciones de usuario
* Manejo de estados de carga y errores

---

# 🌐 API Utilizada

Este proyecto utiliza la API pública:

**PokeAPI**

https://pokeapi.co/

La API permite acceder a información completa de los Pokémon incluyendo:

* nombre
* tipos
* altura
* peso
* sprites
* habilidades
* estadísticas

---

# ✨ Funcionalidades Principales

## 🔍 Búsqueda de Pokémon

El usuario puede buscar Pokémon mediante:

* nombre
* número de identificación

Ejemplo:

```
pikachu
25
charizard
```

---

## 📄 Visualización de Información

La Pokédex muestra:

* imagen del Pokémon
* nombre
* ID
* altura
* peso
* tipos

Toda la información se obtiene en tiempo real desde la API.

---

## ⏳ Estado de carga

Mientras se obtiene la información desde la API se muestra un **spinner de carga** para mejorar la experiencia de usuario.

---

## ⚠ Manejo de errores

Si el Pokémon no existe o hay un error en la búsqueda se muestra un mensaje amigable:

```
Pokémon no encontrado
```

---

## ⌨ Búsqueda con teclado

La aplicación permite iniciar la búsqueda presionando **Enter**, mejorando la usabilidad de la interfaz.

---

# 🧱 Arquitectura del Proyecto

El proyecto está organizado separando responsabilidades en diferentes módulos.

## api.js

Maneja la comunicación con la API:

* solicitudes HTTP
* manejo de errores
* obtención de datos de Pokémon

---

## pokemon.js

Define la clase `Pokemon`, que representa la estructura del objeto Pokémon.

Se encarga de:

* procesar los datos de la API
* transformar unidades
* generar el contenido visual de la tarjeta Pokémon

---

## ui.js

Controla los elementos de la interfaz:

* mensajes de carga
* mensajes de error
* efectos visuales
* interacción del usuario

---

# 📂 Estructura del Proyecto

```
pokedex
│
├── index.html
│
├── assets
│   ├── css
│   │   └── estilo.css
│   │
│   └── js
│       ├── api.js
│       ├── pokemon.js
│       └── ui.js
```

---

# 🎨 Interfaz de Usuario

La interfaz está inspirada en el diseño clásico de una **Pokédex**, con elementos visuales como:

* carcasa roja
* luces indicadoras
* pantalla central
* animación de pantalla activa
* tarjetas de información del Pokémon

Se utilizó **Bootstrap** para facilitar el diseño responsive y componentes visuales.

---

# 🛠 Tecnologías Utilizadas

Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

Frameworks y librerías

* Bootstrap 5

API

* PokeAPI

Herramientas

* Git
* GitHub

---

# ⚙ Instalación del Proyecto

Clonar repositorio:

```
git clone https://github.com/Malebologia/pokedex.git
```

Entrar al proyecto:

```
cd pokedex
```

Abrir el archivo `index.html` en el navegador.

---

# 🚀 Posibles Mejoras Futuras

* Mostrar **estadísticas completas del Pokémon**
* Mostrar **habilidades**
* Agregar **paginación**
* Implementar **historial de búsqueda**
* Mostrar **evoluciones**
* Agregar **filtros por tipo**
* Mejorar animaciones de la interfaz

---

# 👨‍💻 Autor

**Alonso Soto**

Frontend Developer

GitHub
https://github.com/Malebologia
