import styled from "styled-components";

const DashboardTemplateWrapper = styled.section`
  /* border: 1px solid; */
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  aside {
    /* border: 1px solid red; */
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
          /* border: 1px solid; */
          display: flex;
          /* width: 100%; */
          flex-direction: row;
          align-items: center;
          gap: 15px;
          text-decoration: none;
          padding: 10px 30px;

          .first {
          }
          .second {
            h4 {
              color: var(--Dark-Color, rgba(0, 0, 0, 0.87));
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              font-weight: 600;
              font-size: 16px;
              font-style: normal;
              /* font-weight: 500; */
              line-height: 24px; /* 150% */
              letter-spacing: 0.44px;
              /* color: black; */
            }

            h5 {
              color: var(--gray-80, #5e6366);
              /* 12 sp • Caption */
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 16px; /* 133.333% */
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
        /* border: 1px solid; */
        /* padding: 10px; */

        .listIcon {
          /* padding: 10px; */
          i {
            /* padding: 10px; */
            /* border: 1px solid; */
            color: black;
            font-size: 30px;
            font-weight: bold;
          }
        }
      }

      .userIcon {
        display: flex;
        /* border: 1px solid red; */
        flex-direction: row;
        gap: 10px;
        align-items: center;

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
      height: calc(100% - 8vh);
      color: black;
      /* box-shadow: 0px 0px 2px 0px gray; */
    }
  }
`;

export default DashboardTemplateWrapper;
