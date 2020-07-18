
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App';

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
