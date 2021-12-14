import styled from "@emotion/styled";
export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;

  p{
    padding-top:12px;
    padding-right:20px;
    font-size:16px;

    span{
      font-size:16px; 
      color:#d9bd88;
    }
  }

  button {
    display: block;
    padding: 10px 20px;
    background-color:transparent;
    cursor:pointer;
    font-size: 1rem;
    color: #d9bd88;
  }
`;
