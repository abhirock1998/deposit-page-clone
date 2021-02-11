import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import "./main-body.css";
import {  TableData} from "../../fixtures/table";
import { Conclusions } from '../../fixtures/conclusion';
function MainBody() {
    return (
        <div className="mainBody" >
          <div className="mainBody__left">
              <Sidebar/>
          </div>
          <div className="mainBody__right">
              <p>Recurring Deposit is a special kind of Term Deposit offered by Nidhi companies in India which help people with regular incomes to deposit a fixed amount every month into their recurring deposit account and earn high rate of interest. Recurring Deposit schemes allow only for members with an opportunity to build up their savings through regular monthly deposits of fixed sum over a fixed period of time. Minimum Period of RD is 6 Months and maximum is 60 Months.</p>
              <p><b>On deposit of Rs. 500/- per month</b></p>
              <table>
                  <thead>
                      <tr>
                          <th>Scheme</th>
                          <th>Period</th>
                          <th>Rate of Interest</th>
                      </tr>
                  </thead>
                  <tbody>
                      {TableData?.map(data => <tr key={data.scheme} >
                          <td>{data.scheme}</td>
                          <td>{data.period}</td> <td>{data.interstRate}</td>
                      </tr>)}
                  </tbody>
              </table>
              <p><b>Conclusions</b></p>
              {Conclusions.map((data,index) => <p className="mainBody__rightConclusion"  key={data.para.substring(0,3)}  >{index+1}.  {data.para}</p>  )}
             <div className="mainBody__rightIssue">
             <p  ><b>Issue of Passbook:</b></p>
              <p>A passbook will be issued to every Member Account Holder. The Member Account Holder shall get the passbook updated at regular intervals. If any discrepancy or difference in the amount is found between the entries made in the passbook and receipts duly countersigned by the authorized signatory of the branch office bearing seal. Payments shall be made on the basis of receipts only.</p>
             </div>
           
              <div className="mainBody__rightFacility">
              <p><b>Loan Facility on Recurring Deposits:</b></p>
              <p>1. On 24 Months and 36 Months deposit schemes, after 1 Year(after receiving of 12 instalments) loan up to 60% of deposited amount will be given</p>
              <p>2. On 48 Month and 60 Month deposit schemes, after 1.5 years (after receiving of 18 instalments) loan up to 60% of deposited amount will be given</p>
              </div>
             <div className="mainBody__rightMature">
             <p><b>Pre Mature Closure of Deposit:</b></p>
              <p>Fore closure of deposits will not be permitted until completion of 3 months from the date of deposits, Deposits foreclosed after 3 months but before 6 months from the date of deposits no interest will be paid. Deposits foreclosed after 6 months, inters tar 2% shall be deducted from the normal rate of simple interest for the period of deposit.</p>
             </div>
          </div>
        </div>
    )
}

export default MainBody
