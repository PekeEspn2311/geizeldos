Geizeldos es una aplicación web desarrollada con React, TypeScript y Vite. La aplicación permite a los usuarios ver una lista de carros con sus Nombre, imagen, Modelo, Marca, Kilometraje y descripciones, así como añadir productos. 

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- React Router
- Adroid Studio
- Visual Studio Code

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:

geizeldos/
│
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   ├── index.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   └── controllers/
│       └── productController.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddProduct.tsx
│   │   │   ├── ProductCatalog.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── main.tsx
│   │   ├── App.css
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts


## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   bash
   git clone <https://github.com/Iglesias0714/AWM-Proyecto-Final-EmpathyShop>
2. Navega al directorio del proyecto:
   bash
   cd EmpathyShop
3. Instala las dependencias:
   bash
   npm install
4. Inicia el servidor de desarrollo:
   bash
   npm run dev
5. Servidor o Backend de la aplicación
   [Backend-EmpathyShop](https://github.com/Iglesias0714/Backend-EmpathyShop)
   
## Configuración de componentes

| Nombre del Componente | Descripción | Enlace |
|-----------------------|-------------|--------|
| AddProduct            | Formulario para añadir nuevos productos. | [AddProduct.tsx](geizeldos/src/components/AddProduct.tsx) |
| ProductCatalog        | Muestra una lista de productos. | [ProductCatalog.tsx](geizeldos/src/components/ProductCatalog.tsx) |
| api                   | Contiene las funciones para realizar solicitudes HTTP al servidor. | [api.ts](geizeldos/src/services/api.ts) |
| App                   | Configuración de las rutas de la aplicación. | [App.tsx](geizeldos/src/App.tsx) |
| index                 | Punto de entrada principal de la aplicación. | [index.tsx](geizeldos/src/index.tsx) |
| main                  | Archivo principal de inicio de la aplicación. | [main.tsx](geizeldos/src/main.tsx) |
| App.css               | Estilos globales de la aplicación. | [App.css](geizeldos/src/App.css) |
