import React from 'react'
import "../subscribe/subscribe.css"
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'


export const Subscribe = () => {

    const navigate = useNavigate();

  const navigateToSubscribe = () => {
    // 👇️ navigate to /contacts
    navigate('/subscribe');
  };
    return (
        <div className='sub'>

            <div className='head'>

                <h1>Get exclusive content with TCQ Premium</h1>

                <br></br>

            </div>
            <br></br>
            <div className='ben'>
                <br />
                <div>
                    <h3>TCQ Premium Benifits</h3>
                    <br />
                    <div className='p1'>
                        <ul className='list'>
                            <li>Get ad free Experience</li>
                            <li>Exclusive and segregated access to coverage of major events</li>
                            <li>Enjoy the Unlimited articles of you interest</li>
                        </ul>
                    </div>
                </div>
                <div className='p2'>
                    <h3>TCQ Premium Membership plan</h3>
                    <ul className='list n2'>
                        
                        <h4 className='price'>Rs. 100 /month</h4>
                            
                        <p>Get all the benefits NOW !</p>


                    </ul>
                </div>
            </div>
            <br />
            <Button  className='bttn' variant='danger'>
                Subscribe Now !
            </Button>


        </div>
    )
}



