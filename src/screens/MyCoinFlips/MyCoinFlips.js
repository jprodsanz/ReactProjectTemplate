import React from 'react'
// import { Container } from 'react-bootstrap';
// import { Button, Card, Accordion,Badge } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
// import notes, { } from "../../data/notes";
import MyCoin from '../../components/MyCoin';

const MyCoinFlips = () => {
    return (
        <MainScreen title='Welcome Back...'>
            <div className="App">
                <MyCoin />
            </div>
    </MainScreen>
        
);
};

export default MyCoinFlips;