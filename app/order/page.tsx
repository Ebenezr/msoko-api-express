import Link from "next/link";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

export default function () {
  const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(!loading);
  }
  const currencies = [
    {
      value: "G4S",
      label: "G4S",
    },
    {
      value: "4NK",
      label: "4NK",
    },
    {
      value: "Door Dash",
      label: "Door Dash",
    },
  ];
  return (
    <section className="flex flex-1 flex-col px-6">
      {/* header */}
      <nav className="my-2 flex justify-between">
        <Link href="/products" className="align-center flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <p className="font-semibold text-primary">Back</p>
        </Link>
        {/* favorite */}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
      </nav>
      {/* your details */}
      <div className="mt-12 w-full">
        <p className="text-lg font-semibold">Your Details</p>
        <TextField
          className=" mt-3 w-full"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          className=" mt-3 w-full"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          className=" mt-3 w-full"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneInTalkIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </div>
      {/* about order */}
      <div className="mt-12 w-full flex-1">
        <p className="text-lg font-semibold">About Order</p>

        <TextField
          className=" mt-3 w-full"
          id="filled-select-currency"
          select
          label="Distributor"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalShippingOutlinedIcon />
              </InputAdornment>
            ),
          }}
          helperText="Please select your distributor"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className="mt-3 w-full"
          id="filled-select-currency"
          select
          label="Payment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PaymentsOutlinedIcon />
              </InputAdornment>
            ),
          }}
          helperText="Please select your payment method"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <LoadingButton
        className="rounded-full"
        style={{ backgroundColor: "#010F8C", color: "#fff" }}
        loading={loading}
        loadingPosition="start"
        variant="contained"
        onClick={handleClick}
      >
        Pay Now
      </LoadingButton>
    </section>
  );
}
