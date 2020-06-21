import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
/*
Will have a pin and archive functionality
Will have scheduling functionality
*/

const useTextInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [value, setValue, (event) => setValue(event.target.value)];
};
const useCheckboxInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [value, (event) => setValue(event.target.value)];
};
const TodoItem = ({ todo, onClick }) => {
  const [value, setValue, inputChange] = useTextInputValue('');
  const [isChecked, onChecked] = useCheckboxInputValue(false);
  const [pinned, onPinned] = useCheckboxInputValue(false);
  const [archived, onArchived] = useCheckboxInputValue(false);

  useEffect(() => setValue(todo), []);

  return (
    <div className="flex todo-item items-center">
      <div className="checkbox-container">
        <input
          onClick={(event) => {
            onClick();
            onChecked(event.target.value);
          }}
          className="checkbox"
          type="checkbox"
          name="todo"
          id="todo"
        />
        <label className="flex checkbox-label" htmlFor="todo">
          {value}
        </label>
      </div>
      <label className="flex" htmlFor="archive">
        <input
          className="checkbox"
          type="checkbox"
          name="archive"
          id="archive"
        />
      </label>
    </div>
  );
};
TodoItem.defaultProps = {
  todo: '',
  onClick: () => {},
};
TodoItem.propTypes = {
  todo: PropTypes.string,
  onClick: PropTypes.func,
};

export default TodoItem;
