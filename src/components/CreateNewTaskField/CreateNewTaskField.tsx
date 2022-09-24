import React, { FC, memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';
import { useFormik, FormikHelpers as FormikActions } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import styles from './CreateNewTaskField.module.scss';
import { ITodo, INewTaskSchemaTS } from '../../types/types';
import { createNewTodo } from '../../store/actionCreators/todosAC';

type dateTypeJS = Date | Dayjs | null;

const validationSchema: yup.SchemaOf<INewTaskSchemaTS> = yup.object({
  title: yup.string().required('Title is required'),
  text: yup.string().required('Text is required'),
  date: yup.date().required('Date is required'),
});

const CreateNewTaskField: FC = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      date: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: (
      values: INewTaskSchemaTS,
      a: FormikActions<INewTaskSchemaTS>
    ) => {
      // console.log(values);
      a.resetForm();
    },
  });
  const [value, setValue] = useState<dateTypeJS>(new Date());
  const handleChange = (newValue: dateTypeJS) => {
    setValue(newValue);
  };
  const handleSubmit = () => {
    // console.log(
    //   dayjs(value).get('month'),
    //   dayjs(value).get('date'),
    //   dayjs(value).get('year'),
    //   dayjs(value).get('hour'),
    //   dayjs(value).get('minute')
    // );
    // console.log(formik.values.title);
    // console.log(formik.values.text);
    if (/\S/.test(formik.values.title) && /\S/.test(formik.values.text)) {
      const newTodo: ITodo = {
        id: Math.floor(Math.random() * 9999999),
        title: formik.values.title,
        text: formik.values.text,
        date: {
          month: dayjs(value).get('month'),
          date: dayjs(value).get('date'),
          year: dayjs(value).get('year'),
          hour: dayjs(value).get('hour'),
          minute: dayjs(value).get('minute'),
        },
        completed: false,
      };
      dispatch(createNewTodo(newTodo));
      setValue(dayjs(new Date()));
    }
  };
  return (
    <div className={styles.createNewTaskContainer}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{
            width: 7 / 10,
          }}
          variant="outlined"
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          sx={{
            width: 7 / 10,
            marginTop: '10px',
          }}
          variant="outlined"
          id="text"
          name="text"
          label="Text"
          value={formik.values.text}
          onChange={formik.handleChange}
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date and Time picker"
            minDate={new Date()}
            value={value}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                label="Date"
                name="date"
                variant="outlined"
                error={formik.touched.date && Boolean(formik.errors.date)}
                // helperText={formik.touched.date && formik.errors.date}
                sx={{
                  width: 4 / 10,
                  marginTop: '10px',
                }}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{
            marginTop: '20px',
            marginLeft: '10px',
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default memo(CreateNewTaskField);
