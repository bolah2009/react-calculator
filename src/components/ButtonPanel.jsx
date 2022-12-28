import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from '../css/modules/ButtonPanel.module.css';

const buttonsLabel = [
  { group: ['AC', '+/-', '%', '÷'], id: 'group-one' },
  { group: ['7', '8', '9', 'X'], id: 'group-two' },
  { group: ['4', '5', '6', '-'], id: 'group-three' },
  { group: ['1', '2', '3', '+'], id: 'group-four' },
  { group: ['0', '.', '='], id: 'group-five' },
];

const ButtonPanel = ({ clickHandler }) => {
  const renderButtonGroup = ({ group, id, key }) => {
    const buttonGroups = group.map((label, index) => (
      <Button
        key={label}
        color={index < group.length - 1 ? 'lightgrey' : 'orange'}
        name={label}
        isWide={label === '0'}
        handleClick={() => clickHandler(label)}
      />
    ));
    return (
      <div key={key} className={`d-flex as-c ${styles['button-group']} ${id}`}>
        {buttonGroups}
      </div>
    );
  };

  const buttonPanel = buttonsLabel.map(({ group, id }) =>
    renderButtonGroup({ group, id, key: id }),
  );

  return buttonPanel;
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
