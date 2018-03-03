import React, { Component } from 'react'
import { Content } from '../../components/General'
import { TGTitle, TGDescription, TGProfileList } from '../../components'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

class WhoWeAre extends Component {
  render () {
    return (
      <Content>
        <TGTitle> World leaders in <br /> finance deliver a <br /> new coin </TGTitle>
        <div style={styles.content}>
          <div style={styles.description}>
            <TGDescription>
              World leaders in both institutional and academic <br /> finance and economics with a passion for <br /> entrepreneurship and financial technology (fintech). <br /> We Understand ramifications of blockchain. <br /> Equipped with ability to execute on ideas .
            </TGDescription>
          </div>
          <div style={styles.profileList}>
            <TGProfileList>
              Dimitrios Kavvathas <br />
              Lauren Cohen <br />
              Chris Malloy <br />
              Kimon Gomozias <br />
              Lucas Gaylord <br />
            </TGProfileList>
          </div>
        </div>
        {/* <Tabs>
          <TabList>
            <Tab><div style={styles.avatarWrapper}><img src='assets/img/pic_dimitrios.png' style={styles.avatar} /></div></Tab>
            <Tab><div style={styles.avatarWrapper}><img src='assets/img/pic_lauren.png' style={styles.avatar} /></div></Tab>
            <Tab><div style={styles.avatarWrapper}><img src='assets/img/pic_chris.png' style={styles.avatar} /></div></Tab>
            <Tab><div style={styles.avatarWrapper}><img src='assets/img/pic_kimon.jpg' style={styles.avatar} /></div></Tab>
            <Tab><div style={styles.avatarWrapper}><img src='assets/img/pic_lucas.png' style={styles.avatar} /></div></Tab>
          </TabList>
          <TabPanel>
            <Name>Dimitrios Kavvathas</Name>
            <Subtitle>Chief Investment Officer at Harmony Advisors Limited</Subtitle>
            <Overview>
              Dimitrios joined Goldman Sachs in London in 2001 and moved to Hong Kong in 2009. He was promoted to Managing Director in 2005 and was invited to join the partnership in 2008. He served in various senior positions during his career, including co-Head of Asia Pacific Securities Division Distribution (FICC, Equities, Corporate Origination Sales & Structuring), serving on the Asia Pacific Securities Division Operating Committee, the Asia Pacific Risk Committee, the Global Firmwide New Activity and Asset & Liability Committees as well as the Goldman Sachs (Asia) L.L.C. Board of Directors. He started his career in Fixed Income and held positions in interest rates, FX, commodities, credit derivatives, structured finance, equity derivatives, high yield and convertible bonds, as well as covering and interacting with all clients groups, including asset managers, financial institutions, pension funds, corporates, sovereigns and HNWIs.<br /><br />
              Dimitrios joined VTB Capital in 2013, where he served as Head of Global Markets – Asia Pacific, responsible for fixed income and equities sales, trading and origination as well the China, India and Vietnam bank branches’ market and credit risks. In 2014, he joined Noble Group as co-Head of Financial Services, responsible for Structured Finance, Commodity Enhanced Finance, Customer Coverage, Capital & Origination, while simultaneously overseeing the Group’s technology and strat./quant. teams. He served on the Group’s Risk Committee as well as the Global Credit Committee – the governance body monitoring credit, market and operational risks across physical commodities and financial markets. He jointly oversaw the Group’s principal credit, market risk investing, as well as the Group’s balance sheet/liquidity management and strategic stakeholder engagement efforts.<br /><br />
              Dimitrios joined Harmony Advisors Limited, an SFC Type 1, 2, 4 and 9 licensed multi-family office/asset manager, in 2016 as Chief Investment Officer. He is currently responsible for all investments across Harmony’s discretionary mandates, including a multi-strategy hedge fund, external managed accounts, private equity and other alternative transactions. Furthermore, Dimitrios oversees the firm’s asset allocation framework and the fundamental and quantitative research efforts across all products globally.<br /><br />
              Dimitrios earned his B. Sc. in Economics graduating in 1995 as valedictorian from the Department of Economics at the Athens University of Economics and Business. He was awarded his PhD in Economics at the Department of Economics at the University of Chicago in 2001, where he also earned his MA in Economics in 1997. During his time at the University of Chicago, Dimitrios worked as a lecturer at the School of Social Sciences and as a teaching and research assistant at the Graduate School of Business. Between 2013 and 2015, Dimitrios served as Adjunct Professor at the School of Economics & Finance at the University of Hong Kong.
            </Overview>
          </TabPanel>
          <TabPanel>
            <Name>Lauren Cohen</Name>
            <Subtitle>Professor Lauren H. Cohen <br /> L.E. Simmons Professor of Business Administration</Subtitle>
            <Overview>
              Lauren Cohen is the L.E. Simmons Professor in the Finance & Entrepreneurial Management Unitsat Harvard Business School and a Research Associate at the National Bureau of EconomicResearch. He is an Editor of the Review of Financial Studies, along with being a past Editor ofManagement Science, and serving on the editorial board of the Review of Asset Pricing Studies. Heteaches in the MBA Program, Executive Education Program, Doctoral Program, and Special Custom Programs at the Harvard Business School.<br /><br />
              His award-winning research has been published in the top journals in Finance and Economics. It isalso frequently profiled in various media outlets including The Wall Street Journal, The New YorkTimes, The Washington Post, The Economist, and Forbes. It has been recognized by numerousNational Science Foundation (NSF) Awards, including a National Science Foundation EarlyCareer Development (CAREER) Award for his research agenda on Relationships in Finance. Hewas named a 2008 Pensions & Investments “Cutting Edge Academic,” a Top 40 Under 40Business School Professor in 2017 by Poets & Quants, and a top teacher at Harvard by CNBC.<br /><br />
              In addition to his academic work, Dr. Cohen frequently advises government organizations in the USand abroad, as well as consulting with top hedge funds in the industry, and serving as an expertwitness in numerous investment- and insurance-related litigation cases. He has testified beforethe United States Congress on the impacts of government spending on the private sector, and hasbeen awarded the Jack Treynor Prize for superior work in the field of investment management andfinancial markets. <br /><br />
              Dr. Cohen received a PhD in finance and an MBA from the University of Chicago in 2005. He earneddual undergraduate degrees from the University of Pennsylvania - a BSE from the WhartonSchool and a BA in economics from the College of Arts & Sciences in 2001. He also served on theadvisory board of Cake Financial (acquired by E*Trade) and Quadriserv, Inc. (acquired byEquiLend Holdings - an industry consortium comprised of Goldman Sachs, Morgan Stanley,Credit Suisse, Bank of America, UBS, JPMorgan, Northern Trust, Blackrock and State Street).<br /><br />
              Dr. Cohen currently resides in Belmont, MA with his wife - Dr. Nicole Cohen - and their five children.
            </Overview>
          </TabPanel>
          <TabPanel>
            <Name>Chris Malloy</Name>
            <Subtitle>Professor Christopher J. Malloy <br /> Sylvan C. Coleman Chaired Professor of Financial Management</Subtitle>
            <Overview>
              Christopher Malloy is the Sylvan C. Coleman Chaired Professor in the Finance Unit at HarvardBusiness School, and a Faculty Research Fellow at the National Bureau of Economic Research. Prior to joiningHBS in 2007, Professor Malloy was an Assistant Professor in the Finance Department at London Business School,where he was on faculty from 2003-2007. Professor Malloy currently teaches the second semester investment strategies and stock pitching courses at HBS, and has previously taught courses in behavioral finance, corporatefinance, and equity investment management.<br /><br />
              His research focuses on behavioral finance, asset pricing, investments and portfolio choice, labor economics,and empirical corporate finance. His research has appeared in the Journal of Political Economy, the Journalof Finance, the Journal of Financial Economics, and the Review of Financial Studies, and has beendescribed in The Financial Times, The Wall Street Journal, The New York Times, and various other mediaoutlets.<br /><br />
              Professor Malloy received a PhD in Finance and an MBA from The University of Chicago Graduate School ofBusiness, and a BA in Economics from Yale University. Before beginning his doctoral studies, he worked at theBoard of Governors of the Federal Reserve System in Washington, DC in the Monetary and Financial StudiesSection.
            </Overview>
          </TabPanel>
          <TabPanel>
            <Name>Kimon Gomozias</Name>
            <Overview>
              Kimon started his career at Goldman Sachs in 2003 before moving to ECM, a boutique fixed income asset manager, in 2004 to work on the development of structured fixed income funds.<br /><br />
              Kimon joined the Standard & Poor’s Structured Finance group in 2005 as a Senior Quantitative Analyst where he led the development of the rating methodology and monitoring process for the hybrid synthetic CDO business that involves the securitization and risk sharing of cross-asset (Equity, Credit, Commodity, FX and Rates) derivative exposures.<br /><br />
              At 2008 he started working at Barclays Wealth & Investment Management in 2008 within the Quantitative Analytics team. Until 2009, he worked on the development of quantitative investment strategies and portable alpha solutions for UHNW private clients and by 2011 he was leading the Quantitative Analytics team responsible for the model development of the Barclays strategic asset allocation for the Wealth business. In 2012, he moved into the Key Clients & Family Offices team to lead a Portfolio Solutions & Consulting function that provides cross asset customized investment solutions and portfolio construction of liquid and illiquid assets to UHNW and Family Office clients with a focus on asset liability management, risk-based and factor investing, alternative risk premia and yield enhancing overlay (portable alpha)  solutions.<br /><br />
              Prior to joining Financial Markets, he spent 2 years as an Officer in the Hellenic Army, Special Forces Division, Paratroopers Unit and 2 years at Ideal Telecom, a startup company in Greece, as a Database Administrator.<br /><br />
              Kimon holds an MPhys in Physics from Sussex University graduating within the top 5% of his class and an MSc in Financial Engineering from ISMA Centre, Henley Business School in the UK.
            </Overview>
          </TabPanel>
          <TabPanel>
            <Name>Lucas Gaylord</Name>
            <Overview>
              Lucas Gaylord is a Global Business and Computer Science double major at Hong Kong University of Science and Technology (HKUST) from the United States. His studies and extracurricular activities have been fully funded by several prestigious scholarships, including the Mr & Mrs Liu Sing Cheong and Wong Po Yuk Scholarship (SBM Global Leadership and Community Engagement), the HKUST Diverse Initiative Scholarship, and the Mainland Experience Scheme Award for Chinese studies. After 4 rigorous years, which often required Lucas to create his own classes and design academic programs where they didn’t previously exist, he will be the first student of HKUST to successfully achieve the dual degree outlined above. <br /><br />
              Lucas is an experienced entrepreneur, a motivated student, a polyglot, and an avid traveller. He has lived in 4 different countries, and speaks English, German, and Arabic (plus a moderate amount of Mandarin Chinese).
            </Overview>
          </TabPanel>
        </Tabs> */}
      </Content>
    )
  }
}

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column'
  },
  description: {
    flex: 1
  },
  profileList: {
    flex: 2
  }
}

export default WhoWeAre
