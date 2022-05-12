import React, {useState} from 'react';
import { useDispatch, connect } from 'react-redux';
import { modelSelect, modelSelectFailure } from '@/modules/basic/model';
import { Model } from '@/components';

const ModelPage = () => {
    const [modelList, setModelList] =useState({
       model:''
    })
    const dispatch = useDispatch()
    // const onChange = e =>{
    //     e.preventDefault()
    //     const{model, value} = e.target;
    //     console.log("model", model)
    //     setModelList({...modelList, [model]: value})
    // }

    const {model, modelSelected} = useSelector(state => state.model)
    const onSubmit = e => {
        e.preventDefault()
        const{model, value} = e.target;
        console.log("model", model)
        setModelList({...modelList, [model]: value})
        dispatch(modelSelect(modelList))
    }
  return (
    <Model onChange={onChange} onSubmit={onSubmit}  />
  );
};

const mapStateToProps = state => ({modelSelected: state.model.modelSelected})
const modelSelectActions = {modelSelect}

export default connect(mapStateToProps, modelSelectActions)(ModelPage)
