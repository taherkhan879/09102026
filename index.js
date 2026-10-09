import './index.css'

const EditableTextInput = I => {
  return (
    <div className="container">
      <div class="cont">
        <h1 className="heading">Editable Text input</h1>
        <input type="text" className="inp" />
        <button type="button" className="button">
          Save
        </button>
      </div>
    </div>
  )
}
export default EditableTextInput
