# Tipos de Enrutadores

1. **BrowserRouter**. Componente encargado de manejar el historial del navegador.
    - Utiliza el HTML5 history API.
    - Nos permite cambiar la ruta en la barra de navegación sin tener que recargar la página.
2. **HachRouter**. Usa un hash al inicio de cada url.
3. **MemoryRouter**. Mantiene el historial de búsqueda en memoria, perfecto para pruebas sin navegadores.
4. **StaticRouter**. Nos sirve para renderizar una ruta específica, nunca cambia de direcciṕon y se puede usar en *Server Side Render*.
5. **Native Router**. Pasa usar en React Native, el buen Leo recomienda React Navigation :D


## <BrowserRouter>
Recibe las siguientes propiedades:
- **basename**. El path inicial.
- **getUserConfirmation**. Permite validar si de verdad alguien quiere dejar la página.
- **forceRefresh**. True or False, define si la página se deba recargar o no.
- **keyLength**. Son un id que se recibe con cada navegación. Por defecto es un código de 6 caracteres.
- **children**. Es el componente que está dentro del BrowserRouter. 

### <Link>
Tienen las siguientes propieadades:
- **to.**
- **replace.** Cambia la ruta en el history. Es decir, reemplaza el valor de la ruta.
- **innerRef** Obtiene la a "de abajo"; con esto se puede acceder al elemento <a> que renderiza <Link>

### <NavLink>
Es igual a Link, se suele usar para elementos de navegacion

- **activeClassName**. Clase de css para elemento activo
- **activeStyle**. Los estilos *inline* para el elemento activo
- **isActive**. Una función que se envía cuando una vista toma el foco o está activa
- **exact**. Rutas exactas
- **strict**. Rutas estrictas
- **location**. permite realizar comparaciones de rutas.

### <Route>
Es el componente que nos sirve para renderizar los componentes según la ruta.

- **component**. Es el componente que se va a renderizar
- **path**. Es la ruta a la que es sensible
- **render**. Sirve para renderizar con una función. Es una alternativa a component.
- **children**. Se pueede enviar un componente
- **exact**. La ruta responde únicamente al path. Sin exact, hace match a las sub rutas. Por ejemplo: /path/subpath/othersubpath
- **strict**. matchea solo si el path es igual, sin embargo también hace match con las subrutas.
- **sensitive**. Hace match tal cual está definida, distingue de mayúsculas y minúsculas

### Parámetros de Navegación
- El componente <Link> puede recibir en el key to un objeto par ampliar su funcionalidad  
    - pathname: Recibe la ruta
    - search: A;ade un parametro de busqueda
    - state: Nos permite settear nuestro estado

### <Switch>
- Permite renderizar solamente el primer componente que haga match en la ruta.

### <Redirect>
- Permite redireccionar desde una ruta a otra
- Recibe dos parámetros principal: from y to

#### <Prompt>
- Permite mostrar una alerta cuando se va a abandonar la página

# Install

Clonar este repositorio y ejecutar los siguientes comandos:

```
yarn install
yarn build:prod
yarn build:server
yarn server
```
