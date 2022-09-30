import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import AutohideExample from './toast';
const Sidebar = ({ time }) => {
    const [breaktime, Setbreak] = useState(15);
    useEffect(() => {
        let y=localStorage.getItem('break-time');
        if(y)
        {
            Setbreak(y);
        }
    }, []);
    

    let newbreaktime;

    const SetbreakTime = x => {
        newbreaktime = x;
        Setbreak(newbreaktime);
        localStorage.setItem('break-time', x);
    }


    return (
        <div className='sidebar'>
            <div className='user-info'>
                <img src="logo192.png" alt="" />
                <div>
                    <h1>Zahid Hossain</h1>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Sydney, Australia</p>
                </div>
            </div>
            <div className="user-health">
                <div>
                    <div className='hp'>
                        <h1>75</h1>
                        <p>kg</p>
                    </div>
                    <p>Weight</p>
                </div>
                <div>
                    <h1>6.5</h1>
                    <p>Height</p>
                </div>
                <div>
                    <div className='hp'>
                        <h1>25</h1>
                        <p>yrs</p>
                    </div>
                    <p>Age</p>
                </div>
            </div>
            <h2>Add A Break</h2>
            <div className='break-btn'>
                <button onClick={() => SetbreakTime(10)}>10s</button>
                <button onClick={() => SetbreakTime(20)}>20s</button>
                <button onClick={() => SetbreakTime(30)}>30s</button>
                <button onClick={() => SetbreakTime(40)}>40s</button>
                <button onClick={() => SetbreakTime(50)}>50s</button>
            </div>
            <h2>Exercise Details</h2>
            <div className='time'>
                <h2>Exercise time</h2>
                <p><span>{time}</span> minutes</p>
            </div>
            <div className='time br-time'>
                <h2>Break time</h2>
                <p>{breaktime} seconds</p>
            </div>
            <AutohideExample></AutohideExample>
        </div>
    );
};

export default Sidebar;