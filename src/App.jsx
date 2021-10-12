import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="col-lg-6">
        <div className="row px-3">
          
          <label className="mb-1">
            <h6 className="mb-0 text-sm">Email Address</h6>
          </label>
          <input
            className="mb-4"
            type="text"
            name="email"
            placeholder="Enter a valid email address"
          />
        </div>
        <div className="row px-3">
          
          <label className="mb-1">
            <h6 className="mb-0 text-sm">Password</h6>
          </label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>
        <div className="row px-3 mb-4">
          <div className="custom-control custom-checkbox custom-control-inline">
            <input
              id="chk1"
              type="checkbox"
              name="chk"
              className="custom-control-input"
            />
            <label for="chk1" className="custom-control-label text-sm">
              Remember me
            </label>
          </div>
          <a href="#" className="ml-auto mb-0 text-sm">
            Forgot Password?
          </a>
        </div>
        <div className="row mb-3 px-3">
          
          <button type="submit" className="btn btn-blue text-center">
            Login
          </button>
        </div>
        <div className="row mb-4 px-3">
          
          <small className="font-weight-bold">
            Don't have an account? <a className="text-danger ">Register</a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
