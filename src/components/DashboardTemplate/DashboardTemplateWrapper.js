import styled from "styled-components";

const DashboardTemplateWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  aside {
    /* border: 1px solid red; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    /* align-items: flex-start; */
    gap: 30px;
    padding: 20px;
    background-color: #fffced;
    ul {
      padding: 0;
      display: flex;
      /* width: 80%; */
      /* border: 1px solid red; */
      flex-direction: column;
      gap: 10px;

      .active {
        border-radius: 10px;

        list-style-type: none;
        display: flex;
        transition: 0.5s;
        background-color: #fce205;
        width: 100%;
        .link {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
          text-decoration: none;
          padding: 10px 30px;

          .first {
            img {
              border-radius: 50%;
            }
          }
          .second {
            h4 {
              color: var(--Dark-Color, rgba(0, 0, 0, 0.87));
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              font-weight: 600;
              font-size: 16px;
              font-style: normal;
              line-height: 24px;
              letter-spacing: 0.44px;
            }

            h5 {
              color: var(--gray-80, #5e6366);
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
              letter-spacing: 0.4px;
            }
          }
        }
      }

      li {
        /* width: 100%; */
        border-radius: 10px;

        list-style-type: none;
        display: flex;
        /* border: 1px solid yellow; */
        transition: 0.5s;

        &:hover {
          background-color: rgba(255, 220, 3, 0.65);
        }

        .link {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
          text-decoration: none;
          padding: 10px 30px;

          .first {
            img {
              border-radius: 50%;
            }
          }
          .second {
            h4 {
              color: var(--Dark-Color, rgba(0, 0, 0, 0.87));
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              font-weight: 600;
              font-size: 16px;
              font-style: normal;
              line-height: 24px;
              letter-spacing: 0.44px;
            }

            h5 {
              color: var(--gray-80, #5e6366);
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
              letter-spacing: 0.4px;
            }
          }
        }
      }
    }
  }

  .rightside {
    flex: 1;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    height: 100%;
    header {
      height: 9vh;
      color: black;
      /* box-shadow: 0px 0px 2px 0px gray; */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;

      .menuIcon {
        .listIcon {
          i {
            color: black;
            font-size: 30px;
            font-weight: bold;
          }
        }
      }

      .userIcon {
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
        .logout {
          border: none;
          outline: none;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-weight: 600;
          background-color: white;
          border: 1px solid #fce205;
          color: #fce205;
          padding: 8px 16px;
          border-radius: 10px;
          transition: 0.5s ease-in-out;
          &:hover {
            color: #fff;
            background-color: #fce205;
          }
        }

        .user {
          font-size: 40px;
          color: black;
        }

        h5 {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 20px;
        }
      }
    }

    main {
      /* height: calc(100% - 8vh); */
      color: black;
      /* box-shadow: 0px 0px 2px 0px gray; */
    }
  }
`;

export default DashboardTemplateWrapper;
