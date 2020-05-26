import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions";

export const AddedFeature = props => {
    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
            {props.feature.name}
        </li>
    );
};

function mapStateToProps(state) {
    return {
        featureReducer: state.featureReducer,
    };
}

export default connect(
    mapStateToProps,
    { removeFeature }
)(AddedFeature);