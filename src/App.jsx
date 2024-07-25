import { 
  useState,
  useEffect
 } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { addPost, deletePost, getPosts } from './api/post';
import { getNormalizedPosts } from './utils/get-normalize-posts';
import { getData } from './utils/get-data';
import { TEXT_VALIDATHION_LIMIT,
         TITLE_VALIDATHION_LIMIT,
         TEXT_PLACEHOLDER_INPUT,
         TEXT_PLACEHOLDER_TEXTAREA,
         TEXT_ISERROR,
         TEXT_ISLOADING,
         TEXT_ERROR_INPUT,
         TEXT_POST,
         QWANTITY_ERRORS
 } from './utils/constans';

import Post from './component/Posts/Post';
import Form from './component/Form/Form';

function App() {

  const [postsIds, setpostsIds] = useState(null);
  const [postsById, setpostsById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
 
  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    getPosts()
      .then(posts => {
        const [ids, byIds] = getNormalizedPosts(posts)
        setIsLoading(false);
        setpostsIds(ids);
        setpostsById(byIds);      
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  function hendleInputTitle(event) {
      setInput(event.target.value.trim());
  }

  function hendleInputBody(event) {
       setTextarea(event.target.value.trim());
  }

  function hendleAddPostBtnClick(event) {
    event.preventDefault()
    let error = formValidate()
    if (error !== QWANTITY_ERRORS) {
      return     
    }
    alert(TEXT_POST)
    const id = uuidv4();
    const dt = getData()  
    const post = {
      id,
      dt,
      title: input,
      body: textarea,
    };
    setpostsById({
      ...postsById,
      [post.id]: post
    });

    setpostsIds([post.id, ...postsIds]);
    addPost(post);
    setInput('');
    setTextarea('');
  }

  function formValidate() {
    let error = 0;
    if (!input || !input && !textarea || !textarea ) {
      error++;
      alert('Заполни оба поля' );
    
    } else
    if (input.length > TITLE_VALIDATHION_LIMIT ) {
      error++;
      alert('Убавь количество символов в названии поста');
    }else
    if (textarea.length> TEXT_VALIDATHION_LIMIT ) {
      error++;
      alert('Убавь количество символов в тексте поста');
    }
    return error;
  } 

  function hendleDeletePost(id) {
    setpostsIds(postsIds.filter(postId => postId !== id));
    deletePost(id);
  }

  return (     
    <div className='calc'>
      <h1 className='h1'>Калькулятор расчета загрузки компонентов фруктовой браги</h1>
      <h3 className='h3'>Калькулятор поможет рассчитать оптимальные пропорции сырья, воды и сахара при заданном объеме браги, желаемой крепости браги и сахаристости фруктов (ягод)</h3>
      
      <p className='p'>Желаемая крепость готовой к перегонке браги зависит не только от количества добавляемого сахара, но и от спиртоустойчивости дрожжей, которые вы решили использовать </p>
     <div className='calc__inner'>
        <div className='calc__form'>
          <h2 className='h2'>Введите исходные данные</h2>
          <Form 
              isClass= {'form__wrapper'}
              istypeInput={"number"}
              isnameInput={'title'}
              isclassInput= {'input'}
              isvalue= {input}
              onChange = {hendleInputTitle}
              isplaceholderInput = {TEXT_PLACEHOLDER_INPUT}
              
              isnameTextarea={'body'}
              isclassTextarea= {'input'}
              isvalueTextarea = {textarea}
              onChangeBody = {hendleInputBody}
              onClick = {hendleAddPostBtnClick}              
              isplaceholderTextarea = {TEXT_PLACEHOLDER_TEXTAREA}                                       
              />
          
        </div>

        <div className='calc-result'>
        <h2 className='h2'>Загрузка по вашим параметрам</h2>
         
          <div className='results'>
            <div className='result'>
             <p className='label'>Количество измельченного сырья
                <span className='result'>5,8 </span>
                "л"
              </p>
            </div>
              
              <p className='label'>Количество воды
                <span className='result'>3.8 </span>
                "л"
              </p>
              <p className='label'>Количество сахара
                <span className='result'>3.8 </span>
                "л"
              </p>
              

      
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
