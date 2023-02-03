
export const Resume = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('AngelosResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'AngelosResume.pdf';
                alink.click();
            })
        })
    }


    return(
        <>
            <center>
                <button className="resume" onClick={onButtonClick}>
                    Download My Resume
                </button>
            </center>
        </>
    )
}

