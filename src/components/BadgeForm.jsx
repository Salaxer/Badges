import React from 'react'

class BadgeForm extends React.Component{
    
    // handleChange=(e)=>{
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }
    handleClick = e =>{
        console.log("Button was click");
    }
    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log('Form was submitted');
    //     console.log(this.state);
    //   };
    render(){
        return(
            <div style={{padding: '0 0 50px 0'}}>
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Firs Name</label>
                        <input  onChange={this.props.onChange} value={this.props.formValues.firstName} type="text" className="form-control" name="firstName" autoComplete="given-name"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input  onChange={this.props.onChange} value={this.props.formValues.lastName} type="text" className="form-control" name="lastName" autoComplete="family-name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input  onChange={this.props.onChange} value={this.props.formValues.email} type="email" className="form-control" name="email" autoComplete="email"/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input  onChange={this.props.onChange} value={this.props.formValues.jobTitle} type="text" className="form-control" name="jobTitle" autoComplete="organization-title"/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input  onChange={this.props.onChange} value={this.props.formValues.twitter} type="text" className="form-control" name="twitter" autoComplete="twitter"/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
                {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)}
            </div>
        )
    }
}
export default BadgeForm;