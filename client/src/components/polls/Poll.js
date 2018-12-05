import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Poll = ({ title, options }) => {
  const optionsItem = options.map(option => {
    return <li key={option._id}>{option.name}</li>;
  });

  return (
    <Fragment>
      {title}
      <ul>
        {optionsItem}
      </ul>
    </Fragment>
  );
};

Poll.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default Poll;