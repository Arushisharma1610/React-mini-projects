import { useState } from 'react';
import './App.css';

function App() {

  const[formData, setFormData] = useState(
    {
    firstname: "",
    lastname:'',
    email:"",
    country: '',
    city: '',
    address: "",
    state: "",
    postalcode: '',
    comments: false,
    candidates:false,
    offers: false,
    pushnotification: '',
  })

    console.log(formData);
    function changeHandler (event) {
      const {name, value, checked, type} = event.target;
      setFormData(prevData => ({
        ...prevData,
        [name] : type=== "checkbox" ? checked : value
    }));

    }

    // function submitHandler (event) {
    //   event.preventDefault();
    //   // printing form data
    //   console.log("printing the form data");
    //   console.log(formData);
    // }

    function submitHandler(event) {
      event.preventDefault();
      alert("Saved Successfull - Your Data \n" + formData)
      console.log(formData);
      setFormData({
    firstname: "",
    lastname:'',
    email:"",
    country: '',
    city: '',
    address: "",
    state: "",
    postalcode: '',
    comments: false,
    candidates:false,
    offers: false,
    pushnotification: '',
    })
    }


  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <form className="space-y-2" onSubmit={submitHandler}>
        <label htmlFor='fistname'
        className="text-gray-900 leading-6 text-sm font-medium"
        >First Name</label><br/>
        <input
          type='text'
          placeholder='Arushi'
          name='firstname'
          onChange={changeHandler}
          value={formData.firstname}
          className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />

        <br/>
        <br/>
        <label
        htmlFor='lastname'
        className="text-gray-900 leading-6 text-sm font-medium"
        >Last Name</label><br/>
        <input
          type='text'
          placeholder='Sharma'
          name='lastname'
          onChange={changeHandler}
          value={formData.lastname}
          className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />

        <br/>
        <br/>
        <label htmlFor='email'
        className="text-gray-900 leading-6 text-sm font-medium"
        >Email</label><br/>
        <input
          type='email'
          placeholder='arushisharma2003bly@gmail.com'
          name='email'
          onChange={changeHandler}
          value={formData.email}
          className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />

        <br/>
        <br/>
        <label htmlFor='country'
        className="text-gray-900 leading-6 text-sm font-medium"
        >Country</label>
        <br/>
        <select
          name='country'
          id="country"
          onChange={changeHandler}
          value={formData.country}
          className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
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
          <label
          htmlFor='city'
          className="text-gray-900 leading-6 text-sm font-medium"
          >City</label><br/>
          <input
            type='text'
            placeholder='Bareilly'
            name='city'
            onChange={changeHandler}
            value={formData.city}
            className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />

          <br/>
          <br/>
          <label
          htmlFor='address'
          className="text-gray-900 leading-6 text-sm font-medium"
          >Address</label><br/>
          <input
            type='text'
            placeholder='Prem Nagar'
            name='address'
            onChange={changeHandler}
            value={formData.address}
            className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />

          <br/>
          <br/>
          <label
          htmlFor='state'
          className="text-gray-900 leading-6 text-sm font-medium"
          >State</label><br/>
          <input
            type='text'
            placeholder='Uttar Pradesh'
            name='state'
            onChange={changeHandler}
            value={formData.state}
            className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />

          <br/>
          <br/>
          <label
          htmlFor='postalcode'
          className="text-gray-900 leading-6 text-sm font-medium"
          >ZIP/Postalcode</label><br/>
          <input
            type='postalcode'
            placeholder='243001'
            name='postalcode'
            onChange={changeHandler}
            value={formData.postalcode}
            className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />

          <br/>
          <br/>

          <fieldset className="mb-10">
            <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
            
            <div className="mt-4 space-y-2">
              <div className="flex">
                <input
                  type='checkbox'
                  name='comments'
                  id='comments'
                  checked={formData.comments}
                  onChange={changeHandler}
                  className="h-4 w-4 mt-1 rounded"
                />
                <div className="flex flex-col ml-3">
                  <label htmlFor='comments' className="text-sm font-semibold leading-6 text-gray-900">Comments</label>
                  <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>

              <div className="flex">
                <input
                  type='checkbox'
                  name='candidates'
                  id='candidates'
                  checked={formData.candidates}
                  onChange={changeHandler}
                  className="h-4 w-4 mt-1 rounded"
                />
                <div className="flex flex-col ml-3">
                  <label htmlFor='candidates' className="text-sm font-semibold leading-6 text-gray-900">Candidates</label>
                  <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>

              <div className='flex'>
                <input
                  type='checkbox'
                  name='offers'
                  id='offers'
                  checked={formData.offers}
                  onChange={changeHandler}
                  className="h-4 w-4 mt-1 rounded"
                />
                <div className="flex flex-col ml-3">
                  <label htmlFor='offers' className="text-sm font-semibold leading-6 text-gray-900">Offers</label>
                  <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>

            </div>
          </fieldset>

          
          <br/>

          <fieldset className="mt-10">
            <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notification</legend>
            <p className="text-gray-500">These are delivered via SMS to your mobile phone.</p>

            <div className="mt-4 space-y-2">
                <div className="flex gap-x-4">
                  <input
                    type='radio'
                    name='pushnotification'
                    id='pusheverything'
                    value='everything'
                    onChange={changeHandler}
                  />
                  <label htmlFor='pusheverything'
                  className="text-gray-900 leading-6 text-sm font-medium"
                  >
                    Everything
                  </label>
                </div>

                <div className="flex gap-x-4">
                  <input
                    type='radio'
                    name='pushnotification'
                    id='pushemail'
                    value='email'
                    onChange={changeHandler}
                  />
                  <label htmlFor='pushemail'
                  className="text-gray-900 leading-6 text-sm font-medium"
                  >
                    Same as Email
                  </label>
                </div>

                <div className="flex gap-x-4">
                  <input
                    type='radio'
                    name='pushnotification'
                    id='pushnothing'
                    value='nothing'
                    onChange={changeHandler}
                  />
                  <label htmlFor='pushnothing'
                  className="text-gray-900 leading-6 text-sm font-medium"
                  >
                    No push Notification
                  </label>
                </div>



            </div>
          </fieldset>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </form>
    </div>
  );
}

export default App;
