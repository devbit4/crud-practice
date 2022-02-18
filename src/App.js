
import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [helps, setHelps] = useState([]);
  const writer = useRef(null);
  const content = useRef(null);

  console.log(helps);

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
  return (
    <>
      <section className='write'>
        <input type="text" placeholder='writer' ref={writer} />
        <input type="text" placeholder='content' ref={content} />
        <button onClick={Addhandlement}>CLICK!</button>

      </section>
      <section className='show'>
        {helps.map((help, index) => {
          return (<article key={index}>
            <h1>{help.writer}</h1>
            <p>{help.content}</p>
            <button onClick={() => deletehandlement(index)}>지우개</button>
          </article>)
        })
        }
      </section>
    </>
  );
}

export default App;
