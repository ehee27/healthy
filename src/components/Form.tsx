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
      <div className="rounded p-2 m-2 border-2 border-gray-50">
        <div className="flex rounded p-2 m-2">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              className="p-2 my-2 rounded border-2 text-gray-50 bg-transparent"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <div className="my-3">
              <select onChange={e => setGender(e.target.value)}>
                <option value="">Your Gender</option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </div>
            <div className="my-3">
              <select onChange={e => setAge(e.target.value)}>
                <option value="">Your Age Range</option>
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
            <button
              className={`${exo.className} transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-200 hover:bg-gray-50 hover:text-green-500`}
              type="submit"
            >
              GET RESULTS
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
