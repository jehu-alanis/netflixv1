import React,{useEffect,useRef} from 'react'

import { useSelector } from 'react-redux';
import { selectPrice } from '../features/PriceSlice';

const Paypal = () => {
    const price = useSelector(selectPrice);
    const paypal = useRef();

    useEffect(() => {
     window.paypal.Buttons({
      createOrder: (data, actions,err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Nteflix Subscripton",
              amount:{
                currency_code: "EUR",
                value: price,
              }
            }
          ] 
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
      },
     onError: (err) => console.log(err),
  
     }).render(paypal.current)
    }, []) 

    return (
        <div ref={paypal}>
            paypal
        </div>
    )
}



export default Paypal
