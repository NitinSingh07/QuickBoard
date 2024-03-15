import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const TrainBookingPage = () => {
  // Define state variables for departing and arriving stations, and dates
  const [departingStation, setDepartingStation] = useState("");
  const [arrivingStation, setArrivingStation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  const handleClose = () => {

    setAnchorEl(null);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending data to backend or showing confirmation message
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-blue-500 p-8 font-bold mt-4 mb-4 text-center">
        Search Your Train
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="mb-[1rem] text-[1.4rem] font-bold">
                Departure Station
              </p>
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Select Station
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple >

                    Mumbai_CST
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>

                    Kolkata_Howrah_Junction
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>

                    Chennai_Central
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>

                    Vadodara
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>

                    Delhi_Junction
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>

                    Mumbai_Central
                  </MenuItem>

                </StyledMenu>
              </div>

              {/* <input
              type="text"
              id="departingStation"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={departingStation}
              onChange={(e) => setDepartingStation(e.target.value)}
            /> */}
            </div>
          </div>
          <div>
            <p className="mb-[1rem] text-[1.4rem] font-bold">
              Arrival Station
            </p>
            <div>
              <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Select Station
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>

                  Mumbai_CST
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>

                  Kolkata_Howrah_Junction
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>

                  Chennai_Central
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>

                  Vadodara
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>

                  Delhi_Junction
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>

                  Mumbai_Central
                </MenuItem>

              </StyledMenu>
            </div>

            {/* <input
              type="text"
              id="departingStation"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={departingStation}
              onChange={(e) => setDepartingStation(e.target.value)}
            /> */}
          </div>
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Select Your Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default TrainBookingPage;
