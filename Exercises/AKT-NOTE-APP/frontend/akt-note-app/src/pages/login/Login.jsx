import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

const Login = () => {
  return (
    <>
      <Navbar/>

      <div>
        <div>
          <form onSubmit={()=> {}} action="">
            <h4 className="text-2xl mb-7">Login</h4>
            <input type="text" placeholder="Email" className="input-box" />
            <button type="submit" className="btn-primary">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{''}
              <Link to='register' className=''>
                Create a new Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
    )
}

export default Login