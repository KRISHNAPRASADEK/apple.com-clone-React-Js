import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Api calling
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div class="uk-container uk-container-small">
        <div className="heading-sign">Please sign in.</div>

        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}

        <form onSubmit={submitHandler}>
          <div class="uk-margin-large-top">
            <input
              class="uk-input uk-form-width-medium uk-form-large uk-width-1-2@m uk-width-1-1 uk-border-rounded"
              type="text"
              placeholder="Apple ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-width-medium uk-form-large uk-width-1-2@m uk-width-1-1 uk-border-rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="uk-width-1-2@m uk-width-1-1">
            Your Apple ID is the email address you use to sign in to iTunes, the
            App Store, and iCloud.
          </div>
          <div class="button uk-margin-medium-top uk-margin-small-bottom">
            <button
              class="submit uk-button uk-button-primary uk-button-large uk-width-1-2@m uk-width-1-1 uk-border-rounded"
              placeholder="Large"
            >
              Sign in
            </button>
          </div>
        </form>
        <div class="uk-margin-large-bottom">
          <a>
            <div class="uk-width-1-2@m uk-width-1-1">
              Forgot your Apple ID or password?
            </div>
          </a>
          <a>
            <div class="uk-width-1-2@m uk-width-1-1">
              Don't have an Apple ID?<Link to="/Signup">Create one now</Link>
            </div>
          </a>
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

export default Signin;
