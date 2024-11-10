# Gamer Pokemon

El presente proyecto consta de una store de video juegos, consolas y accesorios.
La arquitectura fue desarrollada con **React** y **Vite**, mientras que los estilos fueron desarrollados mediante **Sass** y la libreria **React Icons**.
Para el almacenamiento y gestion de la informacion se utilizo **Firebase** como base de datos.

## Requisitos y consideraciones previas

- Verifica que tengas instalado **Node.js** y **npm**. utiliza los siguientes comandos para verificar (en caso contrario instalalos):

  ```bash
  node -v
  npm -v
  ```

- **Firebase**: crea un proyecto en [Firebase](https://console.firebase.google.com/) para habilitar la base de datos.

## Instalación

1. **Clona el repositorio**:

   Utiliza el siguiente comando para iniciar la clonacion:

   ```bash
   git clone https://github.com/LksRubilar/CODER-HOUSE--REACT_Entrega-Final.git
   git checkout EntregaFinal+Rubilar
   ```

   Selecciona la rama correspondiente al proyecto:

   ```bash
   git checkout EntregaFinal+Rubilar
   ```

2. **Configura el proyecto con Vite (Solo sino lo haz configurado previamente, de haberlo hecho salta hasta el paso N°3)**:

   ```bash
   npm create vite@latest
   ```

   Luego selecciona las siguientes opciones:

   ```bash
   React
   Javascript + SWC
   ```

3. **Instalacion de dependencias**:

   ```bash
   npm install
   ```

4. **Inicia el servidor en modo desarrollo**:

   ```bash
   npm run dev
   ```

## Instalación de Sass

1. **Instala Sass** para estilos avanzados:

   ```bash
   npm install sass
   ```

## Integración de React Icons

1. **Instala React Icons**:

   ```bash
   npm install react-icons
   ```

2. Para seleccionar diseños, ingresa a la biblioteca de iconos en [React Icons](https://react-icons.github.io/react-icons/).

## Configuración de Rutas con React Router

## Crea y Configura un proyecto Firebase

1. **Crea un proyecto en Firebase**.

   ```bash
   https://console.firebase.google.com/?hl=es-419
   ```

2. **Instala Firebase**:

   ```bash
   npm install firebase
   ```

3. **Instala React Router**:

   ```bash
   npm install react-router-dom
   ```

4. **Define las rutas** para manejar la navegación entre páginas en `App.js`, asi como los detalles de producto y carrito.

## Conclusión

El desarrollo con **React** puede resultar complejo en un comienzo, pero es sin lugar a duda un sistema rapido y agil, gracias a su arquitectura basa en componentes y sistema centralizado de rutas, permite y facilita el desarrollo y gestion de proyectos tan sencillos como una SPA hasta proyectos escalables de alto nivel. Ademas, **Vite** permite que su instalacion y configuracion sean rapidas y expeditas, permitiendo una facil curva de prendizaje, de la misma manera la gran cantidad de usuarios y por lo tanto de documentacion y librerias con la que cuenta React, lo hacen un sistema optimo para desarrollar proyectos con gran rapidez y precision.

## Documentacion de apoyo:

- [Documentación de Vite](https://vitejs.dev/guide/)
- [Documentación de Firebase](https://firebase.google.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Sass](https://sass-lang.com/)
