import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const TrainBookingPage = () => {
  const [departingStation, setDepartingStation] = useState("");
  const [arrivingStation, setArrivingStation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(""); // Added state to track menu type (departure or arrival)

  const open = Boolean(anchorEl);

  const handleMenuItemClick = (station) => {
    if (menuType === "departure") {
      setDepartingStation(station);
    } else if (menuType === "arrival") {
      setArrivingStation(station);
    }
    setAnchorEl(null); // Close the menu after selection
  };

  const handleClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-blue-500 p-8 font-bold mt-4 mb-4 text-center">
        Search Your Train
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem]">
            <div>
              <p className="mb-[1rem] text-[1.4rem] font-bold">
                Departure Station
              </p>
              <div>
                <Button
                  id="departure-station-button"
                  aria-controls={open ? "departure-station-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={(e) => handleClick(e, "departure")}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  {departingStation || "Select Station"}
                </Button>
                <StyledMenu
                  id="departure-station-menu"
                  anchorEl={anchorEl}
                  open={open && menuType === "departure"}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => handleMenuItemClick("Sonipat")}
                    disableRipple
                  >
                    Sonipat
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Ambala_City")}
                    disableRipple
                  >
                    Ambala_City
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Ambala_Cant.")}
                    disableRipple
                  >
                    Ambala_Cant.
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Delhi_Junction")}
                    disableRipple
                  >
                    Delhi_Junction
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Anandpur_Sahib")}
                    disableRipple
                  >
                    Anandpur_Sahib
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Una_Himachal")}
                    disableRipple
                  >
                    Una_Himachal
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Hapur")}
                    disableRipple
                  >
                    Hapur
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Gajraula")}
                    disableRipple
                  >
                    Gajraula
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Amroha")}
                    disableRipple
                  >
                    Amroha
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Moradabad")}
                    disableRipple
                  >
                    Moradabad
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Bareilly")}
                    disableRipple
                  >
                    Bareilly
                  </MenuItem>
                  {/* Add more menu items here */}
                </StyledMenu>
              </div>
            </div>
            <div>
              <p className="mb-[1rem] text-[1.4rem] font-bold">
                Arrival Station
              </p>
              <div>
                <Button
                  id="arrival-station-button"
                  aria-controls={open ? "arrival-station-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={(e) => handleClick(e, "arrival")}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  {arrivingStation || "Select Station"}
                </Button>
                <StyledMenu
                  id="arrival-station-menu"
                  anchorEl={anchorEl}
                  open={open && menuType === "arrival"}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => handleMenuItemClick("Sonipat")}
                    disableRipple
                  >
                    Sonipat
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Ambala_City")}
                    disableRipple
                  >
                    Ambala_City
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Ambala_Cant.")}
                    disableRipple
                  >
                    Ambala_Cant.
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Delhi_Junction")}
                    disableRipple
                  >
                    Delhi_Junction
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Anandpur_Sahib")}
                    disableRipple
                  >
                    Anandpur_Sahib
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Una_Himachal")}
                    disableRipple
                  >
                    Una_Himachal
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Hapur")}
                    disableRipple
                  >
                    Hapur
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Gajraula")}
                    disableRipple
                  >
                    Gajraula
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Amroha")}
                    disableRipple
                  >
                    Amroha
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Moradabad")}
                    disableRipple
                  >
                    Moradabad
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("Bareilly")}
                    disableRipple
                  >
                    Bareilly
                  </MenuItem>
                  {/* Add more menu items here */}
                </StyledMenu>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[2rem]">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Select Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 border-solid border-2 border-black focus:ring-indigo-500 focus:border-indigo-500 block px-[0.5rem] py-[0.2rem] shadow-sm sm:text-sm w-[10rem] rounded-md"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" relative left-[42rem] top-[3rem] inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default TrainBookingPage;
