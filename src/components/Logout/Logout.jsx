import React, {useEffect} from "react";
import {connect} from "react-redux";
import {logout} from "../../store/actions/auth";
import {Redirect} from "react-router-dom";

const Logout = props => {
    //function Logout(props) {}
    useEffect(() => {
        props.logout();
    },[]);

    return <Redirect to={"/"}/>;
};

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    };
}

export default connect(null, mapDispatchToProps)(Logout);
