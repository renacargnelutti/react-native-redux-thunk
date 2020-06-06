
// import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../../App';

import { getPageList } from '../actions/pageList';

const mapStateToProps = (state) => ({
    pageList: state.pageList.pageList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
        getPageList,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
