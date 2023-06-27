import styled from 'styled-components';

export const StyledContactFieldBox = styled.div`
  .switchContact {
    display: flex;
    margin-top: 15px;
    transform: translateY(5px);
  }
  
  .fieldBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .darkInput {
      background-color: #555;
      color: #fff;
      border: none;
      padding: 9px;
      width: 100%;
      border-radius: 4px;
      box-sizing: border-box;
      transition: .1s;

      ::placeholder {
        color: #ccc;
      }

      &:hover {
        background-color: #777;
      }
    }
  }
`