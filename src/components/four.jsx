import './four.css'
export default function Four({ children }) {
  let [txt,bacColor,color,border] = children;
  return (
    <div className='sel' style={{backgroundColor:bacColor,borderRight:border}}>
        <h3 style={{color:color}}>{txt}</h3>
      
    </div>
  );
}
