import React, { Component } from 'react'
import 'react-dropdown/style.css';
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Select World</label>
          <div>
          <select name="world-names" id="dog-names">
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
          </select>
          </div>
        </div>
        <div className="mb-3">
          <label>Select character</label>
          <div>
          <select name="character-names" id="character-names">
          <option value="Batman">Batman</option>
          <option value="Ironman">Ironman</option>
          <option value="Vision">Vision</option>
          <option value="Scarlet">Scarlet</option>
          </select>
          </div>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}