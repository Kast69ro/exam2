import './more-card.css'
export default function More({ children }) {
  let [foto,title,color] = children;
  return (
    <div className='nCard' style={{backgroundColor:color}}>
      <img src={foto} alt="" />
      <h3>{title}</h3>
      
    </div>
  );
}
