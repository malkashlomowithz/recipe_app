import React from 'react';


function Explanation(props) {
    return (
        <div className="card col-12 col-lg-4 mt-3 pt-3 pb-3 hv-center">
            <h4 style = {{color:'green'}}>What are the benefits of a premium user?</h4>
                By becoming  a premium user you can use this app as a great advertising platform for 
                your catering business.
                We will give you an opportunity to advertise your wonderful recipes on our homepage, 
                this way you will let everyone know what a professional cook you 
                are and bring  many more customers to your business. 
            <h4 className = 'mt-3 mb-5'>Pay only 10 NIS and enjoy the benefits of a premium user.</h4>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="2CSW6K8RTMSDJ"/>
                <input type="image" src="https://www.paypalobjects.com/en_US/IL/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>
            <h4 style = {{color:'#eb6e15'}}> IMPORTANT! When subscribing please select the email address you used when you signed up to this app! Thanks!</h4>

        </div>
    )
}



export default Explanation

