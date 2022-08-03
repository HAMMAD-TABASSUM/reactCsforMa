import React from "react";
import back from "../../../assets/icons/back.svg";
import email from "../../../assets/icons/email.svg";
import editGreen from "../../../assets/icons/editGreen.svg";
import calender from "../../../assets/icons/calender.svg";
import location from "../../../assets/icons/location.svg";
import time from "../../../assets/icons/time.svg";
import detailsWorkshops from "../../../assets/images/detailsWorkshops.png";
import { Documentation, EducatorsProfile, Question } from "../../../components";
import profile from "../../../assets/images/profilePic.png";
import option from "../../../assets/icons/option.svg";
import document from "../../../assets/icons/document.svg";
import emailIcon from "../../../assets/icons/emailIcon.svg";

export const DetailsWorkShops = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="px-7 pb-7 w-full">
      <div className="flex justify-between border-b p-5">
        <button className="text-gray-400 flex items-center gap-x-2">
          <img src={back} alt="" />
          Back
        </button>
        <div className="flex items-center gap-x-5">
          <span>
            <button
              className="flex items-center gap-x-2 bg-green rounded-lg px-4 py-2"
              onClick={() => setShowModal(true)}
            >
              <img src={email} alt="" />
              Email
            </button>
            {showModal ? (
              <>
                <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl">
                          How to Build a Mobile App Using Data Science
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <div className="flex flex-col gap-y-6">
                          <div className="flex flex-col gap-y-2.5">
                            <label htmlFor="">Subjects</label>
                            <input
                              className="border rounded p-2 outline-none"
                              type="text"
                              placeholder="Type Here"
                            />
                          </div>

                          <div className="flex flex-col gap-y-2.5">
                            <label htmlFor="">Description</label>
                            <textarea
                              className="p-2 border rounded outline-none"
                              placeholder="TypeHere"
                              name=""
                              id=""
                              cols={30}
                              rows={4}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end px-6 pb-6 border-solid border-slate-200 rounded-b gap-x-5">
                        <button
                          className="px-12 text-sm py-3 border rounded"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-blue text-white text-sm px-6 py-3 rounded"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Send Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-blacks"></div>
              </>
            ) : null}
          </span>
          <button className="flex items-center gap-x-2 bg-green rounded-lg px-4 py-2">
            <img src={editGreen} alt="" />
            Edit
          </button>
        </div>
      </div>
      <div className="flex pt-6 gap-x-8">
        <div className="w-3/5">
          <h1 className="text-2xl">
            How to Build a Mobile App Using Data Science and Python
          </h1>
          <div className="flex gap-x-6 pb-6">
            <div className="flex gap-x-2.5 pt-3">
              <img src={calender} alt="" />
              <span className="text-gray-400 text-xs">
                Thursday, April 15th
              </span>
            </div>
            <div className="flex gap-x-2.5 pt-3">
              <img src={time} alt="" />
              <span className="text-gray-400 text-xs">
                10 am PST / 1 pm EST
              </span>
            </div>
            <div className="flex gap-x-2.5 pt-3">
              <img src={location} alt="" />
              <span className="text-gray-400 text-xs">
                1710 Blanc Ln, FL, 32577
              </span>
            </div>
          </div>
          <img src={detailsWorkshops} alt="" />
          <p className="text-base text-gray-400 pt-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus iusto est culpa natus molestiae laborum, illum quidem
            excepturi voluptatibus rerum, dolor pariatur itaque expedita facilis
            voluptates quibusdam corrupti ut ea. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Necessitatibus iusto est culpa natus
            molestiae laborum, illum quidem excepturi voluptatibus rerum, dolor
            pariatur itaque expedita facilis voluptates quibusdam corrupti ut
            ea.
          </p>
          <div>
            <div className="pt-3 flex-col flex gap-y-2.5">
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
              <Question
                day="Day 1"
                questionTitle="How to Build a Mobile App Using Data Science and Python"
                content="n an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus."
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-7 w-2/5">
          <div className="shadow rounded-xl p-5">
            <h1 className="text-2xl pb-3.5">Instructors</h1>
            <div className="flex justify-between items-center border-t pt-5">
              <div className="flex gap-x-2 items-center">
                <img src={profile} alt="" />
                <h1 className="text-lg">Kay Totleben</h1>
              </div>
              <div>
                <div className="dropdown">
                  <button
                    className="inline-flex justify-center w-full text-sm leading-5  transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <img className="p-2" src={option} alt="" />
                  </button>
                  <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div
                      className="absolute right-0 w-40 rounded-lg mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      aria-labelledby="headlessui-menu-button-1"
                      id="headlessui-menu-items-117"
                      role="menu"
                    >
                      <div className="px-4 py-3 flex gap-y-2 flex-col">
                        <p className="text-sm leading-5">Details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 shadow rounded-xl">
            <h1 className="text-xl pt-b">Document Library</h1>
            <div className="rounded pt-4">
              <button className="text-base px-12 py-1 bg-gray-200 rounded-l">
                Admn
              </button>
              <button className="text-base px-12 py-1 bg-gray-200">
                Instructor
              </button>
              <button className="text-base bg-blue px-12 py-1 bg-gray-200 rounded">
                Edcuators
              </button>
            </div>
            <div className="flex flex-col gap-y-3">
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
              <Documentation
                document={document}
                fileName="Artem Sazonov.docx"
              />
            </div>
          </div>
          <div className="shadow rounded-xl p-5">
            <h1 className="text-2xl pb-3.5">Educators</h1>
            <div className="flex flex-col gap-y-4">
              <EducatorsProfile
                profile={profile}
                name="Kay Totleben"
                emailIcon={emailIcon}
                mail="martin-thomas@gmail.com"
              />
              <EducatorsProfile
                profile={profile}
                name="Kay Totleben"
                emailIcon={emailIcon}
                mail="martin-thomas@gmail.com"
              />
              <EducatorsProfile
                profile={profile}
                name="Kay Totleben"
                emailIcon={emailIcon}
                mail="martin-thomas@gmail.com"
              />
              <EducatorsProfile
                profile={profile}
                name="Kay Totleben"
                emailIcon={emailIcon}
                mail="martin-thomas@gmail.com"
              />
              <EducatorsProfile
                profile={profile}
                name="Kay Totleben"
                emailIcon={emailIcon}
                mail="martin-thomas@gmail.com"
              />
              <EducatorsProfile
                profile={profile}
                name="Kay Totleben"
                emailIcon={emailIcon}
                mail="martin-thomas@gmail.com"
              />
            </div>
          </div>
          <div className="shadow rounded-xl p-5 pb-9">
            <h1 className="text-2xl pb-3.5">Document Library</h1>
            <div className="rounded pt-4">
              <button className="text-base px-12 py-1 bg-gray-200 rounded-l">
                Admn
              </button>
              <button className="text-base px-12 py-1 bg-blue rounded text-white">
                Instructor
              </button>
              <button className="text-base px-12 py-1 bg-gray-200">
                Edcuators
              </button>
            </div>
            <h1 className="text-lg py-2">Upload Document</h1>
            <div className="pt-4">
              <label htmlFor="document">
                <input type="file" className="hidden" id="document" />
                <span className="text-blue-600 text-lg rounded-lg border-2 px-9 py-4 border-blue-500">
                  Browser File
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
