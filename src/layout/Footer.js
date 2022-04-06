import React from 'react';
import foot from './footer.module.css'
function Footer(){
return(
    <footer>
        <h1>MechTech</h1>
        <div>
            <div className={foot.reach_us}>
                <div className={foot.reach_us_items}>
                    <a href="#"><img src="/time.png" alt=""/></a>
                    <p>Working Hours</p>
                </div>
                <div className={foot.reach_us_items}>
                    <a href="#"><img src="/custservies.png" alt=""/></a>
                    <p>Customer Service</p>
                </div>
                <div className={foot.reach_us_items}>
                    <a href="#"><img src="/location.png" alt=""/></a>
                    <p>Locations</p>
                </div>
            </div>
            <div className={foot.copyright}>
                &copy; Copyright <strong><span>Team 12</span></strong>. All Rights Reserved
            </div>
        </div>
    </footer>
)
}

export default Footer