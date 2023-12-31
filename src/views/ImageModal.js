import { Component } from 'react';
import "../css/ImageModal.module.css";

class ImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index
        };
    }

    imageChange = (index) => {
        this.setState({
            index: index
        });
    }

    render() {
        const thumbnails = this.props.images.map((image, index) =>
            <img onClick={() => this.imageChange(index)} src={image} alt="alt" />
        );
        const currentImage = this.props.images[this.state.index];
        const length = this.props.images.length;

        return (
            <div className="background" onClick={() => this.props.close(null)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="viewer">
                        <span onClick={() => this.imageChange((this.state.index + length - 1) % length)}>왼쪽으로</span>
                        <img src={currentImage} />
                        <span onClick={() => this.imageChange((this.state.index + 1) % length)}>오른쪽으로</span>
                    </div>
                    <div className="thumbnails">
                        {thumbnails}
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageModal;