import React, {useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Send} from '@/components';

import { dispatchRequest } from '@/modules/basic/send';

const SendPage = ({}) => {

    const [send, setSend] = useState({name: '', email: ''})
    const dispatch = useDispatch()

    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        console.log("name", name)
        console.log("vlaue", value)
        setSend({
            ...send,
            [name]: value
        })
    }
    // const {isdispatched, email, name} = useSelector(state => state.send)
    const onSubmit = e => {
        e.preventDefault()
        alert('이메일,펫정보: '+JSON.stringify(send))
        dispatch(dispatchRequest(send))   
    }

    return (
        <Send onChange={onChange} onSubmit={onSubmit}  />
        );
    };
    const mapStateToProps = state => ({ isdispatched: state.send })
    const dispatchActions = {dispatchRequest}
    
    export default connect(mapStateToProps, dispatchActions)(SendPage)
    