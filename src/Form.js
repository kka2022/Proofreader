export default function Form(props) {
  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-8 text-center">
            <textarea
              style={{padding: '20px', width: '80%', minHeight: '200px', maxHeight: '500px'}}
              className=""
              name="content"
              id="text-content"
              value={props.inputText}
              onChange={props.inputUpdate}
            ></textarea>
          </div>
          <div className="col-md-4 text-center" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <button onClick={props.removeExtraSpaces} type="button" className="btn btn-secondary">Remove Extra Spaces</button>
            <button onClick={props.fixPunctuations} type="button" className="btn btn-secondary">Fix Punctuations</button>
            <button onClick={props.proofread} type="button" className="btn btn-secondary">Proofread</button>
          </div>
        </div>
      </div>
    </>
  );
}
