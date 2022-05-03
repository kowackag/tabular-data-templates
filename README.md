# Tabular template

&nbsp;

## Table of contents

[⭐ Overview](#⭐-overview)
  - [The challenge](#the-challenge)
  - [Instalation](#installation-💿)
  - [Links](#links)

[💡 My process](#💡-my-process)
  - [Technologies](#technologies)
  - [Solutions provided in the project](#solutions-provided-in-the-project)
  - [Useful resources](#useful-resources)

[Screenshot](#screenshot)

[🙋‍♂️ Author](#🙋‍♂️-author)

[👏 Special Thanks](#👏-special-thanks)

&nbsp;

## ⭐ Overview

&nbsp;

### **The challenge:**

It was my first small project using `React` and `React Testing Library`.
The challenge was to create `the own solution of the table` in imitation of [`material-table`](https://github.com/mbrn/material-table) to be universal and re-used.

### **Installation 💿**

The project uses [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/), [CRA](https://create-react-app.dev/).

Having them installed, type into the terminal: 
```
npm i
```
Then, you may run webpack typing in the terminal:

```
npm start
```

App is available using the following addresses:

http://localhost:3000

&nbsp;

### **Links:**
- [GitHub](https://github.com/kowackag/tabular-data-templates)
- [live](https://kowackag.github.io/tabular-data-templates/)

&nbsp;

### **Technologies:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Mocks](https://img.shields.io/badge/-mocks-%238D6748?style=for-the-badge&logoColor=white)


&nbsp;
  
### **Solutions provided in the project:**
- HTML:
    - The project was built using semantic HTML5 markup.
- CSS:
    - The css styles are created using `styled-components`.
    
- JS:
    - ES2015+ (arrow functions, destructuring, spread operator) was used.
- React:
    - The following hooks were used: `useState`, `useEffect`, `useRef`, `useContext`.
    - Components are split and kept in smaller ones.
    - `Font Awesome` ikons was used in React app thanks to `@fortawesome/react-fontawesome`.
- Jest:
    - The tests was prepared using `Jest` and `React testing Library`.
    - The tests was created also using `Mock`.

The universal `<Table>` component was created in imitation of `material-table` library. 
The data are displayed in table with pagination.
The possibility of data sorting and filtering are provided.

```
const Pagination = props => {
    const {children} = props;
    const length = children.length;

    const {page, limit, setPages} = useContext(PaginationContext)
    
    const begin = limit * (page -1);
    const end = page * limit;
    
    const pages = Math.ceil(length / limit);

    useEffect(()=>{setPages(pages)}, [children, pages, setPages]);

    return (
        <> 
            {children.slice(begin, end)}
        </>
    );
}
```
In the `<tfoot>` the navigation `TableNav` to appropriate pages was placed:
```
const TableNav = () => {
    const {page, setPage, pages} = useContext(PaginationContext);
    
    const buttons = (new Array(pages).fill(0)).map((item, index) => 
        <li key={index}>
            <button onClick={()=>setPage(index+1)}>{index +1}</button>
        </li>
    );

    return(
        <StyledTableNav page={page}><ul>{buttons}</ul></StyledTableNav>
    )
} 
```

I had opted to use `styled-components` as a solution for managing the CSS.

To make coding with `styled-component` more comfortable, I used a special Extension in Visual Studio Code `vscode-styled-components`.

I used the `createGlobalStyle` function from styled-components and added reset style and some global styles (`Reset.js` and `Global.js`)

```
import {createGlobalStyle} from 'styled-components';
import latoRegularWoff from "./../fonts/lato-regular-webfont.woff";
import latoRegularWoff2 from "./../fonts/lato-regular-webfont.woff2";
 .....
const GlobalStyle = createGlobalStyle
    ...
    @font-face {
        font-family: "Lato";
        font-style: regular;
        font-weight: 400;
        src:
        url(${latoRegularWoff2}) format('woff2'),
        url(${latoRegularWoff}) format('woff');
    }
```

### **Useful resources:**

- [React Testing libary](https://testing-library.com/docs/)
- [Google Font](https://fonts.google.com/specimen/Lato) - `Lato`
- [Font Avesome](https://fontawesome.com/)


&nbsp;

## 🙋‍♂️ Author

The project was made by Małgorzata Kowacka.
- kowackag@gmail.com
- GitHub - [kowackag](https://github.com/kowackag)
- Linked - [Małgorzata Kowacka](https://www.linkedin.com/in/malgorzata-kowacka)

 **If you have any questions do not hesitate to contact me.**

&nbsp;