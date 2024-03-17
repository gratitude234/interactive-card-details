import './Content.css';
import { useState } from 'react';
import BackCardImage from "C:/Users/SURV BIYI/All-React-Project/reactfrontendmentor/src/images/bg-card-back.png";
import FrontcardImage from "C:/Users/SURV BIYI/All-React-Project/reactfrontendmentor/src/images/bg-card-front.png";
import LeftwingImage from 'C:/Users/SURV BIYI/All-React-Project/reactfrontendmentor/src/images/bg-main-desktop.png';
import Cardlogo from "C:/Users/SURV BIYI/All-React-Project/reactfrontendmentor/src/images/card-logo.svg";
import iconComplete from "C:/Users/SURV BIYI/All-React-Project/reactfrontendmentor/src/images/icon-complete.svg"
const Content = () => {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('0000 0000 0000 0000');
    const [nameChange, setNameChange] = useState("");
    const [displaynamechange, setDisplayNameChange] = useState("JANE APPLESSEED");
    const [monthChange, setMonthChange] = useState("");
    const [displayMonthchange, setDisplayMonthChange] = useState("00");
    const [yearChange, setYearChange] = useState("");
    const [displayYearchange, setDisplayYearChange] = useState("00");
    const [cvcChange, setCvcChange] = useState("");
    const [displayCVC, setDisplayCVC] = useState("000");
    const [secondContent, setSecondContent] = useState(false);
    const [validNumber, setValidNumber] = useState(false);
    const [validName, setValidName] = useState(false);
    const [validMonth, setValidMonth] = useState(false);
    const [validYear, setValidYear] = useState(false);
    const [validCvc, setValidCvc] = useState(false);
    const [emptyName, setEmptyName] = useState(false);
    const [emptyNumber, setEmptyNumber] = useState(false);
    const [emptyMonth, setEmptyMonth] = useState(false);
    const [emptyYear, setEmptyYear] = useState(false);
    const [emptyCvc, setEmptyCvc] = useState(false);




    const handleChange = (e) => {
        const newValue = e.target.value;
        const formattedValue = formatCreditCardNumber(newValue)
        setInputValue(formattedValue);
        setDisplayValue(formattedValue);
        setValidNumber(false);
        setEmptyNumber(false)
    }
    const handlenameChange = (e) => {
        const newValue = e.target.value;
        const formattedValue = formatCreditCardName(newValue)
        setNameChange(formattedValue);
        setDisplayNameChange(formattedValue);
        setValidName(false);
        setEmptyName(false)
    }
    const handlemonthchange= (e) => {
        const newValue = e.target.value;
        const formattedValue = formatCreditCardNumber(newValue)
        setMonthChange(formattedValue);
        setDisplayMonthChange(formattedValue);
        setValidMonth(false);
        setEmptyMonth(false)
    }
    const handleYearChange = (e) => {
        const newValue = e.target.value;
        const formattedValue = formatCreditCardNumber(newValue)
        setYearChange(formattedValue);
        setDisplayYearChange(formattedValue);
        setValidYear(false);
        setEmptyYear(false)
  
    }
    const handleCvcChange = (e) => {
        const newValue = e.target.value;
        setCvcChange(newValue);
        setDisplayCVC(newValue);
        setValidCvc(false);
        setEmptyCvc(false)
    }
    const hasTwoWords = (value) => {
        const wordCount = value.split(/\s+/).filter(Boolean).length;
        return wordCount >= 2;
    };
    const formatCreditCardNumber = (value) => {
        let formattedValue = value.replace(/\D/g, '');
        formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
        return formattedValue;
    };
    
    const isNameValid = hasTwoWords(nameChange);
    const isMonthValid = /^(0?[1-9]|1[0-2])$/.test(monthChange);
    const isYearValid = /^\d{2}$/.test(yearChange);
    const isCvcValid = /^\d{3}$/.test(cvcChange);
    const isNumberValid = formatCreditCardNumber(inputValue);

    const handleSubmit = () => {
        if (isNameValid && isNumberValid && isMonthValid && isYearValid && isCvcValid) {
            setSecondContent(true);
        } else{
            setSecondContent(false);
        }
        if (!isNameValid ) {
            setValidName(true)
        }
        if (!isNumberValid) {
            setValidNumber(true)
        }
        if (!isMonthValid) {
            setValidMonth(true)
        }
        if (!isYearValid) {
            setValidYear(true)
        }
        if (!isCvcValid) {
            setValidCvc(true)
        }
        

        if (nameChange === "") {
            setEmptyName(true);
            setValidName(false)
        }
        if (inputValue === "") {
            setEmptyNumber(true);
            setValidNumber(false);
        }
        if (monthChange === "") {
            setEmptyMonth(true);
            setValidMonth(false);
        }
        if (yearChange === "") {
            setEmptyYear(true);
            setValidYear(false);
        }
        if (cvcChange === "") {
            setEmptyCvc(true);
            setValidCvc(false);
        }
    }
    const handleContinue = () => {
        window.location.reload()
    }
    function formatCreditCardName(inputString) {
        return inputString.replace(/[^a-zA-Z\s]/g, '');
    }
    return (
        <div className="container">
                {secondContent ? (
                <div className="container-main">
                    <div className="main">
                        <div className="left-wing">
                            <img src= {LeftwingImage} alt="img-icon" className='image-leftwing'/>
                            <img src= {FrontcardImage} alt="img-icon2" className='img2' />
                            <img src= {BackCardImage} alt="img-icon3" className='img3' />
                        <div className='overlay-text'>
                            <img src= {Cardlogo} alt="img-icon4" /> <br /><br /><br /><br /><br />
                            <h2>{displayValue}</h2>
                            <div className="span-text">
                                <span>{displaynamechange}</span>
                                <span>{displayMonthchange}/<span>{displayYearchange}</span></span>
                            </div>
                         </div>
                <div className="overlay-text2">
                    <span>{displayCVC}</span>
                </div>
            </div>
                <div className='right-wing2-container'>
                    <div className="right-wing2">
                        <img src= {iconComplete} alt="img-icon" />
                        <h2>THANK YOU</h2><br />
                        <span className='right-wing2-message'>We've added your card details</span><br /><br /><br />
                        <button onClick={handleContinue}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
            ) : (
                <div className='body'>
                <div className="left-container">
                    <div className="left-wing">
                    <img src= {LeftwingImage} alt="img-icon" className='img'/>
                    <img src= {FrontcardImage} alt="img-icon2" className='img2' />
                    <img src= {BackCardImage} alt="img-icon3" className='img3' />
                    <div className='overlay-text'>
                        <img src= {Cardlogo} alt="img-icon4"  className='cardlogo'/> <br /><br /><br /><br /><br />
                        <h2>{displayValue}</h2>
                        <div className="span-text">
                            <span>{displaynamechange}</span>
                            <span>{displayMonthchange}/<span>{displayYearchange}</span></span>
                        </div>
                    </div>
                    <div className="overlay-text2">
                        <span>{displayCVC}</span>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <div className="right-wing">
                    <div className= "input-container">
                        <span className='label'>CARDHOLDER NAME</span><br />
                        <input type="text" placeholder='e.g. Jane Appleseed' className= {`input ${validName|| emptyName ? "input-error" : " "}`} value={nameChange} onChange={handlenameChange}/>
                        <span className= {validName  ? "error-message" : "block"} >Full-name required</span>
                        <span className= {emptyName ? "empty-message" : "block"}>Can't be blank</span>
                    </div>
                    <div className="input-container">
                        <span className='label'>CARD NUMBER</span> <br />
                        <input type="text" placeholder='e.g. 1234 5678 9123 0000'   className= {`input ${validNumber|| emptyNumber ? "input-error" : " "}`} value={inputValue} onChange={handleChange} minLength={19} maxLength={19}/>
                        <span className = {validNumber ? "error-message" : "block"} >Must be a valid credit card number</span>
                        <span className= {emptyNumber ? "empty-message" : "block"}>Can't be blank</span>
                    </div>
                    <div className="input-container2">
                        <div className="input-container">
                            <span className='span1'>EXP. DATE (MM/YY)</span> <br />
                            <div className="input-container2">
                                <input type="text" placeholder='MM' className={`input input1 ${validMonth || emptyMonth ? "input-error" : " "}`} value={monthChange} onChange={handlemonthchange} minLength={2} maxLength={2}/>
                                <input type="text" placeholder='YY' className= {`input input1 ${validYear || emptyYear ? "input-error" : " "}`} value = {yearChange} onChange={handleYearChange}  minLength={2} maxLength={2}/>
                            </div>
                            <div className="error">
                                <span className={validMonth ? "error-message" : "block"}>Invalid month</span>
                                <span className= {emptyMonth ? "empty-message" : "block"}>Can't be blank</span>
                                <span className={`error1 ${validYear ? "error-message" : "block"}`}>Invalid year</span>
                                <span className= {emptyYear ? "empty-message empty-message2" : "block"}>Can't be blank</span>
                            </div>
                        </div>
                        <div className='input-container label2'>
                            <span className='span1'>CVC</span>
                            <input type="text" placeholder='e.g. 123' className= {`input CVC ${validCvc|| emptyCvc ? "input-error" : " "}`} value={cvcChange} minLength={3} maxLength={3} onChange={handleCvcChange} />
                            <span className={validCvc ? "error-message" : "block"}>Invalid CVC</span>
                            <span className= {emptyCvc ? "empty-message" : "block"}>Can't be blank</span>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className='button'>Confirm</button>
                </div>
            </div>
        </div>
            )}     
        </div>
    )

}
export default Content