import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState ({firstname: "", lastname: "", email: "", comment: "", isVisible: true , mode: "", favC: ""})

  // console.log(formData);
  function changeHandler (event) {
    const {name, value, checked, type} = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name] : type== "checkbox" ? checked : value
  }));
  

  }

  function submitHandler (event){
    event.preventDefault();
    // prinitng data
    console.log("printing the data of the form");
    console.log(formData);
  }

  return (
    <div className='App'>

    <form onSubmit={submitHandler}>
    <br/>
      <input
        type='text'
        placeholder='First-Name'
        name='firstname'
        onChange={changeHandler}
        value={formData.firstname}
      />

        <br/>

      <input
        type='text'
        placeholder='Last-Name'
        name='lastname'
        onChange={changeHandler}
        value={formData.Lastname}
      />

        <br/>

      <input
        type='email'
        placeholder='Enter Your Email'
        name='email'
        onChange={changeHandler}
        value={formData.email}
      />

        <br/>


      <textarea
        placeholder='Add Your Comment'
        name='comment'
        onChange={changeHandler}
        value={formData.comment}
      />

      <br/>
      <br/>
      <input
        type='checkbox'
        name='isVisible'
        onChange={changeHandler}
        checked={formData.isVisible}
        id='isVisible'
      />
      <label htmlFor='isVisible'>Am I visible?</label>

      <fieldset>
        <legend>Mode:</legend>
        <br/>
      <br/>
      <input
        type='radio'
        name='mode'
        onChange={changeHandler}
        value="online-mode"
        id='online-mode'
        checked={formData.mode=="online-mode"}
      />
      <label htmlFor='online-mode'>Is Online</label>


      <br/>
      <br/>
      <input
        type='radio'
        name='mode'
        onChange={changeHandler}
        value="offline-mode"
        id='offline-mode'
        checked={formData.mode=="offline-mode"}
      />
      <label htmlFor='offline-mode'>Is Offline</label>

      </fieldset>

      <label htmlFor='favC'>what's Your fav Choclate?</label>
      <select
      name='favC'
      onChange={changeHandler}
      value={formData.favC}
      id='favC'
      >
        <option value="Kit-kat">Kit-kat</option>
        <option value="Bubbly">Bubbly</option>
        <option value="Silk">Silk</option>
      </select>

      <br/>
      <br/>
      <button>Submit</button>
    </form>

      

      

    </div>
  );
}

export default App;
