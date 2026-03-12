import { useRef, useState } from "react"


const InputFocus = () => {

    const [file, setFile] = useState(null)

    const ref = useRef()


    const onHandle = () => {
        ref.current.click()
    }

    const onChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]))
        
    }

    // console.log({ref});
    

  return (
    <div>
        <img style={{width:"100", height:"100", borderRadius:"50%"}} src={file} alt="" />
        <input onChange={onChange} type="text" ref={ref} type="file" placeholder="Input" hidden />
        <h2 >InputFocus</h2>
        <button onClick={onHandle} >check</button>
    </div>
  )
}

export default InputFocus