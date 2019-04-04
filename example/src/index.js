import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { 
    TextBox,
    Password,
    Hidden,
    CheckBox,
    RadioBox,
    DropDown,
    MultiSelect,
    TextArea,
    File,
    events
} from '../../src';

import './css/style.css';



class AppComponent extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            industry: '',
            description: '',
            password: '',
            radio: 'checked',
            checked: '1',
            unchecked: '',
            checkedDisabled: '',
            industryMulti: []
        };

        this.industries = [{
            label: 'Computer',
            value: 'computer'
        }, {
            label: 'Fashion',
            value: 'fashionr'
        }, {
            label: 'Agriculture',
            value: 'agriculture'
        }];

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        return false;
    }

    render() {
        return (
            <Fragment>
            <form className="form-horizontal" action="" method="" onSubmit={this.onSubmit} >
                <div className="form-group">
                    <label className="label-control">
                        <span>Name</span>
                        <span className="mark">*</span>
                    </label>
                    <TextBox value={this.state.name} name="name" classes="form-control" placeholder="placeholder" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label className="label-control">
                        <span>Password</span>
                    </label>
                    <Password classes="form-control" value={this.state.password} name="password" placeholder="placeholder" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label className="label-control">
                        <span>Industry</span>
                        <span className="mark">*</span>
                    </label>
                    <DropDown name="industry" value={this.state.industry} classes="form-control" options={this.industries} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label className="label-control">
                        <span>Industry</span>
                        <span className="mark">*</span>
                    </label>
                    <MultiSelect name="industryMulti" value={this.state.industryMulti} classes="form-control" options={this.industries} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <div className="checkbox">
                        <label htmlFor="chk-1">
                            <CheckBox classes="form-control" name="checked" value={this.state.checked} default="1" id="chk-1" onChange={this.onChange} />
                            <i></i>
                            <span>Checked</span>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label htmlFor="chk=2">
                            <CheckBox classes="form-control" name="unchecked" value={this.state.unchecked} default="1" onChange={this.onChange} id="chk=2" />
                            <i></i>
                            <span>Un Checked</span>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <CheckBox classes="form-control" name="checkedDisabled" value={this.state.checkedDisabled} default="1" disabled="true" onChange={this.onChange} />
                            <i></i>
                            <span>Disabled</span>
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="radio">
                        <label>
                            <RadioBox classes="form-control" name="radio" value={this.state.radio} default="checked" onChange={this.onChange} />
                            <i></i>
                            <span>Checked</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <RadioBox classes="form-control" name="radio" value={this.state.radio} default="un-checked" onChange={this.onChange} />
                            <i></i>
                            <span>Un Checked</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <RadioBox classes="form-control" name="radio" value={this.state.radio} default="disabled" disabled="true" onChange={this.onChange} />
                            <i></i>
                            <span>Disabled</span>
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-control">
                        <span>Remarks</span>
                    </label>
                    <TextArea classes="form-control" name="description" value={this.state.description} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
                <div className="form-group">
                    <p>After click submit check you console for data</p>
                </div>
            </form>
            </Fragment>
        )
    }
}


const App = events(AppComponent);
ReactDOM.render(<App />, document.getElementById('root'));
module.hot.accept();
