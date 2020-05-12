import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import styled from 'styled-components';

const StyleNav = styled(Navbar)`
height: 4rem;
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
      <StyleNav color="primary" light expand="lg">
        <NavbarBrand href="/">MountWilsonCapital</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/UserList">User List</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Apply">
                  Apply
                </DropdownItem>
                <DropdownItem href="/charts">
                  Generate Risk Chart
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Hard-Money-Lender</NavbarText>
        </Collapse>
      </StyleNav>
    </div>
  );
}
  
  export default Navigation;