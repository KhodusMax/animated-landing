import { RedBlock } from "../../../img/redBlock";

import './investment.css'

const Desc4 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>DCFTA Compliance Support</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content investment black'>
                    <p>Ukraine signed an Association Agreement (AA) with the European Union (EU) in 2014. This included the creation of a DCFTA that will allow for free trade between the EU and each country, with the DCFTA in Ukraine only entering into force in January 2016. The expectation is that this will enable more exports to the EU, especially for small and medium sized enterprises (SMEs).</p>
                    <p>In order to take advantage of the DCFTA, firms must not only get market access, but must also comply with EU regulatory requirements on hygiene, product safety, labelling and intellectual property, amongst other issues. Unless a firm complies with these rules, it cannot export to the EU and take advantage of preferential tariff access. However, achieving compliance is often a complex and potentially expensive process. Numerous studies, most notably for the EU, have identified a lack of understanding by SMEs in Ukraine, limited knowledge in Business Support Organisations (BSO) and only general and superficial awareness raised by the government. This issue was tackled during the pilot CU09 project, which aimed to build Ukrainian, Georgian and Moldovan firms’ capacity and understanding at a sub-sector product level of how they can comply with EU standards (to make it easier for them to export their goods to EU). </p>
                    <p>The project proved to be successful in Ukraine and the partner associations in Ukraine (toys, cosmetics and agro-machinery) were satisfied with the results of the assistance provided and have requested further support to be provided in order to build on the results of the pilot stage of the project.</p>
                    <p>The project delivered the following outputs:<br/>
                    - Analysis of the potential export sectors (including those identified in the National Export Strategy of Ukraine) facing compliance constraints under the DCFTA<br/>
                    - Enhanced capacity of RCCIs / existing trade associations to deliver compliance services to SMEs<br/>
                    - Industry groups in place, partnered by EU trade associations and RCCIs providing to new and existing companies in groups and individual companies (supported by project experts) in preparing their technical files<br/>
                    - Sector groups facilitated to take first steps for export for companies close to compliance, through B2B export events</p>
                    <p> As a result of the support provided, the project counterparts provided support to their members in helping them comply with EU (and aligned Ukrainian) technical requirements for export resulting in safer products for all Ukrainians and increased export potential to the EU market through mentoring in the preparation of required documents, specifically helping 76 companies to become EU-compliant, supporting over 15 companies to get new EU contracts and supporting three companies to start exporting to the EU.</p>
                    <p>As a result of the project, the counterparts now have the training and experience to continue to support existing and new clients, guiding them through the compliance process, with the result that some companies have managed to start exporting to the EU (some of them leveraging the relationships built during B2B events). The counterparts have all signed contracts with clients to guide all 76 companies to the compliance plan stage. This means all of their clients will be aware of exactly which final steps (labelling of products, redesign parts, testing) are needed prior to declaration of compliance and beginning export activities. Moreover, since the companies in question have invested time and money in the process of receiving support, it is likely that they will continue to be compliant after the project (especially since all the sectors’ technical regulations in Ukraine are aligned with EU and so compliance is essential for smooth exporting). The project has thus had the ‘chain’ effect – enabling the counterparts (associations, chambers of commerce and EPO) to support businesses as they begin exporting to the EU.</p>
                </div>
            </div>
        </>
    )
}

export default Desc4;