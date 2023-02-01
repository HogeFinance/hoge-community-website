import PropTypes from "prop-types";

import Dropdown from 'react-bootstrap/Dropdown';

import Translate from "../../Translate";

function DropdownMenu(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <Translate k={props.k} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/about">Action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

DropdownMenu.propTypes = {
  k: PropTypes.string.isRequired,
  menuItems: PropTypes.object.isRequired
};

export default DropdownMenu;