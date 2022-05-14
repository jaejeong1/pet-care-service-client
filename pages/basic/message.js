import {increaseAsync, decreaseAsync} from '@/modules/basic/model';
import {connect} from 'react-redux';
import {Message} from '@/components';

//TODO: 작업진행중, 미완성
const MessagePage = ({number, increaseAsync, decreaseAsync}) => {

    return (
        <>
         <Message />
      </>
    );
};


const mapStateToProps = state => ({number: state.counter})
const registerActions = {
  increaseAsync, decreaseAsync
}

export default connect( mapStateToProps, registerActions)(MessagePage);


// export default connect(
//     state => ({number: state.counter}),
//     {increaseAsync, decreaseAsync}
// )(CounterPage);