import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import wave from "../assets/img/wave2.png";
import {
  BtnPrimary,
  CheckBox,
  InputBox,
  LocalImage,
  SelectBox,
} from "../components";
import { APIEndpoints } from "../data";

type Props = {};

const Register = (props: Props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [conditionsAgreed, setConditionsAgreed] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    if (
      !name ||
      !gender ||
      !email ||
      !number ||
      !password ||
      !conditionsAgreed
    ) {
      alert("Please fill up all fields");
      return;
    }
    if (confirmPass !== password) {
      alert("Password doesn't match");
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
      role: "student",
      phoneNumber: number,
    };

    const url = process.env.apiUrl + APIEndpoints.registerAPI;

    axios
      .post(url, data)
      .then((data) => {
        if (data.data.status === "success") router.push("/login");
      })
      .catch(function (error) {
        console.log(error.response.data.error);
      });
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-screen relative overflow-hidden">
        <div className="phase2-wave absolute top-0 flex flex-wrap justify-center items-center">
          <LocalImage
            src={wave}
            alt="Hero Section Image"
            layout="fill"
            position="top"
          />
          {/* 
          //* This is the Registration form modal
          */}
          <div className="form-modal z-20 -mt-8">
            <h1 className="text-primaryDark font-semibold text-2xl text-right mx-2">
              x
            </h1>
            <h1 className="text-primaryDark text-xl mx-4">Welcome to Heilo!</h1>
            <div className="mx-9 my-4 flex flex-col items-center">
              <InputBox
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <SelectBox onChange={(e) => setGender(e.target.value)} />
              <InputBox
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <InputBox
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Phone Number"
              />
              <InputBox
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <InputBox
                onChange={(e) => setConfirmPass(e.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
              <div className="flex my-3">
                <CheckBox
                  onChange={(e) => setConditionsAgreed(e.target.checked)}
                />
                <p className="text-xs ml-1 font-semibold text-textSecondary">
                  I agree to the{" "}
                  <span className="text-primaryDark">Terms and Conditions</span>
                </p>
              </div>
              <BtnPrimary
                onClick={handleRegister}
                className="mt-2"
                label="Register"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
