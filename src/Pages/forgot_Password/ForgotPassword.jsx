import React from "react";
import Footer from "../../components/Footer";

export const ForgotPassword = () => {
  return (
    <div>
        <div className="container-forgot flex flex-col gap-10 pt-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-3xl">Forgot your password? </h1>
                <span className="font-bold">Don’t worry, we got your back!</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
                <form className="w-2/4" action="">
                <input
                    type="text"
                    className="placeholder"
                    placeholder="Enter your email adress to get link"
                />
                </form>
                <button className="w-40 h-20 rounded-3xl font-bold bg-amber-500">Send</button>
            </div>
            <div className="flex flex-col gap-4 pb-20">
                <h3 className="font-bold">
                Click here if you didn’t receive any link <br /> in 2 minutes
                </h3>
                <div className="btn-resend-link">
                    <button className="resend-link w-1/4 h-20 bg-orange-950 rounded-3xl text-white">Resend Link</button>
                </div>
                <div className="time">
                    <span>01:54</span>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  );
};
