import Img from '../img/img.png'
import Attatch from '../img/attach.png'

const Input = () => {
    return (
        <div className="input">
            <input type="text" name="Type Something..." />
            <div className="send">
                <img src={Img} alt="" />
                <input type="file" style={{ display: 'none' }} id="file" />
                <label htmlFor="file">
                    <img src={Attatch} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input
