import {Link} from 'react-router-dom'
import styled from 'styled-components';

//here we do third part styling by styled components
const StyledLink=styled(Link)`
text-decoration: none;
color: #9e9e9e;

&:hover{
  text-decoration: underline;
}
`;

function Navbar() {
  return (
  <div>
   <ul id='nav'>
     <li>
       <StyledLink to='/'>Home</StyledLink>
     </li>
     <li>
       <StyledLink to='/create-post'>Create Post</StyledLink>
     </li>
   </ul>
   </div>
  );
}

export default Navbar;