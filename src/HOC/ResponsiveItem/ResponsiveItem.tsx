import React,{useState,useEffect} from 'react'
import Login from '../../pages/Login/Login'

type Props = {
  Component:React.FC,
  ComponentMobile?:React.FC,
  // ComponentJSX:JSX.Element
}
type Screen={
  width:number,
  height:number
}

export default function ResponsiveItem({Component,ComponentMobile}: Props) {

  const [screen,setScreen] = useState<Screen>({
    width:window.innerWidth,
    height:window.innerHeight
});
console.log(screen.width);
useEffect(() => {
    //Khi người dùng resize
    let resizeFunction = () => {
        //Lấy ra kích thước mới của window
        setScreen({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    window.onresize = resizeFunction;
    return () => {
        window.removeEventListener('resize',resizeFunction);
    }

}, []);
let ComponentRender = Component;
if(screen.width < 768 && ComponentMobile) {
    ComponentRender = ComponentMobile;
}
return <>
    <ComponentRender />
</>
}

//2 loại thể hiện component
// const Component:React.FC = (props) => {
//     return <div>
//         jsx
//     </div>
// }
// const tr:JSX.Element = <tr></tr>;

// const login:JSX.Element = <Login />

// const com = <Component />