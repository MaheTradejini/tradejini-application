"use client";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleCardClick = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = pdfUrl.split("/").pop();
    link.click();
  };

  const applicationData = [
    {
      title: "Equities, Derivatives and Currency Trading",
      pdfs: [
        {
          title: "Guidance Note",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/1. Guidance Note.pdf",
        },
        {
          title: "Rights And Obligations",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/2. Rights And Obligations.pdf",
        },
        {
          title: "Risk Disclosure Document (RDD)",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/3. Risk Disclosure Document (RDD).pdf",
        },
        {
          title: "Additional RDD for Options",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/4. Additional RDD for Options.pdf",
        },
        {
          title: "Policies And Procedures",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/5. Policies And Procedures.pdf",
        },
        {
          title: "VernacularLanguages",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading//Vernacular Languages/PNP_in_Diff__Languages-1.zip",
        },
      ],
    },
    {
      title: "Commodities Trading",
      pdfs: [
        {
          title: "Guidance Note",
          url: "/files/Application Forms/Commodity Trading/1.  Guidance Note.pdf",
        },
        {
          title: "Rights And Obligations",
          url: "/files/Application Forms/Commodity Trading/2. Rights And Obligations.pdf",
        },
        {
          title: "Risk Disclosure Document (RDD)",
          url: "/files/Application Forms/Commodity Trading/3. Risk Disclosure Document (RDD).pdf",
        },
        {
          title: "Commodity RMS Policy",
          url: "/files/Application Forms/Commodity Trading/4. Commodity RMS Policy.pdf",
        },
        {
          title: "Vernacular Languages",
          url: "/files/Application Forms/Commodity Trading/Vernacular Languages/PNP_in_Diff__Languages-1.zip",
        },
      ],
    },
    {
      title: "Demat",
      pdfs: [
        {
          title: "DDPI Form",
          url: "/files/Application Forms/Demat/1. DDPI Form.pdf",
        },
        {
          title: "Rights And Obligations ",
          url: "/files/Application Forms/Demat/2. Rights And Obligations.pdf",
        },
      ],
    },
  ];

  return (
    <main>
      {/* <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Software
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
         
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800  transform transition duration-500 hover:scale-105 text-center cursor-pointer"
                onClick={() => handleCardClick("/path/to/pdf1.pdf")}
              >
                <HiArrowRightCircle className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">CUBEPLUS</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Application Forms
            </h2>
          </div>
          <div className="flex flex-wrap justify-center mb-8">
            {applicationData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 mb-2 sm:mb-0 text-lg font-semibold rounded w-full sm:w-auto ${
                  activeTab === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {applicationData[activeTab].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center mb-8">
            {applicationData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 mb-2 sm:mb-0 text-lg font-semibold rounded w-full sm:w-auto ${
                  activeTab === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {applicationData[activeTab].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
