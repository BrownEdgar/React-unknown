import {TiLocation} from 'react-icons/ti'
import {BsTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {AiOutlineGlobal, AiFillFacebook, AiFillTwitterSquare, AiFillGoogleSquare, AiFillSkype, AiFillLinkedin} from 'react-icons/ai'


export default function Contact() {
    return (
        <div className="ContactForm">
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur hic neque vel at ducimus, quasi quisquam</p>
            <span><b><TiLocation/> Address:</b> 10.Park Suithojnbet.London.UK.</span>
            <span><b><BsTelephoneFill/> Contact no:</b> +14254790856</span>
            <span><b><GrMail/> Email:</b> example@gmail.com</span>
            <span><b><AiOutlineGlobal/> Website:</b> www.abcd.com</span>
            <div>
                <span>Find:</span>
                <div>
                    {/* <div className='contactBox'></div>
                    <div className='contactBox'></div>
                    <div className='contactBox'></div>
                    <div className='contactBox'></div>
                    <div className='contactBox'></div> */}
                    <AiFillFacebook size='2rem'/>
                    <AiFillTwitterSquare size='2rem'/>
                    <AiFillGoogleSquare size='2rem'/>
                    <AiFillSkype size='2rem'/>
                    <AiFillLinkedin size='2rem'/>
                </div>
            </div>
        </div>
    )
}