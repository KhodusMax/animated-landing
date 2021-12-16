import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc6 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Labour Code</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>The Ukrainian Labour Code, a key piece of legislation regulating employment matters, was first adopted in 1971.</p>
                    <p>This Code was largely prescriptive and contained outdated provisions in relation to protections of employee rights and employers’ interests. The changes to the Code had been ad hoc and inconsistent, and failed to reflect adequately the current needs and potential of the Ukrainian labour market. As a result, the norms inscribed in this Code were not reflected in real-life relations between employers and employees, including the role of female workers. The shortcomings of this legal framework had contributed to a situation where the proportion of illegal or undeclared work in Ukraine, according to the State Statistics Committee of Ukraine in 2018, was 20%. As a result, for 3.5 million Ukrainians, or every third working citizen, there was no formal registration of their labour arrangement. The failings of this Code also contributed to poor practices in other key areas of labour conditions, such as: a lack of respect for appropriate working hours, late payment of salaries, employment without a written employment contract, health and safety violations, gender disparity in salaries, and non-payment of contributions for mandatory social security. With this in mind the Government has requested the Good Governance Fund support in developing a new labour law.</p>
                    <p>The project team within PwC in Ukraine delivered the following outputs:<br/>
                    - Technical support with key reform legislations<br/>
                    - Public consultations and outreach with social partners<br/>
                    - Development of a roadmap to support implementation of the labour market reform</p>
                    <p>The project team helped the Ministry of Economic Development to review some of the law written in the Labour Code and amend them to be more in line with the best international practices and International Labour Organisation (ILO) Standards. Public consultations were held with the shareholders during which their perspectives and suggestions were taken into account when advising MEDTA (Ministry of Economic Development) on amending some of the policies to satisfy the standards of the ILO.</p>
                    <p>Finally, a roadmap was created to outline the additional legislative changes needed to implement the new labour law so that it would have the highest positive impact on the labour market and the economy in the future.</p>
                    <p>The three aforementioned outputs provided for a holistic approach to the labour market reform, looking not only at the legal but also at the social aspects (via public consultation with key social partners) and implementation-related considerations (via the roadmap). The project team provided the government with a suite of tools which helped them encompass all relevant streams of a well-thought-out reform which took into account the views of key stakeholders. In conjunction with other inputs (e.g. reform of the State Employment Service), the reform of the labour market in general and amendment of the Labour Law in particular helped deliver effectively against the goals which the government had set for itself, namely a more flexible and competitive labour market which attracts external investments, reduces informal employment, stimulates job creation and facilitates economic growth. At the same time, this reform took account of employees’ rights and key social protection issues, addressed the prevailing gender deficit, and struck an appropriate balance between different players in the labour market.</p>
                    <p>The PwC in Ukraine team prepared the recommendations for the MEDTA with regard to the most critical novelties of the Draft Labour Law that need to be assessed more thoroughly to make sure that the Draft Labour Law complies with the Constitution of Ukraine, relevant International acts (e.g. ILO Conventions and recommendations, EU Association Agreement, EU Directives). Once implemented, the new Labour law will bring Ukraine in line with good international labour practices, which would in turn have a positive effect on the economic development and growth of Ukraine’s investment potential.</p>
                </div>
            </div>
        </>
    )
}

export default Desc6;