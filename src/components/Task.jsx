import { doc, updateDoc, deleteDoc } from "firebase/firestore";

import CheckImage from "../assets/check.png"
import DeleteImage from "../assets/delete.png"
import "./Task.scss"
import db from "../assets/utils/firebase"



export default function Task({
	task, set_reloadTasks
}) {
	const taskRef = doc(db, "tasks", task.id);

	let completeTask = async ()=> {
		try {
			await updateDoc(taskRef, {
				completed: !task.completed
			});

			set_reloadTasks(true)
		} catch(error) {
			console.log(error);
		}
	}

	let deleteTask = async function() {
		try {
			await deleteDoc(taskRef);

			set_reloadTasks(true)
		} catch(error) {
			console.log(error);
		}
	}
	


	return (
		<div className="task">
			<div>
				<img 
					className={task.completed ? "completed" : "no-completed"}
					src={CheckImage}
					onClick={completeTask}
				/>
			</div>
			
			<div>
				{task.name}
			</div>
			
			<div className="column2">
				<img 
					src={DeleteImage}
					onClick={deleteTask}
				/>
			</div>
		</div>
	)
}