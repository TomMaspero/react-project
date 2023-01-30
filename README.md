

# Gamestop clone

Made with React.js & Google Firebase as a learning project

-----

## <u>Componentes</u>:

1. <u>**Navbar**</u>: Siempre visible. Contiene los componentes de **Searchbar** y **CartWidget**, junto con los links a otras secciones de la app. 

   Recibe como props la función **handleMenu**, la cual se ejecuta tras el evento **onClick** en el ícono de tres barras.

2. <u>**Menu**</u>: Se muestra cuando se ejecuta **handleMenu** en el **Navbar**. Abre un modal que impide scrollear el resto del sitio y el menú a la izquierda. Al hacer click en la cruz o fuera del menú se ejecuta nuevamente la función **handleMenu** y se deja de mostrar el componente. 

   Sólamente contiene links a otras secciones. 

3. **<u>Searchbar</u>**: Muestra los productos que estén dentro de la base de datos cuyo nombre incluya los caracteres que se ingresan. Para evitar que aparezcan demasiados links al ingresar una sola letra, solamente comienza a comparar los strings cuando se ingresan 2 caracteres. 

4. **<u>ItemListContainer</u>**: 

   

5. 



## <u>Variables</u>:

1. **<u>searchterm</u>**: **string**, utilizada en el componente **Searchbar**, se usa con el hook useState 
2. **<u>products</u>**: **array**, utilizado en los componentes **ItemListContainer** .... 



## **Funciones**:

1. **<u>handleMenu</u>**: 



•**Obs:**

> **• z-index**: Tanto el searchbar como el menú hamburguesa usan el mismo modal, el cual tiene un z-index = 3. Luego el menú hamburguesa tiene un z-index = 5 y los resultados del searchbar un z-index = 4.

​	







-----

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
