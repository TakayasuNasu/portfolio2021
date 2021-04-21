It is built with Typescript and Gatsby.

## Site: [https://www-i-nasu-com.netlify.app/](https://www-i-nasu-com.netlify.app/)

### Contents area size

```
SP
padding-left: 10px;
padding-right: 10px;
width: 100% - 20px;

Tablet
padding-left: 25px;
padding-right: 25px;
width: 100% - 50px;

PC
padding-left: 25px;
padding-right: 25px;
max-width: 930px;
```

```bash
yarn upgrade-interactive --latest
apk add make nasm autoconf automake libtool dpkg pkgconfig libpng libpng-dev g++
```

## Reference

- [React Icons](https://react-icons.github.io/react-icons/search)
- [React Slider](https://github.com/react-component/slider/)
- [react\-intersection\-observer](https://github.com/thebuilder/react-intersection-observer#readme)

```jsx
//<Layout left={<Sidebar />} top={<NavBar />} center={<Content />} />

function Layout(props) {
  return (
    <div className="layout">
      <div className="top">{props.top}</div>
      <div className="left">{props.left}</div>
      <div className="center">{props.center}</div>
    </div>
  )
}
```
