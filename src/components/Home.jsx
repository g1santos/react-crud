import React from 'react';
import './Home.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';

export default function () {
    return  (
        <Router>
            <div className='container'>
                <Link to={'./Create'}><Button>Create</Button></Link>
                <Link to={'./Read'}><Button>Read</Button></Link>
                <Link to={'./Update'}><Button>Update</Button></Link>
            </div>
            <Routes>
                <Route path='/Create' element={<Create/>}/>
                <Route path='/Read' element={<Read/>}/>
                <Route path='/Update' element={<Update/>}/>
                <Route path='/Delete' element={<Delete/>}/>
            </Routes>
        </Router>
        
    )
}