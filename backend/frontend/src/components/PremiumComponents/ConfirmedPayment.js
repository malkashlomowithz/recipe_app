import React from 'react'
import Confirmed from './confirmed.png'

export default function ConfirmedPayment() {
    return (
        <div className="card col-12 col-lg-4 mt-3 pt-3 pb-3 hv-center">
            <img src = {Confirmed} alt=  'confirmed' style = {{width: "20%",margin: 'auto'}}/>
            <h4 style = {{color:'#eb6e15'}}>Thank you for your payment. Your transaction has been completed, 
                and a receipt for your purchase has been emailed to you. 
            </h4>
        </div>
    )
}
