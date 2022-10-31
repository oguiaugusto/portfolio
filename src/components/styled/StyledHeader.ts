import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  background-color: rgba(23, 9, 27, 0.5);
  box-shadow: 0 0 8px 0 rgba(23, 9, 27, 1);

  .header__wrapper {
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .header__logo {
    width: 50px;
    margin-right: 5px;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.3));
  }

  .header__links ul {
    display: flex;
    font-size: 13px;
  }

  .header__links ul li {
    margin: 0 6px;
    list-style: none;

    &:hover {
      color: #fff;
      transform: scale(1.02);
      filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.8));
    }
  }

  .header__links a {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    color: #eee;
  }

  .header__social-media {
    display: none;
  }

  @media screen and (min-width: 430px) {
    .header__wrapper {
      padding: 0 15px;
    }

    .header__logo {
      width: unset;
      margin-right: 10px;
    }

    .header__links ul {
      font-size: 16px;
    }

    .header__links ul li {
      margin: 0 10px;
    }
  }

  @media screen and (min-width: 768px) {
    .header__wrapper {
      display: grid;
      grid-template-columns: 70px 1fr 300px;
      padding: 0 20px;
    }

    .header__social-media {
      display: flex;
      gap: 30px;
      justify-content: flex-end;
    }

    .header__social-media a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      background-color: #5a41a9;
      color: #eee;
      gap: 5px;
      padding: 10px 20px;
      border-radius: 10px;
      box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.2);

      &:hover {
        color: #fff;
        background-color: #6951b5;
        transform: scale(1.02);
        box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.4);
      }

      &:active {
        color: #eee;
        background-color: #533f93;
        transform: scale(1);
        box-shadow: 0 0 6px 0 rgba(200, 200, 200, 0.2);
      }
    }
  }
`;

export default StyledHeader;
