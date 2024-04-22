import { useState } from 'react';
import './App.css';

function App() {

  const[formData, setFormData] = useState(
    {firstname: "", 
    lastname:'',
    email:"", 
    country: '',
    city: '', 
    address: "",
    state: "",
    postalcode: ''})

    console.log(formData);
    function changeHandler (event) {
      const {name, value, checked, type} = event.target;
      setFormData(prevData => ({
        ...prevData,
        [name] : type== "checkbox" ? checked : value
    }));

    }

    function submitHandler (event) {
      event.preventDefault();
      // printing form data
      console.log("printing the form data");
      console.log(formData);
    }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <br/>
        <br/>
        <label>Fist Name</label><br/>
        <input
          type='text'
          placeholder='Arushi'
          name='firstname'
          onChange={changeHandler}
          value={formData.firstname}
        />

        <br/>
        <br/>
        <label>Last Name</label><br/>
        <input
          type='text'
          placeholder='Sharma'
          name='lastname'
          onChange={changeHandler}
          value={formData.lastname}
        />

        <br/>
        <br/>
        <label>Email</label><br/>
        <input
          type='email'
          placeholder='arushisharma2003bly@gmail.com'
          name='email'
          onChange={changeHandler}
          value={formData.email}

        />

        <br/>
        <br/>
        <label htmlFor='country'>Country</label>
        <br/>
        <select
          name='country'
          id="country"
          onChange={changeHandler}
          value={formData.country}
          >
            <option value="India">India</option>
            <option value='U.S'>U.S</option>
            <option value='Africa'>Africa</option>
            <option value='Asia'>Asia</option>
            <option value='Austrila'>Austrila</option>
            <option value='Singapore'>Singapore</option>
          </select>

          <br/>
          <br/>
          <label>City</label><br/>
          <input
            type='text'
            placeholder='Bareilly'
            name='city'
            onChange={changeHandler}
            value={formData.city}
          />

          <br/>
          <br/>
          <label>Address</label><br/>
          <input
            type='text'
            placeholder='Prem Nagar'
            name='address'
            onChange={changeHandler}
            value={formData.address}
          />

          <br/>
          <br/>
          <label>State</label><br/>
          <input
            type='text'
            placeholder='Uttar Pradesh'
            name='state'
            onChange={changeHandler}
            value={formData.state}
          />

          <br/>
          <br/>
          <label>ZIP/Postalcode</label><br/>
          <input
            type='postalcode'
            placeholder='243001'
            name='postalcode'
            onChange={changeHandler}
            value={formData.postalcode}
          />

      </form>
    </div>
  );
}

export default App;
