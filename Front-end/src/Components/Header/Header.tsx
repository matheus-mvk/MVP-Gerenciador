import { HeaderContainer, HeaderRightSection } from "./Header.style";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate

function Header() {
  const navigate = useNavigate(); // Hook para redirecionamento

  // Função de logout
  const handleLogout = () => {
    // Aqui você pode adicionar a lógica de logout, como limpar tokens/sessões
    // Exemplo: localStorage.removeItem('authToken'); 
    navigate('/'); // Redireciona para a página de login
  };

  // Pega a data atual formatada em "pt-BR"
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
        <LogoutIcon onClick={handleLogout} style={{ cursor: 'pointer' }} /> {/* Adiciona o evento de clique */}
      </HeaderRightSection>
    </HeaderContainer>
  );
}

export default Header;
