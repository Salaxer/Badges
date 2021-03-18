import React from 'react';
import header from '../images/platzi-conf-logo.svg';
import './styles/BadgeEdit.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import md5 from 'md5';
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component{
    state={
        loading: true,
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
    componentDidMount(){
        this.fetchData();
        console.log(this.props.match);
    }
    fetchData = async (e) =>{
        this.setState({
            loading: true,
            error: null,
        })
        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({
                loading: false,
                form:  data
            })
        }catch(error){
            this.setState({
                loading: false,
                error,
            })
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        this.state.form.avatarUrl = `https://s.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon&s=120`
        this.setState({loading:true,error: null});
        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading:false});

            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading:false,error});
        }
    }
    handleChange= e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }
    // Este handleChangue ya no le va a pertenecer a BadgeForm, si no que ahora le pertenece a BadgeEdit
    // Lo toma porque al redderizarlo puede tomar los valores dentro
    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-img img-fluid" src={header} alt="logo"/>
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

export default BadgeEdit;