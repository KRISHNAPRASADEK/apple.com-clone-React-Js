import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../../pages/Signin/Loading";
import ErrorMessage from "../../pages/Signin/ErrorMessage";
import { Redirect, useHistory } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    setRedirect(true);

    history.push("/Signin");
    // Api calling

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/api/users",
        {
          firstName,
          lastName,
          email,
          password,
        },
        config
      );

      setLoading(false);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div class="uk-container uk-container-small">
        <div className="heading-sign">Create Your Apple ID</div>
        <div class="uk-width-1-2@m uk-width-1-1 uk-margin-large-top">
          One Apple ID is all you need to access all Apple services. Already
          have an Apple ID? <a>Find it here</a>
        </div>
        <br />
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <form onSubmit={submitHandler}>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-large uk-width-1-4@m uk-width-1-1 uk-border-rounded"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              value={firstName}
              placeholder="First Name"
              required
            />
            <input
              class="uk-input uk-form-large uk-width-1-4@m uk-width-1-1 uk-border-rounded"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              value={lastName}
              required
            />
          </div>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-width-medium uk-form-large uk-width-1-2@m uk-width-1-1 uk-border-rounded"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              required
            />
          </div>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-width-medium uk-form-large uk-width-1-2@m uk-width-1-1 uk-border-rounded"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              value={password}
              required
            />
          </div>
          <div class="submit uk-margin-medium-top uk-margin-small-bottom">
            <button
              class="button uk-button uk-button-primary uk-button-large uk-width-1-2@m uk-width-1-1 uk-border-rounded"
              placeholder="Large"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
        <div class="uk-margin-large-bottom">
          {/* <a><div class="uk-width-1-2@m uk-width-1-1">
    Forgot your Apple ID or password?
    </div></a>
    <a><div class="uk-width-1-2@m uk-width-1-1">
    Don't have an Apple ID? Create one now.
    </div></a> */}
        </div>
      </div>
      <hr />
      <div class="uk-container uk-container-small">
        <div class="uk-width-1-2@m uk-width-1-1 uk-text-normal">
          Need some help? <a>Chat now</a> or call 1‑800‑MY‑APPLE.
        </div>
      </div>
    </div>
  );
};

export default Signup;
