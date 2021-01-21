import React from 'react';
import './Visual.css';

function Visual() {
    return (
        <div>
            <div className="remote">
                <div className="pair">pair</div>
                <div className="origin">origin</div>
            </div>
            <div className="local">
                <div className="commit"></div>
                <div className="layout">
                    <div className="left">
                        <div className="staging">staging</div>
                        <div className="untracked">untracked</div>
                    </div>
                    <div className="right">
                        <div className="stash">stash</div>
                    </div>
                    </div>
                </div>

        </div>
    );
}

export default Visual;