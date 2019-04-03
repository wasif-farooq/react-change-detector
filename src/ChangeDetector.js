import React, { Component, Fragment } from 'react';

/**
 * This is a change detector class
 */
class ChangeDetector extends Component {

    /**
     * @var[type="Map"]
     */
    oldValues = new Map()

    /**
     * @var[type="Map"]
     */
    newValues = new Map()

    /**
     * @returns void
     */
    componentDidMount() {
        const {children, ref, ...props} = this.props
        let values = JSON.parse(JSON.stringify(props))
        for (let i in values) {
            this.oldValues.set(i, values[i])
        }
    }

    /**
     * 
     * @param {*} nextProps 
     * @param {*} nextState 
     * @returns boolean
     */
    shouldComponentUpdate(nextProps, nextState) {
        const {children, ref, ...props} = nextProps
        let values = JSON.parse(JSON.stringify(props))
        for (let i in values) {
            this.newValues.set(i, values[i])
        }
        return true
    }

    /**
     * @return void
     */
    reset() {
        this.oldValues = new Map(this.newValues)
    }

    /**
     * @returns boolean
     */
    isChangeDetected() {
        
        if (this.oldValues.size !== this.newValues.size) {
            return true
        }
        
        let changed = false
        for (let [key, val] of this.oldValues) {
            if (!this.compare(val, this.newValues.get(key))) {
                changed = true
                break
            }
        }
        return changed
    }

    /**
     * @returns boolean
     */
    compare(val1, val2) {
        if (typeof val1 !== typeof val2) {
            return false
        }

        let check = false
        if (val1 === null && val2 === null) {
            check = true
            return check
        }

        switch (typeof val1) {                
            case 'object':
                check = this.deepCompare(val1, val2)
                break
            default:
                check = val1 === val2
        }

        return check
    }

    /**
     * @returns boolean
     */
    deepCompare(val1, val2) {

        if (Object.keys(val1).length === 0 && Object.keys(val2).length === 0) {
            return true
        }

        if (Object.keys(val1).length !== Object.keys(val2).length) {
            return false
        }

        let check = false
        for (let i in val1) {

            check = this.compare(val1[i], val2[i])
            if (!check) {
                return check
            }
        }
        return check
    }

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }

}

export { ChangeDetector }