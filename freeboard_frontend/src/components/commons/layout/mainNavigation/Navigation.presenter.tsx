import * as N from "./Navigation.styles";
export default function NavigationUI() {
  return (
    <N.NavigationList>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#about-me">About Me</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#">Contact me</a>
      </li>
    </N.NavigationList>
  );
}
