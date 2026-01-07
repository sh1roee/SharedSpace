import { Link } from 'react-router-dom'

export function SignUpPage() {
  return (
    <>
        <div>
            <h1>Create an Account</h1>

            <form>
                <input type = "email" placeholder = "Enter email"/>
                <input type = "text" placeholder = "Enter username"/>
                <input type = "password" placeholder = "Enter password"/>
                <input type = "password" placeholder = "Confirm password"/>

                <button>Sign Up</button>
            </form>
        </div>

        <div>
            <h3>Already have an account?</h3>

            <Link to = "/login">
              <button>Log In</button>
            </Link>
        </div>
    </>
  );
}