import React from 'react'
import './listflat.css'
const listflat = () => {
  return (
    <>
    <div>
      
<form>
    <form >
<label htmlFor="email">Where is your flat located
                <input type="text" placeholder="Where is your flat located" name="email" />
                </label>
                <label htmlFor="email">Rent
                <input  placeholder="Rent Per Head"  />
                </label>
                </form>
<form>
<input type="file" name="file" id="file" class="myclass" />
<label for="file">Choose a file</label>
</form>
  <label for="cars">Occupancy:</label>
  <select >
    
      <option>Shared</option>
      <option >Single</option>
    
      <option value="mercedes">Any</option>
      
   
  </select>
 
</form>

<form>

  <label for="cars">Looking for:</label>
  <select>
   
      <option value="volvo">Male</option>
      <option value="saab">Female</option>
   
   
      <option value="mercedes">Any</option>
 </select>
 

</form>
    </div>

    <form>
    <label htmlFor="email">Contact number
                <input type="text" placeholder="Phone number"  />
</label>
    </form>
    <button>Submit</button>
    </>
  )
}

export default listflat

