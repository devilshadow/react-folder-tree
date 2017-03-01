import React, { PropTypes, Component } from 'react';
import FolderTree from './Components/FolderTree';
import Checkbox from './Components/Checkbox';
import FontAwesome from 'react-fontawesome';


const testData = {
  "id": 1,
  "filename": "All Categories",
  "category": "folder",
  "children": [
    {
      "id": 2,
      "filename": "For Sale",
      "category": "folder",
      "children": [
        {
          "id": 3,
          "filename": "Audio & Stereo",
          "category": "folder",
          "children": [
    {
      "id": 4,
      "filename": "For Sale",
      "category": "folder",
      "children": [
        {
          "id": 5,
          "filename": "Audio & Stereo",
          "category": "file"
        },
        {
          "id": 6,
          "filename": "Baby & Kids Stuff",
          "category": "file"
        },
        {
          "id": 7,
          "filename": "Music, Films, Books & Games",
          "category": "file"
        }
      ]
    },
    {
      "id": 8,
      "filename": "Motors",
      "category": "folder",
      "children": [
        {
          "id": 9,
          "filename": "Car Parts & Accessories",
          "category": "file"
        },
        {
          "id": 10,
          "filename": "Cars",
          "category": "file"
        },
        {
          "id": 11,
          "filename": "Motorbike Parts & Accessories",
          "category": "file"
        }
      ]
    },
    {
      "id": 12,
      "filename": "Jobs",
      "category": "folder",
      "children": [
        {
          "id": 13,
          "filename": "Accountancy",
          "category": "file"
        },
        {
          "id": 14,
          "filename": "Financial Services & Insurance",
          "category": "file"
        },
        {
          "id": 15,
          "filename": "Bar Staff & Management",
          "category": "file"
        }
      ]
    }
  ]
        },
        {
          "id": 16,
          "filename": "Baby & Kids Stuff",
          "category": "file"
        },
        {
          "id": 17,
          "filename": "Music, Films, Books & Games",
          "category": "file"
        }
      ]
    },
    {
      "id": 18,
      "filename": "Motors",
      "category": "folder",
      "children": [
        {
          "id": 19,
          "filename": "Car Parts & Accessories",
          "category": "file"
        },
        {
          "id": 20,
          "filename": "Cars",
          "category": "file"
        },
        {
          "id": 21,
          "filename": "Motorbike Parts & Accessories",
          "category": "file"
        }
      ]
    },
    {
      "id": 22,
      "filename": "Jobs",
      "category": "folder",
      "children": [
        {
          "id": 23,
          "filename": "Accountancy",
          "category": "file"
        },
        {
          "id": 24,
          "filename": "Financial Services & Insurance",
          "category": "file"
        },
        {
          "id": 25,
          "filename": "Bar Staff & Management",
          "category": "file"
        }
      ]
    }
  ]
}

const fileShape = PropTypes.shape({
  id: PropTypes.number,
  filename: PropTypes.string,
  category: PropTypes.oneOf(['file', 'folder']),
  children: PropTypes.arrayOf(fileShape),
});

class App extends Component {
  static propTypes = {
    data: PropTypes.shape(fileShape),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    data: testData,
    onChange: selectedFolders => console.log(selectedFolders),
  };

  render() {
    const { data, onChange } = this.props;
    return (
      <div>
        <FolderTree
          data={data}
          onChange={onChange}
          fileComponent={FileComponent}
          folderComponent={FolderComponent}
        />
      </div>
    )
  }
}

function getInden(level) {
  let iden = '', i = 0;
  while (i < level) {
    iden += ' ';
    i++;
  }
  return iden;
}

const FileComponent = ({ level, checked, handleCheck, filename }) => (
  <div>
    {getInden(level)}
    <Checkbox status={checked} handleCheck={handleCheck} />
    {'   '}<FontAwesome name='file-o'/>{filename}
  </div>
);

const FolderComponent = ({ level, checked, handleCheck, filename, toggleFolder, open }) => (
  <div>
    {getInden(level)}
    <Checkbox status={checked} handleCheck={handleCheck} />
    <a onClick={toggleFolder}>
      <FontAwesome name={open? 'caret-down': 'caret-right'}/> <FontAwesome name={open? 'folder-open': 'folder'}/> {filename}
    </a>
  </div>
);



// const FileComponent = ({level, checked, handleCheck, filename}) => (
//   <div>
//     {getInden(level)}
//     <Checkbox status={checked} handleCheck={handleCheck} />
//     {'   '}<FontAwesome name='file-o'/>{filename}
//   </div>
// )

export default App;
