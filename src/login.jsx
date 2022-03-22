import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Main = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
  .blue {
    background-color: var(--blue);
    height: 50%;
    width: 100%;
    padding: 1.5rem 1.8rem;

    h2 {
      font-weight: 600;
      font-size: 1.25rem;
      color: var(--white);
      width: fit-content;
      cursor: pointer;
    }
    .hero {
      display: flex;
      align-items: center;
      margin-top: -2rem;
      margin-left: 3rem;
      div {
        width: 20rem;
        h1 {
          color: var(--white);
          font-weight: 600;
        }
        h4 {
          color: var(--white);
          font-weight: 400;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        p {
          color: var(--white);
          font-weight: 300;
          font-size: 0.8rem;
        }
      }
    }
    img {
      margin-left: -2rem;
    }
  }
  .white {
    background-color: var(--white);
    height: 50%;
    width: 100vw;
    padding: 3.5rem 4.8rem;
    h4 {
      font-weight: 400;
      margin-bottom: 2rem;
    }
    .user {
      display: flex;
      gap: 1rem;
      div {
        position: relative;
        background-color: #eff8ff;

        padding: 1rem;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 4.75rem;
          width: 4.75rem;
        }
        p {
          font-size: 0.8rem;
          font-weight: 300;
          color: #adadad;
          :first-of-type {
            color: #000;
            font-weight: 500;
            font-size: 0.9rem;
          }
        }
        .close {
          position: absolute;
          color: var(--dark-gray);
          top: 0.5rem;
          right: 0.5rem;
          cursor: pointer;
        }
      }
    }
  }
  .login {
    top: 4.8rem;
    right: 10rem;
    position: absolute;
    background-color: var(--white);
    box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
    width: 539px;
    height: 740px;
    border-radius: 2rem;
    padding: 3rem;
    h1 {
      font-size: 3.5rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    .sign {
      display: flex;
      justify-content: space-between;

      h3 {
        font-size: 1.5rem;
        font-weight: 400;
        span {
          font-weight: 600;
          text-transform: uppercase;
          color: var(--blue);
        }
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        span {
          color: var(--blue);
        }
      }
    }
    .email {
      margin-bottom: 3rem;
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      gap: 1rem;
      div {
        border-radius: 0.5rem;
        background-color: #f6f6f6;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
        :first-of-type {
          img {
            width: 1.6rem;
            height: 1.6rem;
            margin-right: 1rem;
          }
          background-color: #e9f1ff;
          p {
            font-weight: 400;
            color: #4285f4;
          }
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        margin-bottom: 0.8rem;
      }
      input {
        padding: 1rem;
        border-radius: 0.5rem;
        outline: none !important;
        border: 1px solid #adadad;
        :hover {
          border: 1px solid #4285f4;
        }
        :focus {
          border: 1px solid #4285f4;
        }
        :first-of-type {
          margin-bottom: 2rem;
        }
        ::placeholder {
          color: #808080;
        }
      }
      button {
        background-color: var(--blue);
        color: var(--white);
        border: none;
        padding: 1.2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        :hover {
          box-shadow: 0px 4px 19px 0px #7793414d;
        }
      }
      .forget_pass {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2.5rem;
        p {
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 400;
          color: #4285f4;
        }
      }
    }
  }
`;

const Login = () => {
  return (
    <Main>
      <div className="blue">
        <h2>Your Logo</h2>
        <div className="hero">
          <div>
            <h1>Sign in to</h1>
            <h4>Lorem ipsum is simply</h4>
            <p>
              Lorem Ipsum is simply dummy text of the
              <br /> printing and typesetting industry. Lorem Ipsum
              <br /> has been the industry's standard dummy text
              <br /> ever since the 1500s,
            </p>
          </div>
          <img src="assets/saly-1.svg" alt="svg" />
        </div>
      </div>
      <div className="white">
        <h4>Login as</h4>
        <div className="user">
          <div>
            <AiOutlineCloseCircle className="close" />
            <img src="assets/user1.svg" alt="" />
            <p>John peter</p>
            <p>Active 1 days ago</p>
          </div>
          <div>
            <AiOutlineCloseCircle className="close" />
            <img src="assets/user2.svg" alt="" />
            <p>Alina shmen</p>
            <p>Active 4 days ago</p>
          </div>
        </div>
      </div>
      <div className="login">
        <div className="sign">
          <h3>
            Welcome to <span>Lorem</span>
          </h3>
          <p>
            No Account?
            <span>Sign up</span>
          </p>
        </div>
        <h1>Sign in</h1>
        <div className="email">
          <div>
            <img src="assets/google.svg" alt="" />
            <p>Sign in with google</p>
          </div>
          <div>
            <img src="assets/facebook.svg" alt="" />
          </div>
          <div>
            <img src="assets/apple.svg" alt="" />
          </div>
        </div>
        <form action="/dashboard">
          <label htmlFor="">Enter your username or email address</label>
          <input type="text" placeholder="Username or email address" />
          <label htmlFor="">Enter your Password</label>
          <input type="password" placeholder="Password" />
          <div className="forget_pass">
            <p>Forgot password</p>
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </Main>
  );
};

export default Login;
