import React, {useState} from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { modelSelect, modelSelectFailure } from '@/modules/basic/model';
import { Model } from '@/components';

const ModelPage = ({}) => {
    const [modelList, setModelList] =useState({
       model:''
    })

    const dispatch = useDispatch()
    // const model_name = ['ysy', 'kang', 'jonadan_ces', 'haylyn', 'khw', 'leetaeyeon']
    
    const { model } = useSelector(state => state.model)
    const onSubmit = (e) => {
       e.preventDefault()
        const { value } = e.target;
        console.log("value", value)
        // console.log("모델네임", model_name[value])
        setModelList({...modelList, model: value})
        console.log("modelList", modelList)
        dispatch(modelSelect(modelList))
        dispatch(window.location.href = "/basic/message")
    }
  return (
    <Model model={model} onSubmit={onSubmit}  />
  );
};

const mapStateToProps = state => ({modelSelected: state.model.modelSelected})
const modelSelectActions = {modelSelect}

export default connect(mapStateToProps, modelSelectActions)(ModelPage)
