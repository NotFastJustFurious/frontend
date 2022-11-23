import { Tab } from '@headlessui/react'
import { useState, useEffect } from "react";
import { sendCreateTherapySession } from "../utils/Request";
import { TfiHandOpen } from "react-icons/tfi";
import LogCard from './LogCard';
import Progress from "./Progress";
import History from "./History";
import Cases from './Cases';


export default function PatientProfileTabs() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Tab.Group>
      <Tab.List className="flex justify-center">
        <Tab>
          <button
            type="button"
            className="rounded-full w-30 min-h-4 py-2 px-6 ml-2 bg-furious-green"
          >
            Cases
          </button>
        </Tab>
        <Tab>
          <button
            type="button"
            className="rounded-full w-30 min-h-4 py-2 px-6 ml-2 bg-furious-green"
          >
            History
          </button>
        </Tab>
      </Tab.List>
      <div className="flex-grow w-full border-t-2 mt-8 p-8 overflow-y-scroll">
      <Tab.Panels>
        <Tab.Panel>
          <Cases></Cases>
        </Tab.Panel>
        <Tab.Panel>
          <History></History>
        </Tab.Panel>
      </Tab.Panels>
      </div>
    </Tab.Group>
  )
}