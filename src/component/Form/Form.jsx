import React from 'react'
import './Form.css'
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../button/button';
import InputErrorTitle from '../InputErrorTitle/InputErrorTitle';
import InputErrorBody from '../InputErrorBody/InputErrorBody';




function Form({
                isClass, 
                isvalue, 
                onChange, 
                isplaceholderInput,                
                isvalueTextarea,
                onChangeBody, 
                isplaceholderTextarea,
                onClick,
                istypeInput,
                isnameInput,
                isclassInput,
                isnameTextarea,
                isclassTextarea}) {

  return (
    <form action=""
        className={isClass}>
          <div className='data'>
            <p className='label' htmlFor="">Объем готового к перегонке сусла</p>
            <Input 
                istypeInput={istypeInput}
                isnameInput={isnameInput}
                isclassInput= {isclassInput}
                isplaceholderInput={isplaceholderInput}
                isvalue={isvalue}
                onChange={onChange}/>
              <i>литров</i>
            <div className='data-input'>
             
            </div>
         
             <InputErrorTitle 
                len= {isvalue.length}
                text='Введите корректное значение'/>
          </div>

          <div className='data'>
            <p className='label' htmlFor="">Желаемая крепость сусла</p>
            <Input 
                istypeInput={istypeInput}
                isnameInput={isnameInput}
                isclassInput= {isclassInput}
                isplaceholderInput={isplaceholderInput}
                isvalue={isvalue}
                onChange={onChange}/>
              <i>% об.</i>
            <div className='data-input'>
              
            </div>
         
             <InputErrorTitle 
                len= {isvalue.length}
                text='Введите корректное значение'/>
          </div>

          <div className='data'>
            <p className='label'>Количество сахара во фруктовом (ягодном) сырье</p>
            <Input 
                istypeInput={istypeInput}
                isnameInput={isnameInput}
                isclassInput= {isclassInput}
                isplaceholderInput={isplaceholderInput}
                isvalue={isvalue}
                onChange={onChange}/>
              <i>%</i>
            <div className='data-input'>
              
            </div>
         
             <InputErrorTitle 
                len= {isvalue.length}
                text='Введите корректное значение'/>
          </div>

        
         
      

     
     
     

      <Button 
                text={'Посчитать'}
                isClass={'btn'}
                onClick={onClick} />
    
    </form> 
     
  );
}

export default Form;