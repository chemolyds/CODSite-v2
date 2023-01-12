import React, { useState, Fragment } from 'react'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'

const exams = [
	{ id: 1, 	name: "Bronze '21", 	answers: ["D", "B", "AC", "E", "D", "A", "AD", "AC", "D", "C", "B", "CE", "D", "C", "E", "A", "C", "A", "C", "AB"] 	},
	{ id: 2, 	name: "Silver '21", 	answers: ["C", "D", "E", "C", "A", "AC", "B", "A", "B", "D", "D", "BD", "AE", "A", "AC", "E", "C", "BD", "C", "B"] 	},
	{ id: 3, 	name: "Gold '21" , 		answers: ["D", "A", "A", "C", "D", "C", "E", "C", "C", "CD", "E", "D", "E", "A", "DE", "A", "E", "AE", "BE", "BC"]	},
	{ id: 4, 	name: "Bronze '22" , 	answers: ["B", "A", "BD", "A", "CE", "C", "D", "C", "D", "C", "C", "D", "C", "AD", "A", "C", "BD", "B", "AE", "D"]	},
	{ id: 5, 	name: "Silver '22" , 	answers: ["D", "C", "B", "E", "A", "D", "BD", "A", "D", "C", "C", "A", "CE", "C", "BE", "C", "D", "C", "AD", "AE"]	},
	{ id: 6, 	name: "Gold '22" , 		answers: ["D", "D", "E", "B", "CE", "E", "E", "D", "B", "AB", "B", "B", "B", "C", "AC", "C", "C", "AE", "AC", "D"]	},
]

const Autograder = function(props) {
	const [selectedExam, setSelectedExam] = useState(exams[0]);
	const [answers, setAnswers] = useState("");
	const [openError, setOpenError] = useState(false);
	const [openGrade, setOpenGrade] = useState(false);
	const [score, setScore] = useState(0);

	return (
		<>
			<Listbox value={selectedExam} onChange={setSelectedExam}>
				<Listbox.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
					<span className="flex items-center">{selectedExam.name}</span>
					<span className="ml-3 relative inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</span>
				</Listbox.Button>
				<Listbox.Options className="relative w-full z-10 mt-1 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
					{exams.map((exam) => (
						<Listbox.Option key={exam.id} value={exam} disabled={false} className='cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-200 hover:font-bold'>
							{exam.name}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
			
			<p/>

			<input type="text" name="answers" id="ans" placeholder="Type your answers here..."
					value={answers} onChange={event => setAnswers(Array.prototype.filter.call(event.target.value.toUpperCase(), c => c.match(/[A-E,]/)).join(''))}
					className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
			<p/>

			<button type="submit" onClick={GradeAnswers} 
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Grade it!
			</button>

			<Transition appear show={openError} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={() => setOpenError(false)}>
					<Transition.Child as={Fragment}
							enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
							leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-25"/>
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment}
									enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
									leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Autograder Formatting Error
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
											Please ensure your input has 19 commas.
										</p>
                  </div>

                  <div className="mt-4">
                    <button type="button" onClick={() => setOpenError(false)}
                      	className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
				</Dialog>
			</Transition>

			<Transition appear show={openGrade} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={() => setOpenGrade(false)}>
					<Transition.Child as={Fragment}
							enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
							leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-25"/>
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment}
									enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
									leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Autograding complete
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
											You earned {score} out of 80! That's a {score / 80.0 * 100}%!
										</p>
                  </div>

                  <div className="mt-4">
                    <button type="button" onClick={() => setOpenGrade(false)}
                      	className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
				</Dialog>
			</Transition>

		</>
	)

	function GradeAnswers()
	{
		let answerUsr = answers.split(',');
		if (answerUsr.length != 20)
		{
			setOpenError(true);
			return;
		}

		let answerKey = selectedExam.answers;

		console.log(answerUsr);
		console.log(answerKey);

		let pointsArr = [];
		for (let i = 0; i < 20; i++) {
			let numCorrect = 0;
			answerKey[i].split('').forEach(ans => {
				if (answerUsr[i].includes(ans)) numCorrect++;
			});

			let numWrong = answerUsr[i].length - numCorrect;
			pointsArr.push(CalcScore(5, numCorrect, numWrong, answerKey[i].length));
		}

		let score = 0;
		pointsArr.forEach(p => score += p);
		
		console.log(score);
		setScore(score);
		setOpenGrade(true);
	}

}

export function CalcScore(k, ca, wa, c) {
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