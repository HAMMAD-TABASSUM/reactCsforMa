export const AddMember = (): JSX.Element => {
  return (
    <div className="pt-7">
      <form className="flex flex-col gap-y-6" action="">
        <table className="container-md text-sm text-left text-gray-500">
          <thead className="text-xs border-b text-gray-500 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                School Name
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="pl-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">Marketing</td>
              <td className="px-6 py-4">Marketing</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">$brandon@gmail.com</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">Marketing</td>
              <td className="px-6 py-4">Marketing</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">$brandon@gmail.com</td>
            </tr>
            <tr className="bg-white border-b text-gray-500">
              <td className="px-6 py-4">lhgl</td>
              <td className="px-6 py-4">Marketing</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">$brandon@gmail.com</td>
            </tr>
            <tr className="bg-white text-gray-500">
              <td className="py-4text-gray-500">
                <input
                  className="border-2 py-2.5 rounded-lg outline-none px-3"
                  type="text"
                  placeholder="Full Name"
                />
              </td>
              <td className="py-2.5text-gray-500">
                <input
                  className="border-2 py-2.5 rounded-lg outline-none px-3"
                  type="text"
                  placeholder="Type School Name"
                />
              </td>
              <td className="py-2.5 text-gray-500">
                <input
                  className="border-2 py-2.5 rounded-lg outline-none px-3"
                  type="text"
                  placeholder="Select Role"
                />
              </td>
              <td className="py-2.5 text-gray-500">
                <input
                  className="border-2 py-2.5 rounded-lg outline-none px-3"
                  type="text"
                  placeholder="Type email"
                />
              </td>
              <td className="py-2.5">
                <button className="border-4 font-bold text-2xl border-blue-500 rounded-full flex justify-center items-center w-8 h-8 pb-1">
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-x-7">
          <button className="border-2 w-full py-4 rounded-lg" type="submit">
            Back to District Details
          </button>
          <button
            className="bg-blue py-4 w-full text-white rounded-lg"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
