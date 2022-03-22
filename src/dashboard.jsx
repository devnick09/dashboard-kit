import React from "react";
import styled from "styled-components";
import Data from "./data.json";
import sidebarData from "./sidebarData.json";

const Main = styled.div`
  height: 1000px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  .active {
    display: block;
  }
  .inactive {
    display: none;
  }
`;
const Sidebar = styled.div`
  background-color: var(--dark-gray);
  overflow-y: hidden;
  .logo {
    padding: 1.8rem;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    img {
      margin-right: 1rem;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #a4a6b3;
    }
  }
  ul {
    list-style: none;
    li {
      padding: 1rem 1.8rem;
      border-left: 0.1rem solid #3e3f49;
      display: flex;
      img {
        margin-right: 1rem;
        width: 1rem;
        height: 1.5rem;
        opacity: 0.4;
      }
      :hover {
        background-color: #3e3f49;
        border-left: 0.1rem solid #dde2ff;
        cursor: pointer;
        p {
          color: #dde2ff;
          padding-right: 1rem;
        }
        img {
          opacity: 1;
        }
      }

      :nth-of-type(7) {
        padding: 0rem;
        margin: 0;
        border-bottom: 0.5px solid gray;
        opacity: 0.2;
        img {
          display: none;
        }
      }
    }
    p {
      color: #a4a6b3;
    }
    .focus {
      background-color: #3e3f49;
      border-left: 0.1rem solid #dde2ff;
      cursor: pointer;
      p {
        color: #dde2ff;
        padding-right: 1rem;
      }
      img {
        opacity: 1;
      }
    }
  }
`;
const TicketList = styled.div`
  padding: 1.8rem;
  background-color: #f7f8fc;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }
    div {
      display: flex;
      align-items: center;
      img {
        margin-right: 1rem;
      }
      p {
        font-size: 0.8rem;
        font-weight: 600;
        border-left: 1px solid #c5c7cd;
        padding-left: 1rem;
      }
      .avatar {
        border: 2px solid #c5c7cd;
        border-radius: 100%;
        width: 2.8rem;
        margin-left: 1rem;
        img {
          width: 2.5rem;
          border-radius: 50%;
          border: 2px solid #fff;
        }
      }
    }
  }
  .ticketInfo {
    height: 90%;
    width: 100%;
    background-color: var(--white);
    border: 1px solid #dfe0eb;
    border-radius: 0.5rem;
    /* padding: 1.5rem; */
    .subhead {
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* margin-bottom: 1rem; */
      p {
        font-size: 1.1rem;
        font-weight: 700;
      }
      div {
        display: flex;
        p {
          margin-right: 1.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #4b506d;
        }
        img {
          margin-right: 0.5rem;
        }
      }
    }
    .list {
      .title {
        padding: 0 1.5rem 0.5rem 1.5rem;
        display: grid;
        grid-template-columns: 2.5fr 1.2fr 1fr 0.8fr;
        border-bottom: 1.5px solid #dfe0eb;

        p {
          color: #9fa2b4;
          font-size: 0.9rem;
        }
      }
      .ticket {
        padding: 1.2rem 1.5rem;
        display: grid;
        grid-template-columns: 2.5fr 1.2fr 1fr 0.8fr;
        border-bottom: 1.5px solid #dfe0eb;
        /* margin-bottom: 1rem; */
        div {
          display: flex;
          flex-direction: column;
          :nth-child(1) {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          :nth-child(4) {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            h4 {
              font-size: 0.6rem;
              color: var(--white);
              padding: 0.2rem 0.5rem;
              /* background-color: #f12b2c; */
              border-radius: 2rem;
              text-transform: uppercase;
            }
          }
          h4 {
            font-size: 0.9rem;
            font-weight: 500;
          }
          p {
            color: #c5c7cd;
            font-size: 0.7rem;
            font-weight: 400;
          }
          img {
            margin-right: 1rem;
            border-radius: 50%;
          }
          div {
            display: flex;
            flex-direction: column;
            :first-of-type {
              align-items: flex-start;
            }
          }
        }
        :hover {
          background-color: #f7f8fc;
          cursor: pointer;
        }
      }
      .pagination {
        padding-top: 1.5rem;
        padding-right: 2.5rem;
        display: flex;
        justify-content: flex-end;
        p {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: #9fa2b4;
          span {
            margin-left: 0.5rem;
            color: #4b506d;
            margin-right: 0.1em;
          }
        }
        div {
          margin-left: 4rem;
          display: flex;
          align-items: center;
          p {
            margin-right: 1rem;
          }
          img {
            margin-left: 2rem;
          }
        }
      }
    }
  }
`;
const Empty = styled.div`
  padding: 1.8rem;
  background-color: #f7f8fc;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }
    div {
      display: flex;
      align-items: center;
      img {
        margin-right: 1rem;
      }
      p {
        font-size: 0.8rem;
        font-weight: 600;
        border-left: 1px solid #c5c7cd;
        padding-left: 1rem;
      }
      .avatar {
        border: 2px solid #c5c7cd;
        border-radius: 100%;
        width: 2.8rem;
        margin-left: 1rem;
        img {
          width: 2.5rem;
          border-radius: 50%;
          border: 2px solid #fff;
        }
      }
    }
  }
  .nothing {
    display: grid;
    place-items: center;

    height: 60%;
    h1 {
      font-size: 5rem;
      color: #c5c7cd;
      transform: rotate(-20deg);
    }
  }
`;
function active() {
  document.querySelector(".active").style.display = "block";
  document.querySelector(".inactive").style.display = "none";
}
function inactive() {
  document.querySelector(".active").style.display = "none";
  document.querySelector(".inactive").style.display = "block";
}

const Dashboard = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <Main>
        <Sidebar>
          <div className="logo">
            <img src="assets/logo.svg" alt="" />
            <h3>Dashboard Kit</h3>
          </div>
          <ul>
            {sidebarData.map((data, index) => {
              return (
               <li
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    data.title === "Tickets" ? active() : inactive();
                    document.querySelector(".head").innerHTML = data.title;
                    setTitle(data.title);
                  }}
                  className={title === data.title ? "focus" : ""}
                >
                  <img src={data.path} alt="" />
                  <p>{data.title}</p>
                </li>
              );
            })}
          </ul>
        </Sidebar>
        <TicketList className="active">
          <div className="nav">
            <h2>Ticket</h2>
            <div>
              <img src="assets/search.svg" alt="" />
              <img src="assets/bell.svg" alt="" />
              <p>Jones Ferdinand</p>
              <div className="avatar">
                <img src="assets/user3.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="ticketInfo">
            <div className="subhead">
              <p>All tickets</p>
              <div>
                <img src="assets/sort.svg" alt="" />
                <p>Sort</p>
                <img src="assets/filter.svg" alt="" />
                <p>Filter</p>
              </div>
            </div>
            <div className="list">
              <div className="title">
                <p>Ticket details</p>
                <p>Customer name</p>
                <p>Date</p>
                <p>Priority</p>
              </div>
              {Data.map((item) => {
                return (
                  <div className="ticket" key={item.id}>
                    <div>
                      <img src={item.src} alt="" />
                      <div>
                        <h4>{item.issue}</h4>
                        <p>{item.status}</p>
                      </div>
                    </div>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.issuedate}</p>
                    </div>
                    <div>
                      <h4>{item.date}</h4>
                      <p>{item.time}</p>
                    </div>
                    <div>
                      <h4 style={{ backgroundColor: `${item.bgColor}` }}>
                        {item.priority}
                      </h4>
                      <img src="assets/option.svg" alt="" />
                    </div>
                  </div>
                );
              })}
              <div className="pagination">
                <p>
                  Rows per page: <span>8</span>
                  <img src="assets/dropdown.svg" alt="" />
                </p>
                <div>
                  <p>1-8 of 1240</p>
                  <img src="assets/left.svg" alt="" />
                  <img src="assets/right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </TicketList>
        <Empty className="inactive">
          <div className="nav">
            <h2 className="head">#</h2>
            <div>
              <img src="assets/search.svg" alt="" />
              <img src="assets/bell.svg" alt="" />
              <p>Jones Ferdinand</p>
              <div className="avatar">
                <img src="assets/user3.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="nothing">
            <h1>Nothing to show</h1>
          </div>
        </Empty>
      </Main>
    </>
  );
};

export default Dashboard;
