import { useState } from 'react';
import './styles.css';

function Home() {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  function handleAddListInName() {
    if (!name) {
      setError('Digite um nome primeiro...')
      return;
    };

    const findName = list.findIndex(item => item === name);
    
    if (findName !== -1) {
      setError('O um nome já esta na lista...')
      setName('')
      return;
    };

    setList([...list, name])

    setName('')
    setError('')
  }

  return (
    <div className="container_home">
      <div className='left'>
        <input
          type="text"
          placeholder='name'
          className='input_home'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span id='span'>{ error }</span>
        <button
          className='button_left'
          onClick={()=> handleAddListInName()}
        >Enviar</button>
      </div>
      <div className='right'>
        {list.length ?
          <ul>
            {list.map(item => (
              <li
                key={item}
              >{item}</li>
            ))}
        </ul>
          :
          <ul>
            <li>Lista de nomes vazia...</li>
          </ul>
        }
        <button
          className='button_right'
          onClick={()=>setList([])}
        >Limpar</button>
      </div>
    </div>
  )
}

export default Home;
