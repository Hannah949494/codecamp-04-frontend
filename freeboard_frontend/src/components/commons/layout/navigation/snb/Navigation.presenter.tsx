
import * as N from "./Navigation.styles";


export default function SubNavigationUI(props: any) {



  return (
    <N.NavigationList>
      <li>
        <button onClick={props.onClicktoBoards}>프로젝트 의뢰</button>
      </li>
      <li>
        <button onClick={props.onClicktofreelancer}>프리랜서 마켓</button>
      </li>
    </N.NavigationList>
  );
}
