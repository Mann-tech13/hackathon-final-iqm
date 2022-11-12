import React from 'react'
import "../subscribe/subscribe.css"
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import Header from '../header/header'


export const Subscribe = () => {
    const initPayment = (data) => {
		const options = {
			key: "rzp_test_r7yTXyX3j4hhtR",
			amount: 100,
			currency: "INR",
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
                    console.log("Hello")
					const verifyUrl = "http://localhost:5000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};
    const handlePayment = async() => {
        try{
            const orderUrl = "http://localhost:5000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: 100 });
			console.log(data);
			initPayment(data.data);
        }
        catch(error){
            console.log(error);
        }
    };
    return (
        <div>
        <Header/>
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

            <Button  onClick={handlePayment} className='bttn' variant='danger'>
                Subscribe Now !
            </Button>


        </div>
        </div>
    )
}



