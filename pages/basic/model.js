import React, {useState} from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { modelSelect, modelSelectFailure } from '@/modules/basic/model';
import { Model } from '@/components';

const ModelPage = () => {
    const [modelList, setModelList] =useState({
       model:''
    })
    const dispatch = useDispatch()
    const onChange = e => {
      console.log("value", e.target.value)
      setModelList({...modelList, model: e.target.value})
    }

    const {model, modelSelected} = useSelector(state => state.model)
    const onSubmit = e => {
        e.preventDefault()
        console.log("modelList", modelList)
        dispatch(modelSelect(modelList))
    }
  return (
    <Model onChange={onChange} onSubmit={onSubmit}  />
  );
};

const mapStateToProps = state => ({modelSelected: state.model.modelSelected})
const modelSelectActions = {modelSelect}

export default connect(mapStateToProps, modelSelectActions)(ModelPage)
