import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './accordion.css'

export default function AccordionUsage() {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
      <Accordion style={{padding:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"> <h3><span className='spa'>Модуль 1</span>  Тенденции и тренды современного мира</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='acc'>
            <h4>Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний</h4>
            <h4>Тема 2. Рынки Ближнего Востока, Азии, Латинской АмерикиТема</h4>
            <h4> 3. Что такое внутренние и внешние инновации? Как искать инновационные идеи?</h4>
            <h4>9 видео роликов, вебинар с приглашенным экспертом</h4>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{padding:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> <h3><span className='spa'>Модуль 2</span> Стартап подход к созданию международного IT продукта</h3></Typography>
        </AccordionSummary>
        
      </Accordion>
      <Accordion style={{padding:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> <h3><span className='spa'>Модуль 3</span> Бизнес моделирование и поиск Product Market Fit</h3></Typography>
        </AccordionSummary>
        
      </Accordion>
      <Accordion style={{padding:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> <h3><span className='spa'>Модуль 4</span> Определение рынка, поиск и исследование Целевой аудитории</h3></Typography>
        </AccordionSummary>
        
      </Accordion>
      <Accordion style={{padding:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> <h3><span className='spa'>Модуль 5</span> Что такое MVP и почему это важно</h3></Typography>
        </AccordionSummary>
        
      </Accordion>
      <Accordion style={{padding:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> <h3><span className='spa'>Модуль 6</span> Unit экономика и финансовое моделирование</h3></Typography>
        </AccordionSummary>
        
      </Accordion>
      <Accordion style={{padding:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> <h3><span className='spa'>Модуль 7</span>  Что такое дорожная карта продукта?</h3></Typography>
        </AccordionSummary>
        
      </Accordion>
      
         </div>
  );
}