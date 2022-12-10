import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Login({ children, home }) {
  return (
    <div className="form-signin w-50 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <div>Email address</div>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <div>Password</div>
        </div>

        <div className="checkbox mb-3">
          <div>
            <input type="checkbox" value="remember-me" /> Remember me
          </div>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  )
};
