import { Exo } from 'next/font/google'

const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
})

const Form = ({
  name,
  age,
  gender,
  setName,
  setAge,
  setGender,
  handleSubmit,
}: any) => {
  return (
    <>
      {/* <div className="hero min-h-screen"> */}
      <div className="hero-content flex-col text-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to COGA</h1>
          <p className="py-6">
            We're a group of dudes who love to write code and rap about fitness.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="name"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                onChange={e => setGender(e.target.value)}
                className="input input-bordered bg-white"
              >
                <option value="">select gender</option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <select
                onChange={e => setAge(e.target.value)}
                className="input input-bordered bg-white"
              >
                <option value="">select age range</option>
                <option value="18-25">18 - 25</option>
                <option value="26-35">26 - 35</option>
                <option value="36-45">36 - 45</option>
                <option value="46-55">46 - 55</option>
                <option value="56-65">56 - 65</option>
                <option value="66-75">66 - 75</option>
                <option value="76-85">76 - 85</option>
                <option value="86-95">86 - 95</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleSubmit} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Form
