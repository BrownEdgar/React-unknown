[1mdiff --git a/src/Users/Karen/App.jsx b/src/Users/Karen/App.jsx[m
[1mindex 5d30b6b..568dc6f 100644[m
[1m--- a/src/Users/Karen/App.jsx[m
[1m+++ b/src/Users/Karen/App.jsx[m
[36m@@ -2,20 +2,50 @@[m [mimport './App.css'[m
 import axios from 'axios'[m
 import {useState, useEffect} from 'react'[m
 import Component from './Component'[m
[31m-[m
[31m-[m
[32m+[m[32mimport "./Product.scss"[m
 [m
 function App() {[m
[31m-	const [data, setData] = useState([])[m
[31m-[m
[31m-	useEffect(() => {[m
[31m-		axios.get('https://jsonplaceholder.typicode.com/users').then(res => setData(res.data))[m
[31m-	}, [])[m
[31m-[m
[32m+[m	[32mconst arr = [[m
[32m+[m		[32m{[m
[32m+[m			[32mid: 1,[m
[32m+[m			[32mimage : "https://images.unsplash.com/photo-1684482570533-b97679dd0705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",[m
[32m+[m			[32mtitle: "BETTER CHEMISTRY",[m
[32m+[m			[32mdescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus dolorem dicta perferendis assumenda facere",[m
[32m+[m		[32m},[m
[32m+[m		[32m{[m
[32m+[m			[32mid: 2,[m
[32m+[m			[32mimage : "https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",[m
[32m+[m			[32mtitle: "BETTER PRACTICES",[m
[32m+[m			[32mdescription: "Amet consectetur, adipisicing elit. Ab, magni. Nisi, maxime hic. Consequuntur vel architecto, minus non odit mollitia",[m
[32m+[m		[32m},[m
[32m+[m		[32m{[m
[32m+[m			[32mid: 3,[m
[32m+[m			[32mimage: "https://images.unsplash.com/photo-1682685797795-5640f369a70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",[m
[32m+[m			[32mtitle: "INDUSTRY COLABORATION",[m
[32m+[m			[32mdescription: "Inventore sit id unde magnam itaque nihil amet consectetur quas molestiae sequi provident possimus, hic error non quod, odit eaque",[m
[32m+[m		[32m}[m
[32m+[m	[32m][m
[32m+[m[41m	[m
 	return([m
[31m-		<Component data={data}/>[m
[32m+[m		[32m<div className='Product'>[m
[32m+[m			[32m{[m
[32m+[m				[32marr.map(elem => {[m
[32m+[m					[32mreturn <div key={elem.id} className='Product__div'>[m
[32m+[m						[32m<img src={elem.image} alt="" />[m
[32m+[m						[32m<div className='Product__div__info'>[m
[32m+[m							[32m<h2>{elem.title}</h2>[m
[32m+[m							[32m<p>{elem.description}</p>[m
[32m+[m							[32m<p className='Product__div__info__last-p'>Read more</p>[m
[32m+[m						[32m</div>[m
[32m+[m					[32m</div>[m
[32m+[m				[32m})[m
[32m+[m			[32m}[m
[32m+[m		[32m</div>[m
 	)[m
 }[m
[32m+[m
[32m+[m
[32m+[m
 export default App[m
 [m
 // function App() {[m
[36m@@ -97,5 +127,16 @@[m [mexport default App[m
 // 		</div>[m
 // 	)[m
 // }[m
[32m+[m[32m//////////////////////////////////////[m
 [m
[32m+[m[32m// function App() {[m
[32m+[m[32m// 	const [data, setData] = useState([])[m
 [m
[32m+[m[32m// 	useEffect(() => {[m
[32m+[m[32m// 		axios.get('https://jsonplaceholder.typicode.com/users').then(res => setData(res.data))[m
[32m+[m[32m// 	}, [])[m
[32m+[m
[32m+[m[32m// 	return([m
[32m+[m[32m// 		<Component data={data}/>[m
[32m+[m[32m// 	)[m
[32m+[m[32m// }[m
\ No newline at end of file[m
[1mdiff --git a/src/main.jsx b/src/main.jsx[m
[1mindex b451a95..8a434f8 100644[m
[1m--- a/src/main.jsx[m
[1m+++ b/src/main.jsx[m
[36m@@ -1,7 +1,7 @@[m
 import React from 'react'[m
 import ReactDOM from 'react-dom/client'[m
 import App from './Users/Edgar/workWIthImage/App'[m
[31m-[m
[32m+[m[32m// import App from './Users/Karen/App'[m
 import './index.css'[m
 [m
 ReactDOM.createRoot(document.getElementById('root')).render([m
