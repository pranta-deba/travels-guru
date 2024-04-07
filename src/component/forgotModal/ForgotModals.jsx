import { NavLink } from "react-router-dom";

const ForgotModals = () => {
  const handleForgot = () => {
    const email = document.getElementById("forgotEmail").value;
    console.log(email);
  };
  return (
    <>
      <NavLink
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="text-[#F9A51A] underline"
      >
        Forgot Your Password
      </NavLink>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box space-y-3">
          <h3 className="font-bold text-lg">Forgot Password!</h3>
          <input
            id="forgotEmail"
            type="text"
            placeholder="email"
            className="w-full input input-bordered"
            required={false}
          />
          <button onClick={handleForgot} className="btn bg-yellow-500">
            Forgot
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ForgotModals;
