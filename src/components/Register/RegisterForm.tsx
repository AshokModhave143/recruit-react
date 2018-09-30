import { Button } from "@material-ui/core";
import * as moment from "moment";
import * as React from 'react';
import ReactDatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';
import "./Register.css";

export interface IRegisterFormProps { user: any };
export interface IValues {
    creditCardNumber: number,
    cvc: number,
    expiryDate: moment.Moment
};
export interface IError {
    ccNumberError: string,
    cvcError: string,
    expiryDateError: string
};
export interface IRegisterFormState {
    values: IValues,
    submitSuccess: boolean,
    errors: IError,
    isError: boolean
};

export class RegisterForm extends React.Component <IRegisterFormProps, IRegisterFormState> {
    constructor(props: IRegisterFormProps) {
        super(props);

        this.state = {
            values: {
                creditCardNumber: 0,
                cvc: 0,
                expiryDate: moment()
            },
            // tslint:disable-next-line:object-literal-sort-keys
            submitSuccess: false,
            // tslint:disable-next-line:object-literal-sort-keys
            errors: {
                ccNumberError: "",
                cvcError: "",
                expiryDateError: ""
            },
            isError: false
        }
    }
    public render() {
        const {user} = this.props;
        const {submitSuccess, errors, values} = this.state;

        return (
            <React.Fragment>
                <div className="register">
                    <h1 className="register-title">Welcome, {user.firstName}</h1>
                    <form onSubmit={this.handleSubmit} noValidate={true} className="register-form">
                        { submitSuccess ? <span style={{color: 'green'}}>Card registration successful</span> : ""}
                        <div style={{display: 'flex', flexDirection: 'column'}} className="register-form-content">
                            <div className="register-formgroup">
                                <label>Credit Card Number</label>
                                <input 
                                    type="text"
                                    placeholder="Enter credit card number"
                                    value={values.creditCardNumber}
                                    onChange={this.handleValueChange}
                                    id="cc_number"
                                    required={true}
                                />
                                <span style={{color: 'red'}}>{errors.ccNumberError}</span>
                            </div>
                            <div className="register-formgroup">
                                <label>CVC</label>
                                <input 
                                    type="text"
                                    placeholder="Enter CVC number"
                                    value={values.cvc}
                                    onChange={this.handleValueChange}
                                    id="cvc"
                                    required={true}
                                />
                                <span style={{color: 'red'}}> {errors.cvcError}</span>
                            </div>
                            <div className="register-formgroup">        
                                <label>Expiry Date</label>
                                <ReactDatePicker
                                    selected={values.expiryDate}
                                    onChange={this.handleDateChange}
                                    id="expiry_date"       
                                    required={true}   
                                    className="react-date-picker"                                              
                                />
                                <span style={{color: 'red'}}>{errors.expiryDateError}</span>
                            </div>
                            <div className="register-submit-btn">
                                <Button type="submit" color="primary" variant="contained">Submit</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    /**
     * Handle value change in textfield
     */
    private handleValueChange = async (e: any): Promise<void> => {
        const {id, value} = e.target;

        if(id === "cc_number") {
            this.setState(prevState => ({
                values: {
                    ...prevState.values,
                    creditCardNumber: value
                }
            }));
        }
        if(id === "cvc") {
            this.setState(prevState => ({
                values: {
                    ...prevState.values,
                    cvc: value
                } 
            }));
        }
    };

    /**
     * Handle Date change in Date picker
     * @param {Date} date selected date in React Date picker
     */
    private handleDateChange = async (date: moment.Moment): Promise<void> => {
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                expiryDate: date
            }
        }));
    };
    
    /**
     * Handle Submit form
     * @param  {EventListener} e event object with HTML element
     */
    private handleSubmit = async (e: React.FormEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();

        if(this.validateForm()) {
            const submitSuccess: boolean = await this.submitForm();
            this.setState({
                submitSuccess
            });
        }
    };

    /**
     * Clears the error container
     */
    private clearErrors = () => {
        this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                ccNumberError: "",
                cvcError: "",
                expiryDateError: ""
            },
            isError: false
        }));
    };

    /**
     * Validate form data
     */
    private validateForm = (): boolean => {
        const { values } = this.state;
        
        this.clearErrors();

        if(this.isEmptyField(values.creditCardNumber)) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    ccNumberError: "Credit card number is required"
                },
                isError: true
            }));
        }
        if(this.isValidNumber(values.creditCardNumber)) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    ccNumberError: "Credit Card Number must be number"
                },
                isError: true
            }));
        }

        if(this.isEmptyField(values.cvc)) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    cvcError: "CVC is required"
                },
                isError: true
            }));
        }
        if(this.isValidNumber(values.cvc)) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    cvcError: "CVC must be number"
                },
                isError: true
            }));
        }

        if(this.isEmptyField(values.expiryDate)) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    expiryDateError: "Expiry date is required"
                },
                isError: true
            }));
        }
        if(this.isValidDate(values.expiryDate)) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    expiryDateError: "Invalid expiry date"
                },
                isError: true
            }))
        }
        
        return this.state.isError;
    };

    /**
     * Check if field having valid number value
     */
    private isValidNumber = (value: any): boolean => {
        return isNaN(value);
    };

    /**
     * Check if field is not empty
     */
    private isEmptyField = (value: any): boolean => {
        return value && value.length === 0;
    }

    /**
     * Check if given value is valid date
     */
    private isValidDate = (value: any): boolean => {
        // const s = moment(moment().toDate(), 'MM/DD/YYYY',true).isValid();
        // return s;
        return false;
    }

    /**
     * Submit the form data to API
     */
    private submitForm = async (): Promise<boolean> => {
        if(!this.state.isError) {
            // tslint:disable-next-line:no-console
            console.log(this.state.values);
            return true;
        } else {
            return false;
        }
    };
}