import { TextInput } from "@components/Form";
import GetAppLink from "@components/GetAppLink";
import MemorizedInstagramLogo from "@components/Icons/Logo";
import { getAppImages, multiIconImage } from "@constants/images";
import useImageURL from "@hooks/useImageURL";
import Meta from "@pages/SignIn/Meta";
import { saveUser } from "@redux/slices/authSlice";
import { get, post } from "@utils/fetchApi";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

type SignupValues = {
  email: string;
  fullName: string;
  userName: string;
  password: string;
};

const SignUp = () => {
  const { t } = useTranslation();
  const urls = useImageURL([...getAppImages, multiIconImage]);

  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (values: SignupValues) => {
    post("/register", values).then((res) => {
      if (res.token) {
        console.log("sign up successful");
        navigate("/");
      }
    });
  };

  return (
    <main>
      <section className="min-h-[95vh] flex flex-col items-center">
        <div className="flex flex-col justify-center items-center border max-w-[350px] mt-[12px] py-[10px] px-[40px]">
          <MemorizedInstagramLogo className="self-center mt-9 mb-3" />
          <div className="text-center mb-[10px]">
            <span className="text-base font-semibold break-words text-secondary leading-5">
              {t("signupPage.description")}
            </span>
          </div>

          <button className="w-full p-0 text-center bg-button-primary hover:bg-primary border-none rounded-lg py-[7px] px-4 text-primary-size text-white box-border my-2">
            <span
              style={{
                backgroundImage: `url(${urls.multiicon})`,
              }}
              className="relative inline-block bg-no-repeat bg-[-414px_-300px] h-4 w-4 mr-2 top-[2px]"
            />
            <span className="text-primary-size font-semibold text-center align-bottom">
              Log in with Facebook
            </span>
          </button>

          <div className="flex justify-center items-center mt-[14px] mb-5 w-full">
            <div className="h-[1px] bg-separator flex-grow"></div>
            <span className="uppercase mx-4 text-[13px] font-semibold text-secondary">
              or
            </span>
            <div className="h-[1px] bg-separator flex-grow"></div>
          </div>
          <div className="w-full relative mb-[20px]">
            <Formik
              initialValues={{
                email: "",
                fullName: "",
                userName: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string().required("Required"),
                fullName: Yup.string().required("Required"),
                userName: Yup.string().required("Required"),
                password: Yup.string()
                  .min(8, "Must be at least 8 characters")
                  .required("Required"),
              })}
              // onSubmit={(values) => {
              //   createUserWithEmailAndPassword(
              //     auth,
              //     values.email,
              //     values.password,
              //   )
              //     .then((userCredential) => {
              //       const { displayName, uid, email, metadata } =
              //         userCredential.user;
              //       dispatch(saveUser({ displayName, uid, email, metadata }));
              //       navigate("/");
              //     })
              //     .catch((error) => {
              //       const errorCode = error.code;
              //       const errorMessage = error.message;
              //       console.log(errorCode, errorMessage);
              //     });
              // }}
              onSubmit={handleSignup}
            >
              {({ isValid, dirty }) => (
                <Form className="flex flex-col gap-y-2">
                  <TextInput
                    label="Mobile Number or Email"
                    name="email"
                    type="text"
                    required
                    showError={false}
                  />
                  <TextInput
                    label="Full Name"
                    name="fullName"
                    type="text"
                    required
                    showError={false}
                  />
                  <TextInput
                    label="User Name"
                    name="userName"
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
                  <span className="text-center text-primary-small text-secondary leading-4">
                    People who use our service may have uploaded your contact
                    information to Instagram.{" "}
                    <a
                      href="https://www.facebook.com/help/instagram/261704639352628"
                      target="_blank"
                      className="text-link cursor-pointer"
                    >
                      Learn More
                    </a>
                    <br />
                    <br />
                    <span>
                      By signing up, you agree to our{" "}
                      <a
                        className="text-link cursor-pointer"
                        href="https://help.instagram.com/581066165581870/?locale=en_US"
                        target="_blank"
                      >
                        Terms
                      </a>
                      ,{" "}
                      <a
                        className="text-link cursor-pointer"
                        href="https://www.facebook.com/privacy/policy"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        className="text-link cursor-pointer"
                        href="#"
                        target="_blank"
                      >
                        Cookies Policy
                      </a>
                    </span>
                  </span>
                  <button
                    disabled={!(isValid && dirty)}
                    className={`w-full mt-2 py-[7px] bg-button-primary rounded-lg text-white font-semibold text-[13px] ${!(isValid && dirty) ? `opacity-70` : ""} cursor-pointer hover:enabled:bg-primary`}
                    type="submit"
                  >
                    Sign up
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="min-w-[350px] px-10 h-fit items-center border border-separator rounded-[1px] flex my-[10px] py-[10px]">
          <p className="text-primary-text text-primary-size m-[15px] text-center flex-grow">
            Have an account?{" "}
            <Link to="/login">
              <span className="font-semibold text-button-primary">Log in</span>
            </Link>
          </p>
        </div>
        <GetAppLink />
      </section>
      <Meta />
    </main>
  );
};

export default SignUp;
