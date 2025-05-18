import './bigCard.css'
export default function BigCard({ children }) {
  let [foto,txt,Button] = children;
  return (
    <div className='sCard'>
      <div>
        <img src={foto} alt="" />
      </div>
      <h2>{txt}</h2>
      <div className='lol'>
        <h4>Что входит в отчет?</h4>
        <p>1.Анализ конкурентов</p>
        <p>2.Анализ инвесторов</p>
        <p>3.Размеры рынка (TAM,SAM,SOM)</p>
        <p>4.Анализ СМИ</p>
        <p>5.Анализ запрос в сети интернет</p>
      </div>

      <div className='chto'>
        <div  className='mini'>
          <h5>Готовность</h5>
          <p>7 раб. дней</p>
        </div>
        <div className='mini'>
          <h5>Язык</h5>
          <p>рус. / англ.</p>
        </div>
        <div className='mini'>
          <h5>Стоимость</h5>
          <p>$1 000 </p>
        </div>
      </div>
      {Button}
    </div>
  );
}
