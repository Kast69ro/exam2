 import './two.css'
export default function One({children}){
    let [txt] = children;
    return  <button className='anouther'>{txt}</button>
       
}