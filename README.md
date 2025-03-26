# Trabajo 4: Registro de Personas con Teléfonos e Hijos

Este repositorio contiene dos implementaciones de un programa para registrar personas junto con sus números de teléfono e hijos. Los programas están escritos en **Python** y **JavaScript**, y permiten al usuario ingresar datos como nombre, apellido, edad, una lista de teléfonos y una lista de hijos para cada persona.

## Archivos del Repositorio

### 1. `app.py`
Este archivo contiene la implementación en **Python** del programa. Utiliza la función `input()` para interactuar con el usuario y permite registrar múltiples personas con sus respectivos números de teléfono e hijos.

#### Características:
- Solicita al usuario ingresar el nombre, apellido, edad y al menos un número de teléfono.
- Permite agregar una lista de hijos (con al menos uno obligatorio).
- Permite registrar múltiples personas.
- Muestra los datos registrados en formato JSON y como una lista al final de la ejecución.

#### Ejecución:
Para ejecutar el programa en Python, asegúrese de tener instalado Python 3. Luego, ejecute el siguiente comando en la terminal:

```bash
python app.py
```
---

### 2. `main.js`
Este archivo contiene la implementación en **JavaScript** del programa. Utiliza el módulo `readline` para interactuar con el usuario en la consola.

#### Características:
- Solicita al usuario ingresar el nombre, apellido, edad y al menos un número de teléfono.
- Permite agregar una lista de hijos (con al menos uno obligatorio).
- Permite registrar múltiples personas.
- Muestra los datos registrados en formato JSON y como una lista al final de la ejecución.

#### Ejecución:
Para ejecutar el programa en JavaScript, asegúrese de tener instalado Node.js. Luego, ejecute el siguiente comando en la terminal:

```bash
node main.js
```

## Cómo Utilizar el Repositorio

1. **Clonar el Repositorio:**
   Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone 
   ```

2. **Navegar al Directorio:**
   Cambia al directorio del repositorio:

   ```bash
   cd trabajo4_matricesMultidimensionales
   ```

3. **Uso del Programa:**
   - Ingresa el nombre, apellido y edad cuando se solicite.
   - Agrega al menos un número de teléfono (presiona Enter sin texto para finalizar la lista de teléfonos).
   - Ingresa al menos un hijo (presiona Enter sin texto para finalizar la lista de hijos).
   - Indica si deseas registrar otra persona (s/n).
   - Al finalizar, se mostrará la información registrada en formato JSON y como lista.

## Estructura de Datos

Ambos programas utilizan el mismo formato para almacenar la información:
- Cada persona se representa como un array/lista con 5 elementos:
  - Nombre
  - Apellido
  - Edad
  - Lista de teléfonos
  - Lista de hijos
- El conjunto de personas se almacena en un array/lista principal.

## Notas Adicionales

- Ambos programas implementan la misma funcionalidad pero en diferentes lenguajes.
- La interfaz de usuario es por consola/terminal en ambos casos.
- No se requieren dependencias externas para ejecutar los programas.