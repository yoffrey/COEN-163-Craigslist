import React, {useState} from 'react';
import { Link } from "react-router-dom";
import DragDropFile from "../components/DragDropFile";
import './index.css';

function Upload(){
    return (
            <DragDropFile />
    );
}

export default Upload;