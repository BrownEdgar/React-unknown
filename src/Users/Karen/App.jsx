import { useState } from 'react'
import './App.css'

function App() {
	const [people, setPeople] = useState([
		{ id: 1, name: 'Wes', year: 1988 },
		{ id: 2, name: 'Kait', year: 1986 },
		{ id: 3, name: 'Eleonor', year: 1970 },
		{ id: 4, name: 'Lux', year: 2015 }
	])

	const [result, setResult] = useState('')

	//  - "people" ԶԱՆԳՎԱԾԻ ԲՈԼՈՐ ՄԱՐԴԿԱՆՑ ՀԱՄԱՐ ԿԱՎԵԼԱՑՆԻ "selary" ԴԱՇՏ: ՊԱՏԱՀԱԿԱՆ 150—000 -800—000 ՄԻՋԱԿԱԸՔԻՑ ԱՐՇԵՔ ՆՇԱՆԱԿԵԼՈՎ,
	const addRandom = () => {
		const randomRes = people.map(e => {
			return { ...e, selary: Math.floor(Math.random() * (800000 - 150000) + 150000) }
		})

		setPeople(randomRes)
	}

	//  - ՍՏՈՒԳԵԼ ԱՐԴՅՈ՞Ք "people" ԶԱՆԳՎԱԾՈՒՄ ԲՈԼՈՐԸ 34 ՏԱՐԵԿԱՆ ԵՆ ՊԱՏԱՍԽԱՆԸ ԳՑԵԼ `result`-Ի ՄԵՋ
	const examiFun = () => {
		const year = people.every(e => new Date().getFullYear() - e.year === 34)
		setResult(year)
	}


	// - ՍՏՈՒԳԵԼ ԱՐԴՅՈ՞Ք "people" ԶԱՆԳՎԱԾՈՒՄ ԿԱ ԳՈՆԵ ՄԵԿ ՄԱՐԴ, ՈՎ ՄԵԾ Է 19-ԻՑ ԵՎ ՊԱՏԱՍԽԱՆԸ ԳՑԵԼ `result`-Ի ՄԵՋ
	const examFunc = () => {
		const years = people.some(e => new Date().getFullYear() - e.year > 19)
		setResult(years)
	}

	//`Eleonor`-ի տարեթիվը փոխել նշանակելով ՝1986՝
	const changeFunc = () => {
		const fill = people.map(elem => {
			if (elem.id === 3) {
				return { ...elem, year: 1986 }
			}
			return elem
		})
		setPeople(fill)
	}


	//  - ֆիլտրել և ցուցադրել միայն այն մաևդկանց ով ստանում է `500_000` բարձր աշխատավարձ ԵՎ ԱՅԴ ՄԱՐԴՈՒ ԱՆՈՒՆԸ ԳՑԵԼ `result`-Ի ՄԵՋ
	const highSalaryFun = () => {
		const fill = people.map(e => {
			if (e.selary > 500000) {
				return e.name
			}
				return ''
		})
		setResult(fill)

	}


	//  - ԳՏՆԵԼ "ԱՄԵՆԱՀԱՐՈՒՍՏԻՆ" ԵՎ ԱՅԴ ՄԱՐԴՈՒ ԱՆՈՒՆԸ ԳՑԵԼ `result`-Ի ՄԵՋ

	const richFun = () => {
		const sort = people.toSorted((a, b) => a.selary - b.selary).at(-1).name
		setResult(sort)
	}

	return (
		<div className='big'>
			<h1 className='h1'>{JSON.stringify(people)}</h1>
			<h2>{JSON.stringify(result)}</h2>
			<div className='but_div'>
				<button onClick={addRandom}>Add Random</button>
				<button onClick={examiFun}>Examination</button>
				<button onClick={examFunc}>Examination-2</button>
				<button onClick={changeFunc}>Change number</button>
				<button onClick={highSalaryFun}>High salary</button>
				<button onClick={richFun}>Rich</button>
			</div>
		</div>
	)
}

export default App
