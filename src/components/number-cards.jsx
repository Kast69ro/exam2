import './number-cards.css'
export default function Three({ children }) {
  let [foto,title,txt] = children;
  return (
    <div className='numCard'>
      <img src={foto} alt="" />
      <h3>{title}</h3>
      <p>
        {txt}
      </p>
    </div>
  );
}
