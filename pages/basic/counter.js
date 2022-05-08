import React from 'react';
import {connect} from 'react-redux';
import {increaseAsync, decreaseAsync} from '@/modules/basic/counter';
import {Counter} from '@/components';

const CounterPage = ({number, increaseAsync, decreaseAsync}) => {
    return (
      <h1>모델 선택, 사진?</h1>
        // <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync}/>
    );
};
const mapStateToProps = state => ({number: state.counter})
const registerActions = {
  increaseAsync, decreaseAsync
}

export default connect( mapStateToProps, registerActions)(CounterPage);


// export default connect(
//     state => ({number: state.counter}),
//     {increaseAsync, decreaseAsync}
// )(CounterPage);