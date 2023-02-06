import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Divider from "@mui/material/Divider";

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
export default function () {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(!loading);
  }
  return (
    <section className="flex flex-1 flex-col px-6">
      {/* header */}
      <nav className="my-2 flex justify-between">
        <Link href="/order" className="align-center flex gap-2 ">
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
      {/* 1st section */}

      <TextField
        className=" my-3 w-full"
        id="filled-select-currency"
        select
        placeholder="Choose payment option"
        value="MPesa on Delivery"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PaymentsOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {/*  */}
      <div className="width-full my-3  rounded-lg border-[0.5pt] border-neutral-300 px-4 py-3">
        <p>M-Pesa</p>
        <small>Enter your M-Pesa account details</small>
        <TextField
          className=" mt-3 w-full"
          id="input-with-icon-textfield"
          placeholder="Mobile Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneInTalkIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          className=" mt-3 w-full"
          id="input-with-icon-textfield"
          placeholder="Email Address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </div>
      <div className="flex-1"></div>
      <div className="my-3 flex flex-col justify-center text-center">
        <small>Available payment methods 🔒</small>
        {/* icons */}
        <div className="mt-3 mb-4 flex justify-center gap-3">
          <span>Mpesa</span>
          <span>VISA</span>
          <span>Master card</span>
        </div>
        <Divider />
        <div className="flex justify-between px-4 py-2 text-neutral-500">
          <p>Total(Inc.VAT)</p>
          <p>KES 345.00</p>
        </div>
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
