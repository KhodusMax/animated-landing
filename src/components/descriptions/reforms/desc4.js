import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc4 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Multiple projects aimed at building peace and Donbas’ recovery</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>In 2015-2016 the PwC in Ukraine team supported the State Agency for Donbas Recovery with the implementation of recovery and peace-building initiatives in Eastern Ukraine (Ukraine Conflict Security and Stability Fund). Our experts were engaged to:<br/>
                    - Provide support for the operationalisation of the Steering Committee and Donbas Recovery Agency, including support for staff recruitment, capacity-building, and strategic planning<br/>
                    - Plan and implement strategic communication activities<br/>
                    - Develop a recovery and peacebuilding communications strategy<br/>
                    - Deliver propositions for amendments to Ukrainian legislation, etc</p>
                    <p>In 2016-2017 the PwC in Ukraine team supported the Ministry for the Temporarily Occupied Territories and Internally Displaced Persons of Ukraine (MTOT).</p>
                    <p>To support the operationalisation of recovery and peacebuilding efforts under the National Steering Committee and newly created Ministry (MTOT), it was expected that the GGF Project would provide the following support to the MTOT, as the beneficiary organisation:<br/>
                    - Strategic communications implementation support<br/>
                    - Support with development and implementation of the target operating model<br/>
                    - Capacity building support for the MTOT’s staff<br/>
                    - Support with the establishment of a consultation processes between the central government and regional authorities.</p>
                    <p>The project aimed to support the design and provision of professional administrative, management and capacity building to MTOT; and provide support related to communications on recovery and peacebuilding initiatives in order to enhance civil society dialogue as well as reconciliation and trust building.</p>
                    <p>All the above contributed toward an efficient, timely and strategic recovery process, which contributed to the stabilisation of the overall social, political, and economic situation in Ukraine as well as established a basis for future growth.</p>
                    <p>Among other PwC engagements with MTOT, the World Bank (co-funded by the UK Government) was focused on support to the Government of Ukraine-led Coordination Platform on Peacebuilding and Recovery. The PwC in Ukraine team provided support in the establishment of a Secretariat/unit within the Ministry for Temporarily Occupied Territories and Internally Displaced Persons (MTOT) to provide the coordination platform, build capacity for implementation of projects within the framework of the State Target Programme and to provide secretariat support to the Multi-Partner Trust Fund. We also enhanced MTOT’s capacity by conducting training for recovery program design and implementation.</p>
                    <p>During 2015-2018 PwC was acting as a trusted advisor to the Ministry for Temporarily Occupied Territories and Internally Displaced Persons of Ukraine (MTOT) and advised to the Minister Vadym Chernysh on design and implementation of recovery and peacebuilding (R&PB) policy in Eastern Ukraine. The program that PwC was implementing has been designed to support the operationalisation of R&PB efforts under the National Steering Committee and MTOT. As an outcome of this assignment, a more efficient and effective MTOT was better able to prevent, manage and respond to crisis and conflict in Eastern Ukraine. With this project we established/developed from the scratch a several new functions to drive R&PB initiatives within MTOT, i.e. project management and strategic planning, donor coordination, strategic communications. PwC also participated in development and coordinated the successful launching of an advanced tool for consolidation, monitoring and evaluation, and information sharing with all stakeholders on all active R&PB initiatives in Eastern Ukraine, i.e.</p>
                    <p>Geoportal "Data Platform to Monitor Socio-Economic Impacts of Conflict and Displacement in Eastern Ukraine". One of the achievements is that successful completion of this program, in a long-term perspective, established the basis for future growth and indirectly benefited almost 4 million of people directly affected by the conflict in the Donbas, as well as millions of citizens all over Ukraine, and contributed to stabilisation of the overall social, political, and economic situation of Ukraine.</p>
                </div>
            </div>
        </>
    )
}

export default Desc4;