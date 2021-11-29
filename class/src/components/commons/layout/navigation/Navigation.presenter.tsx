import styled from "@emotion/styled";
const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;

  a {
    padding: 0 20px;
    font-size: 1.25rem;
    color: #333;
  }
`;

export default function NavigationUI() {
  return (
    <NavigationList>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Freeboard</a>
      </li>
      <li>
        <a href="">Used-Market</a>
      </li>
      <li>
        <a href="">Mypage</a>
      </li>
    </NavigationList>
  );
}
