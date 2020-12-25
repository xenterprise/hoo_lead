import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const BuildingType = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
      {props.this.state.current_buildingTypeLabel}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>props.this.selectBuildingType(0, "Studio Apartment")}>Studio Apartment</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>props.this.selectBuildingType(1, "1 Bed Apartment")}>1 Bed Apartment</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>props.this.selectBuildingType(2, "2 Bed Apartment")}>2 Bed Apartment</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>props.this.selectBuildingType(3, "3 Bed Apartment")}>3 Bed Apartment</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>props.this.selectBuildingType(4, "4 Bed Apartment")}>4 Bed Apartment</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>props.this.selectBuildingType(5, "5 Bed Apartment")}>5 Bed Apartment</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default BuildingType;