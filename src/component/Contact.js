import React from 'react';
import { useState } from 'react';

const Contact = () => {
    
    // created state by  useState hooks in contact dunction component
  const [data, setData] = useState({
     fullname :'',
     phone : '',
     email : '',
     msg : '',

  });

   const InputEvent = (event) => {
        const   {name , value} = event.target;
        console.log("Invoked", event.target);
        
             setData((preVal)=>{
                 return {
                ...preVal,
                [name] : value ,

            }
            
        })
        console.log("data invoked" ,value);
   }

    const formSubmit = () => {
        console.log("submit btn")
    };


    return (
        <>
        <div className='my-5'>
            <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                    <form >
                    <div className="mb-3">
                         <label for="exampleFormControlInput1" className="form-label">FullName</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name"/>
                    </div>

                    <div className="mb-3">
                         <label for="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your phone"/>
                    </div>

                    <div className="mb-3">
                         <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email"/>
                    </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"  name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <div className="col-12">
                             <button className="btn btn-outline-primary" type="submit" onSubmit={formSubmit}>Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;