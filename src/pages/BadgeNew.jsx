import React from 'react';
import header from '../images/platzi-conf-logo.svg';
import '../components/styles/Badge-New.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import md5 from 'md5';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component{
    state={
        loading: false,
        error:  null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        this.state.form.avatarUrl = `https://s.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon&s=120`
        this.setState({loading:true,error: null});
        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false});

            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading:false,error});
        }
    }
    handleChange= e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }
    // Este handleChangue ya no le va a pertenecer a BadgeForm, si no que ahora le pertenece a BadgeNew
    // Lo toma porque al redderizarlo puede tomar los valores dentro
    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-img img-fluid" src={header} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            firstName={this.state.form.firstName || 'FIRST NAME'} 
                            lastName={this.state.form.lastName || 'LAST NAME'} 
                            twitter={this.state.form.twitter || 'TWITTER'}
                            jobTitle={this.state.form.jobTitle || 'JOBTTITLE'} 
                            email= {this.state.form.email || 'EMAIL'}/>
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange} 
                            formValues ={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;