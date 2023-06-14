import Form from "./Form"
import Contact from "./Contact"
import './App.css'



export default function App(){
    return (
        <section>
            <div>
                <h2 className="title">Get In Touch</h2>
            </div>
            <div className="forms">
                <Contact/>
                <Form/>
            </div>
        </section>
    )
}