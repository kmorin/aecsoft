
import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

const PrivacyPolicy = () =>(
  <Layout>
    <SEO title="Privacy Policy"/>
    <h2>Privacy Policy</h2>
    <div>
      <ol>
        <li>Data collection. We do not collect any data from end users.</li>

        <li>Third Party Data Sharing. We do not share data with third-parties.</li>

        <li>Data retention and deletion policies. We do not collect or retain data from end-users.</li>

        <li>Requests. No requests are taken for consent or data deletion. We do not collect user data.</li>
      </ol>
    </div>
  </Layout>
)

export default PrivacyPolicy