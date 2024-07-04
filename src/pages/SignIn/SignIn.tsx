import { TextInput } from "@components/Form";
import GetAppLink from "@components/GetAppLink";
import MemorizedInstagramLogo from "@components/Icons/Logo";
import useImageURL from "@hooks/useImageURL";
import { Form, Formik } from "formik";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Meta from "./Meta";
import { allImageNames, coverImageNames } from "./constants";
import "./styles.scss";
import { post } from "@utils/fetchApi";

type SignInValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const urls = useImageURL(allImageNames);

  const handleRedirect = () => {
    // Send them back to the page they tried to visit when they were
    // redirected to the login page. Use { replace: true } so we don't create
    // another entry in the history stack for the login page.  This means that
    // when they get to the protected page and click the back button, they
    // won't end up back on the login page, which is also really nice for the
    // user experience.
    navigate(from, { replace: true });
  };

  const handleSignIn = (values: SignInValues) => {
    post("/login", values).then((res) => {
      if (res.token) {
        console.log("sign in successful");
        console.log(auth.currentUser);
        auth.currentUser
          ?.getIdToken(true)
          .then((token) => {
            console.log(token);
          })
          .catch((error) => {
            console.log(error);
          });
        // handleRedirect();
      }
    });
  };

  return true ? (
    <section className="min-h-screen flex-col flex flex-grow justify-center">
      <>
        <main className="bg-primary-background flex-col flex flex-grow order-4">
          <article className="w-full mt-8 flex shrink-0 flex-row ml-auto justify-center flex-grow">
            <div
              id="home-phones"
              style={{
                backgroundImage: `url(${urls["home-phones"]})`,
              }}
              className="mb-3 mr-8 basis-[381px] bg-top h-[581px] self-center"
            >
              <div className="relative mt-[27px] ml-[114px]">
                {coverImageNames.map((image) => (
                  <img
                    key={image}
                    className="cover-image absolute inset-0 w-[250px] h-[538px] opacity-0 transition-opacity duration-1000 ease-in-out object-cover"
                    id={image}
                    src={urls[image]}
                  />
                ))}
              </div>
            </div>
            <section className="flex flex-col justify-center">
              <div className="min-w-[350px] border justify-center flex flex-col px-10 h-fit py-[10px]">
                <MemorizedInstagramLogo className="self-center mt-9 mb-3" />
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    password: Yup.string()
                      .min(8, "Must be at least 8 characters")
                      .required("Required"),
                  })}
                  onSubmit={({ email, password }) => {
                    // signInWithEmailAndPassword(auth, email, password)
                    //   .then((userCredential) => {
                    //     const { user } = userCredential;
                    //     console.log(user.stsTokenManager);
                    //     window.alert(`Hello ${user.email}`);
                    //     sessionStorage.setItem(
                    //       "accessToken",
                    //       user.stsTokenManager.accessToken,
                    //     );
                    //     navigate("/");
                    //   })
                    //   .catch((error) => {
                    //     const errorCode = error.code;
                    //     const errorMessage = error.message;
                    //     window.alert(
                    //       "Something went wrong!" +
                    //         errorCode +
                    //         " " +
                    //         errorMessage,
                    //     );
                    //   });
                    handleSignIn({ email, password });
                  }}
                >
                  {({ isValid, dirty }) => (
                    <Form className="mt-6 flex flex-col gap-y-2">
                      <TextInput
                        label="Phone number, username, or email"
                        name="email"
                        type="text"
                        required
                        showError={false}
                      />
                      <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        required
                        showError={false}
                      />
                      <button
                        disabled={!(isValid && dirty)}
                        className={`w-full mt-2 py-[7px] bg-button-primary rounded-lg text-white font-semibold text-[13px] ${!(isValid && dirty) ? `opacity-70` : ""}`}
                        type="submit"
                      >
                        Log in
                      </button>
                    </Form>
                  )}
                </Formik>
                <div className="flex justify-center items-center mt-[14px] mb-5">
                  <div className="h-[1px] bg-separator flex-grow"></div>
                  <span className="uppercase mx-4 text-[13px] font-semibold text-secondary">
                    or
                  </span>
                  <div className="h-[1px] bg-separator flex-grow"></div>
                </div>

                <button className="relative inline-block p-0 text-center">
                  <span
                    style={{
                      backgroundImage: `url(${urls.multiicon})`,
                    }}
                    className="inline-block bg-no-repeat bg-[-414px_-259px] h-4 w-4 mr-2 align-middle"
                  />
                  <span className="text-facebook text-primary-size font-semibold text-center align-bottom">
                    Log in with Facebook
                  </span>
                </button>

                <a href="#" className="no-underline text-center mt-3 mb-[10px]">
                  <span className="text-primary-small text-link">
                    Forgot password?
                  </span>
                </a>
              </div>
              <div className="min-w-[350px] px-10 h-fit items-center border border-separator rounded-[1px] flex my-[10px] py-[10px]">
                <p className="text-primary-text text-primary-size m-[15px] text-center flex-grow">
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <span className="font-semibold text-button-primary">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
              <GetAppLink />
            </section>
          </article>
        </main>
        <Meta />
      </>
    </section>
  ) : (
    <section className="min-h-screen flex-col flex flex-grow justify-center items-center">
      <img
        src="icon.png"
        className="flex justify-center items-center w-[75px] h-[75px]"
        alt="icon"
      />
    </section>
  );
};

export default SignIn;
