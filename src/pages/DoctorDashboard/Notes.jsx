import React, { useRef } from 'react';
import './Notes.css';
const Notes = () => {


    const textarea1Ref = useRef(null);
    const textarea2Ref = useRef(null);

    const handleRadio1Click = () => {
        textarea1Ref.current.select();
    };

    const handleRadio2Click = () => {
        textarea2Ref.current.select();
    };


    return (
        <div>
            <div class='container-fluid ms-3 pe-5'>
                <div class='row'>
                    <div class='col'>

                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Draft 1</h5>
                                <input
                                    type="radio"
                                    id="radio1"
                                    name="selectedTextarea"
                                    onClick={handleRadio1Click}
                                />
                                <textarea ref={textarea1Ref} class="form-control text-area" id="exampleFormControlTextarea1" rows="14"></textarea>
                            </div>
                        </div>

                    </div>
                    <div class='col'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Draft 2</h5>
                                <input
                                    type="radio"
                                    id="radio2"
                                    name="selectedTextarea"
                                    onClick={handleRadio2Click}
                                />
                                <textarea ref={textarea2Ref} class="form-control text-justify text-area" id="exampleFormControlTextarea1" rows="14"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right mt-4">
                    <button type="button" class="btn-c">Accept</button>
                </div>
            </div>
        </div>
    )
}

export default Notes
