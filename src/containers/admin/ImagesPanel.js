import React, { Component } from 'react';

export default class ImagesPanel extends Component {
    /* list of images */
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
        this.loadImages = this.loadImages.bind(this);
        this.submitImageToAPI = this. submitImageToAPI.bind(this);
    }
    loadImages() {
        fetch('http://localhost:3030/api/images/')
        .then(pull => pull.blob())
        .then(files => 
            this.setState({
                images: files
            }))
    }
    async submitImageToAPI(e) {
        e.preventDefault()
        console.log('==>>> >>> >>>', e.target, e.currentTarget)
        const image = new FormData(e.currentTarget);
        // image.append('name', fileName);
        // image.append('file', selectedFile);
        let response = await fetch('http://localhost:3030/api/images/upload_image', {
            method: 'POST',
            body: image
        })
    }
    componentDidMount() {
        fetch('http://localhost:3030/api/images/')
        .then(pull => pull.json())
        .then(files => 
            this.setState({
                images: files
            }))
    }
    render() {
        let {img_fs_ref, img_id, name} = this.state;
        return (
            <div>
                <h1>Images Panel</h1>
                <div>
                <form action='#' id='post-image-form' encType='multipart/form-data' onSubmit={this.submitImageToAPI} method="post">
                {<input type='text' id='image_name' name='image_name' required placeholder='add file name - **required' />}
                {<input type='file' id='img_sending' name='img_sending' required />}
                {/* note: adding value attribute to image causes error:  Uncaught DOMException: An attempt was made to use an object that is not, or is no longer, usable */}
                <input type="submit" value="Submit" />
                </form>
                {this.state.images.length ? this.state.images.map(item => <img className='solvejs-image' key={item.img_id} src={`data:image/jpeg;base64,${item.image}`} alt={item.name} name={item.name} />) : null
                // console.log(this.state.images)
            }
                </div>
            </div>
        )
    }
}
