import React, { useEffect, useContext } from "react"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { H2, Text } from "../components/text"
import { PageTitle } from "../components/text"

const PrivacyPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/privacy/",
    })
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  const cellStyle = {
    width: 150,
    verticalAlign: "top",
  }
  return (
    <>
      <SEO title="Privacy Policy" />
      <PageTitle
        top="200"
        bottom="140"
        mobileTop="72"
        mobileBottom="60"
        title={`Privacy Policy`}
      />
      <Box top="0">
        <Text>
          Live Resin Project and its affiliates, including (hereinafter referred
          to as “Live Resin Project” “us,” “we,” “our,” or “Company”) has
          created the following Website Privacy Policy for when you visit our
          website at www.LiveResinProject.com, mobile and other applications,
          and any other services where this Website Privacy Policy is posted
          (collectively, our “Services”). This Website Privacy Policy describes,
          among other things, how Live Resin Project collects and uses your
          information when visiting our website at www.shopbotanist.com
          (“Website”) or using our Services. By using our Website you consent to
          this Website Privacy Policy.
        </Text>
        <Text>
          This Website Privacy Policy is governed by our Terms and Conditions of
          Use, which is also available on our Website. If there are any
          inconsistencies between our Website Privacy Policy and the Terms and
          Conditions of Use, the Website Privacy Policy controls.
        </Text>
        <H2>I. INFORMATION WE COLLECT ABOUT YOU</H2>
        <Text>
          In order to access certain services and restricted areas within our
          Website, or to respond to specific inquiries, Live Resin Project may
          collect the following types of information: (A) Information You
          Provide to Us, (B) Information We Automatically Collect, (C)
          Information We Receive from Third Parties. All of the information
          listed in (A)-(C) above, are detailed below, and hereinafter to as
          “Information.”
        </Text>
        <Text>
          <ol type="A">
            <li>
              <strong>Information You Provide Us</strong>
              <Text>
                In using our Website, you may provide us with information,
                including, without limitation
                <ul>
                  <li> First and Last Name </li>
                  <li> Email </li>
                  <li> Subject </li>
                  <li> Message </li>
                </ul>
              </Text>
            </li>
            <li>
              <strong>Information We Automatically Collect</strong>
              <Text>
                The Botanist also collects Information about you from your visit
                to our Website including:
              </Text>
              <Text>
                <ul>
                  <li>
                    IP address, which is the number associated with the service
                    through which you access the Internet, like your ISP
                    (Internet service provider), your company, or your
                    university;
                  </li>
                  <li> Your geographic location and time zone; </li>
                  <li> Date and time of your visit; </li>
                  <li>
                    Your device, type of computer, web browsers, search engine
                    used, operating system, or platform you use or web browser;
                  </li>
                  <li> Domain server; </li>
                  <li> Cookies that are installed on your device; </li>
                  <li>
                    Data identifying the web pages you visited prior to and
                    after visiting our Website; and/or
                  </li>
                  <li>
                    Information about the individual web pages or products that
                    you view, what websites or search terms referred you to the
                    Website, and information about how you interact with the
                    Website.
                  </li>
                </ul>
              </Text>
              <Text>
                We collect the above Information by using certain technologies,
                such as cookies, web beacons, and other technologies.
                Third-party providers, advertisers, and/or partners may also
                view, edit, or set their own cookies or place web beacons. The
                use of these technologies by such third parties is subject to
                their own privacy policies and is not covered by this Website
                Privacy Policy, except as required by law.
              </Text>
              <Text>
                We collect Information using the following technologies:
              </Text>
              <Text>
                <ol type="a">
                  <li>
                    “Cookies” are small digital files that are transferred to
                    your computer or smartphone’s hard drive when you visit a
                    website or click on a URL. Cookies allow us to operate and
                    personalize the Website, assist with functionality of the
                    Website, to track your usage, and to deliver targeted
                    advertisements to you. “Session Variables” are similar to
                    Cookies except that they remain on our servers and are not
                    transferred to your computer or smartphone. Usage of a
                    Cookie or Session Variable is in no way linked to your name
                    or address. Once you close your Web browser, the Cookie or
                    Session Variable simply terminates. If you reject the Cookie
                    or Session Variable, you may still use the Website.
                    <ul>
                      <li>
                        Most web browsers automatically accept cookies, unless
                        you have configured yours not to accept them. You can
                        program your browser not to accept cookies, but if you
                        do, you may not be able to use certain portions of the
                        Website and the Website will not be able to customize
                        certain functions according to your preferences.
                      </li>
                      <li>
                        Cookies are placed on the Website, but executed by third
                        parties such as Google, Bing, Facebook and other ad
                        networks. For more information about third party cookies
                        and related advertising and how to opt-out of these
                        practices with companies participating in industry
                        self-regulation, please visit About Ads at
                        http://optout.aboutads.info/
                      </li>
                    </ul>
                  </li>
                  <li>
                    “Web Beacons/Pixels” are graphic images or web programming
                    code that may be included on the Website to help us count
                    visitors to the Website, monitor how you navigate the
                    Website or to count how many particular links posted on the
                    Website were actually viewed.
                  </li>
                  <li>
                    Our Website uses retargeting pixels from Google, Facebook
                    and other ad networks. Please visit their websites for their
                    privacy policies and consent and opt-out mechanisms, or
                    visit sties that may help block ad tracking, such as About
                    Ads at http://optout.aboutads.info/“Log Files” track actions
                    occurring on the Website, and collect data including your IP
                    address, browser type, Internet service provider,
                    referring/exit pages, and date/time stamps.
                  </li>
                  <li>
                    “Analytics” are tools we use, such as Google Analytics, to
                    help provide us with information about traffic to our
                    Website. These services use the data collected to track and
                    monitor the use of our Website, which it shares with other
                    services and websites who use the collected data to
                    contextualize and personalize the ads of its own advertising
                    network.
                  </li>
                  <li>
                    “Mobile Application Technologies” and mobile devices may
                    automatically provide us with information about your device,
                    your phone number, and your physical location if you access
                    our Website through a mobile device.
                  </li>
                </ol>
              </Text>
            </li>
            <li>
              <strong>Information We May Receive from Third Parties</strong>
              <Text>
                We may collect additional Information about you from third-party
                websites, social media platforms, such as, but not limited to
                Facebook, Twitter, Instagram, SnapChat (“Social Media
                Platforms”), and/or sources providing publicly-available
                information (e.g., from the U.S. Postal Service) to help us
                provide services to you, help prevent fraud, and for marketing
                and advertising purposes.
              </Text>
              <Text>
                Information we may access about you, with your consent, may
                include, but is not limited to, your basic Social Media Platform
                information, your location data, your list of contacts, friends
                or followers and certain information about your activities on
                the Social Media Platform. Please keep in mind that when you
                provide Information to us on a third-party website or platform,
                the Information you provide may be separately collected by the
                third-party website or the Social Media Platform.
              </Text>
              <Text>
                The Information we collect is covered by this Website Privacy
                Policy, and the Information the third-party website or Social
                Media Platform collects is subject to the third-party website or
                platform’s privacy policies. We encourage you to be aware when
                you leave our sites or applications and to read the privacy
                policies of other sites that may collect your Information.
              </Text>
            </li>
          </ol>
        </Text>
        <H2>II. HOW WE USE YOUR PERSONAL INFORMATION</H2>
        <Text>
          <ol type="A">
            <li>
              <strong>Use and Purpose of Processing Your Information</strong>
              <Text>
                We use and process your Information for things that may include,
                but are not limited to, the following:
              </Text>
              <Text>
                <ul>
                  <li>
                    Provide you with the Website’s Services and related
                    products, promotions, newsletters, and information you
                    request;
                  </li>
                  <li>
                    To respond to your inquiries and provide you with requested
                    information and other communications, including by email or
                    text messages, and including alerts, notification of
                    promotions, contests, and events;
                  </li>
                  <li>
                    For marketing and advertising purposes, including sending
                    you promotional material or special offers on our behalf or
                    on behalf of our marketing partners and/or their respective
                    affiliates and subsidiaries and other third parties,
                    provided that you have not already opted-out of receiving
                    such communications;
                  </li>
                  <li> To fulfill contracts we have with you; </li>
                  <li>
                    To manage, improve and foster relationships with third-party
                    service providers, including vendors, suppliers, and
                    parents, affiliates, subsidiaries, and business partners;
                  </li>
                  <li>
                    Maintain, improve, customize, or administer the Services,
                    perform business analyses, or other internal purposes to
                    improve the quality of our business, the Services, resolve
                    technical problems, or improve security or develop other
                    products and services;
                  </li>
                  <li> Comply with our Terms and Conditions of Use; </li>
                  <li>
                    Analytics for business purposes and business intelligence;
                  </li>
                  <li>
                    Comply with any applicable laws and regulations and respond
                    to lawful requests; and/or
                  </li>
                  <li>
                    For any other purposes disclosed to you at the time we
                    collect your Information and/or pursuant to your consent.
                  </li>
                </ul>
              </Text>
            </li>
            <li>
              <strong>Sharing Your Information</strong>
              <Text>
                We may disclose anonymized aggregated information about our
                users, that does not identify any individual, without any
                restriction.
              </Text>
              <Text>
                We may share your Information as set forth in the Website
                Privacy Policy and in the following circumstances:
              </Text>
              <Text>
                <ul>
                  <li>
                    <strong>Third-Party Service Providers.</strong>  We may
                    share your Information with third-party service providers
                    that perform certain functions or services on our behalf
                    (such as to host the Services, fulfill orders, provide
                    products and services, manage databases, perform analyses,
                    process credit card payments, provide customer service, or
                    send communications for us). These third-party service
                    providers are authorized to use your Information only as
                    necessary to provide these services to us. In some
                    instances, we may aggregate Information we collect so third
                    parties do not have access to your particular Information to
                    identify you individually.
                  </li>
                  <li>
                    <strong>
                      Disclosure of Information for Legal and Administrative
                      Reasons.
                    </strong>
                     We may disclose your Information without notice: (i) when
                    required by law or to comply with a court order, subpoena,
                    search warrant, or other legal process; (ii) to cooperate or
                    undertake an internal or external investigation or audit;
                    (iii) to comply with legal, regulatory or administrative
                    requirements of governmental authorities (including, without
                    limitation, requests from the governmental agency
                    authorities to view your Information); (iv) to protect and
                    defend the rights, property or safety of us, our
                    subsidiaries and affiliates and any of their officers,
                    directors, employees, attorneys, agents, contractors and
                    partners, and the Website Service users; (v) to enforce or
                    apply our Terms &amp; Conditions; and (vi) to verify the
                    identity of the user of our Services.
                  </li>
                  <li>
                    <strong>Business Transfers.</strong> Your Information may be
                    transferred, sold or otherwise conveyed (“Conveyed”) to a
                    third party where we: (i) merge with or are acquired by
                    another business entity; (ii) sell all or substantially all
                    of our assets; (iii) are adjudicated bankrupt; or (iv) are
                    liquidated or otherwise reorganize. You agree to any and all
                    such Conveyances of your Information.
                  </li>
                  <li>
                    <strong>
                      Information Shared with our Subsidiaries and Affiliates.
                    </strong>
                    We may share your Information with our subsidiaries and
                    affiliates. If you do not want us to share your Information
                    with your subsidiaries and affiliates, please email us at
                    Contact@LiveResinProject.com.
                  </li>
                  <li>
                    <strong>
                      Online Communications (Chat Rooms, Forums, Contests,
                      Message Boards).
                    </strong>
                    If you correspond with us by email, questionnaires, surveys,
                    social media, or other digital online platform, we may
                    retain such correspondence and the Information contained in
                    it and use it to respond to your inquiry. Our Services may
                    include chat rooms, forums, and message boards that are
                    available to you and other users. You are not required to
                    provide any Information when using these areas, but you may
                    choose to do so. If you post personal Information online,
                    you agree you have no expectation of privacy concerning that
                    Information, that it will be publicly available and that you
                    may receive unsolicited messages from other parties. We
                    cannot ensure the security of any Information you choose to
                    make public in a chat room, forum, or message board. Also,
                    we cannot ensure that parties who have access to such
                    publicly available Information will respect your privacy.
                    Please exercise caution when deciding to disclose
                    Information in these areas. To request removal of your
                    personal Information from our blog or community forum,
                    contact us at Contact@ShopBotanist.com. In some cases, we
                    may not be able to remove your Information, in which case we
                    will let you know if we are unable to do so and why.
                  </li>
                  <li>
                    <strong>With Your Consent.</strong> We may share Information
                    consistent with this Website Privacy Policy with your
                    consent.
                  </li>
                </ul>
              </Text>
            </li>
          </ol>
        </Text>
        <H2>III. LINKS TO OTHER WEBSITES</H2>
        <Text>
          Our Services may contain links to other websites or services that are
          not owned or controlled by us, including links to Social Media
          Platforms such as Facebook, Instagram, Twitter and SnapChat, or may
          redirect you off our website away from our Services to other websites
          for information, other services, or to receive special offers,
          contests, games, sweepstakes, or for transactions or purchases.  
        </Text>
        <Text>
          For example, if you “click” on a banner advertisement, the “click” may
          take you off our Services and onto a different website.  This includes
          links from advertisers, sponsors and marketing partners that may
          use our website’s logo as part of a co-branding agreement.  These
          other websites may send their own cookies to you, independently
          collect data or solicit personal Information and may or may not have
          their own published privacy policies.  If you visit a website that is
          linked to our Services, you should consult that website’s privacy
          policy before providing any Information. 
        </Text>
        <Text>
          This Privacy Policy only applies to Information collected by
          our Services.  We are not responsible for the privacy and security
          practices of those other websites or Social Media Platforms or
          the Information they may collect (which may include IP address).  You
          should contact such third parties directly to determine their
          respective privacy policies.  Links to any other website’s or content
          do not constitute or imply an endorsement or recommendation by us of
          the linked website, Social Media Platform, and/or content.
        </Text>
        <H2>IV. INFORMATION SECURITY</H2>
        <Text>
          We use industry-standard procedures and various technical,
          administrative and physical safeguards to help protect the
          confidentiality of your Information. However, you should assume that
          no data transmitted over the Internet or stored or maintained by us or
          our third-party service providers can be 100% secure. Therefore,
          although we believe the measures implemented by us reduce the
          likelihood of security problems to a level appropriate to the type of
          data involved, we do not promise or guarantee, and you should not
          expect, that your Information or private communications will always
          remain private or secure. We do not guarantee that your Information
          will not be misused by third parties.  We are not responsible for the
          circumvention of any privacy settings or security features. You agree
          that we will not have any liability for misuse, access, acquisition,
          deletion, or disclosure of your Information.
        </Text>
        <Text>
          If you believe that your Information has been access or acquired by an
          unauthorized person, you shall promptly Contact Us so that necessary
          measures can be taken.
        </Text>
        <H2>V. DATA RETENTION</H2>
        <Text>
          We will retain your Information for as long as needed to provide you
          Services. If you wish to cancel your account or request that we no
          longer use your Information to provide you Services, please contact us
          at Contact@LiveResinProject.com. We will retain and use your
          Information as necessary to comply with our legal obligations, resolve
          disputes, and enforce our agreements. In accordance with our routine
          record keeping, we may delete certain records that contact Information
          you have submitted to us. We are under no obligation to store such
          Information indefinitely and disclaim any liability arising out of, or
          related to, the destruction of such Information.{" "}
        </Text>
        <H2>VI. OUR RIGHT TO CONTACT YOU</H2>
        <Text>
          You agree that we, or third-party service providers with whom we
          collaborate, may communicate with you regarding our Services via
          electronic messages, including email, text message, or mobile push
          notification to, for example, send you information relating to our
          products and Services that we think may be of interest to you,
          communicate with you about contests, sweepstakes, offers, promotions,
          rewards, upcoming events, and other news about products and services
          provided by or through us through permissible targeted advertisements
          offered by us, our parent companies, our subsidiaries, our affiliates,
          and other business partners. See Your Choices, below, for how you can
          update the way we contact you.
        </Text>
        <H2>VII. YOUR CHOICES</H2>
        <Text>
          <ol type="a">
            <li>
              <strong>Email.</strong> By using our Website and Services, you
              agree that we may contact you by email as set forth herein. If you
              do not want to receive marketing and promotional emails from us,
              you may click on the “unsubscribe” link in the email to
              unsubscribe and opt-out of marketing email communications or
              Contact Us.{" "}
            </li>
            <li>
              <strong>Text Messages.</strong>  By using our Services, you agree
              to be reached by text message. If you no longer want to receive
              text messages from us, reply STOP (or as otherwise instructed) in
              the text message or Contact Us.{" "}
            </li>
            <li>
              <strong>Location Choices.</strong> You can change the privacy
              settings of your device at any time to turn off the sharing of
              location information with our Services. If you choose to turn off
              location services, this could affect certain features or services
              of our Services. If you have specific questions about the privacy
              settings of your device, we suggest you contact the manufacturer
              of your device or your mobile service provider for help.{" "}
            </li>
            <li>
              <strong>Opting Out of Direct Marketing.</strong> To exercise
              choices regarding the marketing information you receive, you may
              also review the following links:
              <Text>
                <ul>
                  <li>
                    {" "}
                    You may opt-out of tracking and receiving tailored
                    advertisements on your mobile device by some mobile
                    advertising companies and other similar entities by
                    downloading the App Choices app at
                    www.aboutads.info/appchoices.{" "}
                  </li>
                  <li>
                    {" "}
                    You may opt-out of receiving permissible targeted
                    advertisements by using the NAI Opt-out tool available at
                    http://optout.networkadvertising.org/?c=1 or visiting About
                    Ads at http://optout.aboutads.info.{" "}
                  </li>
                  <li>
                    {" "}
                    You can opt-out of having your activity on our Services made
                    available to Google Analytics by installing the Google
                    Analytics opt-out add-on for your web browser by visiting:
                    https://tools.google.com/dlpage/gaoptout for your web
                    browser.{" "}
                  </li>
                </ul>
              </Text>
            </li>
          </ol>
        </Text>
        <H2>VIII. ACCESSING, CORRECTING, OR DELETING YOUR INFORMATION</H2>
        <Text>
          Upon request, subject to certain exceptions and limitations, we will
          inform you of the existence, use and disclosure of your Information
          and will provide you access to that Information.
        </Text>
        <Text>
          We encourage you to review, update, and correct Information that we
          maintain about you, and you may request that we delete Information
          about you that is inaccurate, incomplete, or irrelevant. We may not
          accommodate a request to change Information if we believe the change
          would violate applicable law in our control.
        </Text>
        <Text>
          To access, correct, or delete your Information, contact us at:
          <table>
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
        <H2>IX. CHILDREN'S INFORMATION</H2>
        <Text>
          The Website is not intended for individuals under the age of 21 years
          of age.
        </Text>
        <Text>
          If we become aware that a user is under thirteen (13) (or a higher age
          threshold where applicable) and has provided us with Information, we
          will take steps to comply with any applicable legal requirement to
          remove such Information. Contact us if you believe that we have
          mistakenly or unintentionally collected Information from a child under
          the age of thirteen (13).
        </Text>
        <H2>X. CHANGES TO THIS WEBSITE PRIVACY POLICY</H2>
        <Text>
          We reserve the right to change, modify or amend this Website Privacy
          Policy at any time to reflect changes in our products and service
          offerings, accommodate new technologies, regulatory requirements or
          other purposes. If we modify our Website Privacy Policy, we will
          update the “Effective Date” and such changes will be effective upon
          posting. It is your obligation to check our current Website Privacy
          Policy for any changes.
        </Text>
        <H2>XI. HOW TO CONTACT US</H2>
        <Text>
          If you have any questions about this Website Privacy Policy or the
          Information we have collected about you, please contact us at the
          following:
          <table>
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
export default PrivacyPage
