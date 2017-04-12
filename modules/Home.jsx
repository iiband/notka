import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
    	<div>
    		<div className='row marketing'>
    		<div className='col-sm-4'>
	              <img src="assets/img/yi320x320_text.png" 
	                height="150" width="150"
	                alt='Ї'></img>    		
    		</div>
    		<div className='col-sm-8'>
    		<p>До Верховної Ради внесено кілька проектів законів про державну мову.<br />
    		<strong>Однак тільки один з них - закон 5670 від громадськості - справді гарантує захист і розвиток українській мові як державній.</strong></p>
    		<p>
    		Треба зараз підтримати закон 5670, і тим самим змусити парламент всерйоз поставитись до захисту української мови
    		</p>
    		</div>
    		</div>
    		<hr />
	        <div className='row marketing calls'>
	          <div className='col-sm-4 withButtons'>
	            <h3>Дбай</h3>
	            <div className='callToAction'>
	              <p>Мову віками боронили для тебе, щоб далі ти боронив її</p>
	              <p>Якщо досі вагався - розмовляй та вимагай обслуговування рідною мовою</p>
	              <p>Збережи
	              <img src="assets/img/yi320x320.png" 
	                height="24" width="24"
	                alt='Ї'></img>
	              на свій пристрій та зроби своєю аватаркою на час кампанії</p>
	            </div>
	            <a role="button" className='btn btn-primary' download='ї.png' href='assets/img/yi320x320_text.png'>
	            Збережу 
	            <img src="assets/img/yi320x320.png" 
	              height="16" width="16"
	              alt='Ї'></img>
	            </a>
	          </div>
	          <div className='col-sm-4 withButtons'>
	            <h3>Підтримай</h3>
	            <div className='callToAction'>
	              <p>Ми сильні разом, а поодинці нас не чути</p>
	              <p>Підпиши петицію на сайті Верховної Ради на підтримку закону 5670</p>
	              <p>Це займе небагато часу, але надасть необхідну громадську підтримку народним депутатам</p>
	            </div>
	            <a role='button' className='btn btn-primary' target='_blank' href="https://itd.rada.gov.ua/services/Petition/Index/2061">Без вагань</a>
	          </div>
	          <div className='col-sm-4 withButtons'>
	            <h3>Долучися</h3>
	            <div className='callToAction'>
	              <p>Нам важлива твоя думка</p>
	              <p>Приєднайся до обговорення та слідкуй за новинами у Фейсбук</p>
	              <p>Дізнайся, чому саме закон 5670 серед інших заслуговує на підтримку та як ще ти можеш допомогти</p>
	            </div>

	            <a role='button' className='btn btn-primary' target='_blank' href="https://www.facebook.com/groups/i.tak.poymut">Вйо до новин</a>
	          </div>
	        </div>
	        <div className='row marketing'>
	          <div className='col-12'>
	            Заходь згодом, бо ми тільки почали...&nbsp;&nbsp;
                <div className="fb-follow" data-href="https://www.facebook.com/iitaie" data-layout="button_count" data-size="small" data-show-faces="true"></div>
	          </div>
	        </div>
    	</div>    	
	)
  }
}
