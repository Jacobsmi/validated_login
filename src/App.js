import './App.css';

function App() {
  const validateInputs = () => {
    // create a string that tracks errors and is displayed if errors exist
    let errorString = 'Errors <ul>'

    // check if the first name is valid with regex and add to error string if not valid
    let validFirstName = /^[a-zA-Z -']{2,30}$/.test(document.getElementById('home-form-first-name').value)
    if (!validFirstName) {
      errorString += '<li>Invalid First Name</li>'
    }

    // check if the last name is valid with regex and add to error string if not valid
    let validLastName = /^[a-zA-Z -']{2,30}$/.test(document.getElementById('home-form-last-name').value)
    if (!validLastName) {
      errorString += '<li>Invalid Last Name</li>'
    }


    // check if email is valid with regex and add to the string if not valid
    let validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById('home-form-email').value)
    if (!validEmail) {
      errorString += '<li>Invalid Email</li>'
    }


    // check if password is valid with regex and add to the string if not valid
    let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(document.getElementById('home-form-password').value)
    if (!validPassword) {
      errorString += '<li>Invalid Password</li>'
    }

    // check if passwords match
    let passwordsMatch = document.getElementById('home-form-password').value === document.getElementById('home-form-confirm').value
    if (!passwordsMatch) {
      errorString += '<li>Passwords do not match</li>'
    }

    // close the list
    errorString += '</ul>'

    // Set the text in the error div as the error string that has been created
    document.getElementById('home-form-errors').innerHTML = errorString

    // ensure that all parts are correct
    if (validFirstName && validLastName && validEmail && validPassword && passwordsMatch) {
      // if everything is correct do not display error div
      document.getElementById("home-form-container").style.display = 'none'
      document.getElementById('home-success').style.display = 'block'
    } else {
      // if there are errors display error 
      document.getElementById("home-form-errors").style.display = 'block'
    }

  }


  return (
    <div className="App">
      <div className='home-form' id='home-form-container'>
        <h2 className='home-form-title'>Sign Up</h2>
        <div id='home-form-errors' style={{ display: 'none' }}></div>
        <input placeholder='First Name' className='home-form-double-input' id='home-form-first-name'></input>
        <input placeholder='Last Name' className='home-form-double-input' id='home-form-last-name'></input>
        <input placeholder='E-Mail' className='home-form-single-input' id='home-form-email'></input>
        <input placeholder='Password' className='home-form-single-input' id='home-form-password' onFocus={() => { document.getElementById('home-form-password').type = 'password' }}></input>
        <input placeholder='Confirm Password' className='home-form-single-input' id='home-form-confirm' onFocus={() => { document.getElementById('home-form-confirm').type = 'password' }}></input>
        <button id='home-form-submit' onClick={validateInputs}>Sign Up</button>
      </div>
      <div id='home-success' style={{ display: 'none' }}>
        <h2>All info valid</h2>
        <p>This is when an API call would usually happen.</p>
      </div>
    </div>
  );
}

export default App;
