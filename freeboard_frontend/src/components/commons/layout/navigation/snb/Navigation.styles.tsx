import styled from "@emotion/styled";
export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:10px 0;
  border-bottom:1px solid #ebebeb;

  li {
    position:relative;
    &::after{
      content:"";
      position:absolute;
      top:50%;
      right:0;
      width:1px;
      height:13px;
      transform:translateY(-50%);
      background-color:#555;
    }
    &:last-child{
      &::after{
        display:none;
      }
    }
  }

  button {
    display: block;
    padding: 10px 20px;
    background-color:transparent;
    cursor:pointer;
    font-size: 1rem;
    
    &:hover{
      color: #d9bd88;
    }
    
  }
`;
