import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PackageType = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
      {props.this.state.current_packageTypeLabel}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>props.this.selectPackageType(0, "Gold")}>Gold</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>props.this.selectPackageType(1, "Silver")}>Silver</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>props.this.selectPackageType(2, "Base")}>Base</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    
  );
}

export default PackageType;