import React, { FC, memo, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useFormik, FormikHelpers as FormikActions } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import styles from './CreateNewTaskField.module.scss';

// type dateType = Date | Dayjs | null;
// type dateType = Date | null;
type dateType = Date;

interface newTaskSchemaTS {
  title: string;
  text: string;
  date: dateType;
}

const validationSchema: yup.SchemaOf<newTaskSchemaTS> = yup.object({
  title: yup.string().required('Title is required'),
  text: yup.string().required('Text is required'),
  date: yup.date().required('Date is required'),
});

const CreateNewTaskField: FC = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      //   date: new Date(),
      date: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: (values: newTaskSchemaTS, a: FormikActions<newTaskSchemaTS>) => {
      console.log(values);
      a.resetForm();
      //   alert(JSON.stringify(values, null, 2));
    },
  });

  //   const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //     if (e.code === 'Enter' && inputValue.length !== 0) {
  //       createNewTaskFn(e);
  //     }
  //   };

  const [value, setValue] = useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54')
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    // console.log(newValue);

    // if (newValue) {
    //   return formik.handleChange;
    // }
  };

  const handleSubmit = () => {
    console.log(value);
    setValue(dayjs('2014-08-18T21:11:54'));
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
          }}
          variant="outlined"
          id="text"
          name="text"
          label="Text"
          value={formik.values.text}
          onChange={formik.handleChange}
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
          //   onKeyPress={handleKeypress}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date and Time picker"
            // value={formik.values.date}
            value={value}
            onChange={handleChange}
            // renderInput={(params: any) => <TextField {...params} />}
            renderInput={(params) => (
              <TextField
                label="Date"
                name="date"
                variant="outlined"
                error={formik.touched.date && Boolean(formik.errors.date)}
                // helperText={formik.touched.date && formik.errors.date}
                // fullWidth
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
