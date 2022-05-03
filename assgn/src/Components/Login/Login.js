import React, { useState } from 'react'

const Login = () => {
    
    const [file, setFile] = useState();
    const [val, setVal]=useState(false);

    function handleChange(e) {
        console.log(e.target.files);
        const url=URL.createObjectURL(e.target.files[0])
        setFile(url);
    }


  return (
    <div>
        <form name='form'>
        <div className='col-md-12 mt-2'>
        <label htmlFor="fname" className='form-label m-2'>Name:</label>
        <input  type="text" id="fname" name="fname" required/>
        </div>
        <div className='col-md-12 mt-2'>
        <label htmlFor="email" className='form-label m-2'>Email:</label>
        <input type="email" id="email" name="email" required/> 
        </div>
        <div className='col-md-12 mt-2'>
        <label htmlFor="phone" className='form-label m-2'>Phone Num: +91</label>
        <input type="tel" maxLength={10} id="phone" name="phone" required/>
        </div>
        <div className='col-md-12 mt-2'>
        <label htmlFor="photo" className='form-label m-2'>Photo:</label>
        <input type="file" id='photo' className='btn btn-secondary' required onChange={handleChange} />
          {val?  <img src={file} alt='img' />:''}
          <button className='btn btn-primary ms-3' onClick={()=>setVal(!val)}>Preview</button>
        </div>     
        <div>
            <input value='submit'  type='submit' className='btn btn-success mt-4'/>
        </div>
        </form>
       
    </div>
  )
}

export default Login