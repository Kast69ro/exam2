 import './one.css'
export default function One({children}){
    let [txt] = children;
    return  <button>{txt}</button>
       
}