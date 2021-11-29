import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'

const Bronze21 	= ["D", "B", "AC", "E", "D", "A", "AD", "AC", "D", "C", "B", "CE", "D", "C", "E", "A", "C", "A", "C", "AB"];
const Silver21	= ["C", "D", "E", "C", "A", "AC", "B", "A", "B", "D", "D", "BD", "AE", "A", "AC", "E", "C", "BD", "C", "B"];
const Gold21 		= ["D", "A", "A", "C", "D", "C", "E", "C", "C", "CD", "E", "D", "E", "A", "DE", "A", "E", "AE", "BE", "BC"];

const exams = [
	{ id: 1, name: "Bronze '21" },
	{ id: 2, name: "Silver '21" },
	{ id: 3, name: "Gold '21" },
]

const Autograder = function(props) {
	const [selectedExam, setSelectedExam] = useState(exams[0])

	return (
		<>
			<Listbox value={selectedExam} onChange={setSelectedExam}>
				<Listbox.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
					<span className="flex items-center">{selectedExam.name}</span>
					<span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</span>
				</Listbox.Button>
				<Listbox.Options className="relative w-full z-10 mt-1 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
					{exams.map((exam) => (
						<Listbox.Option key={exam.id} value={exam} disabled={false} className='cursor-default select-none relative py-2 pl-3 pr-9'>
							{exam.name}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
			
			<p/>

			<input type="text" name="answers" id="ans" placeholder="Type your answers here..." className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>

			<p/>

			<button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Grade it!
			</button>

		</>
	)
}

function calc_score(k, ca, wa, c) {
	var a = ca + wa;
	// check if they didn't answer or they chose everything
	// not worth any points
	if (a == 0  || k == a) {
		return 0;
	} 

	// else they did give a response worth points.
	// check if there are multiple answers and if so, use the modified formulae
	// https://www.desmos.com/calculator/xzmzy4whuo
	var cmod, amod, rpts, totpts;
	if (c > 1) {
		// get modified correct
		cmod = (c + 1) - ca;
		amod = cmod + wa;
		rpts = (ca > 0) ? Math.log(k/cmod) : 0;

		// total points is now dependent on whether you get a single correct answer or not.
		totpts = (ca > 0) ? (amod/(k-amod)) * Math.log(k/amod) : (a/(k-a)) * Math.log(k/a);
	} else {
		rpts = (ca > 0) ? Math.log(k/ca) : 0;
		totpts = (a/(k-a)) * Math.log(k/a);
	}	

	// wrong points is the same no matter what
	var wpts = (wa > 0) ? (wa/(k-wa)) * Math.log(k/wa) : 0;

	// return the points given
	return (rpts - wpts)/totpts;
}

export default Autograder