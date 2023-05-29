import React from 'react';
// import ReactDOM from "react-dom";
// import { Route, BrowserRouter as Router, NavLink, HashRouter, useHistory, Redirect, Switch } from "./react-router-dom";
import Logo from '../../assets/icon-pln.png';
import Hero from '../../assets/hero.jpg';
import "../../index.css"

const Login = () => {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  return (
    <>

      <div className="flex min-h-full flex-col">
        <div className="grid gap-4 xl:grid-cols-4 sm:grid-cols-0">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="px-2 mx-auto h-25 w-auto"
                src={Logo}
                alt="ICON +"
              />
              <h2 className="px-2 mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {greeting} <br />
                Welcome Back
              </h2>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-2">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                      *  Username
                    </label>
                    <div className="mt-2">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" type="text" placeholder="Username"
                        name="username"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Next
                    </button>
                  </div>
                </form>

                <p className="mt-2 mb-2 text-center text-sm text-gray-500">
                  Or Login
                </p>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login Via SSO
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:col-span-3 sm:float-left'>
            <img src={Hero} alt="Background Plane" className=' h-full w-full object-contain' />
          </div>
        </div>
      </div>
    </>
  )
}
export default Login