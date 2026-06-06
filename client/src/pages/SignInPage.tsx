import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { useState, FormEvent } from "react";
import { useAuth } from "../components/context/AuthContext";
import { toast } from "react-toastify";
import Logo from "../assets/logo1.png";

export default function SignInPage() {
  const auth = useAuth();
  const [email, setEmail] = useState<InputState>({ value: "", hasError: false });
  const [password, setPassword] = useState<InputState>({ value: "", hasError: false });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    toast.dismiss();
    let hasError = false;

    //Pattern matching
    if (!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      toast.error("Please enter a valid email address", {
        position: "bottom-right",
      });
      setEmail((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }

    if (!password.value.match(/[\S\s]+[\S]+/)) {
      toast.error("Please enter a valid password", {
        position: "bottom-right",
      });
      setPassword((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }

    if (hasError) return;

    auth?.APIFunctions.SignIn(email.value, password.value);
  }

  return (
    // <section className="min-h-screen mx-auto container flex flex-col justify-center items-center">
    <section className="min-h-screen flex">
      <div className="hidden md:flex md:w-1/2 bg-background flex-col items-center justify-center gap-8 p-8 text-center">
        <div className="max-w-sm space-y-8">
          <img src={Logo} alt="SkillForge" className="h-80 w-80 mx-auto" />
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-white leading-tight">
              Build Skills.
              <br />
              Stay Consistent.
            </h1>
            <p className="text-2xl font-medium text-white/80">
              Forge Your Future.
            </p>
          </div>
          <p className="text-sm italic text-white/60">
            "Small daily improvements lead to remarkable results."
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-8 min-h-screen p-4 md:p-8 bg-background">
          <h1 className="text-2xl md:text-4xl font-bold">Sign in to your account</h1>
        <form onSubmit={handleSubmit} action='' className="p-2 md:p-8 flex flex-col gap-4 w-full">
          <Input
            className="w-full"
            placeHolder="example@website.com"
            value={email.value}
            hasError={email.hasError}
            onChange={(e) => setEmail({ value: e.target.value, hasError: false })}
          >
            Email
          </Input>
          <Input
            className="w-full"
            placeHolder="Enter Your Password"
            type="password"
            value={password.value}
            hasError={password.hasError}
            onChange={(e) => setPassword({ value: e.target.value, hasError: false })}
          >
            Password
          </Input>
          <Button className="mt-8" color="primary">Sign in</Button>
          <h1 className="text-center text-text/70">Don't have an account? <Link className="text-accent" to='/signup'>Sign up</Link></h1>
        </form>
      </div>
    </section>
  )
}