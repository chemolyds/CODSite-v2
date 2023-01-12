import React, { useState, useEffect } from 'react'
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function GtagBanner() {
	const [seenGtagNotification, setSeenGtagNotification] = useState(false);
	//const bannerRef = React.useRef();
	//const [showGtagNotification, setShowGtagNotification] = useState(false);

	useEffect(() => {
		// check to see if window is defined
		let seen = false;
		if(typeof window !== "undefined") {
			seen = window.localStorage.getItem('seenGtagNotification')
		}

		// update useState based off of the information
		if (seen !== 'true') {
			//setShowGtagNotification(true)
			setSeenGtagNotification(false)
		} else {
			setSeenGtagNotification(true);
		}
	}, []);

	function dismissNotification() {
		setSeenGtagNotification(true);
		window.localStorage.setItem('seenGtagNotification', 'true')
		console.log("CLOSED!")
		/*try {
			this.bannerRef.current.forceUpdate();
		} catch (error) {
			console.log("whatever")
		}*/
	}

  return (
    <div //ref={node => bannerRef.current = node}
		 className={`bg-indigo-600 sticky bottom-0 ${seenGtagNotification ? "hidden" : ""}`}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white">
              {/*<span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>*/}
							<span className=""><br/></span>
							<span>We collect anonymous data about page views and site interaction. Data is not collected if you have "Do Not Track" enabled.</span>
            </p>
          </div>
          {/*<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
					</div>*/}
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button type="button" onClick={dismissNotification} className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}