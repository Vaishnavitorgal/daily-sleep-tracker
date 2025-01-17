import React, { useState } from "react";
import "./Home.css";
import Button from "@mui/material/Button";
// import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import {makeStyles} from "@material-ui/core/styles";
import {
  AreaChart,
  Brush,
  Area,
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import dayjs from "dayjs";
// import moment from "moment ";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const data = [
  {
    name: "Page A",
    uv: 40,
    // pv: 24,
    amt: 94,
  },
  {
    name: "Page B",
    uv: 30,
    // pv: 13,
    amt: 25,
  },
  {
    name: "Page C",
    uv: 35,
    // pv: 98,
    amt: 45,
  },
  {
    name: "Page D",
    uv: 31,
    // pv: 39,
    amt: 20,
  },
  {
    name: "Page E",
    uv: 10,
    // pv: 48,
    amt: 51,
  },
  {
    name: "Page F",
    uv: 23,
    // pv: 38,
    amt: 60,
  },
  {
    name: "Page G",
    uv: 10,
    // pv: 43,
    amt: 21,
  },
];

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const modal = {
    width: "100vw",
  };

  const [selectedDate, setSelectedDate] = useState();
  console.log({selectedDate});

  const [selectedTime1, setSelectedTime1] = useState(null);
  console.log( selectedTime1 );
  const [selectedTime2, setSelectedTime2] = useState(null);
  console.log( selectedTime2 );

  const handleTimeChange1 = (newValue) => {
    const selectedTime = dayjs(newValue).format("HH:mm");
    setSelectedTime1(selectedTime);
  };

  const handleTimeChange2 = (newValue) => {
    const selectedTime = dayjs(newValue).format("HH:mm");
    setSelectedTime2(selectedTime);
  };
    // const handleDateChange {
    //   setSelectedDate(event.target.value);
    //   const formattedDate = date.toISOString().split('T')[0];
    // };

  return (
    <>
      <div className="main">
        <div className="container">
          <p className="title">Daily Sleep Tracker</p>

          <div className="add-btn">
            <div>
              <Button
                variant="contained"
                className="new-btn1"
                startIcon={<AddIcon />}
                onClick={handleClickOpen}
                sx={{
                  backgroundColor: "#5795FA",
                  borderRadius: 50,
                  fontFamily: "Inter, sans-serif",
                }}
             >
                New Entry
              </Button>


              <BootstrapDialog
                style={modal}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  <strong> Fill Your Details</strong>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Select Date"
                        value={selectedDate}

                        onChange={(val)=>{
                          setSelectedDate(val)                          
                        }}
                        format="YYYY-MM-DD"



                        // renderInput={(params) => (
                        //   <TextField {...params} inputProps={{ ...params.inputProps, pattern: '\\d{4}-\\d{2}-\\d{2}' }} />
                        // )}
                        // inputFormat="yyyy-MM-dd"
                      />
                    </DemoContainer>
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="Sleep time"
                        value={selectedTime1}
                        // renderInput={(params) => <TextField {...params} />}
                        onChange={(newValue) => {
                          handleTimeChange1(newValue);
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {/* <DemoContainer components={["TimePicker"]}> */}
                      <TimePicker
                        label="Wake up time"
                        // renderInput={(params) => <TextField {...params} />}
                        value={selectedTime2}
                        onChange={(newValue) => {
                          handleTimeChange2(newValue);
                        }}
                      />
                    {/* </DemoContainer> */}
                  </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5795FA",
                      borderRadius: 5,
                      fontFamily: "Inter, sans-serif",
                    }}
                    autoFocus
                    onClick={handleClose}
                  >
                    Save
                  </Button>
                </DialogActions>
              </BootstrapDialog>

              </div>
          </div>

{/* <button type="button" className="text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button> */}
















  


  
           

          <div className="statistics">
            <div className="duration">
              <div className="duration-title">
                <p className="sleep-title">Sleep Duration</p>
              </div>
              <div className="duration-graph">
                <AreaChart
                  width={320}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <XAxis
                    dataKey="amt"
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis dataKey="uv" axisLine={false} tickLine={false} />
                  {/* domain={[0, 50]} */}
                  {/* <Tooltip /> */}
                  {/* <Brush dataKey="date" data={data} /> */}
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#ccdbef"
                  />
                </AreaChart>
              </div>
            </div>

            <div className="stats">
              <div className="stats-title">
                <p className="sleep-title">Sleep Stats</p>
              </div>
              {/* <div className="stats-table"> */}
                <div className="container-table">
                <table className="main-table">
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Time of sleep</th>
                      <th>Wake up time</th>
                      <th>Sleep duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                    <tr>
                    <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                    <tr>
                    <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>

                    <tr>
                    <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>

                    <tr>
                    <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>

                    <tr>
                    <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                    <tr>
                    <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
