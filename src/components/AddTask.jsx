import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SendIcon from "../assets/send.png"
import { isEmpty } from "lodash";
import { collection, addDoc } from "firebase/firestore";

import "./AddTask.scss"
import db from "../assets/utils/firebase"


export default function AddTask() {
	const [task, set_task] = useState("")

	const onSubmit = async function(e) {
		e.preventDefault()

		if(isEmpty(task) == false) {
			try {
				const docRef = await addDoc(collection(db, "task"), {
					name: task, 
					completed: false    
				});

				console.log("tarea creada")
			} catch (error) {

			}
		}

	}


	return (
		<Form className="add-task"
			onSubmit={onSubmit}
		>
			<input 
				placeholder="Nueva tarea"
				type="text" 
				onChange={(e)=> set_task(e.target.value.trim())}
			/>


			<Button type="submit">
				<img src={SendIcon} alt="" />
			</Button>
		</Form>
	)
}
