import { connect } from 'react-redux';
import ListToDos from './ListToDos';
import toDosActions from './toDosActions';
import selectors from '../app/selectors';

const mstp = state => ({
    toDos: selectors.getToDos(state),
});

// const mdtp = dispatch => ({
//     getToDos: dispatch(toDosActions.FETCH_TO_DOS_START())
// })

const mdtp = {
    getToDos: toDosActions.FETCH_TO_DOS_START,
};


export default connect(mstp, mdtp)(ListToDos);