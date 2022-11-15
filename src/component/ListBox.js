import { useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { sendProfileGet } from "../utils/Request";

export default function ListBox(props) {
  const [selectedType, setSelectedType] = useState("");
  const [types, setTypes] = useState(["Loading..."]);
  props.setSelectedType(selectedType)
  
  useEffect(() => {
    sendProfileGet().then(result => {
      result.json().then(body => {
        let conditions = body.data.condition;
        setTypes(conditions)

        if(conditions.length > 0)
          setSelectedType(conditions[0])
        console.log(body)
      });
    });
  }, []);

  return (
    <div>
      <Listbox as="div" value={selectedType} onChange={setSelectedType}>
        {({ open }) => (
          <>
            <Listbox.Label className="text-sm font-medium text-furious-green">
              Select types
            </Listbox.Label>
            <div className="relative">
              <span className="inline-block w-full">
                <Listbox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-green-900 focus:border-green-800 relative border shadow-sm border-gray-300 rounded text-gray-800">
                  <span className="block truncate">{selectedType}</span>
                </Listbox.Button>
              </span>
              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="border border-gray-300 rounded mt-1"
                >
                  {types.map((type) => (
                    <Listbox.Option key={type} value={type}>
                      {({ selected, active }) => (
                        <div
                          className={`${active
                            ? "text-white bg-furious-green"
                            : "text-gray-900"
                            } cursor-default select-none relative py-2 pl-10 pr-4`}
                        >
                          <span
                            className={`${selected ? "font-semibold" : "font-normal"
                              }`}
                          >
                            {type}
                          </span>

                          {selected && (
                            <span
                              className={`${active ? "text-white" : "text-furious-green"
                                } absolute inset-y-0 left-0 flex items-center pl-2`}
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}