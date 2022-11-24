import { Tab } from '@headlessui/react'
import { useState, useEffect } from "react";
import { sendCreateTherapySession } from "../utils/Request";
import { TfiHandOpen } from "react-icons/tfi";
import Chart from './Chart';

export default function PatientProfileTabs() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  let submitFindTherapist = (e) => {
    sendCreateTherapySession().then(result => {
      if (result.ok) {
        setSuccess(true);
        window.location.href = "/chat";
      }
      else {
        result.json().then(data => {
          setError(data.error);
        })
      }
    });
  };


  return (
    <Tab.Group>
      <Tab.List className="flex flex-row justify-center border-green-500">
        <Tab className="text-center item-center rounded-full ui-selected:bg-furious-green-2 ui-selected:text-white ui-not-selected:bg-furious-green ui-not-selected:text-black rounded-full w-32 p-2 min-h-4 ml-2">
          Find Therapist
        </Tab>
        <Tab className="text-center item-center rounded-full ui-selected:bg-furious-green-2 ui-selected:text-white ui-not-selected:bg-furious-green ui-not-selected:text-black rounded-full w-32 p-2 min-h-4 ml-2">
          Progress
        </Tab>
      </Tab.List>
      <div className="flex-grow w-full border-t-2 mt-8 p-8 overflow-y-scroll">
        <Tab.Panels>
          <Tab.Panel>
            <div className="bg-white border-8 rounded-lg">
              <div className="w-full flex">
                <div className="w-1/3 pt-6 flex justify-center">
                  <TfiHandOpen className="w-16 h-16 bg-furious-green text-white p-3 rounded-full" />
                </div>
                <div className="w-full pt-9 pr-4">
                  <h3 className="font-bold text-furious-green">We're here to listen</h3>
                  <p className="py-4 text-sm text-gray-400">
                    Are you sure you want to delete all feelings? If you delete your feelings, you will permantly loose everything.
                  </p>
                </div>
              </div>
              <div className="p-4 flex space-x-4 justify-center items-center">
                <button className="w-1/2 px-4 py-3 text-center text-white bg-furious-green rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm"
                  onClick={submitFindTherapist}>
                  Find!
                </button>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>            
            <Chart></Chart>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}
