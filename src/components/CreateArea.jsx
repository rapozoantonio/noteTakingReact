import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {


//Refactoring => only One Hook for onChange 

	const [contentText, setContentText] = useState("");

	const [isNote, setIsNote] = useState(false);

	function handleContent(event){
		const newContent = event.target.value;
		setContentText(newContent);
		setIsNote(true)
	};

	const [titleText, setTitleText] = useState("");

	function handleTitle(event){
		const newTitle = event.target.value;
		setTitleText(newTitle);
	};


  return (
	    <div>
	      <form className="create-note">

	      	{isNote ? 
	      				        <input 
		        onChange={handleTitle} 
		        name="title" 
		        placeholder="Title" 
		        value={titleText} />
		        : 
		        null
		    } 

		        <textarea 
		        onChange={handleContent} 
		        name="content" 
		        placeholder="Take a note..." 
		        rows={isNote ? "3" : "1"} 
		        value={contentText}/>

		    {isNote ? 
				<Zoom in={isNote}>
				    <Fab 
				       type="button" onClick={() => {
						  props.addNote(titleText, contentText);
						  setTitleText("");
						  setContentText("");
						  setIsNote(false)
						}}
				    >
				       <AddIcon />
				    </Fab>
			    </Zoom>
			    :
			    null
			}
	      </form>
	    </div>
  	);
}

export default CreateArea;
