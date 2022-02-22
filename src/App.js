
import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [helps, setHelps] = useState([{ writer: "bitna", content: "hello" }]);
  const writer = useRef(null);
  const content = useRef(null);
  const updateWriter = useRef(null);
  const updateContent = useRef(null);
  // 추가
  const Addhandlement = () => {
    if (!writer.current.value || !content.current.value) return;
    setHelps([{
      writer: writer.current.value,
      content: content.current.value,
    },
    ...helps
    ]);
  }
  // 삭제
  const deletehandlement = (deleteIndex) => {
    setHelps(helps.filter((help, helpIndex) => helpIndex !== deleteIndex))
  }

  // 수정
  const setUpdatemode = (index) => {
    setHelps(helps.map((help, helpIndex) => {
      if (index === helpIndex) help.update = true;
      return help;

    }))
  }

  const setCancelmode = (index) => {
    setHelps(helps.map((help, helpIndex) => {
      if (index === helpIndex) help.update = false;
      return help;

    }))
  }

  const setSavemode = (index) => {
    // console.log(updateWriter.current.value);
    setHelps(helps.map((help, helpIndex) => {
      if (index === helpIndex) {

        help.writer = updateWriter.current.value;
        help.content = updateContent.current.value;
        help.update = false;
      }
      return help;

    }))
  }


  return (
    <>
      <section className='write'>
        <input type="text" placeholder='writer' ref={writer} />
        <input type="text" placeholder='content' ref={content} />
        <button onClick={Addhandlement}>CLICK!</button>

      </section>
      <section className='show'>
        {helps.map((help, index) => {
          return (

            <article key={index} >
              {
                help.update ?
                  <>
                    <input type="text" defaultValue={help.writer} ref={updateWriter} />
                    <input type="text" defaultValue={help.content} ref={updateContent}></input>
                    <button onClick={() => setSavemode(index)}>확인</button>
                    <button onClick={() => setCancelmode(index)}>취소</button>
                  </>
                  :
                  <>
                    <h1>{help.writer}</h1>
                    <p>{help.content}</p>
                    <button onClick={() => setUpdatemode(index)}>수정모드</button>
                    <button onClick={() => deletehandlement(index)}>지우개</button>
                  </>
              }

            </article>


          )
        })
        }
      </section>
    </>
  );
}

export default App;
