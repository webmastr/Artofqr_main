// pages/privacy-policy.js
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const sections = [
    { id: "what-information", title: "1. WHAT INFORMATION DO WE COLLECT?" },
    { id: "how-process", title: "2. HOW DO WE PROCESS YOUR INFORMATION?" },
    { id: "legal-bases", title: "3. WHAT LEGAL BASES DO WE RELY ON?" },
    { id: "share-information", title: "4. WHEN AND WITH WHOM DO WE SHARE?" },
    {
      id: "third-party",
      title: "5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?",
    },
    { id: "cookies", title: "6. DO WE USE COOKIES?" },
    { id: "social-logins", title: "7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?" },
    {
      id: "international",
      title: "8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?",
    },
    { id: "retention", title: "9. HOW LONG DO WE KEEP YOUR INFORMATION?" },
    { id: "security", title: "10. HOW DO WE KEEP YOUR INFORMATION SAFE?" },
    { id: "minors", title: "11. DO WE COLLECT INFORMATION FROM MINORS?" },
    { id: "privacy-rights", title: "12. WHAT ARE YOUR PRIVACY RIGHTS?" },
    { id: "dnt", title: "13. CONTROLS FOR DO-NOT-TRACK FEATURES" },
    {
      id: "california",
      title: "14. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    },
    {
      id: "virginia",
      title: "15. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    },
    { id: "updates", title: "16. DO WE MAKE UPDATES TO THIS NOTICE?" },
    { id: "contact", title: "17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
    {
      id: "review",
      title: "18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA?",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Privacy Policy | ArtofQR.com</title>
        <meta name="description" content="Privacy Policy for ArtofQR.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <motion.div
          className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              ← Back
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-500">Last updated 3/27/25</p>
        </motion.div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <motion.div
          className="md:w-1/4 bg-white p-6 rounded-lg shadow-sm sticky top-8 h-fit"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <nav className="space-y-1">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition ${
                  activeSection === section.id
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {section.title}
              </motion.button>
            ))}
          </nav>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="md:w-3/4 bg-white p-8 rounded-lg shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.section
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              PRIVACY NOTICE
            </h2>
            <p className="text-gray-700 mb-6">
              This privacy notice for ArtofQR.com ("Company," "we," "us," or
              "our"), describes how and why we might collect, store, use, and/or
              share ("process") your information when you use our services
              ("Services"), such as when you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>
                Visit our website at https://artofqr.com, or any website of ours
                that links to this privacy notice
              </li>
              <li>
                Use our application(s), or any other application of ours that
                links to this privacy notice
              </li>
              <li>
                Engage with us in other related ways ― including any sales,
                marketing, or events
              </li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800">
                Questions or concerns? Reading this privacy notice will help you
                understand your privacy rights and choices. If you do not agree
                with our policies and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us
                at info@artofqr.com.
              </p>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              SUMMARY OF KEY POINTS
            </h2>
            <p className="italic text-gray-600 mb-4">
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by using our
              table of contents below to find the section you are looking for.
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>What personal information do we process?</strong> When
                you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with
                ArtofQR.com and the Services, the choices you make, and the
                products and features you use.
              </p>
              <p>
                <strong>
                  Do we process any sensitive personal information?
                </strong>{" "}
                We do not process sensitive personal information.
              </p>
              <p>
                <strong>
                  Do you receive any information from third parties?
                </strong>{" "}
                We may receive information from public databases, marketing
                partners, social media platforms, and other outside sources.
              </p>
              <p>
                <strong>How do you process my information?</strong> We process
                your information to provide, improve, and administer our
                Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so.
              </p>
              <p>
                <strong>
                  In what situations and with which types of parties do we share
                  personal information?
                </strong>{" "}
                We may share information in specific situations and with
                specific categories of third parties.
              </p>
              <p>
                <strong>How do we keep your information safe?</strong> We have
                organizational and technical processes and procedures in place
                to protect your personal information. However, no electronic
                transmission over the internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information.
              </p>
              <p>
                <strong>What are your rights?</strong> Depending on where you
                are located geographically, the applicable privacy law may mean
                you have certain rights regarding your personal information.
              </p>
              <p>
                <strong>How do I exercise my rights?</strong> The easiest way to
                exercise your rights is by contacting us. We will consider and
                act upon any request in accordance with applicable data
                protection laws.
              </p>
            </div>
          </motion.section>

          {/* Section 1 */}
          <motion.section
            id="what-information"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Personal information you disclose to us
            </h3>
            <p className="italic text-gray-600 mb-4">
              In Short: We collect personal information that you provide to us.
            </p>
            <p className="mb-4 text-gray-700">
              We collect personal information that you voluntarily provide to us
              when you use our services, express an interest in obtaining
              information about us or our products and Services, when you
              participate in activities on the Services, or otherwise when you
              contact us.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Personal Information Provided by You.</strong> The
              personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Email address</li>
              <li>Name</li>
              <li>Preferences</li>
            </ul>

            <p className="mb-4 text-gray-700">
              <strong>Sensitive Information.</strong> We do not process
              sensitive information.
            </p>

            <p className="mb-4 text-gray-700">
              <strong>Payment Data.</strong> We may collect data necessary to
              process your payment if you make purchases, such as your payment
              instrument number (such as a credit card number), and the security
              code associated with your payment instrument. All payment data is
              stored by stripe. You may find their privacy notice link(s) here:{" "}
              <a
                href="https://stripe.com/privacy"
                className="text-blue-600 hover:underline"
              >
                https://stripe.com/privacy
              </a>
              .
            </p>

            <p className="mb-4 text-gray-700">
              <strong>Social Media Login Data.</strong> We may provide you with
              the option to register with us using your existing social media
              account details, like your Facebook, Twitter, or other social
              media account. If you choose to register in this way, we will
              collect the information described in the section called "HOW DO WE
              HANDLE YOUR SOCIAL LOGINS?" below.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Information automatically collected
            </h3>
            <p className="italic text-gray-600 mb-4">
              In Short: Some information — such as your Internet Protocol (IP)
              address and/or browser and device characteristics — is collected
              automatically when you visit our Services.
            </p>
            <p className="mb-4 text-gray-700">
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p className="mb-4 text-gray-700">
              Like many businesses, we also collect information through cookies
              and similar technologies.
            </p>
            <p className="mb-2 text-gray-700">
              The information we collect includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Log and Usage Data.</strong> Log and usage data is
                service-related, diagnostic, usage, and performance information
                our servers automatically collect when you access or use our
                Services and which we record in log files. Depending on how you
                interact with us, this log data may include your IP address,
                device information, browser type, and settings and information
                about your activity in the Services (such as the date/time
                stamps associated with your usage, pages and files viewed,
                searches, and other actions you take such as which features you
                use), device event information (such as system activity, error
                reports (sometimes called "crash dumps"), and hardware
                settings).
              </li>
              <li>
                <strong>Device Data.</strong> We collect device data such as
                information about your computer, phone, tablet, or other device
                you use to access the Services. Depending on the device used,
                this device data may include information such as your IP address
                (or proxy server), device and application identification
                numbers, location, browser type, hardware model, Internet
                service provider and/or mobile carrier, operating system, and
                system configuration information.
              </li>
              <li>
                <strong>Location Data.</strong> We collect location data such as
                information about your device's location, which can be either
                precise or imprecise. How much information we collect depends on
                the type and settings of the device you use to access the
                Services. For example, we may use GPS and other technologies to
                collect geolocation data that tells us your current location
                (based on your IP address). You can opt out of allowing us to
                collect this information either by refusing access to the
                information or by disabling your Location setting on your
                device. However, if you choose to opt out, you may not be able
                to use certain aspects of the Services.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Information collected from other sources
            </h3>
            <p className="italic text-gray-600 mb-4">
              In Short: We may collect limited data from public databases,
              marketing partners, social media platforms, and other outside
              sources.
            </p>
            <p className="mb-4 text-gray-700">
              To enhance our ability to provide relevant marketing, offers, and
              services to you and update our records, we may obtain information
              about you from other sources, such as public databases, joint
              marketing partners, affiliate programs, data providers, social
              media platforms, and from other third parties. This information
              includes mailing addresses, job titles, email addresses, phone
              numbers, intent data (or user behavior data), Internet Protocol
              (IP) addresses, social media profiles, social media URLs, and
              custom profiles, for purposes of targeted advertising and event
              promotion. If you interact with us on a social media platform
              using your social media account (e.g., Facebook or Twitter), we
              receive personal information about you such as your name, email
              address, and gender. Any personal information that we collect from
              your social media account depends on your social media account's
              privacy settings.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            id="how-process"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We process your information to provide, improve, and
              administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law. We may also process your
              information for other purposes with your consent.
            </p>
            <p className="mb-4 text-gray-700">
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                To facilitate account creation and authentication and otherwise
                manage user accounts. We may process your information so you can
                create and log in to your account, as well as keep your account
                in working order.
              </li>
              <li>
                To deliver and facilitate delivery of services to the user. We
                may process your information to provide you with the requested
                service.
              </li>
              <li>
                To respond to user inquiries/offer support to users. We may
                process your information to respond to your inquiries and solve
                any potential issues you might have with the requested service.
              </li>
              <li>
                To send administrative information to you. We may process your
                information to send you details about our products and services,
                changes to our terms and policies, and other similar
                information.
              </li>
              <li>
                To fulfill and manage your orders. We may process your
                information to fulfill and manage your orders, payments,
                returns, and exchanges made through the Services.
              </li>
              <li>
                To enable user-to-user communications. We may process your
                information if you choose to use any of our offerings that allow
                for communication with another user.
              </li>
              <li>
                To request feedback. We may process your information when
                necessary to request feedback and to contact you about your use
                of our Services.
              </li>
              <li>
                To send you marketing and promotional communications. We may
                process the personal information you send to us for our
                marketing purposes, if this is in accordance with your marketing
                preferences. You can opt out of our marketing emails at any
                time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?"
                below).
              </li>
              <li>
                To deliver targeted advertising to you. We may process your
                information to develop and display personalized content and
                advertising tailored to your interests, location, and more.
              </li>
              <li>
                To protect our Services. We may process your information as part
                of our efforts to keep our Services safe and secure, including
                fraud monitoring and prevention.
              </li>
              <li>
                To identify usage trends. We may process information about how
                you use our Services to better understand how they are being
                used so we can improve them.
              </li>
              <li>
                To determine the effectiveness of our marketing and promotional
                campaigns. We may process your information to better understand
                how to provide marketing and promotional campaigns that are most
                relevant to you.
              </li>
              <li>
                To save or protect an individual's vital interest. We may
                process your information when necessary to save or protect an
                individual's vital interest, such as to prevent harm.
              </li>
            </ul>
          </motion.section>

          {/* Section 3: Legal Bases */}
          <motion.section
            id="legal-bases"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We only process your personal information when we
              believe it is necessary and we have a valid legal reason (i.e.,
              legal basis) to do so under applicable law, like with your
              consent, to comply with laws, to provide you with services to
              enter into or fulfill our contractual obligations, to protect your
              rights, or to fulfill our legitimate business interests.
            </p>

            <div className="mb-6">
              <p className="mb-4 text-gray-700">
                If you are located in the EU or UK, this section applies to you.
              </p>
              <p className="mb-4 text-gray-700">
                The General Data Protection Regulation (GDPR) and UK GDPR
                require us to explain the valid legal bases we rely on to
                process your personal information. As such, we may rely on the
                following legal bases to process your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Consent.</span> We may process
                  your information if you have given us permission (i.e.,
                  consent) to use your personal information for a specific
                  purpose. You can withdraw your consent at any time.
                </li>
                <li>
                  <span className="font-semibold">
                    Performance of a Contract.
                  </span>{" "}
                  We may process your personal information when we believe it is
                  necessary to fulfill our contractual obligations to you,
                  including providing our Services or at your request prior to
                  entering a contract with you.
                </li>
                <li>
                  <span className="font-semibold">Legitimate Interests.</span>{" "}
                  We may process your information when we believe it is
                  reasonably necessary to achieve our legitimate business
                  interests, and those interests do not outweigh your interests
                  and fundamental rights and freedoms. For example, we may
                  process your personal information for some of the purposes
                  described to:
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-700">
                    <li>
                      Send users information about special offers and discounts
                      on our products and services
                    </li>
                    <li>
                      Develop and display personalized and relevant advertising
                      content for our users
                    </li>
                    <li>
                      Analyze how our services are used so we can improve them
                      to engage and retain users
                    </li>
                    <li>Support our marketing activities</li>
                    <li>
                      Diagnose problems and/or prevent fraudulent activities
                    </li>
                    <li>
                      Understand how our users use our products and services so
                      we can improve user experience
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Legal Obligations.</span> We
                  may process your information where we believe it is necessary
                  for compliance with our legal obligations, such as to
                  cooperate with a law enforcement body or regulatory agency,
                  exercise or defend our legal rights, or disclose your
                  information as evidence in litigation in which we are
                  involved.
                </li>
                <li>
                  <span className="font-semibold">Vital Interests.</span> We may
                  process your information where we believe it is necessary to
                  protect your vital interests or the vital interests of a third
                  party, such as situations involving potential threats to the
                  safety of any person.
                </li>
              </ul>
              <p className="mb-4 text-gray-700">
                In legal terms, we are generally the "data controller" under
                European data protection laws of the personal information
                described in this privacy notice, since we determine the means
                and/or purposes of the data processing we perform. This privacy
                notice does not apply to the personal information we process as
                a "data processor" on behalf of our customers. In those
                situations, the customer that we provide services to and with
                whom we have entered into a data processing agreement is the
                "data controller" responsible for your personal information, and
                we merely process your information on their behalf in accordance
                with your instructions. If you want to know more about our
                customers' privacy practices, you should read their privacy
                policies and direct any questions you have to them.
              </p>
            </div>

            <div className="mb-6">
              <p className="mb-4 text-gray-700">
                If you are in Canada, this section applies to you.
              </p>
              <p className="mb-4 text-gray-700">
                We may process your information if you have given us specific
                permission (i.e., express consent) to use your personal
                information for a specific purpose, or in situations where your
                permission can be inferred (i.e., implied consent). You can
                withdraw your consent at any time.
              </p>
              <p className="mb-4 text-gray-700">
                In some exceptional cases, we may be legally permitted under
                applicable law to process your information without your consent,
                including, for example:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  If collection is clearly in the interests of an individual and
                  consent cannot be obtained in a timely way
                </li>
                <li>For investigations and fraud detection and prevention</li>
                <li>
                  For business transactions provided certain conditions are met
                </li>
                <li>
                  If it is contained in a witness statement and the collection
                  is necessary to assess, process, or settle an insurance claim
                </li>
                <li>
                  For identifying injured, ill, or deceased persons and
                  communicating with next of kin
                </li>
                <li>
                  If we have reasonable grounds to believe an individual has
                  been, is, or may be victim of financial abuse
                </li>
                <li>
                  If it is reasonable to expect collection and use with consent
                  would compromise the availability or the accuracy of the
                  information and the collection is reasonable for purposes
                  related to investigating a breach of an agreement or a
                  contravention of the laws of Canada or a province
                </li>
                <li>
                  If disclosure is required to comply with a subpoena, warrant,
                  court order, or rules of the court relating to the production
                  of records
                </li>
                <li>
                  If it was produced by an individual in the course of their
                  employment, business, or profession and the collection is
                  consistent with the purposes for which the information was
                  produced
                </li>
                <li>
                  If the collection is solely for journalistic, artistic, or
                  literary purposes
                </li>
                <li>
                  If the information is publicly available and is specified by
                  the regulations
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Section 4: Information Sharing */}
          <motion.section
            id="share-information"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We may share information in specific situations
              described in this section and/or with the following categories of
              third parties.
            </p>

            <div className="mb-6">
              <p className="mb-4 text-gray-700">
                Vendors, Consultants, and Other Third-Party Service Providers.
                We may share your data with third-party vendors, service
                providers, contractors, or agents ("third parties") who perform
                services for us or on our behalf and require access to such
                information to do that work. We have contracts in place with our
                third parties, which are designed to help safeguard your
                personal information. This means that they cannot do anything
                with your personal information unless we have instructed them to
                do it. They will also not share your personal information with
                any organization apart from us. They also commit to protect the
                data they hold on our behalf and to retain it for the period we
                instruct. The categories of third parties we may share personal
                information with are as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <li>Ad Networks</li>
                <li>Affiliate Marketing Programs</li>
                <li>Cloud Computing Services</li>
                <li>Communication & Collaboration Tools</li>
                <li>Data Analytics Services</li>
                <li>Data Storage Service Providers</li>
                <li>Finance & Accounting Tools</li>
                <li>Government Entities</li>
                <li>Order Fulfillment Service Providers</li>
                <li>Payment Processors</li>
                <li>Performance Monitoring Tools</li>
                <li>Product Engineering & Design Tools</li>
                <li>Retargeting Platforms</li>
                <li>Sales & Marketing Tools</li>
                <li>Social Networks</li>
                <li>Testing Tools</li>
                <li>User Account Registration & Authentication Services</li>
                <li>Website Hosting Service Providers</li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="mb-4 text-gray-700">
                We also may need to share your personal information in the
                following situations:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Business Transfers.</span> We
                  may share or transfer your information in connection with, or
                  during negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business
                  to another company.
                </li>
                <li>
                  <span className="font-semibold">
                    When we use Google Maps Platform APIs.
                  </span>{" "}
                  We may share your information with certain Google Maps
                  Platform APIs (e.g., Google Maps API, Places API). To find out
                  more about Google's Privacy Policy, please refer to this{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    link
                  </a>
                  . We use certain Google Maps Platform APIs to retrieve certain
                  information when you make location-specific requests. A full
                  list of what we use information for can be found in this
                  section and in the previous section titled "HOW DO WE PROCESS
                  YOUR INFORMATION?". We obtain and store on your device
                  ('cache') your location. The Google Maps Platform APIs that we
                  use store and access cookies and other information on your
                  devices.
                </li>
                <li>
                  <span className="font-semibold">Affiliates.</span> We may
                  share your information with our affiliates, in which case we
                  will require those affiliates to honor this privacy notice.
                  Affiliates include our parent company and any subsidiaries,
                  joint venture partners, or other companies that we control or
                  that are under common control with us.
                </li>
                <li>
                  <span className="font-semibold">Business Partners.</span> We
                  may share your information with our business partners to offer
                  you certain products, services, or promotions.
                </li>
                <li>
                  <span className="font-semibold">Other Users.</span> When you
                  share personal information or otherwise interact with public
                  areas of the Services, such personal information may be viewed
                  by all users and may be publicly made available outside the
                  Services in perpetuity. If you interact with other users of
                  our Services and register for our Services through a social
                  network (such as Facebook), your contacts on the social
                  network will see your name, profile photo, and descriptions of
                  your activity. Similarly, other users will be able to view
                  descriptions of your activity, communicate with you within our
                  Services, and view your profile.
                </li>
                <li>
                  <span className="font-semibold">Offer Wall.</span> Our
                  application(s) may display a third-party hosted "offer wall."
                  Such an offer wall allows third-party advertisers to offer
                  virtual currency, gifts, or other items to users in return for
                  the acceptance and completion of an advertisement offer. Such
                  an offer wall may appear in our application(s) and be
                  displayed to you based on certain data, such as your
                  geographic area or demographic information. When you click on
                  an offer wall, you will be brought to an external website
                  belonging to other persons and will leave our application(s).
                  A unique identifier, such as your user ID, will be shared with
                  the offer wall provider to prevent fraud and properly credit
                  your account with the relevant reward.
                </li>
              </ul>
            </div>
          </motion.section>
          <motion.section
            id="third-party"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We are not responsible for the safety of any information
              that you share with third parties that we may link to or who
              advertise on our Services, but are not affiliated with, our
              Services.
            </p>
            <p className="text-gray-700 mb-4">
              The Services, including offers, may link to third-party websites,
              online services, or mobile applications and/or contain
              advertisements from third parties that are not affiliated with us
              and which may link to other websites, services, or applications.
              Accordingly, we do not make any guarantee regarding any such third
              parties, and we will not be liable for any loss or damage caused
              using such third-party websites, services, or applications. The
              inclusion of a link towards a third-party website, service, or
              application does not imply an endorsement by us. We cannot
              guarantee the safety and privacy of data you provide to any third
              parties. Any data collected by third parties is not covered by
              this privacy notice. We are not responsible for the content or
              privacy and security practices and policies of any third parties,
              including other websites, services, or applications that may be
              linked to or from the Services. You should review the policies of
              such third parties and contact them directly to respond to your
              questions.
            </p>
          </motion.section>

          {/* For brevity, I'm only showing a few sections fully. In a real implementation, all sections would be fleshed out */}

          <motion.section
            id="cookies"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We may use cookies and other tracking technologies to
              collect and store your information.
            </p>
            <p className="text-gray-700 mb-4">
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information.
            </p>
          </motion.section>
          <motion.section
            id="social-logins"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: If you choose to register or log in to our services
              using a social media account, we may have access to certain
              information about you.
            </p>
            <p className="text-gray-700 mb-4">
              Our Services offer you the ability to register and log in using
              your third-party social media account details (like your Facebook
              or Twitter logins). Where you choose to do this, we will receive
              certain profile information about you from your social media
              provider. The profile information we receive may vary depending on
              the social media provider concerned, but will often include your
              name, email address, friends list, and profile picture, as well as
              other information you choose to make public on such a social media
              platform. If you log in using Facebook, we may also request access
              to other permissions related to your account, such as your
              friends, check-ins, and likes, and you may choose to grant or deny
              us access to each individual permission.
            </p>
            <p className="text-gray-700 mb-4">
              We will use the information we receive only for the purposes that
              are described in this privacy notice or that are otherwise made
              clear to you on the relevant Services. Please note that we do not
              control, and are not responsible for, other uses of your personal
              information by your third-party social media provider. We
              recommend that you review their privacy notice to understand how
              they collect, use and share your personal information, and how you
              can set your privacy preferences on their sites and apps.
            </p>
          </motion.section>

          <motion.section
            id="international-transfers"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We may transfer, store, and process your information in
              countries other than your own.
            </p>
            <p className="text-gray-700 mb-4">
              Our servers are in the cloud and across the world. If you are a
              resident in the European Economic Area (EEA) or United Kingdom
              (UK), then these countries may not necessarily have data
              protection laws or other similar laws as comprehensive as those in
              your country. However, we will take all necessary measures to
              protect your personal information in accordance with this privacy
              notice and applicable law.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>
                European Commission's Standard Contractual Clauses:
              </strong>{" "}
              We have implemented measures to protect your personal information,
              including by using the European Commission's Standard Contractual
              Clauses for transfers of personal information between our group
              companies and between us and our third-party providers. These
              clauses require all recipients to protect all personal information
              that they process originating from the EEA or UK in accordance
              with European data protection laws and regulations.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Binding Corporate Rules:</strong> ArtofQR.com adheres to
              and complies with the Privacy Shield Principles when processing
              personal information from the EU, UK, or Switzerland. If we have
              received your personal information in the United States and
              subsequently transfer that information to a third party acting as
              our agent, and such third party agent processes your personal
              information in a manner inconsistent with the Privacy Shield
              Principles, we will remain liable unless we can prove we are not
              responsible for the event giving rise to the damage.
            </p>
            <p className="text-gray-700 mb-4">
              With respect to personal information received or transferred
              pursuant to the Privacy Shield Framework, ArtofQR.com is subject
              to the investigatory and enforcement powers of the US Federal
              Trade Commission ("FTC"). In certain situations, we may be
              required to disclose personal information in response to lawful
              requests by public authorities, including to meet national
              security or law enforcement requirements.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">
                <strong>WHAT INFORMATION DO WE COLLECT?</strong> To learn more
                about the types of personal data ArtofQR.com collects.
              </li>
              <li className="mb-2">
                <strong>HOW DO WE PROCESS YOUR INFORMATION?</strong> To learn
                more about the purposes for which ArtofQR.com collects and uses
                personal information about you.
              </li>
              <li className="mb-2">
                <strong>
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </strong>{" "}
                To learn more about the type or identity of third parties to
                which ArtofQR.com discloses personal information, and the
                purposes for which we do so.
              </li>
              <li className="mb-2">
                <strong>WHAT ARE YOUR PRIVACY RIGHTS?</strong> To learn more
                about the right of individuals to access their personal data.
              </li>
            </ul>
          </motion.section>

          <motion.section
            id="data-retention"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy notice unless
              otherwise required by law.
            </p>
            <p className="text-gray-700 mb-4">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information.
            </p>
            <p className="text-gray-700 mb-4">
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </motion.section>

          <motion.section
            id="information-safety"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures.
            </p>
            <p className="text-gray-700 mb-4">
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </motion.section>

          <motion.section
            id="minors"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>
            <p className="text-gray-700 mb-4">
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent's use of the Services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
            </p>
          </motion.section>

          <motion.section
            id="privacy-rights"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. WHAT ARE YOUR PRIVACY RIGHTS?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: In some regions, such as the European Economic Area
              (EEA), United Kingdom (UK), and Canada, you have rights that allow
              you greater access to and control over your personal information.
              You may review, change, or terminate your account at any time.
            </p>
            <p className="text-gray-700 mb-4">
              In some regions (like the EEA, UK, and Canada), you have certain
              rights under applicable data protection laws. These may include
              the right (i) to request access and obtain a copy of your personal
              information, (ii) to request rectification or erasure; (iii) to
              restrict the processing of your personal information; and (iv) if
              applicable, to data portability. In certain circumstances, you may
              also have the right to object to the processing of your personal
              information. You can make such a request by contacting us by using
              the contact details provided in the section "HOW CAN YOU CONTACT
              US ABOUT THIS NOTICE?" below.
            </p>
            <p className="text-gray-700 mb-4">
              We will consider and act upon any request in accordance with
              applicable data protection laws.
            </p>
            <p className="text-gray-700 mb-4">
              If you are located in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your local data protection supervisory
              authority. You can find their contact details here:{" "}
              <a
                href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                className="text-blue-600 hover:underline"
              >
                https://edpb.europa.eu/about-edpb/about-edpb/members_en
              </a>
              .
            </p>
            <p className="text-gray-700 mb-4">
              If you are in Switzerland, the contact details for the data
              protection authorities are available here:{" "}
              <a
                href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                className="text-blue-600 hover:underline"
              >
                https://www.edoeb.admin.ch/edoeb/en/home.html
              </a>
              .
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Withdrawing your consent:</strong> If we are relying on
              your consent to process your personal information, which may be
              express and/or implied consent depending on the applicable law,
              you have the right to withdraw your consent at any time. You can
              withdraw your consent at any time by contacting us by using the
              contact details provided in the section "HOW CAN YOU CONTACT US
              ABOUT THIS NOTICE?" below or updating your preferences.
            </p>
            <p className="text-gray-700 mb-4">
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal, nor when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>
                Opting out of marketing and promotional communications:
              </strong>{" "}
              You can unsubscribe from our marketing and promotional
              communications at any time by clicking on the unsubscribe link in
              the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the
              SMS messages that we send, or by contacting us using the details
              provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
              NOTICE?" below. You will then be removed from the marketing lists
              — however, we may still communicate with you, for example to send
              you service-related messages that are necessary for the
              administration and use of your account, to respond to service
              requests, or for other non-marketing purposes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Account Information:</strong> Upon your request to
              terminate your account, we will deactivate or delete your account
              and information from our active databases. However, we may retain
              some information in our files to prevent fraud, troubleshoot
              problems, assist with any investigations, enforce our legal terms
              and/or comply with applicable legal requirements.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cookies and similar technologies:</strong> Most Web
              browsers are set to accept cookies by default. If you prefer, you
              can usually choose to set your browser to remove cookies and to
              reject cookies. If you choose to remove cookies or reject cookies,
              this could affect certain features or services of our Services. To
              opt out of interest-based advertising by advertisers on our
              Services visit{" "}
              <a
                href="http://www.aboutads.info/choices/"
                className="text-blue-600 hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>
          </motion.section>
          <motion.section
            id="cookies"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h2>

            <p className="text-gray-700 mb-4">
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (“DNT”) feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
          </motion.section>
          {/* Section 14 - California Privacy Rights */}
          <motion.section
            id="california"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </p>
            <p className="text-gray-700 mb-4">
              California Civil Code Section 1798.83, also known as the "Shine
              The Light" law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </p>
            <p className="text-gray-700 mb-4">
              If you are under 18 years of age, reside in California, and have a
              registered account with Services, you have the right to request
              removal of unwanted data that you publicly post on the Services.
              To request removal of such data, please contact us using the
              contact information provided below and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Services, but please be aware that the data may not be
              completely or comprehensively removed from all our systems (e.g.,
              backups, etc.).
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              CCPA Privacy Notice
            </h3>
            <p className="text-gray-700 mb-4">
              The California Code of Regulations defines a "resident" as:
            </p>
            <ol className="mb-4 pl-8 list-decimal text-gray-700">
              <li>
                every individual who is in the State of California for other
                than a temporary or transitory purpose and
              </li>
              <li>
                every individual who is domiciled in the State of California who
                is outside the State of California for a temporary or transitory
                purpose
              </li>
            </ol>
            <p className="text-gray-700 mb-4">
              All other individuals are defined as "non-residents."
            </p>
            <p className="text-gray-700 mb-4">
              If this definition of "resident" applies to you, we must adhere to
              certain rights and obligations regarding your personal
              information.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              What categories of personal information do we collect?
            </h3>
            <p className="text-gray-700 mb-4">
              We have collected the following categories of personal information
              in the past twelve (12) months:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">
                      Category
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">
                      Examples
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">
                      Collected
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      A. Identifiers
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Contact details, such as real name, alias, postal address,
                      telephone or mobile contact number, unique personal
                      identifier, online identifier, Internet Protocol address,
                      email address, and account name
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      B. Personal information categories listed in the
                      California Customer Records statute
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Name, contact information, education, employment,
                      employment history, and financial information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      C. Protected classification characteristics under
                      California or federal law
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Gender and date of birth
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      D. Commercial information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Transaction information, purchase history, financial
                      details, and payment information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      E. Biometric information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Fingerprints and voiceprints
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      F. Internet or other similar network activity
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Browsing history, search history, online behavior,
                      interest data, and interactions with our and other
                      websites, applications, systems, and advertisements
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      G. Geolocation data
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Device location
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      H. Audio, electronic, visual, thermal, olfactory, or
                      similar information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Images and audio, video or call recordings created in
                      connection with our business activities
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      I. Professional or employment-related information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Business contact details in order to provide you our
                      services at a business level or job title, work history,
                      and professional qualifications if you apply for a job
                      with us
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      J. Education Information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Student records and directory information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      K. Inferences drawn from other personal information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Inferences drawn from any of the collected personal
                      information listed above to create a profile or summary
                      about, for example, an individual's preferences and
                      characteristics
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      L. Sensitive personal information
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      Account login information, drivers' licenses, health data,
                      precise geolocation, racial or ethnic origin, religious or
                      philosophical beliefs, and sex life or sexual orientation
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      YES
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              How do we use and share your personal information?
            </h3>
            <p className="text-gray-700 mb-4">
              ArtofQR.com collects and shares your personal information through:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Targeting cookies/Marketing cookies</li>
              <li>Social media cookies</li>
              <li>Beacons/Pixels/Tags</li>
              <li>Click redirects</li>
              <li>
                Social media plugins. We use social media features, such as a
                "Like" button, and widgets, such as a "Share" button in our
                Services. Such features may process your Internet Protocol (IP)
                address and track which page you are visiting on our website. We
                may place a cookie to enable the feature to work correctly. If
                you are logged in on a certain social media platform and you
                interact with a widget or button belonging to that social media
                platform, this information may be recorded to your profile of
                such social media platform. To avoid this, you should log out
                from that social media platform before accessing or using the
                Services. Social media features and widgets may be hosted by a
                third party or hosted directly on our Services. Your
                interactions with these features are governed by the privacy
                notices of the companies that provide them. By clicking on one
                of these buttons, you agree to the use of this plugin and
                consequently the transfer of personal information to the
                corresponding social media service. We have no control over the
                essence and extent of these transmitted data or their additional
                processing.
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              If you are using an authorized agent to exercise your right to opt
              out we may deny a request if the authorized agent does not submit
              proof that they have been validly authorized to act on your
              behalf.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Will your information be shared with anyone else?
            </h3>
            <p className="text-gray-700 mb-4">
              We may disclose your personal information with our service
              providers pursuant to a written contract between us and each
              service provider. Each service provider is a for-profit entity
              that processes the information on our behalf, following the same
              strict privacy protection obligations mandated by the CCPA.
            </p>
            <p className="text-gray-700 mb-4">
              We may use your personal information for our own business
              purposes, such as for undertaking internal research for
              technological development and demonstration. This is not
              considered to be "selling" of your personal information.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Your rights with respect to your personal data
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>
                Right to request deletion of the data — Request to delete
              </strong>
            </p>
            <p className="text-gray-700 mb-4">
              You can ask for the deletion of your personal information. If you
              ask us to delete your personal information, we will respect your
              request and delete your personal information, subject to certain
              exceptions provided by law, such as (but not limited to) the
              exercise by another consumer of his or her right to free speech,
              our compliance requirements resulting from a legal obligation, or
              any processing that may be required to protect against illegal
              activities.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Right to be informed — Request to know</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Depending on the circumstances, you have a right to know:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>whether we collect and use your personal information;</li>
              <li>the categories of personal information that we collect;</li>
              <li>
                the purposes for which the collected personal information is
                used;
              </li>
              <li>
                whether we sell or share personal information to third parties;
              </li>
              <li>
                the categories of personal information that we sold, shared, or
                disclosed for a business purpose;
              </li>
              <li>
                the categories of third parties to whom the personal information
                was sold, shared, or disclosed for a business purpose;
              </li>
              <li>
                the business or commercial purpose for collecting, sharing, or
                selling personal information; and
              </li>
              <li>
                the specific pieces of personal information we collected about
                you.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              In accordance with applicable law, we are not obligated to provide
              or delete consumer information that is de-identified in response
              to a consumer request or to re-identify individual data to verify
              a consumer request.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>
                Right to Non-Discrimination for the Exercise of a Consumer's
                Privacy Rights
              </strong>
            </p>
            <p className="text-gray-700 mb-4">
              We will not discriminate against you if you exercise your privacy
              rights.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Verification process</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Upon receiving your request, we will need to verify your identity
              to determine you are the same person about whom we have the
              information in our system. These verification efforts require us
              to ask you to provide information so that we can match it with
              information you have previously provided us. For instance,
              depending on the type of request you submit, we may ask you to
              provide certain information so that we can match the information
              you provide with the information we already have on file, or we
              may contact you through a communication method (e.g., phone or
              email) that you have previously provided to us. We may also use
              other verification methods as the circumstances dictate.
            </p>
            <p className="text-gray-700 mb-4">
              We will only use personal information provided in your request to
              verify your identity or authority to make the request. To the
              extent possible, we will avoid requesting additional information
              from you for the purposes of verification. However, if we cannot
              verify your identity from the information already maintained by
              us, we may request that you provide additional information for the
              purposes of verifying your identity and for security or
              fraud-prevention purposes. We will delete such additionally
              provided information as soon as we finish verifying you.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Other privacy rights</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                You may object to the processing of your personal information.
              </li>
              <li>
                You may request correction of your personal data if it is
                incorrect or no longer relevant, or ask to restrict the
                processing of the information.
              </li>
              <li>
                You can designate an authorized agent to make a request under
                the CCPA on your behalf. We may deny a request from an
                authorized agent that does not submit proof that they have been
                validly authorized to act on your behalf in accordance with the
                CCPA.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Financial Incentives
            </h3>
            <p className="text-gray-700 mb-4">
              "Financial incentive" means a program, benefit, or other offering,
              including payments to consumers as compensation, for the
              disclosure, deletion, sharing, or sale of personal information.
            </p>
            <p className="text-gray-700 mb-4">
              The law permits financial incentives or a price or service
              difference if it is reasonably related to the value of the
              consumer's data. A business must be able to explain how the
              financial incentive or price or service difference is reasonably
              related to the value of the consumer's data. The explanation must
              include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                a good-faith estimate of the value of the consumer's data that
                forms the basis for offering the financial incentive or price or
                service difference; and
              </li>
              <li>
                a description of the method the business used to calculate the
                value of the consumer's data.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              We may decide to offer a financial incentive (e.g., price or
              service difference) in exchange for the retention, sale or sharing
              of a consumer's personal information.
            </p>
            <p className="text-gray-700 mb-4">
              If we decide to offer a financial incentive, we will notify you of
              such financial incentive and explain the price difference, as well
              as material terms of the financial incentive or price of service
              difference, including the categories of personal information that
              are implicated by the financial incentive or price or service
              difference.
            </p>
          </motion.section>

          {/* Section 15 - Virginia Privacy Rights */}
          <motion.section
            id="virginia"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              15. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: Yes, if you are a resident of Virginia, you may be
              granted specific rights regarding access to and use of your
              personal information.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Virginia CDPA Privacy Notice
            </h3>
            <p className="text-gray-700 mb-4">
              Under the Virginia Consumer Data Protection Act (CDPA):
            </p>
            <p className="text-gray-700 mb-4">
              "Consumer" means a natural person who is a resident of the
              Commonwealth acting only in an individual or household context. It
              does not include a natural person acting in a commercial or
              employment context.
            </p>
            <p className="text-gray-700 mb-4">
              "Personal data" means any information that is linked or reasonably
              linkable to an identified or identifiable natural person.
              "Personal data" does not include de-identified data or publicly
              available information.
            </p>
            <p className="text-gray-700 mb-4">
              "Sale of personal data" means the exchange of personal data for
              monetary consideration.
            </p>
            <p className="text-gray-700 mb-4">
              If this definition of "consumer" applies to you, we must adhere to
              certain rights and obligations regarding your personal data.
            </p>
            <p className="text-gray-700 mb-4">
              The information we collect, use, and disclose about you will vary
              depending on how you interact with ArtofQR.com and our Services.
              To find out more, please visit the following sections above:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>1. WHAT INFORMATION DO WE COLLECT?</li>
              <li>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Your rights with respect to your personal data
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                Right to be informed whether or not we are processing your
                personal data
              </li>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccuracies in your personal data</li>
              <li>Right to request deletion of your personal data</li>
              <li>
                Right to obtain a copy of the personal data you previously
                shared with us
              </li>
              <li>
                Right to opt out of the processing of your personal data if it
                is used for targeted advertising, the sale of personal data, or
                profiling in furtherance of decisions that produce legal or
                similarly significant effects
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Verification process
            </h3>
            <p className="text-gray-700 mb-4">
              We may request that you provide additional information reasonably
              necessary to verify you and your consumer's request. If you submit
              the request through an authorized agent, we may need to collect
              additional information to verify your identity before processing
              your request.
            </p>
            <p className="text-gray-700 mb-4">
              Upon receiving your request, we will respond without undue delay,
              but in all cases, within forty-five (45) days of receipt. The
              response period may be extended once by forty-five (45) additional
              days when reasonably necessary. We will inform you of any such
              extension within the initial 45-day response period, together with
              the reason for the extension.
            </p>
          </motion.section>

          {/* Section 16 - Updates to Notice */}
          <motion.section
            id="updates"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              16. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <p className="italic text-gray-600 mb-4">
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <p className="text-gray-700 mb-4">
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
          </motion.section>

          {/* Remaining sections would follow the same pattern... */}
          <motion.section
            id="contact"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-12 scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions or comments about this notice, you may
              contact us at info@ArtofQR.com
            </p>
          </motion.section>

          <motion.section
            id="review"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="scroll-mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h2>
            <p className="text-gray-700 mb-4">
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it in some
              circumstances.
            </p>
          </motion.section>
        </motion.div>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2025 ArtofQR.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
