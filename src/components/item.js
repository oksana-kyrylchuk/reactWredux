import React, {Component} from "react";
import FileUploader from "./fileUploader";
import ImagePreview from "./imagePreview";
import './item.css';

export default class Item extends Component {

  state = {
    image: null,
    inputVisibility: true,
    previewVisibility: false,
  };

  loadPreview = (e) => {
    this.setState({
      image: e.target.result,
      inputVisibility: false,
      previewVisibility: true
    });
  };

  delete = () => {
    this.setState({
      image: null,
      inputVisibility: true,
      previewVisibility: false,
    });
  };

  render() {
    const {image, inputVisibility, previewVisibility} = this.state;

    return(
      <div className="item">
        <FileUploader vis={inputVisibility} id={this.props.id} onSelect={this.loadPreview}/>
        <ImagePreview vis={previewVisibility} src={image} onDelete={this.delete}/>
      </div>
    )
  };

};