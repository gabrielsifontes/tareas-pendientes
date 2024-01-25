import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SendIcon from "../assets/send.png";
import { isEmpty } from "lodash";
import { addDoc, collection } from "firebase/firestore";

import "./AddTask.scss"
import db from "../assets/utils/firebase"




export default function AddTask({
	set_reloadTasks
}) {
	const [task, set_task] = useState("") // Estado que guarda lo que tiene el input actualmente


	const onSubmit = async function(e) {
		e.preventDefault()

		if(isEmpty(task) == false) {
			try {
				document.getElementById("input").value = ""
				const newValueAddedToDataBase = await addDoc(collection(db, "tasks" /* El segundo parametro será el nombre de la variable que guardará la base de datos */), {
					name: task, 
					completed: false    
				});
				set_reloadTasks(true)
			} catch (error) {
				console.log(error);
			}
		}
	}


	return (
		<Form className="add-task"
			onSubmit={onSubmit}
		>		
			<input
				id="input"
				placeholder="Nueva tarea"
				type="text" 
				onChange={(e)=> set_task(e.target.value.trim())}ç
			/>

			<Button type="submit">
				<img src={SendIcon} alt="" />
			</Button>
		</Form>
	)
}
