import React, {useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { scenelinkRequest } from '@/modules/basic/send';
import {SceneLink} from '@/components';

const LinkPage = () => {
    
    return (
        <SceneLink />
    );
};

const mapStateToProps = state => ({ link: state.scenlink })
const linkRequestActions = {scenelinkRequest}
    
export default connect(mapStateToProps, linkRequestActions)(LinkPage)