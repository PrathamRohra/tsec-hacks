import React from 'react'
import './listflat.css'
const listflat = () => {
  return (
    <>
    <div className='App'>
        <div className="auth-form-container">
      
<form className="login-form">
    <form >
        <div className="calling">
                <label htmlFor="email">Where is your flat located
                <input className="my-input" type="text" placeholder="Where is your flat located" name="email" />
                </label>
        </div>
       <div className="calling">
                <label htmlFor="email">
                    Rent
                <input className="my-input"  placeholder="Rent Per Head"  />
                </label>
                </div>
                <div className="calling">
    <label htmlFor="email">Contact number
                <input className="my-input" type="text" placeholder="Phone number"  />
</label>
    </div>
    </form>
<div>
<input className="login-input" type="file" multiple name="file" id="file" class="myclass" />
<label for="file">Choose a file</label>
</div>
<div>
<input className="login-input" type="file" multiple name="file" id="file" class="myclass" />
<label for="file">Choose a file</label>
</div>
<div>
<input className="login-input" type="file" multiple name="file" id="file" class="myclass" />
<label for="file">Choose a file</label>
</div>
<div>
<input className="login-input" type="file" multiple name="file" id="file" class="myclass" />
<label for="file">Choose a file</label>
</div>
 
 
</form>

<div>
<div className="occupancy-div">
<label for="cars">Occupancy:</label>
  <select className="occupancy-select"> 
    
      <option>Shared</option>
      <option >Single</option>
    
      <option value="mercedes">Any</option>
      
   
  </select >
  </div>
  <div>
  <label for="cars">Looking for:</label>
  <select className="occupancy-select">
   
      <option value="volvo">Male</option>
      <option value="saab">Female</option>
   
   
      <option value="mercedes">Any</option>
 </select>
 </div>
 

</div>


    
    </div>
    </div>

    
    </>
  )
}

export default listflat

