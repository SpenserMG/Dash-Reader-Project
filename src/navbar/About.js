import React from 'react';
import './About.css';

function About() {

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">About our Tools</h4>
            </div>
            <div className="modal-body">
                <h5>Binonic Reader</h5>
                <br></br>
                <div>This reader will bold each word in the passage that you type or paste into the input section at a ratio of 60/40. Approximately 60% of each word will be put in bold to give the eyes a placeholder to latch onto while you read word to word.</div>
                <br></br>
                <h5>RSVP Reader</h5>
                <br></br>
                <div>This reader stores your passage in the background, and you can click on play, pause, or restart to view your passage one word at a time to practice speed reading. There are two ticks on the top and bottom of the words to help your eyes stay focused on each word as they appear.</div>
                <br></br>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    );
};

export default About