import React, { useMemo, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { Images } from "../../constants";
import "./Competencies.scss";
import { BasicTable, RoundedButton } from "../../components";
import allCertificates from "../../assets/json/certificates.json";

const Competencies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const sertificates = [
    {
      imgurl: Images.sqladvance,
      name: "SQL (Advance)",
      company: "HackerRank",
    },
    {
      imgurl: Images.jsasync,
      name: "Javascript Async",
      company: "Codepolitan",
    },
    {
      imgurl: Images.dataengineer,
      name: "Data Engineer",
      company: "Digitalent Profesional Academy - Kominfo",
    },
  ];

  const columns = [
    {
      header: "Title",
      accessorKey: "certificate_name",
    },
    {
      header: "Published Date",
      accessorFn: (row) => `${row.month} ${row.year}`,
    },
    {
      header: "Publisher",
      accessorKey: "publisher",
    },
    {
      header: "Credentials",
      cell: ({ row }) => <a href={row.original.link}>open &#8599;</a>,
    },
  ];

  const data = useMemo(() => allCertificates, []);
  const sertificate = sertificates[currentIndex];

  return (
    <>
      <h2 className="head-text">Certificates & Competencies</h2>
      <div className="column">
        <div className="app_certificates-slider">
          {sertificates.length && (
            <>
              <div className="app__sertificates-item app__flex">
                <h4 className="bold-text">{sertificate.name}</h4>
                <img src={sertificate.imgurl} alt={sertificate.name}></img>
                <div className="app__sertificates-content">
                  <div>
                    <h5 className="p-text">{sertificate.company}</h5>
                  </div>
                </div>
                <div className="app__sertificates-btns app__flex">
                  <RoundedButton
                    act={() => {
                      handleClick(
                        currentIndex === 0
                          ? sertificates.length - 1
                          : currentIndex - 1
                      );
                    }}
                    icon={<HiChevronDoubleLeft></HiChevronDoubleLeft>}
                    title={"Previous sertificate"}
                  ></RoundedButton>
                  <RoundedButton
                    act={() => {
                      handleClick(
                        currentIndex === sertificates.length - 1
                          ? 0
                          : currentIndex + 1
                      );
                    }}
                    icon={<HiChevronDoubleRight></HiChevronDoubleRight>}
                    title={"Next sertificate"}
                  ></RoundedButton>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="app_certificates-list">
          <div className="app__sertificates-item">
            <BasicTable data={data} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Competencies, "app__sertificates"),
  "competencies",
  "app__primarybg"
);
