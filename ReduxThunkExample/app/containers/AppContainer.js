
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App';

import { getProfileData, login } from '../actions/profile';

const mapStateToProps = (state) => ({
    profileStatus: state.profile.status,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
        getProfileData,
        login,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
