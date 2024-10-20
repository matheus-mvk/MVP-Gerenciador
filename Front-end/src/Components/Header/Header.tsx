import { HeaderContainer, HeaderRightSection } from "./Header.style";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  return (
    <HeaderContainer>
      <h1>01 de Janeiro de 2023</h1>
      <HeaderRightSection>
        <h2>Maria, DEV</h2>
        <LogoutIcon />
      </HeaderRightSection>
    </HeaderContainer>
  );
}

export default Header;
