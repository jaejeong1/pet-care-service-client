import React, {useState} from 'react';
import {sceneRegister} from '@/modules/basic/message';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Message} from '@/components';

//TODO: 작업진행중
const MessagePage = () => {

  const [message, setMessage] = useState({
    food: '', play: '', emotion:'', text:''
  })

  const dispatch = useDispatch()

  const onChange = e => {
    e.preventDefault()
    const {name, value} = e.target;
    console.log("value, name", value, name)
    setMessage({
        ...message,
        [name]: value
    })
}

  const onSubmit = (e) => {
    e.preventDefault()
     // TODO: button클릭시 value를 받아오는 법???
    //  setMessage({...message, [name]: value})
     console.log("message", message)
     dispatch(sceneRegister(message))
}

 const onDelete = (e) => {
  e.preventDefault()
   const { name, value } = e.target;
   console.log("value, name", value, name)
   setMessage({...message, text:''})
   console.log("message", message)
   dispatch(sceneRegister(message))
  
}

    return (
        <>
         <Message onChange={onChange} onSubmit={onSubmit} onDelete={onDelete}/>
      </>
    );
};


const mapStateToProps = state => ({isregistered : state.message })
const registerActions = {
  sceneRegister
}

export default connect( mapStateToProps, registerActions)(MessagePage);


