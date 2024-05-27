import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const handelProfileSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const nationality = form.nationality.value;
    const phonenumber = form.phonenumber.address;
    const address = form.address.value;

    const addAddress = {
      email,
      nationality,
      phonenumber,
      address,
    };
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addAddress),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("API ERROR");
        }
        return res.json();
      })
      .then((data) => {
        if (!!data) {
          toast.success("Successfully Added User Information");
          form.reset();
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div className="">
      <div className="avatar online">
        <div className="w-40 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <h1 className="text-xl">{user?.displayName}</h1>

      <form onSubmit={handelProfileSubmit}>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full"
              defaultValue={user?.email}
              disabled
            />
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Nationality</span>
            </div>
            <input
              type="text"
              name="nationality"
              placeholder="Enter Nationality"
              className="input input-bordered w-full "
            />
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <input
              type="text"
              placeholder="Enter Phone Number"
              name="phonenumber"
              className="input input-bordered w-full "
            />
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Address</span>
            </div>
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address"
              className="input input-bordered w-full "
              required
            />
          </label>
        </div>
        <div className="flex justify-center my-5">
          <button className="btn btn-neutral btn-outline  btn-sm">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
