import React from 'react';
import './styles/BadgeDetails.css'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component{
    state={
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
    }
    componentDidMount(){
        this.fecthData();
    }
    fecthData = async () =>{
        this.setState({
            loading: true,
            error: null,
        })
        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({
                loading: false,
                data,
            })
        }catch(error){
            this.setState({
                loading: false,
                error
            })
        }
    }
    DeleteBadge = async (e) =>{
        this.setState({
            loading: true,
            error: null,
        })
        try{
            const data = await api.badges.remove(this.props.match.params.badgeId);
            this.setState({
                loading: false,
                data,
            })
            this.props.history.push('/badges')
        }catch(error){
            this.setState({
                loading: false,
                error
            })
        }
    }
    handleCloseModal = (e) =>{
        this.setState({
            modalIsOpen: false,
        })
    }
    handleOpenModal= (e) =>{
        this.setState({
            modalIsOpen: true,
        })
    }

    render(){
        if (this.state.loading) {
            return(<PageLoading/>)
        }
        if (this.state.error) {
            return (<PageError error={this.state.error}/>)
        }
        return(
            <BadgeDetails 
            onCloseModal={this.handleCloseModal} 
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen} 
            onDeleteBadge={this.DeleteBadge}
            data={this.state.data}/>
        )
    }
}

export default BadgeDetailsContainer;
