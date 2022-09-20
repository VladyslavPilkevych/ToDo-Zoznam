import React, { FC, memo, useState } from 'react';
import TextField from '@mui/material/TextField';

const CreateNewTaskField: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const typingNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const createNewTaskFn = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    // if (inputValue && selectValueCategorie) {
    //   await todos.add({
    //     task: inputValue,
    //     complete: false,
    //     categorie: selectValueCategorie,
    //   });
    // }
    console.log(inputValue);
    setInputValue('');
  };
  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && inputValue.length !== 0) {
      createNewTaskFn(e);
    }
  };
  return (
    <div>
      <TextField
        autoFocus
        id="filled-basic"
        sx={{
          width: 6 / 10,
        }}
        label="New Task"
        variant="outlined"
        value={inputValue}
        onChange={typingNewTask}
        onKeyPress={handleKeypress}
      />
    </div>
  );
};

export default memo(CreateNewTaskField);
