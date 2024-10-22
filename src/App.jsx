import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');
  const [arr, setArr] = useState([])

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    // alert(value)
    setArr(prev => [...prev, value])
  }

  const handleDelete = () => {
    
  }

  return (
    <div className="text-lg font-bold">
      Hello world!

      <div>
        <input 
          type="text" 
          value={value}
          onChange={handleChange}
          className='bg-gray-200 m-3 p-2 px-3'
        />
        <button 
          type='submit'
          onClick={handleSubmit}
          className='bg-green-500 p-2 px-4 rounded-md'
        >
          submit
        </button>
      </div>

      <div>
        {arr.map((item, index) => (
          <div key={index} className='border flex justify-center items-center'>
            <p>{item}</p>
            <button onClick={handleDelete} className='text-xs m-3 bg-red-500 p-2 rounded-md'>
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
