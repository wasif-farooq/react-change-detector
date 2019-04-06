# React Change Detector
This package enable you to use change detector in you react form or app only on the states you provide to it.
## Installation
```
npm i react-change-detector --save
```

## How To Use
To use this you need to import ChangeDetector component in you app like this
```
import React, { Component, createRef } from 'react';
... some code
import { ChangeDetector } from 'react-change-detector';
... some code
```

```
class App extends Component {
    state = {
        test1: '1',
        test2: [2]
        test3: {a : 1},
        // you can name whatever you want
        detector: null
    }
    
    setDetector(detector) {
        this.setState({detector: detector})
    }

    // for getting accesst its functions
    changeDetector = createRef()

    onClick = () => {
        if (this.state.detector.isChangeDetected()) {
            // code if change is detected
        }
    }

    render() {
        <ChangeDetector ref={this.changeDetector}
            test1={this.state.test1}
            test2={this.state.test2}
            test3={this.state.test3}
            changeDetector={this.setDetector.bind(this)}
        >
        .. your form code or child components
        </ChangeDetector>
    }
}
```