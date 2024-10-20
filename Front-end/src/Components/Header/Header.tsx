import { HeaderContainer, HeaderRightSection } from "./Header.style";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <HeaderContainer>
      <h1>{currentDate}</h1>
      <HeaderRightSection>
        <h2>Maria, DEV</h2>
        <LogoutIcon />
      </HeaderRightSection>
    </HeaderContainer>
  );
}

export default Header;
