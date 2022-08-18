import React, {useState} from 'react'
import './Dashboard.css'
import Header from '../Header/Header'
import OfferDash from './OfferDash/OfferDash'
import ProposalDash from './ProposalDash/ProposalDash'

function Dashboard() {

  const [offCli, setOffCli] = useState(true)
  const [proWor, setproWor] = useState(false)
  const [user, setUser] = useState(false)
  const [reviews, setReviews] = useState(false)
  const [reports, setReports] = useState(false)

  function handleoffCli() {
    setOffCli(true);
    setproWor(false);
    setUser(false);
    setReviews(false);
    setReports(false);
  }

  function handleproWor() {
    setproWor(true);
    setOffCli(false);
    setUser(false);
    setReviews(false);
    setReports(false);
  }
  function handleUser() {
    setUser(true);
    setOffCli(false);
    setproWor(false);
    setReviews(false);
    setReports(false);
  }
  
  function handleReview() {
    setReviews(true);
    setOffCli(false);
    setproWor(false);
    setUser(false);
    setReports(false);
  }

  function handleReports() {
    setReports(true);
    setOffCli(false);
    setproWor(false);
    setUser(false);
    setReviews(false);
  }


  return (
    <div className='Dashboard_Component'>
        <Header />
        <div className='Dashboard_divContent'>
          <div className='Dashboard_divTop'>
            <div className='Dashboard_divAdminProfile'>
              <div className='Dashboard_divAdminPhoto'>
                <img className='Dashboard_AdminPhoto' src="https://pbs.twimg.com/media/E1JoNK6WQAsPu5x.jpg:large" alt="Admin photo" />
              </div>
              <div>
                <span>ADMIN :</span>
                <div>
                  <span>Esteban </span>
                  <span>Longo</span>
                </div>
              </div>
            </div>

            <div>

              <div className='Analytics_divImg'>
                <img className='Analytics_Img' src="https://c8.alamy.com/comp/2BHDDXW/analytics-and-statistics-user-and-admin-dashboard-for-financial-economy-and-digital-marketing-control-panels-website-administrative-panel-mockup-2BHDDXW.jpg" alt="" />
              </div>

            </div>
          </div>

          <div className='Dashboard_divBot'>

            <div className='Dashboard_divTags'>
              <button className={offCli ? 'Dashboard_tag open' : 'Dashboard_tag'} onClick={handleoffCli} >Offers Clients</button>
              <button className={proWor ? 'Dashboard_tag open' : 'Dashboard_tag'} onClick={handleproWor}>Proposals Workers</button>
              <button className={user ? 'Dashboard_tag open' : 'Dashboard_tag'} onClick={handleUser}>Users</button>
              <button className={reviews ? 'Dashboard_tag open' : 'Dashboard_tag'} onClick={handleReview}>Reviews</button>
              <button className={reports ? 'Dashboard_tag open' : 'Dashboard_tag'} onClick={handleReports}>Reports</button>
            </div>

            {
              offCli && <OfferDash />
            }

            {
              proWor && <ProposalDash />
            }

          </div>
        </div>
    </div>
  )
}

export default Dashboard