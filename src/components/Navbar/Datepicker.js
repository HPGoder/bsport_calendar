import 'date-fns';
import {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function Datepicker({dates, handleDateChange}) {

  const [selectedDate, setSelectedDate] = useState(new Date(dates[0]));

  const handleDateChanges = (date) => {
    setSelectedDate(date);
  };

  useEffect( () => {
     handleDateChange(selectedDate) 
  },[handleDateChange, selectedDate]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Selected an date"
          value={selectedDate}
          onChange={handleDateChanges}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
