import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import BranchLogo from './BranchLogo';
import 'react-tabs/style/react-tabs.css';

class Branch extends Component {
    componentDidMount(){
        this.props.layThongTinrap()
    }
    renderRap = () => {
        return this.props.ListRaps.map((item, index) => {
            return (
                <BranchLogo key={index} branch={item} />
            )
        })
    }
    render() {
        return (
            <div className='container px-0'>
            {this.renderRap()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        layThongTinrap: () => {
            dispatch(action.actListRapAPI())
        }
    }
}
const mapStateToProps = state => {
    return {
        ListRaps: state.ThongTinrapReducer.ListRaps
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Branch);
