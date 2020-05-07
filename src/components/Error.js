import React from "react";
import PropTypes from "prop-types";

const Error = ({ title }) => (
	<p className="alert alert-danger error">{title}</p>
);

Error.propTypes = {
	title: PropTypes.string.isRequired,
};
export default Error;
