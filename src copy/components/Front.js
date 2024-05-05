import '../css/Front.css';
import rightDoor from '../img/right.png';
import leftDoor from '../img/left.png';

function Front() {
  return (
    <div className="App">
      <div id="door-container">
            {/* <form action="../html/back.html" method="post">--> */}
                <button id="open-button" type="submit">ドアを開く</button>
            {/* </form> */}
            <div id="doors">
                <div id="left-door">
                    <img 
                    src={leftDoor}
                    width="180px"
                    height="400px"
                    alt="左のドア" />
                </div>
                <div id="right-door">
                    <img 
                    src={rightDoor}
                    width="180px"
                    height="386.5px"
                    alt="右のドア" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Front;
