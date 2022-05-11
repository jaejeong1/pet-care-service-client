import React, {useState} from 'react';
import { useDispatch, connect } from 'react-redux';
import { registerRequest, unregisterRequest } from '@/modules/auth/register';
import { Register } from '@/components';

const RegisterPage = () => {
    const [user, setUser] =useState({
        email:'', name:'', password:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        console.log("name", name)
        // console.log("e", e.target)
        // setUser({...user,[name]: value})
        setUser({...user, [name]: value})
        console.log("user1", user)
    }
    const onSubmit = e => {
        e.preventDefault()
        console.log("user2", user)
        alert('회원가입정보: '+JSON.stringify(user))
        dispatch(registerRequest(user))
    }
  return (
    <Register onChange={onChange} onSubmit={onSubmit}  />
  );
};

const mapStateToProps = state => ({ isRegisterd: state.register.isRegisterd })
const registerActions = {registerRequest, unregisterRequest}

export default connect(mapStateToProps, registerActions)(RegisterPage)
/*
export default connect(
  state => ({
    user: state.user
  }),
  { 
    userRegister
  }
)(RegisterPage);*/