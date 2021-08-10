import {useState} from 'react';


import Model from './Model';
import Backdrop from './Backdrop';
import { func } from 'prop-types';

function Todo(props){
    const [modelIsOpen, setModelOpen ] = useState(false);     

    function deleteHandler() {
        setModelOpen(true);

    }

    function closeModelHandler(){
        setModelOpen(false);
    }

    return(
          <div className='card'>
            <h2>{props.text}</h2>
            <div className='action'>
              <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modelIsOpen &&  <Model onCancel={closeModelHandler} onConfirm={closeModelHandler}/>}
            {modelIsOpen &&  <Backdrop onClick={closeModelHandler}/>}

          </div>
    )
}

export default Todo;