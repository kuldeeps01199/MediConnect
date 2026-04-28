import  {useState} from 'react'


const Login = () => {
  const [state,setState] = useState('Sign Up');
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [name,setName] =useState("");
  
  const onSubmitHandler = async (event)=>{
    event.preventDefault()
  }

  return (
    // <form>
    //   <div>
    //     <p>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
    //     <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>

    //     <div>
    //       <p>Full Name</p>
    //       <input type="text" onChange={(e)=>setName(e.target.name)} value={name} required />
    //     </div>
    //     <div>
    //       <p>Email</p>
    //       <input type="email" onChange={(e)=>setName(e.target.email)} value={email} required/>
    //     </div>
    //     <div>
    //       <p>password</p>
    //       <input type="password" onChange={(e)=>setName(e.target.password)} value={password}  required/>
    //     </div>
    //     <button>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
    //   </div>
    // </form>
    <form className='min-h-[80vh] flex items-center justify-center'>
  <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-slate-100 rounded-3xl text-slate-600 text-sm shadow-2xl shadow-slate-200 bg-white'>
    
    {/* Heading */}
    <div className='flex flex-col gap-1 mb-2'>
      <p className='text-2xl font-bold text-slate-900'>
        {state === 'Sign Up' ? "Create Account" : "Login"}
      </p>
      <p className='text-slate-500'>
        Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment
      </p>
    </div>

    {/* Full Name Field (Sirf Sign Up mein dikhega) */}
    {state === 'Sign Up' && (
      <div className='w-full'>
        <p className='font-medium mb-1'>Full Name</p>
        <input 
          className='border border-slate-200 rounded-xl w-full p-3 mt-1 outline-emerald-500 transition-all bg-slate-50' 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          placeholder='John Doe'
          required 
        />
      </div>
    )}

    {/* Email Field */}
    <div className='w-full'>
      <p className='font-medium mb-1'>Email</p>
      <input 
        className='border border-slate-200 rounded-xl w-full p-3 mt-1 outline-emerald-500 transition-all bg-slate-50' 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        placeholder='example@gmail.com'
        required
      />
    </div>

    {/* Password Field */}
    <div className='w-full'>
      <p className='font-medium mb-1'>Password</p>
      <input 
        className='border border-slate-200 rounded-xl w-full p-3 mt-1 outline-emerald-500 transition-all bg-slate-50' 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        placeholder='••••••••'
        required
      />
    </div>

    {/* Submit Button */}
    <button className='bg-emerald-600 text-white w-full py-3 rounded-xl text-base font-bold mt-4 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 active:scale-[0.98]'>
      {state === 'Sign Up' ? "Create Account" : "Login"}
    </button>

    {/* Toggle Link */}
    {state === 'Sign Up' ? (
      <p className='text-center w-full mt-2'>
        Already have an account? <span onClick={() => setState('Login')} className='text-emerald-600 underline cursor-pointer font-bold'>Login here</span>
      </p>
    ) : (
      <p className='text-center w-full mt-2'>
        Create a new account? <span onClick={() => setState('Sign Up')} className='text-emerald-600 underline cursor-pointer font-bold'>Click here</span>
      </p>
    )}

  </div>
</form>
  )
}

export default Login
