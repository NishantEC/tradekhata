import React from 'react'
import IconsData from '../../assets/Icons/IconsData';
import { Link } from 'react-router-dom'

import "./sidebar.scss"


const Sidebar = () => {


    
  return (
    <div className='sidebar glassy'>

        <Link to="/" className="sidebar-item">
            <img src={IconsData.DashboardIcon} alt="not found" /><p>Dashboard</p>
        </Link>
        <Link to="/Reports" className="sidebar-item">
        <img src={IconsData.ReportsIcon} alt="not found" /><p>Reports</p>
        </Link>
        <Link to="/New-Trade" className="sidebar-item">
        <img src={IconsData.NewTradeIcon} alt="not found" /><p>New Trade</p>
        </Link>
        <Link to="/Trades" className="sidebar-item">
        <img src={IconsData.TradeLogIcon} alt="not found" /><p>Trades</p>
        </Link>
        <Link to="/Settings" className="sidebar-item">
        <img src={IconsData.SettingsIcon} alt="not found" /><p>Settings</p>
        </Link>
        



    </div>
  )
}

export default Sidebar