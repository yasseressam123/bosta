import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React , Component } from 'react';
import {Link} from "react-router-dom";
import './home.css';
import { withTranslation } from 'react-i18next';



class Home extends Component{
    constructor(props){
        super();
        this.state={
            searchInput: 0,
            translate:""
        }
    }

    handleSearchNo = (event)=>{
        this.setState(
            {searchInput: event.target.value});
    }


    render() {
        const { t } = this.props;
        return(
            <div className="Home">
                <div className="container h-100">
                    <div className="row justify-content-center h-100">
                        <div className="col-6 w-100 d-flex h-100">
                            <div className="shipment-container">
                                <h1 className="shipment-container-title">{t('HomePage.title')}</h1>
                                <h2 className="shipment-container-subTitle">{t('HomePage.subTitle')}</h2>
                                <form className="d-flex flex-wrap mb-4">
                                    <div className="shipment-container-search">
                                        <input name="shipment" onChange={this.handleSearchNo} type="text" placeholder={t('HomePage.placeholder')} />
                                    </div>
                                    <div className="mx-2 d-flex">
                                        {/* <button type="button" onClick={this.handleSearch} className="shipment-container-button">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>  */}
                                        <Link className="shipment-container-button" to={{
                                          pathname: `/tracking-shipment/`, search: `?${this.state?.searchInput}`}}><FontAwesomeIcon icon={faSearch} /></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
}
export default withTranslation()(Home);