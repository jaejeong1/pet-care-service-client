import React, {useState} from 'react';
import { useDispatch, connect } from 'react-redux';
import { modelselect1 } from '@/modules/basic/model';
import { Model } from '@/components';

const ModelPage = () => {
    const [modelList, setModelList] =useState({
       model:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{model, value} = e.target;
        console.log("model", model)
        setModelList({...modelList, [model]: value})
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch(modelselect1(modelList))
    }
  return (
    <Model onChange={onChange} onSubmit={onSubmit}  />
  );
};

const mapStateToProps = state => ({model: state.model})
const modelSelectActions = {modelselect1}

export default connect(mapStateToProps, modelSelectActions)(ModelPage)
