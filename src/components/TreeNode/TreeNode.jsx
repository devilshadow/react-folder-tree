import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../CheckBox/CheckBox';
import UtilsContext from '../FolderTree/context';
import EditableName from '../EditableName/EditableName';

import './TreeNode.scss';

const indetPixels = 30;   // TODO: user can pass this to FolderTree and TreeNode can get is from context

const TreeNode = ({
  path,
  name,
  checked: checkedStatus,
  childrenData,
}) => {
  const {
    handleCheck,
    handleRename,
  } = useContext(UtilsContext);

  const treeNodeStyle = {
    marginLeft: path.length * indetPixels,
  };

  const handleCheckBoxChange = e => {
    const newStatus = +e.target.checked;
    handleCheck(path, newStatus);
  };

  const onNameChange = newName => handleRename(path, newName);

  return (
    <>
      <div className='TreeNode' style={ treeNodeStyle }>
        <CheckBox
          status={ checkedStatus }
          onChange={ handleCheckBoxChange }
        />

        <EditableName
          name={ name }
          onNameChange={ onNameChange }
        />
      </div>

      {
        childrenData && childrenData.map((data, idx) => (
          <TreeNode
            path={ [...path, idx] }
            key={ data.id }
            name={ data.name }
            checked={ data.checked }
            childrenData={ data.children }
          />
        ))
      }
    </>
  );
};

TreeNode.propTypes = {
  path: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.number.isRequired,

  childrenData: PropTypes.array,
};

export default TreeNode;
