import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { H2, Text } from "../components/text"
import { PageTitle } from "../components/text"

const TermsPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/terms/",
    })
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  const cellStyle = {
    width: 150,
    paddingLeft: 0,
    verticalAlign: "top",
  }
  return (
    <>
      <SEO title="Terms of Use" />
      <PageTitle
        top="200"
        bottom="140"
        mobileTop="72"
        mobileBottom="60"
        title={`Terms of Use`}
      />
      <Box top="0">
        <Text>
          Live Resin Project and its affiliates, including Live Resin Project
          (hereinafter referred to as “Live Resin Project,” “us,” “we,” “our,”
          or “Company”) has created the following Terms and Conditions of Use
          (“Terms &amp; Conditions”) for when you visit our website at
          www.shopbotanist.com, and related mobile applications, if any
          (hereinafter the “Services”). We incorporate herein and refer to the
          Website Privacy Policy for information about the types of information
          we collect from you, how we use it, how you can control the use and
          disclosure of it, and how you may access and update information about
          you provided to us.
        </Text>
        <H2>I. GENERAL CONDITIONS</H2>
        <Text>
          Please carefully read these Terms &amp; Conditions before using our
          Services. By using our Services, you agree to be bound by the Terms
          &amp; Conditions,
          <strong>
            including the Binding Arbitration Clause and Class Action Waiver
            described in Section IX
          </strong>
          , and the Website Privacy Policy. If you do not agree to the Terms
          &amp; Conditions, then you must not use our Services. If you violate
          the Terms &amp; Conditions, we reserve the right to deny you access to
          our Services, together with any and all other legal remedies. If there
          are inconsistencies between our Website Privacy Policy and the Terms
          &amp; Conditions, the Website Privacy Policy controls.
        </Text>
        <Text>
          The headings used herein are included for convenience only and will
          not limit or otherwise affect these Terms &amp; Conditions.
        </Text>
        <H2>II. NON-EXCLUSIVE, NON-TRANSFERABLE LICENSE TO USE OUR SERVICES</H2>
        <Text>
          We grant you a limited, revocable, non-exclusive, non-transferable
          license to review and in some instances print content, from our
          Services (e.g., our website) for your personal and educational
          purposes as long as they do not violate any aspect of these Terms
          &amp; Conditions or applicable law, including our intellectual
          property or the intellectual property rights of another party. We
          reserve the right to terminate or limit your access to our Services
          and/or the licenses granted herein for any reason (or no reason) and
          in our sole discretion.
        </Text>
        <Text>
          We reserve the right to, at any time, temporarily or permanently,
          modify or discontinue any features associated with the Services with
          or without notice and for any reason, including performing
          maintenance, repairs or upgrades. We will endeavor to provide notice
          before any scheduled upgrades. We (and our licensors) remain the sole
          owner of all rights, title, and interest in the Services. We will not
          be liable if for any reason all or any part of the Services are
          unavailable at any time or for any period.
        </Text>
        <H2>III. INTELLECTUAL PROPERTY</H2>
        <Text>
          All content, features, and functionality available through our
          Services, including but not limited to design, artwork, hyperlinks,
          text, videos, calendars, software, images, technical drawings, blog
          posts, podcasts, audio, images, art, code, configurations, graphics,
          other files, and their selection and arrangement (“Materials”) are
          either the proprietary property of us, our affiliates, or licensors
          and are protected by United States and international intellectual
          property and proprietary rights laws. We reserve any and all rights to
          the Materials. The Materials may not be modified, copied, distributed,
          framed, reproduced, republished, downloaded, displayed, posted,
          transmitted, or sold in any form or by any means in whole or in part
          without our prior written permission except you may download and print
          Materials for non-commercial uses that are not competitive with or
          derogatory to us, provided that you keep all copyright or other
          proprietary notices intact, do not alter such Materials, and do not
          further reproduce, publish or distribute such Materials. Please note
          that this limited consent may be revoked at any time by us and does
          not include consent to republish Materials on the Internet, or any
          Intranet or Extranet site, or to incorporate the Materials in any data
          base or other compilation. Any other use of the Materials is strictly
          prohibited. You further agree that you will not systematically
          extract, collect or harvest through electronic means or otherwise, any
          data or data fields from our Services, including but not limited to
          customer identities or personal information.
        </Text>
        <Text>
          All registered and unregistered trademarks visible or accessible
          through our Services are trademarks of Company, or licensors and may
          not be copied, imitated, or used in whole or in part without the prior
          written permission of Company, or its owners. All page headers,
          customer graphics, button icons, and scripts are service marks,
          trademarks, and/or trade dress of ours or our affiliates and may not
          be copied, imitated or used in whole or in part without prior written
          permission of us.
        </Text>
        <H2>IV. PROHIBITED USES</H2>
        <Text>
          In addition to other prohibitions as set forth in the Terms &amp;
          Conditions, you are prohibited from using the Services or its related
          content: (a) for any unlawful or fraudulent purpose, including but not
          limited to, the use of fraudulent credit card information; (b) to
          solicit others to perform or participate in any unlawful acts; (c) to
          violate any international, federal, provincial or state regulations,
          rules, laws, or local ordinances; (d) to infringe upon or violate our
          intellectual property rights or the intellectual property rights of
          others; (e) to harass, abuse, insult, harm, defame, slander,
          disparage, intimidate, or discriminate based upon gender, sexual
          orientation, religion, ethnicity, race, age, national origin, or
          disability; (f) to submit false or misleading information; (g) to
          upload or transmit viruses or any other type of malicious code that
          will or may be used in any way that will affect the functionality or
          operation of Services including our website (or related website, other
          websites, or the Internet) or Services; (h) to collect or track the
          personal information of others; (i) to spam, phish, pharm, pretext,
          spider, crawl, scrape or facilitate the use of any malware or
          ransomware; (j) for any damaging, obscene or immoral purpose; (k) to
          interfere with or circumvent the security features of the website (or
          related website, other websites or the Internet) and/or Services; (l)
          to transmit, or procure the sending of, any advertising or promotional
          material, including any “junk mail,” “chain letter,” “spam” or any
          other similar solicitation; (m) systematically retrieve data or other
          content from the Services to create or compile, directly or
          indirectly, a collection, compilation, database, or directory without
          written permission from us; (n) make any unauthorized use of the
          Services, including collecting usernames and/or email addresses of
          users by electronic or other means for the purpose of sending
          unsolicited email, or creating user accounts by automated means or
          under false pretenses; (o) use a buying agent or purchasing agent to
          make purchases on the website; (p) use the Services to advertise or
          offer to sell goods and services; (q) circumvent, disable, or
          otherwise interfere with security-related features of the Services,
          including features that prevent or restrict the use or copying of any
          content or enforce limitations on the use of the Services and/or the
          content contained therein; (r) engage in unauthorized framing of or
          linking to the Services; (s) trick, defraud, or mislead us and other
          users, especially in any attempt to learn sensitive account
          information such as user passwords; (t) make improper use of our
          support services or submit false reports of abuse or misconduct; (u)
          engage in any automated use of the system, such as using scripts to
          send comments or messages, or using any data mining, robots, or
          similar data gathering and extraction tools; (v) interfere with,
          disrupt, or create an undue burden on the website or the networks or
          services connected to the Services; (w) attempt to impersonate another
          user or person or use the username of another user; (x) sell or
          otherwise transfer your profile; (y) use any information obtained from
          the Services in order to harass, abuse, or harm another person; (z)
          use the Services as part of any effort to compete with us or otherwise
          use the Services and/or the content for any revenue-generating
          endeavor or commercial enterprise; (aa) decipher, decompile,
          disassemble, or reverse engineer any of the software comprising or in
          any way making up a part of the website; (bb) attempt to bypass any
          measures of the Services designed to prevent or restrict access to the
          Services, or any portion of the Services; (cc) harass, annoy,
          intimidate, or threaten any of our employees or agents engaged in
          providing any portion of the Services to you; (dd) delete the
          copyright or other proprietary rights notice from any content; (ee)
          copy or adapt the Services’ software, including but not limited to
          Flash, PHP, HTML, JavaScript, or other code; (ff) upload or transmit
          (or attempt to upload or to transmit) viruses, Trojan horses, or other
          material, including excessive use of capital letters and spamming
          (continuous posting of repetitive text), that interferes with any
          party’s uninterrupted use and enjoyment of the Services or modifies,
          impairs, disrupts, alters, or interferes with the use, features,
          functions, operation, or maintenance of the Services; (gg) upload or
          transmit (or attempt to upload or to transmit) any material that acts
          as a passive or active information collection or transmission
          mechanism, including without limitation, clear graphics interchange
          formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar
          devices (sometimes referred to as “spyware” or “passive collection
          mechanisms” or “pcms”); (hh) except as may be the result of standard
          search engine or Internet browser usage, use, launch, develop, or
          distribute any automated system, including without limitation, any
          spider, robot, cheat utility, scraper, or offline reader that accesses
          the Services, or using or launching any unauthorized script or other
          software; (ii) disparage, tarnish, or otherwise harm, in our opinion,
          us and/or the Services; (jj) use the Services in a manner inconsistent
          with any applicable laws or regulations; or (kk) in any way that may
          be deemed a breach or violation of any of our Terms &amp; Conditions
          or Website Privacy Policy. We reserve the right to terminate your use
          of the Services or any related website for violating any of the
          prohibited uses.
        </Text>
        <H2>V. CHILDREN INFORMATION</H2>
        <Text>
          Our Services, including our website and any mobile applications are
          intended only for users over the age of twenty-one (21).
        </Text>
        <Text>
          We do not target our Services to minors, who are under thirteen (13)
          (or a higher age threshold where applicable). You agree that you are
          not under thirteen (13) years of age. We do not intend to collect or
          process any information from anyone under the age of thirteen (13). If
          we become aware that a user is under thirteen (13) (or a higher age
          threshold where applicable) and has provided us with information, we
          will take steps to comply with any applicable legal requirement to
          remove such information. Contact us if you believe that we have
          mistakenly or unintentionally collected information from a person
          under the age of thirteen (13).
        </Text>
        <H2>VI. ACCURACY, COMPLETENESS &amp; TIMELINESS OF INFORMATION</H2>
        <Text>
          <ol type="A">
            <li>
              <strong>Errors, Inaccuracies, &amp; Omissions</strong>
              <Text>
                Our Services, including our website and application, may contain
                typographical errors, inaccuracies, or omissions that may relate
                to Company offerings, promotions, packages, programs, events,
                and materials. We do not warrant the accuracy, completeness or
                usefulness of this information. We disclaim all liability and
                responsibility placed on such information by you, or by anyone
                who may be informed of any of its contents.
              </Text>
              <Text>
                We reserve the right to correct any errors, inaccuracies or
                omissions, and to change or update information or cancel orders
                or programs if any information about the Services or on any
                related website is inaccurate at any time without prior notice
                (including after you have submitted your order, request,
                submission, payment, form, etc.).
              </Text>
              <Text>
                We do not take on any obligation to update, amend, or clarify
                information in the Services or on any related website, including
                without limitation, pricing, dates, availability, location,
                products, services, except as required by law.
              </Text>
              <Text>
                No specified update or refresh data applied in the Services or
                on any related website should be taken to indicate that all
                information in the Services or on any related website has been
                modified or updated.
              </Text>
            </li>
            <li>
              <strong>Links to the Services</strong>
              <Text>
                You may not create a link to any page of our Services without
                our prior written consent. If you do create a link to a page of
                our Services, you do so at your own risk and the exclusions and
                limitations set out above will apply to your use of our Services
                by linking to it.
              </Text>
            </li>
            <li>
              <strong>Links on the Services</strong>
              <Text>
                Our Services might include links to other websites or social
                media platforms. We are not responsible for examining or
                evaluating the content or accuracy of any other website and do
                not warrant and will not have any liability or responsibility
                for any other party’s materials or websites or for any other
                materials, products, or services of other websites. We are not
                liable for any harm or damages related to the purchase or use of
                goods, services, resources, content, or any other transactions
                made in connection with any other party’s websites. Please
                review carefully other party’s website’s policies and practices
                and make sure you understand them before you engage in any
                transaction. Claims, complaints, questions, or concerns
                regarding other parties should be directed to that party.
              </Text>
            </li>
          </ol>
        </Text>
        <H2>VII. WARRANTY DISCLAIMER</H2>
        <Text>
          Our Services, and the information on or available through our
          Services, is provided on an “as is” basis without any representation,
          warranties, or conditions of any kind, either express or implied,
          including all implied warranties or condition of merchantability,
          merchantable quality, fitness for a particular purpose, durability,
          title, and non-infringement. We do not guarantee, represent or warrant
          that your use of our website, or the Services, will be uninterrupted,
          timely, secure, or error-free. We do not warrant that the results that
          may be obtained from the use of the Services will be accurate or
          reliable. You agree that from time to time we may remove the website
          and Services for indefinite periods of time or cancel them at any time
          without notice to you. To the fullest extent permitted by law, the
          Company excludes all representations and warranties relating to our
          Services, or related content, for which is or may be provided by any
          affiliates or any other third party, including in relation to any
          inaccuracies or omissions in our Services and/or the Company’s
          literature.
        </Text>
        <Text>
          In no case shall the Company, its directors, officers, employees,
          affiliates, agents, contractors, interns, suppliers, service providers
          or licensors be liable for any injury, loss claim, or any direct,
          indirect, incidental, punitive, special, or consequential damages of
          any kind, including without limitation lost profits, lost revenue,
          lost savings, loss of data, damage caused to your computer, computer
          software, systems and programs and the data thereon, replacement
          costs, or any similar damages, whether based in contract, tort, strict
          liability or otherwise arising from your use of the Services or in any
          way related to the Services, including but not limited to any errors
          or omissions in any use of the Services or any content or product
          posted, transmitted, or otherwise made available. In any event, the
          aggregate liability of the Company and our affiliates and our service
          providers under these Terms &amp; Conditions shall not exceed five
          hundred dollars ($500.00).
        </Text>
        <Text>
          The foregoing does not affect any warranties that cannot be excluded
          or limited under applicable law.
        </Text>
        <H2>VIII. GOVERNING LAW</H2>
        <Text>
          The Terms &amp; Conditions and any separate agreements whereby we
          provide you Services shall be governed and construed in accordance
          with the laws of New York without reference to any conflict of law
          rules.
        </Text>
        <Text>
          You agree that you will not use the Services in any country or in any
          manner prohibited by any applicable laws, restrictions or regulations.
        </Text>
        <Text>
          <strong>
            ARBITRATION CLAUSE AND CLASS ACTION WAIVER – IMPORTANT – PLEASE
            REVIEW AS THIS AFFECTS YOUR LEGAL RIGHTS
          </strong>
        </Text>
        <Text>
          <strong>BINDING ARBITRATION NOTICE:</strong> You and The Botanist
          agree that if there is any dispute or claim arising from or related to
          our Services and/or these Terms &amp; Conditions it will be resolved
          by confidential binding arbitration in New York, New York, rather than
          in court, after first giving Notice of the Dispute (“Notice”) to the
          other party and the opportunity to discuss resolution within thirty
          (30) days of such Notice.  The Notice to the Company should be sent
          to: The Botanist, 366 Madison Avenue, 11th Floor, New York, NY 10017
          USA.  This Notice must include a description of the nature and basis
          of the claims the party is asserting, and the relief sought.
        </Text>
        <Text>
          If you and The Botanist are unable to resolve the claims described in
          the Notice within thirty (30) days after the Notice is sent, you or
          the Company may initiate arbitration proceedings.  There is no judge
          or jury in arbitration, and court review of an arbitration award is
          limited.  However, an arbitrator can award on an individual basis the
          same damages and relief as a court (including injunctive and
          declaratory relief or statutory damages) and must follow the
          provisions of these Terms &amp; Conditions as a court would.
          <strong>
            YOU ACKNOWLEDGE THAT YOU ARE VOLUNTARILY AND KNOWINGLY FORFEITING
            YOUR RIGHT TO A TRIAL BY JURY AND TO OTHERWISE PROCEED IN A LAWSUIT
            IN STATE OR FEDERAL COURT.
          </strong>
        </Text>
        <Text>
          The Federal Arbitration Act and federal arbitration law apply and the
          American Arbitration Association (AAA) will administer the arbitration
          under its Commercial Arbitration Rules and the Supplementary
          Procedures for Consumer Related Disputes.  Payment of all filing,
          administration and arbitrator fees will be governed by the AAA’s
          rules.
        </Text>
        <Text>
          <strong>
            CLASS ACTION WAIVER: YOU AND THE COMPANY AGREE THAT DISPUTES BETWEEN
            YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND
            YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR
            CLASS-WIDE ARBITRATION.
          </strong>
          If for any reason a claim proceeds in court rather than in
          arbitration, we each waive any right to a jury trial. We also both
          agree that you or we may bring suit in court to enjoin infringement or
          other misuse of intellectual property rights.
        </Text>
        <H2>IX. SEVERABILITY</H2>
        <Text>
          To the extent that any provision of these Terms &amp; Conditions is
          deemed to be unlawful, void, or unenforceable, including the binding
          arbitration clause and class action waiver, such provision shall
          nonetheless be enforceable to the fullest extent permitted by
          applicable law, and the unenforceable portion shall be deemed to be
          severed from these Terms &amp; Conditions. Such determination shall
          not affect the validity and enforceability of any other remaining
          provisions.
        </Text>
        <H2>X. TERMINATION</H2>
        <Text>
          These Terms &amp; Conditions are effective until terminated. We may
          terminate this agreement at any time without notice to you and may
          deny you access to our Services.
        </Text>
        <H2>XI. INDEMNIFICATION</H2>
        <Text>
          To the fullest extent permitted by law, and except to the extent
          arising from our gross negligence or intentional misconduct, you agree
          to indemnify, defend, and hold harmless the Company, and our
          affiliates, partners, members, officers, directors, agents,
          contractors, licensors, service providers, subcontractors, suppliers,
          interns and employees, from any claim or demand, including reasonable
          attorneys’ fees made by any third party due to or arising out of your
          breach of these Terms &amp; Conditions or the documents they
          incorporate by reference, or your violation of any law or rights of a
          third party. We reserve the right to assume the exclusive defense and
          control of any matter otherwise subject to indemnification by you, in
          which event you shall cooperate with us in asserting any available
          defenses. You shall not settle any actions or claims on our behalf
          without our prior written consent.
        </Text>
        <H2>XII. NO THIRD-PARTY BENEFICIARIES</H2>
        <Text>
          There are no third-party beneficiaries to the Terms &amp; Conditions.
          We shall have the right to assign our rights or delegate any of its
          responsibilities under these Terms &amp; Conditions to an affiliate or
          in connection with a merger, consolidation, or reorganization for the
          sale of substantially all of our assets.
        </Text>
        <H2>XIII. CHANGES TO THESE TERMS & CONDITIONS</H2>
        <Text>
          We reserve the right to change, modify, or amend these Terms &amp;
          Conditions at any time to reflect changes in our practices and service
          offerings. If we modify our Terms &amp; Conditions, such changes will
          be effective upon posting. It is your obligation to check our current
          Terms &amp; Conditions for any changes.
        </Text>
        <Text>
          These Terms &amp; Conditions may only be modified in writing. Any
          ambiguities in the interpretation will not be construed against the
          drafter.
        </Text>
        <H2>XIV. QUESTIONS</H2>
        <Text>
          If you have any questions about these Terms &amp; Conditions, please:
          <table style={{ marginTop: 5 }} cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td style={cellStyle}>Email us:</td>
                <td>Contact@LiveResinProject.com</td>
              </tr>
              <tr>
                <td style={cellStyle}>Call us:</td>
                <td>1-646-600-9181</td>
              </tr>
              <tr>
                <td style={cellStyle}>Write us:</td>
                <td>
                  {`Live Resin Project
Re: Website Privacy Policy 
366 Madison Avenue, 11th Floor 
New York, NY 10017 USA`}
                </td>
              </tr>
            </tbody>
          </table>
        </Text>
        <Text style={{ textAlign: "right" }}>Last Updated: May 1, 2019</Text>
      </Box>
    </>
  )
}
export default TermsPage
