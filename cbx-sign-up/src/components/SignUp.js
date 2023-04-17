import React, { useState } from 'react';
import $ from 'jquery';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
$.fn.selectpicker.Constructor.BootstrapVersion = '5';



const defaultCloudUsage = ['AWS'];

function SignUp() {
  const [userInput, setUserInput] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    cloudUsage: defaultCloudUsage,
  });
  const [responseCode, setResponseCode] = useState('');
  const [borderColor, setBorderColor] = useState('border-primary');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formattedCloudUsage = userInput.cloudUsage.join(", ");
    const requestBody = {
      "Full Name": userInput.fullName,
      "Business Email": userInput.businessEmail,
      "Phone Number": userInput.phoneNumber,
      "Company Name": userInput.companyName,
      "Cloud Usage": formattedCloudUsage,
    };

    const requestOptions = {
      method: "POST",
      mode: 'cors',
      body: JSON.stringify(requestBody),
      // Set the credentials option to "include" for CORS
      credentials: "include",
    };

    try {
      const response = await fetch("https://cbx.mycloudbuilders.com/Prod/company", requestOptions);

      console.log(response);
      setResponseStatus(response.status);

      if (response.status === 200) {
        setFormSubmitted(true);
      } else if (response.status === 400) {
        const data = await response.json();
        if (data.msg === 'Business Email already exists') {
          setErrorMessage(data.msg);
          setBorderColor('border-danger');
        }
      }
      else if (response.status >= 401 && response.status < 500) {
        setBorderColor("border-warning");
        const data = await response.json();
        console.log(data.msg);
      }
      else if (response.status >= 500) {
        const data = await response.json();
        setErrorMessage('server Error ');
        setBorderColor('border-danger');

        console.log(data.msg)
      }

    }
    catch (error) {
      console.error("Error:", error);
      setResponseStatus(error);
    }
  };
  const handleOptionChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      cloudUsage: selectedOptions
    }));
  };

  $(document).ready(function() {
    $('.selectpicker').selectpicker();
  });



  return (
    <div >
      {formSubmitted ? (
        <div className='col-md-12'>
          <form
        className={`signup-form ${responseStatus === 500 ? borderColor : ""} `}
        style={{  fontSize: "auto" ,maxHeight:"360px"     }}
        >
          <h2 className=' text-middle-justify'>Thank you for submitting the form!</h2>
          <p className=' text-middle-justify'>As per the next steps, please verify your Email id</p>
        </form>
        </div>
        ) : (
        <form
        onSubmit={handleFormSubmit}
        className={`signup-form ${responseStatus === 500 ? borderColor : ""} `}
      >
        <h1>Sign Up</h1>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={userInput.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Business Email:
          <input
            type="email"
            name="businessEmail"
            value={userInput.businessEmail}
            onChange={handleInputChange}
            required
            className={responseStatus === 400 && userInput.businessEmail ? borderColor : ""}
          />
          {responseStatus === 400 && userInput.businessEmail && (
            <div className="text-danger small">Business Email already exists </div>
          )}
        </label>

        <label htmlFor="phoneNumber">Phone Number:
        <input type="tel" name="phoneNumber" value={userInput.phoneNumber} onChange={handleInputChange} className="form-control" />
        </label>

        <label htmlFor="companyName">Company Name:
        <input type="text" name="companyName" value={userInput.companyName} onChange={handleInputChange} required className="form-control" />
        </label>
        <label>Cloud Usage:</label>
        <select className="col-md-12 selectpicker" name="cloudUsage" multiple data-live-search="true" value={userInput.cloudUsage} onChange={handleOptionChange} required>
          <option value="AWS">AWS</option>
          <option value="Azure">Azure</option>
          <option value="GCP">GCP</option>
          <option value="Others">Others</option>
        </select>
      <button type="submit">Submit</button>
      {responseStatus === 500 &&  (
            <div className="text-danger small">Server Error Please try again later  </div>
          )}
    </form>
  )}
  {responseCode && <p>HTTP Response Code: {responseCode}</p>}
</div>

  );
}

export default SignUp;
