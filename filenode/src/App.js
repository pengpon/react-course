import React from 'react';
import FileNode from './FileNode';
import files from './files.json'

const App = () => {
    return (
        <FileNode {...files}/>
    )
}

export default App