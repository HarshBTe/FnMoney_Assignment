import {Component} from 'react'
import { Link } from "react-router-dom";
import './index.css'
import LoginForm from '../LoginForm'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class LandingPage extends Component {
    state = {
        isLoading: false,
    }


 StaticExample = () => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}



    render() {

        return (
           <>
             <div className='head-container'>
                 <h2>FnMoney</h2>
                 
                 <div className='link-container'>
                     <Link  to='/' style={{ color: '#FFF' }}>
                    <p className='link-item'>Home</p>
                    </Link>
                    <Link to="/about" style={{ color: '#FFF' }}>
                    <p className='link-item'>About</p>
                    </Link>
                    <Link to="/assessment-tasks" style={{ color: '#FFF' }}>
                    <p className='link-item'>Assessment Tasks</p>
                    </Link>
                    <Link to="/contact" style={{ color: '#FFF' }}>
                    <p className='link-item'>Contact</p>
                    </Link>
                 </div>
             </div>  
             <div className='main-container'>
                 <img className='fm-img' src="https://img.freepik.com/premium-vector/salary-payment-payroll-annual-bonus-income-flat-vector-modern-illustration_566886-11506.jpg" />
                 <div className='desc'>
                    <h1> Welcome! To FmMoney Investment </h1>
                    <button className='button-fm' onClick={this.StaticExample}> Click Here </button>
                 </div>
             </div>

             <div className='bottom-section'>
                <div className='container-bt'>
                    <h3>Coding Challenge</h3>
                    <button className='bt-button'>Get Started</button>
                </div>

                <div className='container-bt'>
                    <h3>Project Submission</h3>
                    <button className='bt-button'>Get Started</button>
                </div>

                <div className='container-bt'>
                    <h3>Live Assessment</h3>
                    <button className='bt-button'>Get Started</button>
                </div> 

                <div className='container-bt'>
                    <h3>Project Quiz</h3>
                    <button className='bt-button'>Get Started</button>
                </div>
             </div>
           </>
        )
    }
}

export default LandingPage