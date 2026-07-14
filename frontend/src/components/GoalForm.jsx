import {useState} from "react"
import {useDispatch} from "react-redux"
import {createGoal} from "../features/goals/goalSlice"

function GoalForm() {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Personal")

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({text, category}))
    setText("")
    setCategory("Personal")
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Personal">Personal</option>
                <option value="School">School</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm