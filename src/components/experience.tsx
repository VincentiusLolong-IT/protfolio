'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import './experience.css';

type Company = 'floothink' | 'sketsahouse' | 'lababook';

const companies: Company[] = ['floothink', 'sketsahouse', 'lababook'];

type FloothinkProjectKey =
  | "Suzuki Indonesia"
  | "Suzuki hyperlocal Web Maintanance"
  | "Kementrian Desa (OVP - Online Video Platform)"
  | "Kementrian Kehutanan (Peta Mangroove Nasoinal)"
  | "PT. Indocement (masterumah.id)"
  | "kementrian Desa (Usulan Hibah Milik Negara)"
  | "Bank Indonesia";

type FloothinkProjectDetail = {
  [key in FloothinkProjectKey]: ReactNode;
};
const floothinkProjectDetail: FloothinkProjectDetail = {
    "Kementrian Desa (OVP - Online Video Platform)": <div className='detail-job'>
    <h5>Maintenance</h5>
    <ul>
      <li>Build and maintain ‘Online Video Platform Kemendesa’ using Node.js and Laravel for backend</li>
    </ul>

    <h5>Admin</h5>
    <ul>
      <li>Develop admin dashboard using Vue.js</li>
    </ul>

    <h5>OVP CDN : Video Storage</h5>
    <ul>
      <li>Integrate Object Storage for video and migrate existing data to MinIO (S3-compatible)</li>
      <li>Implement FFMpeg for video compression</li>
      <li>Set up video processing queue using RabbitMQ and Go Language</li>
      <li>Create the Video Storage Service API architecture from scratch</li>
    </ul>
  </div>,
  "Suzuki Indonesia": (
    <div className='detail-job'>
      <h5>Dashboard Development</h5>
      <ul>
        <li>Create Statistic Dashboard CMS (internal application)</li>
      </ul>

      <h5>Maintenance</h5>
      <ul>
        <li>Maintain Web application with CodeIgniter</li>
      </ul>

      <h5>Performance Optimization</h5>
      <ul>
        <li>Image optimization to improve main Suzuki website speed</li>
      </ul>
    </div>
  ),
  "Suzuki hyperlocal Web Maintanance": <div className='detail-job'>
    <h5>Maintenance</h5>
    <ul>
      <li>Maintain and update the CMS platform regularly</li>
    </ul>

    <h5>Frontend Management</h5>
    <ul>
      <li>Manage frontend of dealer websites in 38 provinces across Indonesia</li>
      <li>Ensure websites look good and work well for users</li>
    </ul>

    <h5>Issue Resolution & Performance</h5>
    <ul>
      <li>Fix bugs and issues on both frontend and backend</li>
      <li>Improve website speed and performance for a better user experience</li>
    </ul>
  </div>,
  "Kementrian Kehutanan (Peta Mangroove Nasoinal)": <div className='detail-job'>
  <h5>API Development</h5>
  <ul>
    <li>Create new service API for RBAC (Role-based access control) and Account</li>
    <li>Create Message Mail API using TypeScript and Node.js</li>
  </ul>

  <h5>Web Application</h5>
  <ul>
    <li>Build a Geoportal web application to visualize geospatial data from QGIS</li>
  </ul>

  <h5>Project</h5>
  <ul>
    <li>Mangrove for Coastal Resilience (M4CR)</li>
  </ul>
  </div>,
  "PT. Indocement (masterumah.id)": <div className='detail-job'>
  <h5>API Development</h5>
  <ul>
    <li>Develop new features and maintain existing API codebase</li>
  </ul>

  <h5>Frontend & CMS</h5>
  <ul>
    <li>Develop and maintain CMS and User application with NuxtJS</li>
    <li>Handle server-side implementations for the frontend</li>
  </ul>

  <h5>Video Processing</h5>
  <ul>
    <li>Build an FFmpeg queue service with Laravel for automated video optimization and migration</li>
  </ul>

  <h5>Performance Optimization</h5>
  <ul>
    <li>Optimize website speed and performance</li>
  </ul>
  </div>,
  "kementrian Desa (Usulan Hibah Milik Negara)": <div className='detail-job'>
  <h5>System Development</h5>
  <ul>
    <li>Create Information System Management using Laravel</li>
    <li>Create Dynamic file documentation Insert Data (Word, PDF, XLSX, Web)</li>
  </ul>

  <h5>Documentation</h5>
  <ul>
    <li>Structure and export project documentation</li>
  </ul>
  </div>,
  "Bank Indonesia": <div className='detail-job'>
  <h5>System Development</h5>
  <ul>
    <li>Build internal CMS for Vendor Procurement from scratch using Laravel</li>
    <li>Implement RBAC (Role-Based Access Control) for secure CMS access</li>
  </ul>
  </div>,
};

const floothinkProjects: FloothinkProjectKey[] = [
  "Kementrian Desa (OVP - Online Video Platform)",
  "Suzuki Indonesia",
  "Suzuki hyperlocal Web Maintanance",
  "Kementrian Kehutanan (Peta Mangroove Nasoinal)",
  "PT. Indocement (masterumah.id)",
  "kementrian Desa (Usulan Hibah Milik Negara)",
  "Bank Indonesia",
];

interface experieceYear {
    yearStart: number,
    yearEnd: number 
}

type ExperienceYearsDetail = {
  [key in Company]: experieceYear;
};

const experienceYears: ExperienceYearsDetail = {
  "floothink": {
    yearStart: 2023,
    yearEnd: 2025
  },
  "sketsahouse":{
    yearStart: 2021,
    yearEnd:2021
  },
  "lababook": {
    yearStart:2020,
    yearEnd: 2020
  }
}

export default function ExperienceTabs() {
  const [selected, setSelected] = useState<Company>('floothink');

  const detailRefs = useRef<Array<HTMLDetailsElement | null>>([]);
  const listenersMap = useRef(new Map<HTMLDetailsElement, EventListener>());

  function experienceYearCalculate(experienceYears: ExperienceYearsDetail, selected: Company) {
    return experienceYears[selected].yearStart == experienceYears[selected].yearEnd ?
            `${experienceYears[selected].yearStart}`: 
            `${experienceYears[selected].yearStart} - ${experienceYears[selected].yearEnd}`
  }

  useEffect(() => {
    const details = detailRefs.current;
    const localListenersMap = new Map<HTMLDetailsElement, EventListener>();

    details.forEach((detail) => {
      if (detail) {
        const listener = () => {
          if (detail.open) {
            details.forEach((otherDetail) => {
              if (otherDetail && otherDetail !== detail) {
                otherDetail.removeAttribute("open");
              }
            });
          }
        };

        detail.addEventListener("toggle", listener);
        localListenersMap.set(detail, listener);
      }
    });

    listenersMap.current = localListenersMap;

    return () => {
      localListenersMap.forEach((listener, detail) => {
        detail.removeEventListener("toggle", listener);
      });
    };
  }, [selected]);

  useEffect(() => {
    detailRefs.current.forEach((detail) => {
      if (detail) detail.removeAttribute("open");
    });
  }, [selected]);

  return (
    <div className='experience'>
      <div className="experience-main">
        {companies.map((company) => (
          <h2
            key={company}
            className={`experiance-menu ${selected === company ? 'active' : ''}`}
            onClick={() => setSelected(company)}
            style={{ cursor: 'pointer' }}
          >
            {company.charAt(0).toUpperCase() + company.slice(1)}
          </h2>
        ))}
      </div>

      <div className='experience-company'>
        {selected === 'floothink' && (
          <>
            <p className='year'>{experienceYearCalculate(experienceYears, selected)}</p>
            <div className='experience-detail'>
              <h3>Floothink Experience</h3>
              <p>Worked as a Backend Developer for this client, focusing on building and maintaining server-side systems to support the application. :</p>
              {floothinkProjects.map((title, index) => (
                <div key={index}>
                  <h4>{title}</h4>
                  <details ref={(el) => { detailRefs.current[index] = el; }}>
                    <summary>Detail</summary>
                    {floothinkProjectDetail[title]}
                  </details>
                </div>
              ))}
            </div>
          </>
        )}

        {selected === 'sketsahouse' && (
          <>
            <p className='year'>{experienceYearCalculate(experienceYears, selected)}</p>
            <div className='experience-detail'>
              <h3>Sketsahouse Experience</h3>
                  <h4>News Scraping Service</h4>
                  <strong>Scraping</strong>
                  <ul>
                    <li>Build and maintain a news scraping system using Python</li>
                    <li>Integrate MeiliSearch to enable fast and accurate search</li>
                    <li>Manage and store content data using MongoDB</li>
                    <li>Adapt to changing website structures by updating scraping logic</li>
                  </ul>
            </div>
          </>
        )}

        {selected === 'lababook' && (
          <>
            <p className='year'>{experienceYearCalculate(experienceYears, selected)}</p>
            <div className='experience-detail'>
              <h3>Lababook Experience</h3>
                  <h4>LabaBook App</h4>
                  <strong>Maintenance</strong>
                  <ul>
                    <li>Maintain application flow to follow business processes</li>
                  </ul>
                  <strong>Feature Development</strong>
                  <ul>
                    <li>Add new features to improve user experience in the LabaBook App</li>
                  </ul>
                  <strong>Validation</strong>
                  <ul>
                    <li>Ensure all user input is validated before being sent to the backend</li>
                  </ul>
                  <strong>Architecture</strong>
                  <ul>
                    <li>Implement BLoC for structured state management</li>
                    <li>Use Freezed for generating consistent and error-free code</li>
                  </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
